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

  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Pricing | Kazzona Marketing",
    "description": "Transparent pricing for Website Development, SEO Services, and Paid Advertising.",
    "url": "https://kazzonamarketing.com/pricing",
    "provider": {
      "@type": "Organization",
      "name": "Kazzona Marketing",
      "url": "https://kazzonamarketing.com"
    }
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <PricingPageClient config={config} />
    </>
  );
}
