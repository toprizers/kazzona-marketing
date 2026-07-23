import { getPricingConfig } from "@/app/actions/pricing";
import GraphicDesigningClient from "./GraphicDesigningClient";

export const metadata = {
  title: "Premium Graphic Design & Branding | Kazzona Marketing",
  description: "Enterprise-grade UI/UX, branding, and ad creatives for Indian startups and D2C brands. Elevate your visual identity.",
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
