export interface MenuItem {
  id: string
  title: string
  korean: string
  price: number
  quantity: number
  image: string
  category: string
  isSubscription?: boolean
  subscriptionPlan?: "weekly" | "biweekly" | "monthly"
  mealsPerWeek?: number
  subscriptionItems?: Array<{ id: string; name: string; quantity: number }>
}

export interface OrderDetails {
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
  createdAt: string
  isSubscription?: boolean
  subscriptionPlan?: "weekly" | "biweekly" | "monthly"
  mealsPerWeek?: number
  subscriptionId?: string
  subscriptionStatus?: string
}

export interface CheckoutSession {
  sessionId: string
  url: string
}

export interface EmailData {
  sessionId: string
  customerEmail: string
  customerName: string
  amount: number
  lineItems: any[]
  shippingAddress?: any
  phone: string
}
