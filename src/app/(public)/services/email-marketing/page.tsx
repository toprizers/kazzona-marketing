import { getPricingConfig } from "@/app/actions/pricing";
import EmailMarketingClient from "./EmailMarketingClient";

export const metadata = {
  title: "Email Marketing Services in India | Kazzona Marketing",
  description: "Generate up to 30% of your total revenue from automated email flows. Klaviyo & Mailchimp experts for Indian D2C and B2B brands.",
};

export default async function EmailMarketingPage() {
  const config = await getPricingConfig();
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Email Marketing & Automation",
            "provider": {
              "@type": "Organization",
              "name": "Kazzona Marketing",
              "url": "https://kazzonamarketing.com"
            },
            "description": "Generate up to 30% of your total revenue from automated email flows. Klaviyo & Mailchimp experts for Indian D2C and B2B brands.",
            "serviceType": "Email Marketing, Klaviyo Automation, Newsletter Management",
            "areaServed": {
              "@type": "Country",
              "name": "India"
            }
          })
        }}
      />
      <EmailMarketingClient config={config} />
    </>
  );
}
