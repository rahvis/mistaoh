import { type NextRequest, NextResponse } from "next/server"
import { stripe } from "@/lib/stripe"

export async function GET(req: NextRequest) {
  try {
    const sessionId = req.nextUrl.searchParams.get("session_id")

    if (!sessionId) {
      return NextResponse.json({ error: "Session ID is required" }, { status: 400 })
    }

    const session = await stripe.checkout.sessions.retrieve(sessionId, {
      expand: ["line_items", "customer_details", "shipping_details", "subscription"],
    })

    // Format the response
    const orderDetails = {
      id: session.id,
      amount: session.amount_total || 0,
      customerEmail: session.customer_details?.email || "",
      customerName: session.customer_details?.name || "Valued Customer",
      items:
        session.line_items?.data.map((item) => ({
          description: item.description || "",
          quantity: item.quantity || 1,
          amount: item.amount_total || 0,
        })) || [],
      shippingAddress: session.shipping_details?.address
        ? {
            line1: session.shipping_details.address.line1 || "",
            line2: session.shipping_details.address.line2 || undefined,
            city: session.shipping_details.address.city || "",
            state: session.shipping_details.address.state || "",
            postal_code: session.shipping_details.address.postal_code || "",
          }
        : undefined,
      phone: session.customer_details?.phone || undefined,
      status: session.payment_status,
      isSubscription: session.mode === "subscription",
      subscriptionId: typeof session.subscription === "string" ? session.subscription : session.subscription?.id,
      subscriptionStatus: typeof session.subscription === "object" ? session.subscription?.status : undefined,
    }

    return NextResponse.json(orderDetails)
  } catch (error: any) {
    console.error("[v0] Error fetching session:", error)
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}
