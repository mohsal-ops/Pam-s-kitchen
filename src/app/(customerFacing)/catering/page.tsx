import CateringPageClient from "./_components/CateringPageClient";
import { buildMetadata } from "@/lib/seo";
import { SITE_CONFIG } from "@/lib/siteConfig";

export const metadata = buildMetadata("catering");

export default function Page() {
  return <CateringPageClient />;
}
