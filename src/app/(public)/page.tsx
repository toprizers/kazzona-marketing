import HomeClient from "./HomeClient";
import { prisma } from "@/lib/db";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const page = await prisma.page.findUnique({
    where: { slug: "home" },
  });

  const metadata: Metadata = {
    title: page?.seoTitle || "Kazzona Marketing | Premium Digital Marketing Agency",
    description: page?.seoDesc || "Enterprise growth agency focused on lead generation, SEO, branding, and automation.",
  };

  if (page?.canonicalUrl) {
    metadata.alternates = {
      canonical: page.canonicalUrl,
    };
  } else {
    metadata.alternates = {
      canonical: "https://kazzonamarketing.com",
    };
  }

  return metadata;
}

export default async function HomePage() {
  const page = await prisma.page.findUnique({
    where: { slug: "home" },
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
      <HomeClient />
    </>
  );
}
