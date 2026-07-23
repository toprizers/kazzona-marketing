import { getPricingConfig } from "@/app/actions/pricing";
import AdvertisementClient from "./AdvertisementClient";

export const metadata = {
  title: "Performance Advertising in India | Kazzona Marketing",
  description: "Stop burning ad spend. We manage ₹2Cr+ in monthly ad spend across Google, Meta, and LinkedIn for Indian brands with a focus on pure ROAS.",
  alternates: {
    canonical: "https://kazzona.com/services/advertisement",
  },
  openGraph: {
    title: "Performance Advertising in India | Kazzona Marketing",
    description: "Stop burning ad spend. We manage ₹2Cr+ in monthly ad spend across Google, Meta, and LinkedIn for Indian brands with a focus on pure ROAS.",
    url: "https://kazzona.com/services/advertisement",
    images: [{ url: "/icon.svg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Performance Advertising in India | Kazzona Marketing",
    description: "Stop burning ad spend. We manage ₹2Cr+ in monthly ad spend across Google, Meta, and LinkedIn for Indian brands with a focus on pure ROAS.",
    images: ["/icon.svg"],
  },
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
              "url": "https://kazzona.com"
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
