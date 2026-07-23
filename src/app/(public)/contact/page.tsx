import ContactClient from "./ContactClient";
import { prisma } from "@/lib/db";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const page = await prisma.page.findUnique({
    where: { slug: "contact" },
  });

  const metadata: Metadata = {
    title: page?.seoTitle || "Contact Us | Kazzona Marketing",
    description: page?.seoDesc || "Get in touch with Kazzona Marketing. Book a free 30-minute digital strategy session to scale your business.",
  };

  if (page?.canonicalUrl) {
    metadata.alternates = {
      canonical: page.canonicalUrl,
    };
  } else {
    metadata.alternates = {
      canonical: "https://kazzonamarketing.com/contact",
    };
  }

  metadata.openGraph = {
    title: metadata.title as string,
    description: metadata.description as string,
    url: "https://kazzonamarketing.com/contact",
    images: [{ url: "/icon.svg", width: 1200, height: 630 }],
  };

  metadata.twitter = {
    card: "summary_large_image" as const,
    title: metadata.title as string,
    description: metadata.description as string,
    images: ["/icon.svg"],
  };

  return metadata;
}

export default async function ContactPage() {
  const page = await prisma.page.findUnique({
    where: { slug: "contact" },
  });

  return (
    <>
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
      <ContactClient />
    </>
  );
}
