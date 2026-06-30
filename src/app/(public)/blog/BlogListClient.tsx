"use client";

import { useState } from "react";
import Link from "next/link";
import { format } from "date-fns";
import { ArrowRight, Loader2 } from "lucide-react";
import { getMoreBlogs } from "@/app/actions/blog";
import { Button } from "@/components/ui/button";

interface BlogPost {
  id: string;
  slug: string;
  title: string;
  primaryKeyword: string | null;
  createdAt: string;
  seoDesc: string | null;
}

const gradientClasses = [
  "from-orange-500/10 via-purple-500/5 to-pink-500/5 border-orange-500/20",
  "from-emerald-500/10 via-teal-500/5 to-cyan-500/5 border-emerald-500/20",
  "from-blue-500/10 via-orange-500/5 to-violet-500/5 border-blue-500/20",
  "from-amber-500/10 via-orange-500/5 to-red-500/5 border-amber-500/20",
];

export default function BlogListClient({ initialPosts, totalCount }: { initialPosts: BlogPost[], totalCount: number }) {
  const [posts, setPosts] = useState<BlogPost[]>(initialPosts);
  const [loading, setLoading] = useState(false);
  
  const hasMore = posts.length < totalCount;
  const limit = 12;

  const handleLoadMore = async () => {
    if (loading || !hasMore) return;
    setLoading(true);
    try {
      const morePosts = await getMoreBlogs(posts.length, limit);
      setPosts(prev => [...prev, ...morePosts]);
    } catch (err) {
      console.error("Failed to load more blogs:", err);
    }
    setLoading(false);
  };

  return (
    <div className="flex flex-col gap-12">
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

      {hasMore && (
        <div className="flex justify-center mt-8">
          <Button 
            onClick={handleLoadMore} 
            disabled={loading}
            size="lg"
            variant="outline"
            className="w-full sm:w-auto px-8 min-w-[200px]"
          >
            {loading ? (
              <><Loader2 className="w-4 h-4 mr-2 animate-spin" /> Loading...</>
            ) : (
              "Load More"
            )}
          </Button>
        </div>
      )}
    </div>
  );
}
