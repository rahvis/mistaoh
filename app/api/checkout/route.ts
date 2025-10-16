import { type NextRequest, NextResponse } from "next/server"
import { stripe } from "@/lib/stripe"
import { findSubscriptionProduct } from "@/lib/subscription-products"

function getSubscriptionInterval(plan: string): "week" | "month" {
  switch (plan) {
    case "weekly":
      return "week"
    case "biweekly":
      return "week"
    case "monthly":
      return "month"
    default:
      return "week"
  }
}

function getIntervalCount(plan: string): number {
  return plan === "biweekly" ? 2 : 1
}

export async function POST(req: NextRequest) {
  try {
    console.log("[v0] Checkout API called")

    const { items } = await req.json()
    console.log("[v0] Received items:", items)

    if (!items || items.length === 0) {
      console.error("[v0] No items in cart")
      return NextResponse.json({ error: "No items in cart" }, { status: 400 })
    }

    if (!process.env.STRIPE_SECRET_KEY) {
      console.error("[v0] STRIPE_SECRET_KEY not configured")
      return NextResponse.json({ error: "Payment system not configured" }, { status: 500 })
    }

    const subscriptionItems = items.filter((item: any) => item.isSubscription)
    const oneTimeItems = items.filter((item: any) => !item.isSubscription)

    console.log("[v0] Subscription items:", subscriptionItems.length)
    console.log("[v0] One-time items:", oneTimeItems.length)

    if (subscriptionItems.length > 0 && oneTimeItems.length > 0) {
      console.error("[v0] Mixed cart detected")
      return NextResponse.json(
        { error: "Please checkout subscription items separately from one-time purchases" },
        { status: 400 },
      )
    }

    const paymentMethodTypes = ["card", "cashapp", "link", "affirm", "afterpay_clearpay", "klarna", "us_bank_account"]

    if (subscriptionItems.length > 0) {
      console.log("[v0] Creating subscription checkout session...")

      const lineItems = await Promise.all(
        subscriptionItems.map(async (item: any) => {
          const catalogProduct = findSubscriptionProduct(item.id)

          if (catalogProduct && catalogProduct.prices[item.subscriptionPlan as keyof typeof catalogProduct.prices]) {
            const priceId = catalogProduct.prices[item.subscriptionPlan as keyof typeof catalogProduct.prices]
            console.log("[v0] Using catalog price:", priceId)
            return {
              price: priceId,
              quantity: 1,
            }
          }

          console.log("[v0] Creating dynamic price for:", item.title)
          const price = await stripe.prices.create({
            currency: "usd",
            unit_amount: Math.round(item.price * 100),
            recurring: {
              interval: getSubscriptionInterval(item.subscriptionPlan),
              interval_count: getIntervalCount(item.subscriptionPlan),
            },
            product_data: {
              name: item.title,
              description: `${item.korean} - ${item.mealsPerWeek} meals per delivery`,
              metadata: {
                category: "subscription",
                korean_name: item.korean,
              },
            },
          })

          return {
            price: price.id,
            quantity: 1,
          }
        }),
      )

      console.log("[v0] Creating Stripe subscription session...")
      const session = await stripe.checkout.sessions.create({
        payment_method_types: ["card", "us_bank_account"],
        line_items: lineItems,
        mode: "subscription",
        success_url: `${req.nextUrl.origin}/checkout/success?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${req.nextUrl.origin}/menu`,
        shipping_address_collection: {
          allowed_countries: ["US"],
        },
        phone_number_collection: {
          enabled: true,
        },
        customer_email: undefined,
        billing_address_collection: "required",
        subscription_data: {
          metadata: {
            order_type: "subscription",
            items: JSON.stringify(
              subscriptionItems.map((item: any) => ({
                id: item.id,
                title: item.title,
                korean: item.korean,
                plan: item.subscriptionPlan,
                mealsPerWeek: item.mealsPerWeek,
                subscriptionItems: item.subscriptionItems || [],
              })),
            ),
          },
        },
        metadata: {
          order_type: "subscription",
        },
      })

      console.log("[v0] Subscription session created:", session.id)
      console.log("[v0] Checkout URL:", session.url)
      return NextResponse.json({ sessionId: session.id, url: session.url })
    }

    console.log("[v0] Creating one-time purchase checkout session...")

    const lineItems = oneTimeItems.map((item: any) => ({
      price_data: {
        currency: "usd",
        product_data: {
          name: item.title,
          description: item.korean,
        },
        unit_amount: Math.round(item.price * 100),
      },
      quantity: item.quantity,
    }))

    console.log("[v0] Creating Stripe payment session...")
    const session = await stripe.checkout.sessions.create({
      payment_method_types: paymentMethodTypes,
      line_items: lineItems,
      mode: "payment",
      success_url: `${req.nextUrl.origin}/checkout/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${req.nextUrl.origin}/menu`,
      shipping_address_collection: {
        allowed_countries: ["US"],
      },
      phone_number_collection: {
        enabled: true,
      },
      billing_address_collection: "required",
      customer_email: undefined,
      metadata: {
        orderType: "food-order",
        items: JSON.stringify(
          oneTimeItems.map((item: any) => ({
            id: item.id,
            title: item.title,
            korean: item.korean,
            quantity: item.quantity,
            price: item.price,
          })),
        ),
      },
    })

    console.log("[v0] Payment session created:", session.id)
    console.log("[v0] Checkout URL:", session.url)
    return NextResponse.json({ sessionId: session.id, url: session.url })
  } catch (error: any) {
    console.error("[v0] Stripe checkout error:", error)
    console.error("[v0] Error details:", error.message, error.stack)
    return NextResponse.json({ error: error.message || "Failed to create checkout session" }, { status: 500 })
  }
}
