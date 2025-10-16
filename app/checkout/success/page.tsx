"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { CheckCircle, Calendar, Package, Loader2, Mail, MapPin, Phone, RefreshCw } from "lucide-react"
import Link from "next/link"
import { useSearchParams } from "next/navigation"
import { useEffect, useState } from "react"
import { useCart } from "@/contexts/cart-context"

interface OrderDetails {
  id: string
  amount: number
  customerEmail: string
  customerName: string
  items: Array<{
    description: string
    quantity: number
    amount: number
  }>
  shippingAddress?: {
    line1: string
    line2?: string
    city: string
    state: string
    postal_code: string
  }
  phone?: string
  status: string
  isSubscription?: boolean
  subscriptionPlan?: "weekly" | "biweekly" | "monthly"
  mealsPerWeek?: number
  subscriptionId?: string
  subscriptionStatus?: string
}

export default function CheckoutSuccessPage() {
  const searchParams = useSearchParams()
  const sessionId = searchParams.get("session_id")
  const { clearCart } = useCart()
  const [orderDetails, setOrderDetails] = useState<OrderDetails | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    clearCart()

    if (!sessionId) {
      setError("No session ID found")
      setLoading(false)
      return
    }

    const fetchOrderDetails = async () => {
      try {
        const response = await fetch(`/api/checkout/session?session_id=${sessionId}`)
        if (!response.ok) {
          throw new Error("Failed to fetch order details")
        }
        const data = await response.json()
        setOrderDetails(data)
      } catch (err) {
        console.error("[v0] Error fetching order details:", err)
        setError("Unable to load order details")
      } finally {
        setLoading(false)
      }
    }

    fetchOrderDetails()
  }, [sessionId, clearCart])

  const getPlanLabel = (plan?: string) => {
    switch (plan) {
      case "weekly":
        return "Weekly"
      case "biweekly":
        return "Bi-Weekly"
      case "monthly":
        return "Monthly"
      default:
        return ""
    }
  }

  const getPlanDescription = (plan?: string) => {
    switch (plan) {
      case "weekly":
        return "Delivered every week"
      case "biweekly":
        return "Delivered every 2 weeks"
      case "monthly":
        return "Delivered every month"
      default:
        return ""
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navigation />
        <main className="flex-1 flex items-center justify-center px-4 py-20 mt-20">
          <div className="text-center">
            <Loader2 className="w-12 h-12 animate-spin text-primary mx-auto mb-4" />
            <p className="text-lg text-muted-foreground">Loading your order details...</p>
          </div>
        </main>
        <Footer />
      </div>
    )
  }

  if (error || !orderDetails) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navigation />
        <main className="flex-1 flex items-center justify-center px-4 py-20 mt-20">
          <div className="max-w-2xl w-full text-center">
            <div className="mb-8 flex justify-center">
              <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center">
                <CheckCircle className="w-16 h-16 text-green-600" />
              </div>
            </div>
            <h1 className="font-serif text-4xl md:text-5xl mb-6 text-balance">Payment Successful!</h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Thank you for your order! You'll receive a confirmation email shortly.
            </p>
            <Link
              href="/menu"
              className="inline-block bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-lg font-semibold transition-colors shadow-lg"
            >
              Back to Menu
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-1 px-4 py-20 mt-20">
        <div className="max-w-4xl mx-auto">
          {/* Success Header */}
          <div className="text-center mb-12">
            <div className="mb-8 flex justify-center">
              <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center animate-scale-in">
                <CheckCircle className="w-16 h-16 text-green-600" />
              </div>
            </div>

            <h1 className="font-serif text-4xl md:text-5xl mb-4 text-balance">
              {orderDetails.isSubscription ? "Subscription Confirmed!" : "Order Confirmed!"}
            </h1>
            <p className="text-xl text-muted-foreground mb-2 leading-relaxed">
              Thank you for your {orderDetails.isSubscription ? "subscription" : "order"}, {orderDetails.customerName}!
            </p>
            <p className="text-sm text-muted-foreground">
              A confirmation email has been sent to{" "}
              <span className="font-semibold text-foreground">{orderDetails.customerEmail}</span>
            </p>
          </div>

          {/* Subscription Banner */}
          {orderDetails.isSubscription && (
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-200 rounded-xl p-6 mb-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <RefreshCw className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="font-serif text-2xl mb-2 text-green-900">Your Subscription is Active!</h3>
                  <p className="text-green-800 mb-3">
                    Your delicious Korean meals will be delivered automatically based on your subscription plan.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <div className="bg-white px-4 py-2 rounded-lg border border-green-200">
                      <p className="text-xs text-muted-foreground">Plan</p>
                      <p className="font-semibold text-green-900">{getPlanLabel(orderDetails.subscriptionPlan)}</p>
                    </div>
                    <div className="bg-white px-4 py-2 rounded-lg border border-green-200">
                      <p className="text-xs text-muted-foreground">Frequency</p>
                      <p className="font-semibold text-green-900">
                        {getPlanDescription(orderDetails.subscriptionPlan)}
                      </p>
                    </div>
                    {orderDetails.subscriptionId && (
                      <div className="bg-white px-4 py-2 rounded-lg border border-green-200">
                        <p className="text-xs text-muted-foreground">Subscription ID</p>
                        <p className="font-semibold text-green-900 text-xs">
                          {orderDetails.subscriptionId.slice(0, 20)}...
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Order Summary Card */}
          <div className="bg-white border border-border rounded-xl shadow-lg p-8 mb-8">
            <div className="flex items-center justify-between mb-6 pb-6 border-b border-border">
              <div>
                <h2 className="font-serif text-2xl mb-1">
                  {orderDetails.isSubscription ? "Subscription" : "Order"} Summary
                </h2>
                <p className="text-sm text-muted-foreground">
                  {orderDetails.isSubscription ? "Subscription" : "Order"} ID:{" "}
                  {orderDetails.id.slice(-12).toUpperCase()}
                </p>
              </div>
              <div className="text-right">
                <p className="text-sm text-muted-foreground mb-1">
                  {orderDetails.isSubscription ? "Per Delivery" : "Total Amount"}
                </p>
                <p className="font-serif text-3xl text-primary">${(orderDetails.amount / 100).toFixed(2)}</p>
              </div>
            </div>

            {/* Order Items */}
            <div className="mb-6">
              <h3 className="font-semibold text-lg mb-4">
                Items {orderDetails.isSubscription ? "Per Delivery" : "Ordered"}
              </h3>
              <div className="space-y-3">
                {orderDetails.items.map((item, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-start py-3 border-b border-border last:border-0"
                  >
                    <div className="flex-1">
                      <p className="font-medium">{item.description}</p>
                      {item.quantity > 1 && <p className="text-sm text-muted-foreground">Quantity: {item.quantity}</p>}
                    </div>
                    <p className="font-semibold text-primary ml-4">
                      ${(item.amount / 100).toFixed(2)}
                      {orderDetails.isSubscription && <span className="text-xs text-muted-foreground">/delivery</span>}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Delivery Information */}
            {orderDetails.shippingAddress && (
              <div className="bg-surface rounded-lg p-6">
                <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-primary" />
                  Delivery Address
                </h3>
                <p className="text-foreground leading-relaxed">
                  {orderDetails.shippingAddress.line1}
                  {orderDetails.shippingAddress.line2 && (
                    <>
                      <br />
                      {orderDetails.shippingAddress.line2}
                    </>
                  )}
                  <br />
                  {orderDetails.shippingAddress.city}, {orderDetails.shippingAddress.state}{" "}
                  {orderDetails.shippingAddress.postal_code}
                </p>
                {orderDetails.phone && (
                  <p className="mt-3 flex items-center gap-2 text-foreground">
                    <Phone className="w-4 h-4 text-primary" />
                    {orderDetails.phone}
                  </p>
                )}
              </div>
            )}
          </div>

          {/* What's Next Section */}
          <div className="bg-gradient-to-br from-primary/10 to-orange-50 border border-primary/20 rounded-xl p-8 mb-8">
            <h2 className="font-serif text-2xl mb-6 text-center">What Happens Next?</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-3">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold mb-2">Email Confirmation</h3>
                <p className="text-sm text-muted-foreground">
                  Check your inbox for {orderDetails.isSubscription ? "subscription" : "order"} details and receipt
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-3">
                  <Package className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold mb-2">
                  {orderDetails.isSubscription ? "Meal Preparation" : "Order Preparation"}
                </h3>
                <p className="text-sm text-muted-foreground">
                  Our kitchen will{" "}
                  {orderDetails.isSubscription
                    ? "prepare your meals for each delivery"
                    : "start preparing your delicious meal"}
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-3">
                  {orderDetails.isSubscription ? (
                    <RefreshCw className="w-6 h-6 text-white" />
                  ) : (
                    <Calendar className="w-6 h-6 text-white" />
                  )}
                </div>
                <h3 className="font-semibold mb-2">
                  {orderDetails.isSubscription ? "Recurring Delivery" : "Delivery/Pickup"}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {orderDetails.isSubscription
                    ? `Automatic delivery ${getPlanDescription(orderDetails.subscriptionPlan)?.toLowerCase()}`
                    : "We'll notify you when your order is ready"}
                </p>
              </div>
            </div>
          </div>

          {/* Subscription Management Info */}
          {orderDetails.isSubscription && (
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
              <h3 className="font-semibold text-lg mb-2 text-blue-900">Managing Your Subscription</h3>
              <p className="text-sm text-blue-800 mb-3">
                You can manage your subscription, update payment methods, or cancel anytime by contacting our support
                team.
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href="tel:6465598858"
                  className="text-sm bg-white hover:bg-blue-50 text-blue-900 px-4 py-2 rounded-lg border border-blue-200 transition-colors font-medium"
                >
                  Call Support
                </a>
                <a
                  href="mailto:info@dhdgroup.net"
                  className="text-sm bg-white hover:bg-blue-50 text-blue-900 px-4 py-2 rounded-lg border border-blue-200 transition-colors font-medium"
                >
                  Email Support
                </a>
              </div>
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link
              href="/build-box"
              className="bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-lg font-semibold transition-colors shadow-lg hover:shadow-xl text-center"
            >
              {orderDetails.isSubscription ? "Build Another Box" : "Continue Shopping"}
            </Link>
            <Link
              href="/"
              className="bg-surface hover:bg-gray-100 text-foreground px-8 py-4 rounded-lg font-semibold transition-colors border border-border text-center"
            >
              Back to Home
            </Link>
          </div>

          {/* Contact Info */}
          <div className="text-center text-sm text-muted-foreground">
            <p className="mb-2">Need help with your {orderDetails.isSubscription ? "subscription" : "order"}?</p>
            <p>
              Call us at{" "}
              <a href="tel:6465598858" className="text-primary hover:underline font-semibold">
                (646) 559-8858
              </a>{" "}
              or email{" "}
              <a href="mailto:info@dhdgroup.net" className="text-primary hover:underline font-semibold">
                info@dhdgroup.net
              </a>
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
