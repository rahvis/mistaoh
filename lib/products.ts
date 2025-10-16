// Product catalog - source of truth for all menu items
export interface Product {
  id: string
  name: string
  korean: string
  description: string
  priceInCents: number
  image?: string
  category: string
  vegetarian?: boolean
  glutenFree?: boolean
}

// This matches the menu data structure from the menu page
// Prices are stored in cents to avoid floating point issues
export const PRODUCTS: Product[] = [
  // Lunch - Appetizers
  {
    id: "lunch-appetizers-japchae",
    name: "Japchae",
    korean: "잡채",
    description: "Stir-fried glass noodles with vegetables in a savory-sweet sauce",
    priceInCents: 1399,
    category: "Lunch Appetizers",
    vegetarian: true,
    glutenFree: true,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/japchae-f8yb9hFK9UmTaANkh2I3L991tDRlJc.jpg",
  },
  {
    id: "lunch-appetizers-pork-dumplings",
    name: "Pork Dumplings",
    korean: "돼지만두",
    description: "6 pieces of handmade dumplings filled with seasoned pork",
    priceInCents: 1099,
    category: "Lunch Appetizers",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Pork%20Dumplings-JWxg0E8xFaVt6TmlhtZamWC1O3PYt4.jpg",
  },
  {
    id: "lunch-appetizers-kimchi-dumplings",
    name: "Kimchi Dumplings",
    korean: "김치만두",
    description: "6 pieces of dumplings filled with spicy fermented kimchi",
    priceInCents: 1099,
    category: "Lunch Appetizers",
    vegetarian: true,
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Kimchi%20dumplings-SxlYaOnOVZuFInXaz0h61JQ2gPZ9yL.jpg",
  },
  {
    id: "lunch-appetizers-vegetable-dumplings",
    name: "Vegetable Dumplings",
    korean: "야채만두",
    description: "6 pieces of dumplings filled with fresh vegetables",
    priceInCents: 999,
    category: "Lunch Appetizers",
    vegetarian: true,
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Vegetarian%20dumplings-x7E91pzNc5BZXLTwKKl6TeithTY6Dm.jpg",
  },
  {
    id: "lunch-appetizers-shrimp-tempura",
    name: "Shrimp Tempura",
    korean: "새우튀김",
    description: "6 pieces of crispy battered shrimp served with dipping sauce",
    priceInCents: 1199,
    category: "Lunch Appetizers",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Shrimp%20tempura-RBhJNZZw1V3tIi8Vn8L2YQiJ3CTN2T.jpg",
  },
  {
    id: "lunch-appetizers-fried-calamari",
    name: "Fried Calamari",
    korean: "칼라마리튀김",
    description: "Crispy fried squid rings with a tangy dipping sauce",
    priceInCents: 1699,
    category: "Lunch Appetizers",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/fried%20calamari-IefJteE5ehZDTnuaknZqCx2sxdpXOb.jpg",
  },
  {
    id: "lunch-appetizers-fried-chicken-wings",
    name: "Fried Chicken Wings",
    korean: "치킨윙",
    description: "7 pieces of crispy Korean-style fried chicken wings with garlic soy glaze",
    priceInCents: 1599,
    category: "Lunch Appetizers",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/chickenwings-Jriq5QpQlTIRJ0bgC2Yo3Kz7cH0Als.jpg",
  },
  {
    id: "lunch-appetizers-bulgogi-kimchi-fries",
    name: "Bulgogi Kimchi Fries",
    korean: "불고기감자튀김",
    description: "Crispy fries topped with marinated bulgogi beef, kimchi, and sesame seeds",
    priceInCents: 1599,
    category: "Lunch Appetizers",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/bulgogi%20kimchi%20fries%201-KPsj5xIRmzQORZPrfFhmN9PqiE8cFi.jpg",
  },
  {
    id: "lunch-appetizers-brisket-salad",
    name: "Brisket Salad",
    korean: "차돌샐러드",
    description: "Fresh mixed greens with tender beef brisket and sesame dressing",
    priceInCents: 1899,
    category: "Lunch Appetizers",
    glutenFree: true,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/brisket%20salad-VwvV128ve0BtugZWN1IpamLuati5Fy.jpg",
  },
  {
    id: "lunch-appetizers-teriyaki-chicken-salad",
    name: "Teriyaki Chicken Salad",
    korean: "치킨샐러드",
    description: "Grilled teriyaki chicken over crisp lettuce with house dressing",
    priceInCents: 1599,
    category: "Lunch Appetizers",
    glutenFree: true,
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Teriyaki%20chicken%20salad-2taJe0YTlfPMBZUkTJ8jQn3ALCG1DW.png",
  },
  {
    id: "lunch-appetizers-seafood-pancake",
    name: "Seafood Pancake",
    korean: "해물파전",
    description: "Crispy Korean pancake loaded with seafood and scallions",
    priceInCents: 1599,
    category: "Lunch Appetizers",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/dd_seafood%20pancake-8VZVqcmQ7k7Cw5fXFwcKeueOJJwSKj.jpg",
  },
  {
    id: "lunch-appetizers-vegetarian-pancake",
    name: "Vegetarian Pancake",
    korean: "야채파전",
    description: "Savory Korean pancake filled with fresh vegetables",
    priceInCents: 1399,
    category: "Lunch Appetizers",
    vegetarian: true,
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Vegetarian%20Pancakes-zoMiswKLJT1W5mm4VLazB13hxZHTwt.png",
  },
  {
    id: "lunch-appetizers-kimchi-pancake",
    name: "Kimchi Pancake",
    korean: "김치파전",
    description: "Crispy pancake made with spicy fermented kimchi",
    priceInCents: 1599,
    category: "Lunch Appetizers",
    vegetarian: true,
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/kimchi%20pancakes-obLeYgTLbFXkTTOmAanu99JEPzzHtK.jpeg",
  },
  // Lunch - Rice Dishes
  {
    id: "lunch-rice-dishes-dolsot-bibimbap",
    name: "Dolsot Bibimbap",
    korean: "돌솥비빔밥",
    description: "Sizzling stone pot rice with vegetables, egg, and gochujang sauce",
    priceInCents: 1699,
    category: "Lunch Rice Dishes",
    glutenFree: true,
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/dolsot%20bibimbap-iX2AsxTuIvspzBGhx6n6x5yJOKa8tH.png",
  },
  {
    id: "lunch-rice-dishes-kimchi-fried-rice",
    name: "Kimchi Fried Rice",
    korean: "김치볶음밥",
    description: "Fried rice with kimchi, vegetables, and topped with a fried egg",
    priceInCents: 1799,
    category: "Lunch Rice Dishes",
    glutenFree: true,
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/kimchi%20fried%20rice-8XVmSM2fcc4MZY71V04jwVjMwqmhDj.png",
  },
  {
    id: "lunch-rice-dishes-vegetarian-fried-rice",
    name: "Vegetarian Fried Rice",
    korean: "야채볶음밥",
    description: "Fried rice with assorted vegetables and sesame oil",
    priceInCents: 1799,
    category: "Lunch Rice Dishes",
    vegetarian: true,
    glutenFree: true,
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/vegetarian%20fried%20rice-cM6Og0OgyD39c3nGIA39bXElxehwEi.png",
  },
  {
    id: "lunch-rice-dishes-teriyaki-chicken",
    name: "Teriyaki Chicken",
    korean: "데리야끼치킨",
    description: "Grilled chicken glazed with sweet teriyaki sauce, served with rice",
    priceInCents: 2399,
    category: "Lunch Rice Dishes",
    glutenFree: true,
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/teriyaki%20chicken-EcVhieclUrFrsrwg8T5ajngJCXX8My.jpg",
  },
  {
    id: "lunch-rice-dishes-chicken-katsu",
    name: "Chicken Katsu",
    korean: "치킨까스",
    description: "Crispy breaded chicken cutlet with tonkatsu sauce and rice",
    priceInCents: 2499,
    category: "Lunch Rice Dishes",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/chicken%20katsu-QBf9XCewKqGTuuEjuZUtZWt62RVCrQ.png",
  },
  {
    id: "lunch-rice-dishes-truffle-bulgogi-rice",
    name: "Truffle Bulgogi Rice",
    korean: "트러플불고기덮밥",
    description: "Marinated beef bulgogi over rice with truffle oil",
    priceInCents: 2699,
    category: "Lunch Rice Dishes",
    glutenFree: true,
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/truffle%20bulgogi%20rice-pxH3HxQ8HWZXao6vTvBqXVJwImfave.png",
  },
  {
    id: "lunch-rice-dishes-spicy-squid-rice",
    name: "Spicy Squid Rice",
    korean: "매운오징어덮밥",
    description: "Spicy stir-fried squid with vegetables over steamed rice",
    priceInCents: 2599,
    category: "Lunch Rice Dishes",
    glutenFree: true,
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/spicy%20squid%20rice-CdfqLwrUvA3F0lWE6WKZwFW6Wk3zAC.png",
  },
  {
    id: "lunch-rice-dishes-galbi-rice",
    name: "Galbi Rice",
    korean: "갈비덮밥",
    description: "Tender marinated short ribs over rice with vegetables",
    priceInCents: 2999,
    category: "Lunch Rice Dishes",
    glutenFree: true,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/galbi%20rice-SRGGS2r77NOIAktINn7FYWJCaKwN8q.png",
  },
  // Lunch - Soups & Stews
  {
    id: "lunch-soups-stews-budae-jjigae",
    name: "Budae Jjigae",
    korean: "부대찌개",
    description: "Army stew with sausage, spam, ramen noodles, and vegetables in spicy broth",
    priceInCents: 2199,
    category: "Lunch Soups & Stews",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/budae-H1m9fKidjppIPNiMMfi9vZvbLG61MV.jpg",
  },
  {
    id: "lunch-soups-stews-kimchi-jjigae",
    name: "Kimchi Jjigae",
    korean: "김치찌개",
    description: "Spicy kimchi stew with pork and tofu",
    priceInCents: 1599,
    category: "Lunch Soups & Stews",
    glutenFree: true,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Kimchi%20Jjigae-BohyNJaFOnDK3AWb89Kme58cibnpTD.jpg",
  },
  {
    id: "lunch-soups-stews-doenjang-jjigae",
    name: "Doenjang Jjigae",
    korean: "된장찌개",
    description: "Traditional Korean soybean paste stew with vegetables and tofu",
    priceInCents: 1599,
    category: "Lunch Soups & Stews",
    vegetarian: true,
    glutenFree: true,
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/deonjang%20jjigae-f0SEaORNpmSdF01SfOkess6gUerkXE.jpg",
  },
  {
    id: "lunch-soups-stews-yukgaejang",
    name: "Yukgaejang",
    korean: "육개장",
    description: "Spicy beef soup with vegetables and glass noodles",
    priceInCents: 1899,
    category: "Lunch Soups & Stews",
    glutenFree: true,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Yukgaejang-WV5pLfJhDfwBnvvHheB3m87P0FtC0x.jpg",
  },
  {
    id: "lunch-soups-stews-soondubu-jjigae",
    name: "Soondubu Jjigae",
    korean: "순두부",
    description: "Soft tofu stew in spicy broth with vegetables",
    priceInCents: 1699,
    category: "Lunch Soups & Stews",
    vegetarian: true,
    glutenFree: true,
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Soondubu%20Jjigae-lHpXMHh9g0E6yJYiTWvLEE27U8GzFB.jpg",
  },
  {
    id: "lunch-soups-stews-galbitang",
    name: "Galbitang",
    korean: "갈비탕",
    description: "Beef short rib soup in clear, savory broth",
    priceInCents: 2099,
    category: "Lunch Soups & Stews",
    glutenFree: true,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Galbitang-ul3c8wXqHR0ovCFkCb84BtWAckTZz5.jpg",
  },
  {
    id: "lunch-soups-stews-maeun-tang",
    name: "Maeun Tang",
    korean: "매운탕",
    description: "Spicy fish stew with vegetables in red chili broth",
    priceInCents: 2395,
    category: "Lunch Soups & Stews",
    glutenFree: true,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Maeun%20Tang-fmQulVK71wui2XCpMD4jhf8q0Iy2uj.jpg",
  },
  // Add more products as needed - this is a sample
  // For brevity, I'm including key items. You can expand this list with all menu items.
]

// Helper function to get product by ID
export function getProductById(id: string): Product | undefined {
  return PRODUCTS.find((p) => p.id === id)
}

// Helper function to get products by category
export function getProductsByCategory(category: string): Product[] {
  return PRODUCTS.filter((p) => p.category === category)
}

// Helper function to format price for display
export function formatPrice(priceInCents: number): string {
  return `$${(priceInCents / 100).toFixed(2)}`
}
