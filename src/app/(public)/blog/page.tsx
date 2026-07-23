import { prisma } from "@/lib/db";
import BlogListClient from "./BlogListClient";

export const dynamic = "force-dynamic";

export default async function BlogPage() {
  const limit = 12;

  const whereCondition = {
    published: true,
    OR: [
      { publishAt: null },
      { publishAt: { lte: new Date() } }
    ]
  };

  const [posts, totalCount] = await Promise.all([
    prisma.post.findMany({
      where: whereCondition,
      orderBy: { createdAt: "desc" },
      skip: 0,
      take: limit,
    }),
    prisma.post.count({ where: whereCondition })
  ]);

  const serializedPosts = posts.map(p => ({
    id: p.id,
    slug: p.slug,
    title: p.title,
    primaryKeyword: p.primaryKeyword,
    createdAt: p.createdAt.toISOString(),
    seoDesc: p.seoDesc,
  }));

  return (
    <div className="container mx-auto px-6 py-24 max-w-7xl">
      <div className="mb-16 animate-fade-down">
        <h1 className="font-heading text-5xl font-bold mb-6 text-foreground">
          Growth <span className="text-primary">Insights</span>
        </h1>
        <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl">
          Actionable strategies on SEO, automation, and performance marketing from our experts.
        </p>
      </div>
      
      <BlogListClient initialPosts={serializedPosts} totalCount={totalCount} />
    </div>
  );
}
