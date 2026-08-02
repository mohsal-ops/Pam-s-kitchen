import type { Metadata } from "next";
import GiftCardPageClient from "./_components/GiftCardPageClient";

export const metadata: Metadata = {
  title: "Gift Cards | Send Texas BBQ to a Friend",
  description:
    "Buy a The Wagon Wheel gift card online - perfect for Texas BBQ and comfort-food lovers in Eagle Pass, TX. Instant delivery, no expiration.",
  keywords: [
    "restaurant gift card Eagle Pass",
    "The Wagon Wheel gift card",
    "Texas BBQ gift card",
  ],
  alternates: {
    canonical: "/GiftCard",
  },
  openGraph: {
    title: "Gift Cards | The Wagon Wheel Eagle Pass",
    description:
      "Send a The Wagon Wheel gift card instantly - great for Texas BBQ lovers in Eagle Pass, TX.",
    url: "/GiftCard",
  },
};

export default function Page() {
  return <GiftCardPageClient />;
}
