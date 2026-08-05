import GiftCardPageClient from "./_components/GiftCardPageClient";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata("giftCard");

export default function Page() {
  return <GiftCardPageClient />;
}
