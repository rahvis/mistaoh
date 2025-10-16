// Stripe Product Catalog for Build-Box Subscription Items
// This file contains all lunch boxes and menu items available for subscription

export interface SubscriptionProduct {
  id: string
  name: string
  korean: string
  description: string
  image: string
  category: string
  items?: string[]
  // Stripe Price IDs for different subscription intervals
  prices: {
    weekly: string
    biweekly: string
    monthly: string
  }
  // Base price (before subscription discount)
  basePrice: number
}

// Pre-Made Lunch Boxes
export const lunchBoxProducts: SubscriptionProduct[] = [
  {
    id: "bulgogi-lunch-box",
    name: "Bulgogi Lunch Box",
    korean: "불고기 도시락",
    description: "Bulgogi with salad, 2 fried dumplings, and soup of the day",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/bulgogi-2-PjvUbvKALCkjnx9fEPzce6WQrYKkNq.jpg",
    category: "lunch-box",
    basePrice: 20.99,
    items: ["Bulgogi", "Fresh Salad", "2 Fried Dumplings", "Soup of the Day"],
    prices: {
      weekly: "price_bulgogi_weekly",
      biweekly: "price_bulgogi_biweekly",
      monthly: "price_bulgogi_monthly",
    },
  },
  {
    id: "spicy-pork-lunch-box",
    name: "Spicy Pork Lunch Box",
    korean: "제육볶음 도시락",
    description: "Spicy pork with salad, 2 fried dumplings, and soup of the day",
    image: "/spicy-pork-lunch-box.jpg",
    category: "lunch-box",
    basePrice: 20.99,
    items: ["Spicy Pork", "Fresh Salad", "2 Fried Dumplings", "Soup of the Day"],
    prices: {
      weekly: "price_spicy_pork_weekly",
      biweekly: "price_spicy_pork_biweekly",
      monthly: "price_spicy_pork_monthly",
    },
  },
  {
    id: "teriyaki-chicken-lunch-box",
    name: "Teriyaki Chicken Box",
    korean: "데리야끼치킨 도시락",
    description: "Teriyaki chicken with salad, 2 fried dumplings, and soup of the day",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/teriyaki%20chicken-EcVhieclUrFrsrwg8T5ajngJCXX8My.jpg",
    category: "lunch-box",
    basePrice: 22.99,
    items: ["Teriyaki Chicken", "Fresh Salad", "2 Fried Dumplings", "Soup of the Day"],
    prices: {
      weekly: "price_teriyaki_chicken_weekly",
      biweekly: "price_teriyaki_chicken_biweekly",
      monthly: "price_teriyaki_chicken_monthly",
    },
  },
  {
    id: "grilled-mackerel-lunch-box",
    name: "Grilled Mackerel Box",
    korean: "고등어 도시락",
    description: "Grilled mackerel with salad, 2 fried dumplings, and soup of the day",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DD_mackerel-TBCI17lH6xu23GkicSlrtzA2EqTtPO.jpg",
    category: "lunch-box",
    basePrice: 17.99,
    items: ["Grilled Mackerel", "Fresh Salad", "2 Fried Dumplings", "Soup of the Day"],
    prices: {
      weekly: "price_mackerel_weekly",
      biweekly: "price_mackerel_biweekly",
      monthly: "price_mackerel_monthly",
    },
  },
]

// Menu items for custom box building
export const menuItemProducts = {
  appetizers: [
    {
      id: "japchae",
      name: "Japchae",
      korean: "잡채",
      basePrice: 13.99,
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/japchae-f8yb9hFK9UmTaANkh2I3L991tDRlJc.jpg",
      category: "appetizer",
    },
    {
      id: "pork-dumplings",
      name: "Pork Dumplings",
      korean: "돼지만두",
      basePrice: 10.99,
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Pork%20Dumplings-JWxg0E8xFaVt6TmlhtZamWC1O3PYt4.jpg",
      category: "appetizer",
    },
    // Add more appetizers as needed
  ],
  riceDishes: [
    {
      id: "dolsot-bibimbap",
      name: "Dolsot Bibimbap",
      korean: "돌솥비빔밥",
      basePrice: 16.99,
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/dolsot%20bibimbap-iX2AsxTuIvspzBGhx6n6x5yJOKa8tH.png",
      category: "rice-dish",
    },
    {
      id: "kimchi-fried-rice",
      name: "Kimchi Fried Rice",
      korean: "김치볶음밥",
      basePrice: 17.99,
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/kimchi%20fried%20rice-8XVmSM2fcc4MZY71V04jwVjMwqmhDj.png",
      category: "rice-dish",
    },
    // Add more rice dishes as needed
  ],
  // Add other categories as needed
}

// Subscription plan configurations
export const subscriptionPlans = [
  {
    id: "weekly",
    name: "Weekly",
    description: "Delivered every week",
    interval: "week" as const,
    intervalCount: 1,
    discount: 0,
  },
  {
    id: "biweekly",
    name: "Bi-Weekly",
    description: "Delivered every 2 weeks",
    interval: "week" as const,
    intervalCount: 2,
    discount: 5,
  },
  {
    id: "monthly",
    name: "Monthly",
    description: "Delivered every month",
    interval: "month" as const,
    intervalCount: 1,
    discount: 10,
  },
]

// Helper function to calculate subscription price with discount
export function calculateSubscriptionPrice(basePrice: number, planId: string): number {
  const plan = subscriptionPlans.find((p) => p.id === planId)
  if (!plan) return basePrice

  const discount = plan.discount / 100
  return basePrice * (1 - discount)
}

// Helper function to get all subscription products
export function getAllSubscriptionProducts(): SubscriptionProduct[] {
  return [...lunchBoxProducts]
}

// Helper function to find a subscription product by ID
export function findSubscriptionProduct(productId: string): SubscriptionProduct | undefined {
  return getAllSubscriptionProducts().find((p) => p.id === productId)
}
