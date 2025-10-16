import { type NextRequest, NextResponse } from "next/server"
import { stripe } from "@/lib/stripe"
import { headers } from "next/headers"
import { sendOrderConfirmationEmail } from "@/lib/email"

export async function POST(req: NextRequest) {
  const body = await req.text()
  const signature = headers().get("stripe-signature")

  if (!signature) {
    return NextResponse.json({ error: "No signature" }, { status: 400 })
  }

  let event

  try {
    // Verify webhook signature
    event = stripe.webhooks.constructEvent(body, signature, process.env.STRIPE_WEBHOOK_SECRET!)
  } catch (err: any) {
    console.error("[v0] Webhook signature verification failed:", err.message)
    return NextResponse.json({ error: `Webhook Error: ${err.message}` }, { status: 400 })
  }

  console.log("[v0] Stripe webhook event received:", event.type)

  // Handle the event
  switch (event.type) {
    case "checkout.session.completed": {
      const session = event.data.object

      console.log("[v0] Checkout session completed:", session.id)

      // Retrieve full session details with line items
      const fullSession = await stripe.checkout.sessions.retrieve(session.id, {
        expand: ["line_items", "customer_details", "subscription"],
      })

      // Send order confirmation email
      try {
        await sendOrderConfirmationEmail({
          sessionId: fullSession.id,
          customerEmail: fullSession.customer_details?.email || "",
          customerName: fullSession.customer_details?.name || "Valued Customer",
          amount: fullSession.amount_total || 0,
          lineItems: fullSession.line_items?.data || [],
          shippingAddress: fullSession.shipping_details?.address,
          phone: fullSession.customer_details?.phone || "",
          isSubscription: fullSession.mode === "subscription",
          subscriptionId: fullSession.subscription as string | undefined,
        })
        console.log("[v0] Order confirmation email sent successfully")
      } catch (emailError) {
        console.error("[v0] Failed to send order confirmation email:", emailError)
      }

      break
    }

    case "customer.subscription.created": {
      const subscription = event.data.object
      console.log("[v0] Subscription created:", subscription.id)
      // TODO: Store subscription in database for tracking
      break
    }

    case "customer.subscription.updated": {
      const subscription = event.data.object
      console.log("[v0] Subscription updated:", subscription.id)
      // TODO: Update subscription status in database
      break
    }

    case "customer.subscription.deleted": {
      const subscription = event.data.object
      console.log("[v0] Subscription cancelled:", subscription.id)
      // TODO: Mark subscription as cancelled in database
      break
    }

    case "invoice.paid": {
      const invoice = event.data.object
      console.log("[v0] Invoice paid:", invoice.id)
      // TODO: Send recurring order notification email
      break
    }

    case "invoice.payment_failed": {
      const invoice = event.data.object
      console.error("[v0] Invoice payment failed:", invoice.id)
      // TODO: Send payment failure notification to customer
      break
    }

    case "payment_intent.succeeded": {
      const paymentIntent = event.data.object
      console.log("[v0] Payment succeeded:", paymentIntent.id)
      break
    }

    case "payment_intent.payment_failed": {
      const paymentIntent = event.data.object
      console.error("[v0] Payment failed:", paymentIntent.id)
      break
    }

    default:
      console.log("[v0] Unhandled event type:", event.type)
  }

  return NextResponse.json({ received: true })
}
