import type { Metadata } from 'next'
import { GetFeaturedProducts, GetGategories, GetPlaces, GetProducts } from './_actions/getDataNeeded'
import MainPageMenu from './_components/mainPage'
import { getBusinessHours } from '@/lib/getHours'

export const metadata: Metadata = {
  title: "Menu | Brisket, Ribs Smoked Brisket & Loaded Fries Chicken Fried Steaks",
  description:
    "Order Texas BBQ, crispy BBQ plates, loaded fries, sandwiches, and family feasts online from The Wagon Wheel in Eagle Pass, TX. Pickup or delivery, kids menu included.",
  keywords: [
    "Texas BBQ Eagle Pass menu",
    "BBQ Eagle Pass",
    "loaded fries Eagle Pass",
    "fried chicken Eagle Pass order online",
    "family dinners Eagle Pass",
    "kids meal Eagle Pass restaurant",
  ],
  alternates: {
    canonical: "/Menu",
  },
  openGraph: {
    title: "Menu | The Wagon Wheel Eagle Pass",
    description:
      "Smoked brisket, ribs, sausage, and chicken fried steaks - order online for pickup or delivery in Eagle Pass, TX.",
    url: "/Menu",
  },
}

export default async function Menu() {


   const [featuredProducts , places, categories, products, hours] = await Promise.all([
    GetFeaturedProducts(),
    GetPlaces(),
    GetGategories(),
    GetProducts(),
    getBusinessHours(),
   ])
  return (
      <MainPageMenu featuredProducts={featuredProducts}  places={places} products={products} gategories={categories} hours={hours} />
  )
}


