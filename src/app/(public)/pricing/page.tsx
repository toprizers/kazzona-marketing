import { getPricingConfig } from "@/app/actions/pricing";
import PricingPageClient from "./PricingPageClient";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing | Kazzona Marketing — All Services Pricing",
  description: "Transparent pricing for Website Development, SEO Services, and Paid Advertising. Affordable packages starting from ₹4,999. No hidden fees.",
  alternates: {
    canonical: "https://kazzonamarketing.com/pricing"
  }
};

export default async function PricingPage() {
  const config = await getPricingConfig();
  return <PricingPageClient config={config} />;
}
