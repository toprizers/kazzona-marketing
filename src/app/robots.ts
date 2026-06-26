import { MetadataRoute } from "next";
import { prisma } from "@/lib/db";

export default async function robots(): Promise<MetadataRoute.Robots> {
  const baseUrl = "https://kazzonamarketing.com";

  try {
    const settings = await prisma.siteSettings.findUnique({
      where: { id: "global" },
    });

    if (settings?.robotsTxt) {
      // If there is custom robotsTxt content, let's parse rules or return them.
      // Next.js standard robots route builder expects structured config.
      // We can also serve a raw text response or match the structure.
      // For Next.js robots.ts MetadataRoute, we can parse or use standard settings:
      const lines = settings.robotsTxt.split("\n");
      const rules: any = {
        userAgent: "*",
        allow: "/",
        disallow: ["/dashboard/", "/api/"],
      };

      // Just to be safe, if we return standard config:
      return {
        rules: {
          userAgent: "*",
          allow: "/",
          disallow: ["/dashboard/", "/api/"],
        },
        sitemap: `${baseUrl}/sitemap.xml`,
      };
    }
  } catch (err) {
    console.error("Error generating robots dynamic config:", err);
  }

  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/dashboard/", "/api/"],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
