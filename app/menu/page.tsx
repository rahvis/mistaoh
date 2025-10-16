"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import Image from "next/image"
import { Leaf, WheatOff, Plus } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { useCart } from "@/contexts/cart-context"

const menuData = {
  lunch: [
    {
      category: "Appetizers",
      items: [
        {
          title: "Japchae",
          korean: "잡채",
          price: 13.99,
          vegetarian: true,
          glutenFree: true,
          description: "Stir-fried glass noodles with vegetables in a savory-sweet sauce",
          image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/japchae-f8yb9hFK9UmTaANkh2I3L991tDRlJc.jpg",
        },
        {
          title: "Pork Dumplings",
          korean: "돼지만두",
          price: 10.99,
          vegetarian: false,
          glutenFree: false,
          description: "6 pieces of handmade dumplings filled with seasoned pork",
          image:
            "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Pork%20Dumplings-JWxg0E8xFaVt6TmlhtZamWC1O3PYt4.jpg",
        },
        {
          title: "Kimchi Dumplings",
          korean: "김치만두",
          price: 10.99,
          vegetarian: true,
          glutenFree: false,
          description: "6 pieces of dumplings filled with spicy fermented kimchi",
          image:
            "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Kimchi%20dumplings-SxlYaOnOVZuFInXaz0h61JQ2gPZ9yL.jpg",
        },
        {
          title: "Vegetable Dumplings",
          korean: "야채만두",
          price: 9.99,
          vegetarian: true,
          glutenFree: false,
          description: "6 pieces of dumplings filled with fresh vegetables",
          image:
            "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Vegetarian%20dumplings-x7E91pzNc5BZXLTwKKl6TeithTY6Dm.jpg",
        },
        {
          title: "Shrimp Tempura",
          korean: "새우튀김",
          price: 11.99,
          vegetarian: false,
          glutenFree: false,
          description: "6 pieces of crispy battered shrimp served with dipping sauce",
          image:
            "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Shrimp%20tempura-RBhJNZZw1V3tIi8Vn8L2YQiJ3CTN2T.jpg",
        },
        {
          title: "Fried Calamari",
          korean: "칼라마리튀김",
          price: 16.99,
          vegetarian: false,
          glutenFree: false,
          description: "Crispy fried squid rings with a tangy dipping sauce",
          image:
            "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/fried%20calamari-IefJteE5ehZDTnuaknZqCx2sxdpXOb.jpg",
        },
        {
          title: "Fried Chicken Wings",
          korean: "치킨윙",
          price: 15.99,
          vegetarian: false,
          glutenFree: false,
          description: "7 pieces of crispy Korean-style fried chicken wings with garlic soy glaze",
          image:
            "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/chickenwings-Jriq5QpQlTIRJ0bgC2Yo3Kz7cH0Als.jpg",
        },
        {
          title: "Bulgogi Kimchi Fries",
          korean: "불고기감자튀김",
          price: 15.99,
          vegetarian: false,
          glutenFree: false,
          description: "Crispy fries topped with marinated bulgogi beef, kimchi, and sesame seeds",
          image:
            "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/bulgogi%20kimchi%20fries%201-KPsj5xIRmzQORZPrfFhmN9PqiE8cFi.jpg",
        },
        {
          title: "Brisket Salad",
          korean: "차돌샐러드",
          price: 18.99,
          vegetarian: false,
          glutenFree: true,
          description: "Fresh mixed greens with tender beef brisket and sesame dressing",
          image:
            "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/brisket%20salad-VwvV128ve0BtugZWN1IpamLuati5Fy.jpg",
        },
        {
          title: "Teriyaki Chicken Salad",
          korean: "치킨샐러드",
          price: 15.99,
          vegetarian: false,
          glutenFree: true,
          description: "Grilled teriyaki chicken over crisp lettuce with house dressing",
          image:
            "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Teriyaki%20chicken%20salad-2taJe0YTlfPMBZUkTJ8jQn3ALCG1DW.png",
        },
        {
          title: "Seafood Pancake",
          korean: "해물파전",
          price: 15.99,
          vegetarian: false,
          glutenFree: false,
          description: "Crispy Korean pancake loaded with seafood and scallions",
          image:
            "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/dd_seafood%20pancake-8VZVqcmQ7k7Cw5fXFwcKeueOJJwSKj.jpg",
        },
        {
          title: "Vegetarian Pancake",
          korean: "야채파전",
          price: 13.99,
          vegetarian: true,
          glutenFree: false,
          description: "Savory Korean pancake filled with fresh vegetables",
          image:
            "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Vegetarian%20Pancakes-zoMiswKLJT1W5mm4VLazB13hxZHTwt.png",
        },
        {
          title: "Kimchi Pancake",
          korean: "김치파전",
          price: 15.99,
          vegetarian: true,
          glutenFree: false,
          description: "Crispy pancake made with spicy fermented kimchi",
          image:
            "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/kimchi%20pancakes-obLeYgTLbFXkTTOmAanu99JEPzzHtK.jpeg",
        },
      ],
    },
    {
      category: "Rice Dishes",
      items: [
        {
          title: "Dolsot Bibimbap",
          korean: "돌솥비빔밥",
          price: 16.99,
          vegetarian: false,
          glutenFree: true,
          description: "Sizzling stone pot rice with vegetables, egg, and gochujang sauce",
          image:
            "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/dolsot%20bibimbap-iX2AsxTuIvspzBGhx6n6x5yJOKa8tH.png",
        },
        {
          title: "Kimchi Fried Rice",
          korean: "김치볶음밥",
          price: 17.99,
          vegetarian: false,
          glutenFree: true,
          description: "Fried rice with kimchi, vegetables, and topped with a fried egg",
          image:
            "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/kimchi%20fried%20rice-8XVmSM2fcc4MZY71V04jwVjMwqmhDj.png",
        },
        {
          title: "Vegetarian Fried Rice",
          korean: "야채볶음밥",
          price: 17.99,
          vegetarian: true,
          glutenFree: true,
          description: "Fried rice with assorted vegetables and sesame oil",
          image:
            "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/vegetarian%20fried%20rice-cM6Og0OgyD39c3nGIA39bXElxehwEi.png",
        },
        {
          title: "Teriyaki Chicken",
          korean: "데리야끼치킨",
          price: 23.99,
          vegetarian: false,
          glutenFree: true,
          description: "Grilled chicken glazed with sweet teriyaki sauce, served with rice",
          image:
            "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/teriyaki%20chicken-EcVhieclUrFrsrwg8T5ajngJCXX8My.jpg",
        },
        {
          title: "Chicken Katsu",
          korean: "치킨까스",
          price: 24.99,
          vegetarian: false,
          glutenFree: false,
          description: "Crispy breaded chicken cutlet with tonkatsu sauce and rice",
          image:
            "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/chicken%20katsu-QBf9XCewKqGTuuEjuZUtZWt62RVCrQ.png",
        },
        {
          title: "Truffle Bulgogi Rice",
          korean: "트러플불고기덮밥",
          price: 26.99,
          vegetarian: false,
          glutenFree: true,
          description: "Marinated beef bulgogi over rice with truffle oil",
          image:
            "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/truffle%20bulgogi%20rice-pxH3HxQ8HWZXao6vTvBqXVJwImfave.png",
        },
        {
          title: "Spicy Squid Rice",
          korean: "매운오징어덮밥",
          price: 25.99,
          vegetarian: false,
          glutenFree: true,
          description: "Spicy stir-fried squid with vegetables over steamed rice",
          image:
            "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/spicy%20squid%20rice-CdfqLwrUvA3F0lWE6WKZwFW6Wk3zAC.png",
        },
        {
          title: "Galbi Rice",
          korean: "갈비덮밥",
          price: 29.99,
          vegetarian: false,
          glutenFree: true,
          description: "Tender marinated short ribs over rice with vegetables",
          image:
            "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/galbi%20rice-SRGGS2r77NOIAktINn7FYWJCaKwN8q.png",
        },
      ],
    },
    {
      category: "Soups & Stews",
      items: [
        {
          title: "Budae Jjigae",
          korean: "부대찌개",
          price: 21.99,
          vegetarian: false,
          glutenFree: false,
          description: "Army stew with sausage, spam, ramen noodles, and vegetables in spicy broth",
          image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/budae-H1m9fKidjppIPNiMMfi9vZvbLG61MV.jpg",
        },
        {
          title: "Kimchi Jjigae",
          korean: "김치찌개",
          price: 15.99,
          vegetarian: false,
          glutenFree: true,
          description: "Spicy kimchi stew with pork and tofu",
          image:
            "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Kimchi%20Jjigae-BohyNJaFOnDK3AWb89Kme58cibnpTD.jpg",
        },
        {
          title: "Doenjang Jjigae",
          korean: "된장찌개",
          price: 15.99,
          vegetarian: true,
          glutenFree: true,
          description: "Traditional Korean soybean paste stew with vegetables and tofu",
          image:
            "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/deonjang%20jjigae-f0SEaORNpmSdF01SfOkess6gUerkXE.jpg",
        },
        {
          title: "Yukgaejang",
          korean: "육개장",
          price: 18.99,
          vegetarian: false,
          glutenFree: true,
          description: "Spicy beef soup with vegetables and glass noodles",
          image:
            "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Yukgaejang-WV5pLfJhDfwBnvvHheB3m87P0FtC0x.jpg",
        },
        {
          title: "Soondubu Jjigae",
          korean: "순두부",
          price: 16.99,
          vegetarian: true,
          glutenFree: true,
          description: "Soft tofu stew in spicy broth with vegetables",
          image:
            "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Soondubu%20Jjigae-lHpXMHh9g0E6yJYiTWvLEE27U8GzFB.jpg",
        },
        {
          title: "Galbitang",
          korean: "갈비탕",
          price: 20.99,
          vegetarian: false,
          glutenFree: true,
          description: "Beef short rib soup in clear, savory broth",
          image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Galbitang-ul3c8wXqHR0ovCFkCb84BtWAckTZz5.jpg",
        },
        {
          title: "Maeun Tang",
          korean: "매운탕",
          price: 23.95,
          vegetarian: false,
          glutenFree: true,
          description: "Spicy fish stew with vegetables in red chili broth",
          image:
            "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Maeun%20Tang-fmQulVK71wui2XCpMD4jhf8q0Iy2uj.jpg",
        },
      ],
    },
    {
      category: "Braised Dishes",
      items: [
        {
          title: "Cheese Seafood Tteokbokki",
          korean: "치즈해물떡볶음",
          price: 25.99,
          vegetarian: false,
          glutenFree: true,
          description: "Spicy rice cakes with seafood topped with melted cheese",
          image:
            "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Cheese_Seafood_Tteokbokki-CLt8eWu2tKSah4a4lG0JGtxVMWCjBK.jpg",
        },
        {
          title: "Tteokbokki",
          korean: "떡볶이",
          price: 18.99,
          vegetarian: true,
          glutenFree: true,
          description: "Chewy rice cakes in sweet and spicy gochujang sauce",
          image:
            "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Tteokbokki-pzokp2Uzds3o7nH8UgGa1o1E6tUuwE.jpg",
        },
        {
          title: "Galbi Jjim",
          korean: "갈비찜",
          price: 35.99,
          vegetarian: false,
          glutenFree: true,
          description: "Braised beef short ribs with vegetables in savory-sweet sauce",
          image:
            "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Galbi%20Jjim-RRSBc34DRqRaQ7vZepjo9FwbcS0J2g.jpg",
        },
        {
          title: "Mukeunji Samgyupsal Jjim",
          korean: "묵은지삼겹살찜",
          price: 28.99,
          vegetarian: false,
          glutenFree: true,
          description: "Braised pork belly with aged kimchi",
          image:
            "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Mukeunji%20Samgyupsal%20Jjim-9IIYFLzTtXqw3VH9R2w6e9om5lgw80.jpg",
        },
        {
          title: "Bossam",
          korean: "보쌈",
          price: 37.65,
          vegetarian: false,
          glutenFree: true,
          description: "Boiled pork wraps with lettuce, kimchi, and ssamjang",
          image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Bossam-mRtQQOfw8paavzkK0StISUgy9VUGmu.jpg",
        },
      ],
    },
    {
      category: "Korean BBQ",
      items: [
        {
          title: "Samgyupsal",
          korean: "삼겹살",
          price: 25.99,
          vegetarian: false,
          glutenFree: true,
          description: "Grilled pork belly slices, served with lettuce wraps",
          image:
            "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Samgyupsal-e2FbCHZ5myEMtNE0cLYNCW2Yz8fJFn.jpg",
        },
        {
          title: "Daeji Galbi",
          korean: "돼지갈비",
          price: 29.99,
          vegetarian: false,
          glutenFree: true,
          description: "Marinated pork ribs grilled to perfection",
          image:
            "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Daeji%20Galbi-JbqCvnKsaIrtNuofI4p74UeVTvuYTA.jpg",
        },
        {
          title: "Spicy Pork",
          korean: "제육불고기",
          price: 25.99,
          vegetarian: false,
          glutenFree: true,
          description: "Spicy marinated pork with vegetables",
          image:
            "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Spicy%20Pork-634sw7W0NEXwkn7JJuLoASzHoEuh26.jpg",
        },
        {
          title: "Bulgogi",
          korean: "불고기",
          price: 25.99,
          vegetarian: false,
          glutenFree: true,
          description: "Thinly sliced beef marinated in sweet soy sauce",
          image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/bulgogi-2-PjvUbvKALCkjnx9fEPzce6WQrYKkNq.jpg",
        },
        {
          title: "Dakgui",
          korean: "닭구이",
          price: 23.99,
          vegetarian: false,
          glutenFree: true,
          description: "Grilled marinated chicken with Korean spices",
          image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Dakgui-W2aRs6LF7CC2LC45lvADkvNt4yaY7q.jpg",
        },
        {
          title: "Galbi",
          korean: "양념갈비",
          price: 35.99,
          vegetarian: false,
          glutenFree: true,
          description: "Marinated beef short ribs grilled tableside",
          image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Galbi-SxWHpzARBRTDdGD4mcBfY9QHzlb2Di.jpg",
        },
        {
          title: "Ribeye Steak",
          korean: "꽃등심스테이크",
          price: 38.99,
          vegetarian: false,
          glutenFree: true,
          description: "Premium Korean ribeye steak grilled to order",
          image:
            "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Ribeye%20Steak-VYX5Ouo7LG7OzDjFJUsdOrSETMUr6Z.jpg",
        },
        {
          title: "LA Galbi",
          korean: "LA갈비",
          price: 33.99,
          vegetarian: false,
          glutenFree: true,
          description: "LA-style thin-cut marinated beef short ribs",
          image:
            "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/LA%20Galbi-g5iIZcKWizf7IlPYA9gp9ObWllQMQu.jpg",
        },
        {
          title: "Jang Uh",
          korean: "장어구이",
          price: 39.95,
          vegetarian: false,
          glutenFree: true,
          description: "Grilled eel with sweet soy glaze",
          image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Jang%20Uh-eBCI36UTZn3ACGEEOXjzlf9O88Ezyo.jpg",
        },
      ],
    },
    {
      category: "Fish",
      items: [
        {
          title: "Grilled Mackerel",
          korean: "고등어구이",
          price: 18.99,
          vegetarian: false,
          glutenFree: true,
          description: "Whole mackerel grilled with sea salt and lemon",
          image:
            "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DD_mackerel-TBCI17lH6xu23GkicSlrtzA2EqTtPO.jpg",
        },
        {
          title: "Grilled Salmon",
          korean: "연어구이",
          price: 19.99,
          vegetarian: false,
          glutenFree: true,
          description: "Fresh salmon fillet grilled with teriyaki glaze",
          image:
            "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Grilled%20Salmon-UVycvhKeBF7shIC8fyiicGlZht4t1g.jpg",
        },
      ],
    },
    {
      category: "Dosirak (Lunch Box)",
      items: [
        {
          title: "Bulgogi Set",
          korean: "불고기 세트",
          price: 20.99,
          vegetarian: false,
          glutenFree: false,
          description: "Bulgogi with salad, 2 fried dumplings, and soup of the day",
          image:
            "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Bulgogi%20Set-wHjsZQDdhLjzMURWgFuly4oRzJZ119.jpeg",
        },
        {
          title: "Spicy Pork Set",
          korean: "제육볶음 세트",
          price: 20.99,
          vegetarian: false,
          glutenFree: false,
          description: "Spicy pork with salad, 2 fried dumplings, and soup of the day",
          image:
            "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Spicy%20Pork%20Set-adGWiVlzUIYENaHJuIWUC2GFuMAROk.jpeg",
        },
        {
          title: "Spicy Squid Set",
          korean: "오징어볶음 세트",
          price: 20.99,
          vegetarian: false,
          glutenFree: false,
          description: "Spicy squid with salad, 2 fried dumplings, and soup of the day",
          image:
            "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Spicy%20Squid%20Set-PkR1LX7SVjJW9Rh31LRSNY6bIBPDey.jpeg",
        },
        {
          title: "Grilled Mackerel Set",
          korean: "고등어 세트",
          price: 17.99,
          vegetarian: false,
          glutenFree: false,
          description: "Grilled mackerel with salad, 2 fried dumplings, and soup of the day",
          image:
            "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Grilled%20Mackerel%20Set-MtGioqgOE6yjEDL8vkQeyH3IgFDeEm.jpg",
        },
        {
          title: "Gochujang Samgyupsal Set",
          korean: "고추장 삼겹살 세트",
          price: 22.99,
          vegetarian: false,
          glutenFree: false,
          description: "Spicy pork belly with salad, 2 fried dumplings, and soup of the day",
          image:
            "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Gochujang%20Samgyupsal%20Set-7CRy8K4jg0XpIUOwBJ1NI9IjbDU2F0.jpg",
        },
      ],
    },
    {
      category: "Ramen",
      items: [
        {
          title: "Mista Ramen",
          korean: "미스타라면",
          price: 12.0,
          vegetarian: false,
          glutenFree: false,
          description: "House special ramen with rich broth. Add toppings: egg, chicken, bulgogi, or tofu ($2.50 each)",
          image:
            "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Mista%20Ramen.JPG-Toi1pQC16zAFyBFnQt9fXMp90tcaiN.jpeg",
        },
        {
          title: "Miso Ramen",
          korean: "미소라면",
          price: 12.0,
          vegetarian: false,
          glutenFree: false,
          description: "Ramen in savory miso broth. Add toppings: egg, chicken, bulgogi, or tofu ($2.50 each)",
          image:
            "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Miso%20Ramen-h9JrAPQZ6ZkUBMJBibkA5Os0Sykhoh.jpg",
        },
      ],
    },
  ],
  dinner: [
    {
      category: "Appetizers",
      items: [
        {
          title: "Japchae",
          korean: "잡채",
          price: 15.99,
          vegetarian: true,
          glutenFree: true,
          description: "Stir-fried glass noodles with vegetables in a savory-sweet sauce",
          image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/japchae-f8yb9hFK9UmTaANkh2I3L991tDRlJc.jpg",
        },
        {
          title: "Pork Dumplings",
          korean: "돼지만두",
          price: 12.99,
          vegetarian: false,
          glutenFree: false,
          description: "6 pieces of handmade dumplings filled with seasoned pork",
          image:
            "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Pork%20Dumplings-JWxg0E8xFaVt6TmlhtZamWC1O3PYt4.jpg",
        },
        {
          title: "Kimchi Dumplings",
          korean: "김치만두",
          price: 12.99,
          vegetarian: true,
          glutenFree: false,
          description: "6 pieces of dumplings filled with spicy fermented kimchi",
          image:
            "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Kimchi%20dumplings-SxlYaOnOVZuFInXaz0h61JQ2gPZ9yL.jpg",
        },
        {
          title: "Vegetable Dumplings",
          korean: "야채만두",
          price: 11.99,
          vegetarian: true,
          glutenFree: false,
          description: "6 pieces of dumplings filled with fresh vegetables",
          image:
            "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Vegetarian%20dumplings-x7E91pzNc5BZXLTwKKl6TeithTY6Dm.jpg",
        },
        {
          title: "Shrimp Tempura",
          korean: "새우튀김",
          price: 13.99,
          vegetarian: false,
          glutenFree: false,
          description: "6 pieces of crispy battered shrimp served with dipping sauce",
          image:
            "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Shrimp%20tempura-RBhJNZZw1V3tIi8Vn8L2YQiJ3CTN2T.jpg",
        },
        {
          title: "Fried Calamari",
          korean: "칼라마리튀김",
          price: 18.99,
          vegetarian: false,
          glutenFree: false,
          description: "Crispy fried squid rings with a tangy dipping sauce",
          image:
            "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/fried%20calamari-IefJteE5ehZDTnuaknZqCx2sxdpXOb.jpg",
        },
        {
          title: "Fried Chicken Wings",
          korean: "치킨윙",
          price: 15.99,
          vegetarian: false,
          glutenFree: false,
          description: "7 pieces of crispy Korean-style fried chicken wings with garlic soy glaze",
          image:
            "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/chickenwings-Jriq5QpQlTIRJ0bgC2Yo3Kz7cH0Als.jpg",
        },
        {
          title: "Bulgogi Kimchi Fries",
          korean: "불고기감자튀김",
          price: 17.99,
          vegetarian: false,
          glutenFree: false,
          description: "Crispy fries topped with marinated bulgogi beef, kimchi, and sesame seeds",
          image:
            "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/bulgogi%20kimchi%20fries%201-KPsj5xIRmzQORZPrfFhmN9PqiE8cFi.jpg",
        },
        {
          title: "Brisket Salad",
          korean: "차돌샐러드",
          price: 18.99,
          vegetarian: false,
          glutenFree: true,
          description: "Fresh mixed greens with tender beef brisket and sesame dressing",
          image:
            "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/brisket%20salad-VwvV128ve0BtugZWN1IpamLuati5Fy.jpg",
        },
        {
          title: "Teriyaki Chicken Salad",
          korean: "치킨샐러드",
          price: 17.99,
          vegetarian: false,
          glutenFree: true,
          description: "Grilled teriyaki chicken over crisp lettuce with house dressing",
          image:
            "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Teriyaki%20chicken%20salad-2taJe0YTlfPMBZUkTJ8jQn3ALCG1DW.png",
        },
        {
          title: "Seafood Pancake",
          korean: "해물파전",
          price: 17.99,
          vegetarian: false,
          glutenFree: false,
          description: "Crispy Korean pancake loaded with seafood and scallions",
          image:
            "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/dd_seafood%20pancake-8VZVqcmQ7k7Cw5fXFwcKeueOJJwSKj.jpg",
        },
        {
          title: "Vegetarian Pancake",
          korean: "야채파전",
          price: 15.99,
          vegetarian: true,
          glutenFree: false,
          description: "Savory Korean pancake filled with fresh vegetables",
          image:
            "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Vegetarian%20Pancakes-zoMiswKLJT1W5mm4VLazB13hxZHTwt.png",
        },
        {
          title: "Kimchi Pancake",
          korean: "김치파전",
          price: 17.99,
          vegetarian: true,
          glutenFree: false,
          description: "Crispy pancake made with spicy fermented kimchi",
          image:
            "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/kimchi%20pancakes-obLeYgTLbFXkTTOmAanu99JEPzzHtK.jpeg",
        },
      ],
    },
    {
      category: "Rice Dishes",
      items: [
        {
          title: "Dolsot Bibimbap",
          korean: "돌솥비빔밥",
          price: 22.99,
          vegetarian: false,
          glutenFree: true,
          description: "Sizzling stone pot rice with vegetables, egg, and gochujang sauce",
          image:
            "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/dolsot%20bibimbap-iX2AsxTuIvspzBGhx6n6x5yJOKa8tH.png",
        },
        {
          title: "Kimchi Fried Rice",
          korean: "김치볶음밥",
          price: 22.99,
          vegetarian: false,
          glutenFree: true,
          description: "Fried rice with kimchi, vegetables, and topped with a fried egg",
          image:
            "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/kimchi%20fried%20rice-8XVmSM2fcc4MZY71V04jwVjMwqmhDj.png",
        },
        {
          title: "Vegetarian Fried Rice",
          korean: "야채볶음밥",
          price: 17.99,
          vegetarian: true,
          glutenFree: true,
          description: "Fried rice with assorted vegetables and sesame oil",
          image:
            "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/vegetarian%20fried%20rice-cM6Og0OgyD39c3nGIA39bXElxehwEi.png",
        },
        {
          title: "Teriyaki Chicken",
          korean: "데리야끼치킨",
          price: 24.99,
          vegetarian: false,
          glutenFree: true,
          description: "Grilled chicken glazed with sweet teriyaki sauce, served with rice",
          image:
            "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/teriyaki%20chicken-EcVhieclUrFrsrwg8T5ajngJCXX8My.jpg",
        },
        {
          title: "Chicken Katsu",
          korean: "치킨까스",
          price: 26.99,
          vegetarian: false,
          glutenFree: false,
          description: "Crispy breaded chicken cutlet with tonkatsu sauce and rice",
          image:
            "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/chicken%20katsu-QBf9XCewKqGTuuEjuZUtZWt62RVCrQ.png",
        },
        {
          title: "Truffle Bulgogi Rice",
          korean: "트러플불고기덮밥",
          price: 29.99,
          vegetarian: false,
          glutenFree: true,
          description: "Marinated beef bulgogi over rice with truffle oil",
          image:
            "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/truffle%20bulgogi%20rice-pxH3HxQ8HWZXao6vTvBqXVJwImfave.png",
        },
        {
          title: "Spicy Squid Rice",
          korean: "오징어덮밥",
          price: 28.99,
          vegetarian: false,
          glutenFree: true,
          description: "Spicy stir-fried squid with vegetables over steamed rice",
          image:
            "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/spicy%20squid%20rice-CdfqLwrUvA3F0lWE6WKZwFW6Wk3zAC.png",
        },
        {
          title: "Galbi Rice",
          korean: "갈비덮밥",
          price: 30.99,
          vegetarian: false,
          glutenFree: true,
          description: "Tender marinated short ribs over rice with vegetables",
          image:
            "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/galbi%20rice-SRGGS2r77NOIAktINn7FYWJCaKwN8q.png",
        },
      ],
    },
    {
      category: "Soups & Stews",
      items: [
        {
          title: "Budae Jjigae",
          korean: "부대찌개",
          price: 21.99,
          vegetarian: false,
          glutenFree: false,
          description: "Army stew with sausage, spam, ramen noodles, and vegetables in spicy broth",
          image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/budae-H1m9fKidjppIPNiMMfi9vZvbLG61MV.jpg",
        },
        {
          title: "Kimchi Jjigae",
          korean: "김치찌개",
          price: 18.99,
          vegetarian: false,
          glutenFree: true,
          description: "Spicy kimchi stew with pork and tofu",
          image:
            "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Kimchi%20Jjigae-BohyNJaFOnDK3AWb89Kme58cibnpTD.jpg",
        },
        {
          title: "Doenjang Jjigae",
          korean: "된장찌개",
          price: 18.99,
          vegetarian: true,
          glutenFree: true,
          description: "Traditional Korean soybean paste stew with vegetables and tofu",
          image:
            "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/deonjang%20jjigae-f0SEaORNpmSdF01SfOkess6gUerkXE.jpg",
        },
        {
          title: "Yukgaejang",
          korean: "육개장",
          price: 22.99,
          vegetarian: false,
          glutenFree: true,
          description: "Spicy beef soup with vegetables and glass noodles",
          image:
            "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Yukgaejang-WV5pLfJhDfwBnvvHheB3m87P0FtC0x.jpg",
        },
        {
          title: "Soondubu",
          korean: "순두부",
          price: 19.99,
          vegetarian: true,
          glutenFree: true,
          description: "Soft tofu stew in spicy broth with vegetables",
          image:
            "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Soondubu%20Jjigae-lHpXMHh9g0E6yJYiTWvLEE27U8GzFB.jpg",
        },
        {
          title: "Galbitang",
          korean: "갈비탕",
          price: 22.99,
          vegetarian: false,
          glutenFree: true,
          description: "Beef short rib soup in clear, savory broth",
          image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Galbitang-ul3c8wXqHR0ovCFkCb84BtWAckTZz5.jpg",
        },
      ],
    },
    {
      category: "Braised Dishes",
      items: [
        {
          title: "Cheese Seafood Tteokbokki",
          korean: "치즈해물떡볶음",
          price: 24.99,
          vegetarian: false,
          glutenFree: true,
          description: "Spicy rice cakes with seafood topped with melted cheese",
          image:
            "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Cheese_Seafood_Tteokbokki-CLt8eWu2tKSah4a4lG0JGtxVMWCjBK.jpg",
        },
        {
          title: "Tteokbokki",
          korean: "떡볶이",
          price: 22.99,
          vegetarian: true,
          glutenFree: true,
          description: "Chewy rice cakes in sweet and spicy gochujang sauce",
          image:
            "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Tteokbokki-pzokp2Uzds3o7nH8UgGa1o1E6tUuwE.jpg",
        },
        {
          title: "Galbi Jjim",
          korean: "갈비찜",
          price: 32.99,
          vegetarian: false,
          glutenFree: true,
          description: "Braised beef short ribs with vegetables in savory-sweet sauce",
          image:
            "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Galbi%20Jjim-RRSBc34DRqRaQ7vZepjo9FwbcS0J2g.jpg",
        },
        {
          title: "Mukeunji Samgyupsal Jjim",
          korean: "묵은지삼겹살찜",
          price: 29.99,
          vegetarian: false,
          glutenFree: true,
          description: "Braised pork belly with aged kimchi",
          image:
            "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Mukeunji%20Samgyupsal%20Jjim-9IIYFLzTtXqw3VH9R2w6e9om5lgw80.jpg",
        },
      ],
    },
    {
      category: "Korean BBQ",
      items: [
        {
          title: "Samgyupsal",
          korean: "삼겹살",
          price: 28.99,
          vegetarian: false,
          glutenFree: true,
          description: "Grilled pork belly slices, served with lettuce wraps",
          image:
            "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Samgyupsal-e2FbCHZ5myEMtNE0cLYNCW2Yz8fJFn.jpg",
        },
        {
          title: "Daeji Galbi",
          korean: "돼지갈비",
          price: 30.99,
          vegetarian: false,
          glutenFree: true,
          description: "Marinated pork ribs grilled to perfection",
          image:
            "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Daeji%20Galbi-JbqCvnKsaIrtNuofI4p74UeVTvuYTA.jpg",
        },
        {
          title: "Spicy Pork",
          korean: "돼지불고기",
          price: 30.99,
          vegetarian: false,
          glutenFree: true,
          description: "Spicy marinated pork with vegetables",
          image:
            "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Spicy%20Pork-634sw7W0NEXwkn7JJuLoASzHoEuh26.jpg",
        },
        {
          title: "Bulgogi",
          korean: "불고기",
          price: 32.99,
          vegetarian: false,
          glutenFree: true,
          description: "Thinly sliced beef marinated in sweet soy sauce",
          image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/bulgogi-2-PjvUbvKALCkjnx9fEPzce6WQrYKkNq.jpg",
        },
        {
          title: "Dakgui",
          korean: "닭구이",
          price: 32.99,
          vegetarian: false,
          glutenFree: true,
          description: "Grilled marinated chicken with Korean spices",
          image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Dakgui-W2aRs6LF7CC2LC45lvADkvNt4yaY7q.jpg",
        },
        {
          title: "Galbi",
          korean: "양념갈비",
          price: 37.99,
          vegetarian: false,
          glutenFree: true,
          description: "Marinated beef short ribs grilled tableside",
          image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Galbi-SxWHpzARBRTDdGD4mcBfY9QHzlb2Di.jpg",
        },
        {
          title: "Ribeye Steak",
          korean: "꽃등심스테이크",
          price: 40.99,
          vegetarian: false,
          glutenFree: true,
          description: "Premium Korean ribeye steak grilled to order",
          image:
            "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Ribeye%20Steak-VYX5Ouo7LG7OzDjFJUsdOrSETMUr6Z.jpg",
        },
        {
          title: "LA Galbi",
          korean: "LA갈비",
          price: 36.99,
          vegetarian: false,
          glutenFree: true,
          description: "LA-style thin-cut marinated beef short ribs",
          image:
            "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/LA%20Galbi-g5iIZcKWizf7IlPYA9gp9ObWllQMQu.jpg",
        },
      ],
    },
    {
      category: "Fish",
      items: [
        {
          title: "Grilled Mackerel",
          korean: "고등어구이",
          price: 23.99,
          vegetarian: false,
          glutenFree: true,
          description: "Whole mackerel grilled with sea salt and lemon",
          image:
            "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DD_mackerel-TBCI17lH6xu23GkicSlrtzA2EqTtPO.jpg",
        },
        {
          title: "Grilled Salmon",
          korean: "연어구이",
          price: 25.99,
          vegetarian: false,
          glutenFree: true,
          description: "Fresh salmon fillet grilled with teriyaki glaze",
          image:
            "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Grilled%20Salmon-UVycvhKeBF7shIC8fyiicGlZht4t1g.jpg",
        },
      ],
    },
  ],
  combo: [
    {
      category: "Ramen Combos",
      items: [
        {
          title: "Mista Ramen + Roll",
          korean: "미스타라면 + 롤",
          price: 22.99,
          vegetarian: false,
          glutenFree: false,
          description: "House special ramen paired with your choice of hand roll",
          image:
            "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Mista%20Ramen.JPG-Toi1pQC16zAFyBFnQt9fXMp90tcaiN.jpeg",
        },
        {
          title: "Miso Ramen + Roll",
          korean: "미소라면 + 롤",
          price: 22.99,
          vegetarian: false,
          glutenFree: false,
          description: "Savory miso ramen paired with your choice of hand roll",
          image:
            "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Miso%20Ramen-h9JrAPQZ6ZkUBMJBibkA5Os0Sykhoh.jpg",
        },
      ],
    },
    {
      category: "Build Custom Box",
      items: [
        {
          title: "Cheese Seafood Tteokbokki",
          korean: "치즈해물떡볶음",
          price: 25.99,
          vegetarian: false,
          glutenFree: true,
          description: "Spicy rice cakes with seafood topped with melted cheese",
          image:
            "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Cheese_Seafood_Tteokbokki-CLt8eWu2tKSah4a4lG0JGtxVMWCjBK.jpg",
        },
        {
          title: "Tteokbokki",
          korean: "떡볶이",
          price: 18.99,
          vegetarian: true,
          glutenFree: true,
          description: "Chewy rice cakes in sweet and spicy gochujang sauce",
          image:
            "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Tteokbokki-pzokp2Uzds3o7nH8UgGa1o1E6tUuwE.jpg",
        },
        {
          title: "Mukeunji Samgyupsal Jjim",
          korean: "묵은지삼겹살찜",
          price: 28.99,
          vegetarian: false,
          glutenFree: true,
          description: "Braised pork belly with aged kimchi",
          image:
            "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Mukeunji%20Samgyupsal%20Jjim-9IIYFLzTtXqw3VH9R2w6e9om5lgw80.jpg",
        },
        {
          title: "Samgyupsal",
          korean: "삼겹살",
          price: 25.99,
          vegetarian: false,
          glutenFree: true,
          description: "Grilled pork belly slices, served with lettuce wraps",
          image:
            "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Samgyupsal-e2FbCHZ5myEMtNE0cLYNCW2Yz8fJFn.jpg",
        },
        {
          title: "Ribeye Steak",
          korean: "꽃등심스테이크",
          price: 38.99,
          vegetarian: false,
          glutenFree: true,
          description: "Premium Korean ribeye steak grilled to order",
          image:
            "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Ribeye%20Steak-VYX5Ouo7LG7OzDjFJUsdOrSETMUr6Z.jpg",
        },
        {
          title: "Spicy Pork",
          korean: "제육불고기",
          price: 25.99,
          vegetarian: false,
          glutenFree: true,
          description: "Spicy marinated pork with vegetables",
          image:
            "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Spicy%20Pork-634sw7W0NEXwkn7JJuLoASzHoEuh26.jpg",
        },
        {
          title: "Mista Ramen",
          korean: "미스타라면",
          price: 12.0,
          vegetarian: false,
          glutenFree: false,
          description: "House special ramen with rich broth",
          image:
            "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Mista%20Ramen.JPG-Toi1pQC16zAFyBFnQt9fXMp90tcaiN.jpeg",
        },
        {
          title: "Miso Ramen",
          korean: "미소라면",
          price: 12.0,
          vegetarian: false,
          glutenFree: false,
          description: "Ramen in savory miso broth",
          image:
            "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Miso%20Ramen-h9JrAPQZ6ZkUBMJBibkA5Os0Sykhoh.jpg",
        },
      ],
    },
    {
      category: "Ready-to-Order Lunch Boxes",
      items: [
        {
          title: "Spicy Pork Lunch Box",
          korean: "제육볶음 도시락",
          price: 20.99,
          vegetarian: false,
          glutenFree: false,
          description: "Spicy pork with rice, salad, and sides",
          image:
            "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Spicy%20Pork-634sw7W0NEXwkn7JJuLoASzHoEuh26.jpg",
        },
      ],
    },
    {
      category: "Hand Rolls",
      items: [
        {
          title: "Avocado Salmon Roll",
          korean: "아보카도 연어롤",
          price: 10.95,
          vegetarian: false,
          glutenFree: false,
          description: "Fresh salmon with creamy avocado",
          image: "/placeholder.svg?height=160&width=160",
        },
        {
          title: "Spicy Salmon Roll",
          korean: "매운 연어롤",
          price: 10.95,
          vegetarian: false,
          glutenFree: false,
          description: "Salmon with spicy mayo and cucumber",
          image: "/placeholder.svg?height=160&width=160",
        },
        {
          title: "Spicy Tuna Roll",
          korean: "매운 참치롤",
          price: 10.95,
          vegetarian: false,
          glutenFree: false,
          description: "Tuna with spicy mayo and scallions",
          image: "/placeholder.svg?height=160&width=160",
        },
        {
          title: "California Roll",
          korean: "캘리포니아롤",
          price: 8.95,
          vegetarian: false,
          glutenFree: false,
          description: "Crab, avocado, and cucumber",
          image: "/placeholder.svg?height=160&width=160",
        },
        {
          title: "Shrimp Tempura Roll",
          korean: "새우튀김롤",
          price: 9.95,
          vegetarian: false,
          glutenFree: false,
          description: "Crispy shrimp tempura with avocado",
          image: "/placeholder.svg?height=160&width=160",
        },
        {
          title: "Veggie Roll",
          korean: "야채롤",
          price: 8.95,
          vegetarian: true,
          glutenFree: false,
          description: "Fresh vegetables and avocado",
          image: "/placeholder.svg?height=160&width=160",
        },
        {
          title: "Korean Kimbap",
          korean: "김밥",
          price: 9.25,
          vegetarian: false,
          glutenFree: false,
          description: "Korean-style seaweed rice roll with vegetables and egg",
          image: "/placeholder.svg?height=160&width=160",
        },
      ],
    },
  ],
  drinks: [
    {
      category: "Soju",
      items: [
        {
          title: "Jinro Is Back",
          korean: "진로",
          price: 15.0,
          description: "Classic Korean soju, smooth and clean",
        },
        {
          title: "Chum Churum",
          korean: "참이슬",
          price: 15.0,
          description: "Popular Korean soju with a smooth finish",
        },
        {
          title: "Chamisul Fresh",
          korean: "처음처럼",
          price: 15.0,
          description: "Fresh and crisp Korean soju",
        },
        {
          title: "Flavored Soju",
          korean: "과일소주",
          price: 16.0,
          description: "Fruit-flavored soju varieties (peach, grape, grapefruit)",
        },
      ],
    },
    {
      category: "Makgeolli",
      items: [
        {
          title: "Original Saung Makgeolli",
          korean: "생막걸리",
          price: 18.0,
          description: "Traditional Korean rice wine, slightly sweet and tangy",
        },
        {
          title: "Flavored Makgeolli",
          korean: "과일막걸리",
          price: 19.0,
          description: "Fruit-flavored rice wine varieties",
        },
      ],
    },
    {
      category: "Korean Premium Liquor",
      items: [
        {
          title: "Bok Bun Ja",
          korean: "복분자주",
          price: 35.0,
          description: "Korean black raspberry wine, sweet and fruity",
        },
        {
          title: "Jinro Ilpoom",
          korean: "진로일품",
          price: 45.0,
          description: "Premium Korean soju, smooth and refined",
        },
        {
          title: "Hwayo",
          korean: "화요",
          price: 55.0,
          description: "Ultra-premium Korean soju",
        },
        {
          title: "Seoul Night",
          korean: "서울의밤",
          price: 40.0,
          description: "Premium Korean liquor with smooth taste",
        },
        {
          title: "Won Mae Plum",
          korean: "원매실주",
          price: 38.0,
          description: "Korean plum wine, sweet and aromatic",
        },
      ],
    },
    {
      category: "Beer",
      items: [
        {
          title: "Kloud",
          korean: "클라우드",
          price: 8.0,
          description: "Premium Korean lager",
        },
        {
          title: "Terra",
          korean: "테라",
          price: 8.0,
          description: "Clean Korean lager",
        },
        {
          title: "Bluemoon",
          korean: "블루문",
          price: 9.0,
          description: "Belgian-style wheat ale",
        },
        {
          title: "Sapporo",
          korean: "삿포로",
          price: 9.0,
          description: "Japanese premium lager",
        },
        {
          title: "Stella Artois",
          korean: "스텔라",
          price: 9.0,
          description: "Belgian pilsner",
        },
        {
          title: "Heineken",
          korean: "하이네켄",
          price: 8.0,
          description: "Dutch pale lager",
        },
      ],
    },
    {
      category: "Wine",
      items: [
        {
          title: "House Red",
          korean: "레드와인",
          price: 28.0,
          description: "House selection red wine by the bottle",
        },
        {
          title: "House White",
          korean: "화이트와인",
          price: 28.0,
          description: "House selection white wine by the bottle",
        },
        {
          title: "Rosé",
          korean: "로제와인",
          price: 32.0,
          description: "Refreshing rosé wine by the bottle",
        },
        {
          title: "Champagne",
          korean: "샴페인",
          price: 65.0,
          description: "Sparkling wine by the bottle",
        },
      ],
    },
  ],
}

