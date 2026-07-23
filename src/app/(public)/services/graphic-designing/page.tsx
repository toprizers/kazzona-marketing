import { getPricingConfig } from "@/app/actions/pricing";
import GraphicDesigningClient from "./GraphicDesigningClient";

export const metadata = {
  title: "Premium Graphic Design & Branding | Kazzona Marketing",
  description: "Enterprise-grade UI/UX, branding, and ad creatives for Indian startups and D2C brands. Elevate your visual identity.",
  alternates: {
    canonical: "https://kazzonamarketing.com/services/graphic-designing",
  },
  openGraph: {
    title: "Premium Graphic Design & Branding | Kazzona Marketing",
    description: "Enterprise-grade UI/UX, branding, and ad creatives for Indian startups and D2C brands. Elevate your visual identity.",
    url: "https://kazzonamarketing.com/services/graphic-designing",
    images: [{ url: "/icon.svg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Premium Graphic Design & Branding | Kazzona Marketing",
    description: "Enterprise-grade UI/UX, branding, and ad creatives for Indian startups and D2C brands. Elevate your visual identity.",
    images: ["/icon.svg"],
  },
};

export default async function GraphicDesigningPage() {
  const config = await getPricingConfig();
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Premium Graphic Design & Branding",
            "provider": {
              "@type": "Organization",
              "name": "Kazzona Marketing",
              "url": "https://kazzonamarketing.com"
            },
            "description": "Enterprise-grade UI/UX, branding, and ad creatives for Indian startups and D2C brands. Elevate your visual identity.",
            "serviceType": "Graphic Design, UI/UX Design, Branding, Ad Creatives",
            "areaServed": {
              "@type": "Country",
              "name": "India"
            }
          })
        }}
      />
      <GraphicDesigningClient config={config} />
    </>
  );
}
