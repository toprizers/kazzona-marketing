import { prisma } from "@/lib/db";
import Link from "next/link";
import { format } from "date-fns";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

export const dynamic = "force-dynamic";

export default async function BlogPage({ searchParams }: { searchParams: Promise<{ page?: string }> }) {
  const resolvedParams = await searchParams;
  const page = Math.max(1, parseInt(resolvedParams.page || "1", 10));
  const limit = 12;
  const skip = (page - 1) * limit;

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
      skip,
      take: limit,
    }),
    prisma.post.count({ where: whereCondition })
  ]);

  const totalPages = Math.ceil(totalCount / limit);

  const gradientClasses = [
    "from-orange-500/10 via-purple-500/5 to-pink-500/5 border-orange-500/20",
    "from-emerald-500/10 via-teal-500/5 to-cyan-500/5 border-emerald-500/20",
    "from-blue-500/10 via-orange-500/5 to-violet-500/5 border-blue-500/20",
    "from-amber-500/10 via-orange-500/5 to-red-500/5 border-amber-500/20",
  ];

  return (
    <div className="container mx-auto px-6 py-24 max-w-7xl">
      <div className="mb-16">
        <h1 className="font-heading text-5xl font-bold mb-6 text-foreground">
          Growth <span className="text-primary">Insights</span>
        </h1>
        <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl">
          Actionable strategies on SEO, automation, and performance marketing from our experts.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.length === 0 ? (
          <div className="col-span-full py-12 text-muted-foreground text-center bg-card border border-border/40 rounded-2xl p-8">
            No insights published yet. Check back soon.
          </div>
        ) : (
          posts.map((post, idx) => {
            const gradient = gradientClasses[idx % gradientClasses.length];

            return (
              <Link key={post.id} href={`/blog/${post.slug}`} className="group">
                <div className="flex flex-col h-full gap-4 border border-border/40 rounded-xl overflow-hidden hover:border-primary/50 transition-colors bg-card shadow-sm hover:shadow-md">
                  {/* Blog title placeholder */}
                  <div className={`w-full aspect-[16/10] bg-gradient-to-br ${gradient} border-b border-border/40 flex flex-col items-center justify-center p-6 text-center relative group-hover:brightness-110 transition-all duration-300`}>
                    <div className="absolute top-4 left-4 bg-primary/10 text-primary border border-primary/20 text-[10px] font-bold tracking-wider uppercase px-2.5 py-1 rounded-full">
                      {post.primaryKeyword || "SEO Strategy"}
                    </div>
                    <h3 className="font-heading font-bold text-lg sm:text-xl text-primary/25 group-hover:text-primary/40 transition-colors line-clamp-3 leading-snug px-2">
                      {post.title}
                    </h3>
                  </div>
                  
                  <div className="p-6 pt-4 flex flex-col flex-grow">
                    <div className="flex items-center justify-between mb-3">
                      <p className="text-xs text-primary font-bold tracking-wider uppercase">
                        {post.primaryKeyword ? "Topic Focus" : "SEO Strategy"}
                      </p>
                      <p className="text-xs text-muted-foreground">{format(new Date(post.createdAt), "MMM d, yyyy")}</p>
                    </div>
                    <h3 className="font-heading text-xl font-bold mb-3 group-hover:text-primary transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    {post.seoDesc && (
                      <p className="text-muted-foreground text-sm line-clamp-2 mb-4">
                        {post.seoDesc}
                      </p>
                    )}
                    <div className="mt-auto flex items-center text-sm font-semibold text-primary">
                      Read Article <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </Link>
            );
          })
        )}
      </div>

      {/* Pagination Controls */}
      {totalPages > 1 && (
        <div className="flex items-center justify-center gap-2 mt-16 pt-8 border-t border-border/40">
          {page > 1 ? (
            <Link 
              href={`/blog?page=${page - 1}`}
              className="flex items-center justify-center w-10 h-10 rounded-lg border border-border/40 hover:border-primary/50 text-muted-foreground hover:text-primary bg-card/50 transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </Link>
          ) : (
            <div className="flex items-center justify-center w-10 h-10 rounded-lg border border-border/20 text-muted-foreground/30 bg-card/25 cursor-not-allowed">
              <ChevronLeft className="w-5 h-5" />
            </div>
          )}

          {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
            <Link
              key={p}
              href={`/blog?page=${p}`}
              className={`flex items-center justify-center w-10 h-10 rounded-lg border transition-all ${
                p === page
                  ? "bg-primary border-primary text-primary-foreground font-bold"
                  : "border-border/40 hover:border-primary/50 text-muted-foreground hover:text-primary bg-card/50"
              }`}
            >
              {p}
            </Link>
          ))}

          {page < totalPages ? (
            <Link 
              href={`/blog?page=${page + 1}`}
              className="flex items-center justify-center w-10 h-10 rounded-lg border border-border/40 hover:border-primary/50 text-muted-foreground hover:text-primary bg-card/50 transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </Link>
          ) : (
            <div className="flex items-center justify-center w-10 h-10 rounded-lg border border-border/20 text-muted-foreground/30 bg-card/25 cursor-not-allowed">
              <ChevronRight className="w-5 h-5" />
            </div>
          )}
        </div>
      )}
    </div>
  );
}