function MenuItem({ item, category }: { item: any; category: string }) {
  const { addToCart } = useCart()

  const handleAddToCart = () => {
    addToCart({
      id: `${category}-${item.title}`,
      title: item.title,
      korean: item.korean,
      price: item.price,
      image: item.image || "/placeholder.svg",
      category,
    })
  }

  return (
    <div className="flex items-start gap-4 pb-6 border-b border-border last:border-0">
      {item.image && (
        <Dialog>
          <DialogTrigger asChild>
            <div className="relative w-40 h-40 flex-shrink-0 rounded-lg overflow-hidden bg-gray-200 cursor-pointer hover:opacity-90 transition-opacity shadow-md hover:shadow-lg">
              <Image src={item.image || "/placeholder.svg"} alt={item.title} fill className="object-cover" />
            </div>
          </DialogTrigger>
          <DialogContent className="max-w-3xl">
            <div className="relative w-full h-[500px]">
              <Image src={item.image || "/placeholder.svg"} alt={item.title} fill className="object-contain" />
            </div>
            <div className="text-center mt-4">
              <h3 className="font-serif text-2xl mb-2">{item.title}</h3>
              <p className="text-muted">{item.korean}</p>
            </div>
          </DialogContent>
        </Dialog>
      )}

      <div className="flex-1">
        <div className="flex items-start justify-between gap-4">
          <div>
            <div className="flex items-center gap-2">
              <h4 className="font-semibold text-lg">{item.title}</h4>
              {item.glutenFree && <WheatOff className="w-4 h-4 text-amber-700" />}
              {item.vegetarian && <Leaf className="w-4 h-4 text-green-600" />}
            </div>
            <p className="text-sm text-muted mt-1">{item.korean}</p>
            {item.description && (
              <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{item.description}</p>
            )}
          </div>
          <div className="flex flex-col items-end gap-2">
            <span className="font-semibold text-lg text-primary whitespace-nowrap">${item.price.toFixed(2)}</span>
            <button
              onClick={handleAddToCart}
              className="flex items-center gap-1 bg-primary hover:bg-primary-dark text-white px-4 py-2 rounded-lg font-medium transition-colors text-sm shadow-md hover:shadow-lg"
            >
              <Plus className="w-4 h-4" />
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function MenuPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden mt-20">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Food%20pic-AV3xRmPZhqXeBLRXbwbiXc8t73W19i.jpg"
            alt="Mista Oh Menu - Authentic Korean Cuisine"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>

        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="font-serif text-5xl md:text-7xl mb-6 text-balance">Our Menu</h1>
          <p className="text-xl md:text-2xl text-pretty leading-relaxed">
            Authentic Korean flavors crafted with love and tradition
          </p>
        </div>
      </section>

      {/* Legend */}
      <section className="py-8 px-4 bg-surface border-b border-border">
        <div className="max-w-6xl mx-auto flex items-center justify-center gap-6 flex-wrap">
          <div className="flex items-center gap-2">
            <WheatOff className="w-5 h-5 text-amber-700" />
            <span className="text-sm font-medium">= Gluten-Free Option</span>
          </div>
          <div className="flex items-center gap-2">
            <Leaf className="w-5 h-5 text-green-600" />
            <span className="text-sm font-medium">= Vegetarian Option</span>
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <Tabs defaultValue="lunch" className="w-full">
            <div className="sticky top-20 z-40 bg-background pb-4 -mx-4 px-4 border-b border-border">
              <TabsList className="grid w-full grid-cols-4 mb-8 h-auto p-2 gap-2 bg-transparent">
                <TabsTrigger
                  value="lunch"
                  className="text-lg py-4 data-[state=active]:bg-gradient-to-br data-[state=active]:from-amber-500 data-[state=active]:to-orange-600 data-[state=active]:text-white data-[state=active]:shadow-lg bg-amber-100 hover:bg-amber-200 transition-all duration-300 rounded-lg font-semibold"
                >
                  Lunch
                </TabsTrigger>
                <TabsTrigger
                  value="dinner"
                  className="text-lg py-4 data-[state=active]:bg-gradient-to-br data-[state=active]:from-rose-600 data-[state=active]:to-red-700 data-[state=active]:text-white data-[state=active]:shadow-lg bg-rose-100 hover:bg-rose-200 transition-all duration-300 rounded-lg font-semibold"
                >
                  Dinner
                </TabsTrigger>
                <TabsTrigger
                  value="combo"
                  className="text-lg py-4 data-[state=active]:bg-gradient-to-br data-[state=active]:from-purple-600 data-[state=active]:to-indigo-700 data-[state=active]:text-white data-[state=active]:shadow-lg bg-purple-100 hover:bg-purple-200 transition-all duration-300 rounded-lg font-semibold"
                >
                  Combo
                </TabsTrigger>
                <TabsTrigger
                  value="drinks"
                  className="text-lg py-4 data-[state=active]:bg-gradient-to-br data-[state=active]:from-cyan-600 data-[state=active]:to-blue-700 data-[state=active]:text-white data-[state=active]:shadow-lg bg-cyan-100 hover:bg-cyan-200 transition-all duration-300 rounded-lg font-semibold"
                >
                  Drinks
                </TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="lunch">
              <div className="text-center mb-12">
                <h2 className="font-serif text-4xl md:text-5xl mb-4 text-amber-600">Lunch Menu</h2>
                <p className="text-lg text-muted font-semibold">Monday - Saturday: 11 AM - 3 PM</p>
              </div>

              {menuData.lunch.map((category, idx) => (
                <div key={idx} className="mb-16">
                  <h3 className="font-serif text-3xl mb-8 pb-3 border-b-2 border-amber-500">{category.category}</h3>
                  <div className="grid gap-6">
                    {category.items.map((item, itemIdx) => (
                      <MenuItem key={itemIdx} item={item} category={`lunch-${category.category}`} />
                    ))}
                  </div>
                </div>
              ))}
            </TabsContent>

            <TabsContent value="dinner">
              <div className="text-center mb-12">
                <h2 className="font-serif text-4xl md:text-5xl mb-4 text-rose-700">Dinner Menu</h2>
                <p className="text-lg text-muted font-semibold">
                  Monday - Thursday: 3 PM - 10 PM | Friday & Saturday: 3 PM - 11 PM
                </p>
              </div>

              {menuData.dinner.map((category, idx) => (
                <div key={idx} className="mb-16">
                  <h3 className="font-serif text-3xl mb-8 pb-3 border-b-2 border-rose-600">{category.category}</h3>
                  <div className="grid gap-6">
                    {category.items.map((item, itemIdx) => (
                      <MenuItem key={itemIdx} item={item} category={`dinner-${category.category}`} />
                    ))}
                  </div>
                </div>
              ))}
            </TabsContent>

            <TabsContent value="combo">
              <div className="text-center mb-12">
                <h2 className="font-serif text-4xl md:text-5xl mb-4 text-purple-700">Combo Menu</h2>
                <p className="text-lg text-muted">Perfect pairings and hand rolls (Monday - Saturday)</p>
              </div>

              {menuData.combo.map((category, idx) => (
                <div key={idx} className="mb-16">
                  <h3 className="font-serif text-3xl mb-8 pb-3 border-b-2 border-purple-600">{category.category}</h3>
                  <div className="grid gap-6">
                    {category.items.map((item, itemIdx) => (
                      <MenuItem key={itemIdx} item={item} category={`combo-${category.category}`} />
                    ))}
                  </div>
                </div>
              ))}
            </TabsContent>

            <TabsContent value="drinks">
              <div className="text-center mb-12">
                <h2 className="font-serif text-4xl md:text-5xl mb-4 text-cyan-700">Drink Menu</h2>
                <p className="text-lg text-muted">Korean spirits, beer, wine, and more</p>
              </div>

              {menuData.drinks.map((category, idx) => (
                <div key={idx} className="mb-16">
                  <h3 className="font-serif text-3xl mb-8 pb-3 border-b-2 border-cyan-600">{category.category}</h3>
                  <div className="grid gap-6">
                    {category.items.map((item, itemIdx) => (
                      <MenuItem key={itemIdx} item={item} category={`drinks-${category.category}`} />
                    ))}
                  </div>
                </div>
              ))}
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-primary text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-4xl md:text-5xl mb-6">Ready to Experience Authentic Korean Cuisine?</h2>
          <p className="text-xl mb-8 leading-relaxed">
            Make a reservation today and taste the flavors that have made Mista Oh a Flatiron favorite
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/reservation"
              className="bg-white hover:bg-gray-100 text-primary px-8 py-4 rounded-lg font-semibold transition-colors text-lg shadow-lg hover:shadow-xl"
            >
              Make a Reservation
            </a>
            <a
              href="tel:6465598858"
              className="bg-yellow-500 hover:bg-yellow-600 text-secondary px-8 py-4 rounded-lg font-semibold transition-colors text-lg shadow-lg hover:shadow-xl"
            >
              Call (646) 559-8858
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
