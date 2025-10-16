import { type NextRequest, NextResponse } from "next/server"
import Stripe from "stripe"
import { calculateSubscriptionPrice, subscriptionPlans } from "@/lib/subscription-products"

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2024-12-18.acacia",
})

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { items, plan, customerEmail, customerName } = body

    // Validate required fields
    if (!items || items.length === 0) {
      return NextResponse.json({ error: "No items provided" }, { status: 400 })
    }

    if (!plan || !["weekly", "biweekly", "monthly"].includes(plan)) {
      return NextResponse.json({ error: "Invalid subscription plan" }, { status: 400 })
    }

    // Get plan configuration
    const planConfig = subscriptionPlans.find((p) => p.id === plan)
    if (!planConfig) {
      return NextResponse.json({ error: "Plan not found" }, { status: 400 })
    }

    // Calculate total subscription price
    let totalPrice = 0
    const lineItems: Stripe.Checkout.SessionCreateParams.LineItem[] = []

    for (const item of items) {
      const itemPrice = calculateSubscriptionPrice(item.price, plan)
      totalPrice += itemPrice * item.quantity

      // Create a price for this subscription item
      const price = await stripe.prices.create({
        currency: "usd",
        unit_amount: Math.round(itemPrice * 100), // Convert to cents
        recurring: {
          interval: planConfig.interval,
          interval_count: planConfig.intervalCount,
        },
        product_data: {
          name: item.name,
          description: item.korean || "",
          images: item.image ? [item.image] : [],
          metadata: {
            category: item.category || "subscription",
            korean_name: item.korean || "",
          },
        },
      })

      lineItems.push({
        price: price.id,
        quantity: item.quantity,
      })
    }

    // Create Stripe Checkout Session for subscription
    const session = await stripe.checkout.sessions.create({
      mode: "subscription",
      line_items: lineItems,
      success_url: `${request.nextUrl.origin}/checkout/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${request.nextUrl.origin}/checkout/cancel`,
      customer_email: customerEmail,
      metadata: {
        subscription_plan: plan,
        plan_name: planConfig.name,
        customer_name: customerName || "",
        order_type: "subscription",
      },
      subscription_data: {
        metadata: {
          plan: plan,
          plan_name: planConfig.name,
        },
      },
      allow_promotion_codes: true,
      billing_address_collection: "required",
      shipping_address_collection: {
        allowed_countries: ["US"],
      },
    })

    return NextResponse.json({ sessionId: session.id, url: session.url })
  } catch (error: any) {
    console.error("[v0] Subscription checkout error:", error)
    return NextResponse.json({ error: error.message || "Failed to create checkout session" }, { status: 500 })
  }
}
