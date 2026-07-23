import { ServicesEcosystem } from "@/components/sections/homepage/services-ecosystem";
import { prisma } from "@/lib/db";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const page = await prisma.page.findUnique({
    where: { slug: "services" },
  });

  const metadata: Metadata = {
    title: page?.seoTitle || "Our Services | Kazzona Marketing",
    description: page?.seoDesc || "360° Digital Growth Solutions for organic SEO, performance ads, web development, and email marketing.",
  };

  if (page?.canonicalUrl) {
    metadata.alternates = {
      canonical: page.canonicalUrl,
    };
  } else {
    metadata.alternates = {
      canonical: "https://kazzonamarketing.com/services",
    };
  }

  return metadata;
}

export default async function ServicesPage() {
  const page = await prisma.page.findUnique({
    where: { slug: "services" },
  });

  return (
    <div className="flex flex-col min-h-screen">
      {page?.schemaMarkup && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: page.schemaMarkup }}
        />
      )}
      {page?.headerScript && (
        <div
          style={{ display: "none" }}
          dangerouslySetInnerHTML={{ __html: page.headerScript }}
        />
      )}
      <div className="container mx-auto px-6 pt-24 pb-12 max-w-5xl">
        <h1 className="font-heading text-5xl font-bold mb-6 text-foreground">
          Digital Marketing <span className="text-primary">Services</span>
        </h1>
        <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl">
          Comprehensive digital solutions engineered for scale.
        </p>
      </div>
      
      {/* Reusing the homepage services ecosystem component for the hub */}
      <ServicesEcosystem />
    </div>
  );
}
