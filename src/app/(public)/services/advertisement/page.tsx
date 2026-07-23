import { getPricingConfig } from "@/app/actions/pricing";
import AdvertisementClient from "./AdvertisementClient";

export const metadata = {
  title: "Performance Advertising in India | Kazzona Marketing",
  description: "Stop burning ad spend. We manage ₹2Cr+ in monthly ad spend across Google, Meta, and LinkedIn for Indian brands with a focus on pure ROAS.",
};

export default async function AdvertisementPage() {
  const config = await getPricingConfig();
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Performance Advertising & Media Buying",
            "provider": {
              "@type": "Organization",
              "name": "Kazzona Marketing",
              "url": "https://kazzonamarketing.com"
            },
            "description": "Stop burning ad spend. We manage ₹2Cr+ in monthly ad spend across Google, Meta, and LinkedIn for Indian brands with a focus on pure ROAS.",
            "serviceType": "Google Ads, Meta Ads, LinkedIn Ads, PPC",
            "areaServed": {
              "@type": "Country",
              "name": "India"
            }
          })
        }}
      />
      <AdvertisementClient config={config} />
    </>
  );
}
