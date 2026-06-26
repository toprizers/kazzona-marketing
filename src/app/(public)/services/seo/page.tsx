import Link from "next/link";
import { ArrowRight, CheckCircle2, TrendingUp, Search, Target, Activity, Zap, HelpCircle, MapPin, Globe2, IndianRupee } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import PricingClient from "@/app/(public)/pricing/PricingClient";
import { getPricingConfig } from "@/app/actions/pricing";

export const metadata = {
  title: "Enterprise SEO Services in India | Kazzona Marketing",
  description: "Rank #1 on Google India. We help Indian startups and enterprises dominate organic search, drive high-intent traffic, and scale revenue.",
};

export default async function SEOPage() {
  const config = await getPricingConfig();
  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. Hero Section - Unique Left-Aligned Text with Right Floating Elements */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-background">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-emerald-500/15 via-background to-background -z-10" />
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 text-emerald-500 text-sm font-bold mb-6 border border-emerald-500/20">
                <Globe2 className="w-4 h-4" /> Trusted by 100+ Indian Brands
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6 leading-tight">
                Stop Paying For Clicks. <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-500">Own The Search.</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed max-w-lg">
                We engineer data-driven SEO campaigns that put your business in front of high-intent Indian buyers. Turn Google into your most profitable acquisition channel.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact" className={buttonVariants({ size: "lg", className: "rounded-full px-8 text-lg shadow-lg shadow-emerald-500/20 bg-emerald-600 hover:bg-emerald-700 text-white" })}>
                  Get Your Free SEO Audit <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <div className="flex items-center gap-2 text-sm text-muted-foreground font-medium px-4">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500" /> ₹25,000 Value
                </div>
              </div>
            </div>
            {/* Abstract visual representation instead of a static image */}
            <div className="hidden lg:block relative h-[500px] w-full rounded-3xl bg-card border border-border/50 p-8 overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-grid-white/5 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0))]" />
              <div className="relative z-10 flex flex-col h-full gap-4">
                 <div className="bg-background rounded-xl p-4 border border-border/50 flex items-center gap-4 animate-pulse">
                    <div className="w-10 h-10 rounded-full bg-emerald-500/20" />
                    <div className="flex-1 space-y-2">
                      <div className="h-2 bg-emerald-500/40 rounded w-1/3" />
                      <div className="h-2 bg-muted rounded w-1/2" />
                    </div>
                 </div>
                 <div className="flex-1 bg-background rounded-xl border border-border/50 p-6 flex items-end gap-2">
                    {[40, 55, 45, 70, 60, 90, 85, 100].map((h, i) => (
                      <div key={i} className="flex-1 bg-emerald-500/20 hover:bg-emerald-500 transition-colors rounded-t-sm" style={{ height: `${h}%` }} />
                    ))}
                 </div>
                 <div className="bg-emerald-500/10 text-emerald-500 font-bold p-4 rounded-xl border border-emerald-500/20 text-center">
                    #1 Ranking Achieved
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Indian Market Context Section - Why SEO in India? */}
      <section className="py-20 bg-secondary/20 border-y border-border/50">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-16 max-w-3xl mx-auto">
             <h2 className="text-3xl md:text-5xl font-bold mb-6">Winning the Indian Search Landscape</h2>
             <p className="text-lg text-muted-foreground">India has over 700 million active internet users. If your business isn't visible when they search, your competitors are taking your revenue.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
             {[
               { metric: "68%", desc: "of all online experiences begin with a search engine.", icon: Search },
               { metric: "5x", desc: "higher conversion rate than paid ads for B2B Indian companies.", icon: TrendingUp },
               { metric: "₹10Cr+", desc: "monthly pipeline generated via organic search for our clients.", icon: IndianRupee }
             ].map((item, i) => (
               <div key={i} className="bg-card p-8 rounded-[2rem] border border-border/50 text-center hover:border-emerald-500/50 transition-colors">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/10 flex items-center justify-center mx-auto mb-6">
                    <item.icon className="w-8 h-8 text-emerald-500" />
                  </div>
                  <div className="text-4xl font-black text-foreground mb-3">{item.metric}</div>
                  <p className="text-muted-foreground">{item.desc}</p>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* 3. Specialized Services Section - Grid Layout */}
      <section className="py-24">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-5xl font-bold mb-4">Comprehensive SEO Strategies</h2>
              <p className="text-muted-foreground text-lg">We don't just build links; we engineer holistic organic growth engines tailored for your industry.</p>
            </div>
            <Link href="/contact" className={buttonVariants({ variant: "outline", className: "rounded-full" })}>Discuss Your Needs</Link>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Technical SEO", desc: "Core Web Vitals, site speed, crawlability, and architecture optimization for Next.js, React, and Shopify.", icon: Activity },
              { title: "Content Strategy", desc: "Data-backed content that answers search intent and ranks for high-value transactional keywords.", icon: Target },
              { title: "Digital PR & Link Building", desc: "Earning high-authority backlinks from top Indian publications and niche-relevant websites.", icon: Zap },
              { title: "Local SEO", desc: "Dominating the 'near me' searches. Perfect for multi-location Indian retail and healthcare brands.", icon: MapPin }
            ].map((feature, i) => (
              <div key={i} className="p-8 rounded-3xl bg-card border border-border/50 hover:bg-emerald-500/5 transition-colors group">
                <feature.icon className="w-10 h-10 text-emerald-500 mb-6 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Execution Process - Vertical Timeline */}
      <section className="py-24 bg-card/30 border-y border-border/50">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">The 90-Day Sprint to Page 1</h2>
          <div className="space-y-12">
            {[
              { month: "Month 1", title: "Audit & Foundation", desc: "We fix technical errors, optimize existing content, and map out the keyword strategy based on competitor gaps." },
              { month: "Month 2", title: "Content Expansion", desc: "Publishing high-quality, intent-driven content and starting our targeted outreach for foundational backlinks." },
              { month: "Month 3", title: "Authority Scaling", desc: "Aggressive link building, digital PR, and conversion rate optimization (CRO) to turn new traffic into leads." }
            ].map((process, i) => (
              <div key={i} className="flex flex-col md:flex-row gap-8 items-start bg-background p-8 rounded-[2rem] border border-border/50">
                <div className="w-32 shrink-0">
                   <div className="text-sm font-bold text-emerald-500 uppercase tracking-widest">{process.month}</div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-3">{process.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{process.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Case Study Highlight (Specific to SEO) */}
      <section className="py-24">
        <div className="container mx-auto px-6 max-w-6xl">
           <div className="bg-gradient-to-br from-emerald-900/40 to-background rounded-[3rem] border border-emerald-500/20 p-8 md:p-16 flex flex-col md:flex-row items-center gap-12">
              <div className="flex-1 space-y-6">
                 <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-bold uppercase tracking-wider">Featured Success</div>
                 <h2 className="text-3xl md:text-4xl font-bold leading-tight">How We Scaled a Mumbai SaaS to ₹5Cr ARR via Organic Search</h2>
                 <p className="text-lg text-muted-foreground">By targeting long-tail, high-intent keywords and implementing programmatic SEO, we bypassed their VC-funded competitors entirely.</p>
                 <Link href="/case-studies" className="inline-flex items-center font-bold text-emerald-400 hover:text-emerald-300">Read Full Case Study <ArrowRight className="ml-2 w-4 h-4" /></Link>
              </div>
              <div className="w-full md:w-1/3 grid grid-cols-2 gap-4">
                 <div className="bg-card/50 p-6 rounded-2xl text-center border border-emerald-500/10">
                    <div className="text-3xl font-black text-emerald-500 mb-1">450%</div>
                    <div className="text-xs text-muted-foreground">Traffic Growth</div>
                 </div>
                 <div className="bg-card/50 p-6 rounded-2xl text-center border border-emerald-500/10">
                    <div className="text-3xl font-black text-emerald-500 mb-1">1,200+</div>
                    <div className="text-xs text-muted-foreground">New Leads/Mo</div>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* 6. Pricing Packages - Dynamic */}
      <section className="bg-card/30 border-y border-border/50 pt-24 pb-12">
         <div className="container mx-auto px-6 max-w-7xl">
            <div className="text-center mb-12 max-w-3xl mx-auto">
               <h2 className="text-3xl md:text-5xl font-bold mb-6">Investment Plans</h2>
               <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-2xl p-6 mb-6">
                  <p className="text-emerald-700 font-semibold text-lg">
                     "SEO is a long-term investment — results typically take 3 to 6 months to materialize. We provide detailed monthly reports so you can track your progress with full transparency."
                  </p>
               </div>
            </div>
         </div>
         <PricingClient config={config} filterSectionId="seo" hideHeader />
      </section>

      {/* 7. FAQ Section */}
      <section className="py-24">
        <div className="container mx-auto px-6 max-w-3xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Common Questions</h2>
            <p className="text-muted-foreground">Everything you need to know about our SEO process.</p>
          </div>
          <div className="space-y-4">
            {[
              { q: "How long does it take to see SEO results in India?", a: "Typically, noticeable traffic improvements take 3-6 months. However, technical fixes often result in quick wins within the first 45 days. SEO is a compounding investment." },
              { q: "Do you guarantee #1 rankings?", a: "No ethical agency guarantees #1 rankings due to Google's dynamic algorithm. We guarantee proven strategies, full transparency, and consistent execution that historically yields first-page results." },
              { q: "Are your backlinks safe from Google penalties?", a: "100%. We exclusively use white-hat, manual outreach link-building strategies. No PBNs, no spammy directories. We secure links from real Indian and international websites with actual traffic." },
              { q: "Do you provide content writing?", a: "Yes. Our National and Enterprise packages include content created by subject matter experts, optimized with advanced tools like SurferSEO to ensure topical authority." }
            ].map((faq, i) => (
              <div key={i} className="p-6 rounded-2xl bg-card border border-border/50 hover:border-emerald-500/30 transition-colors">
                <h4 className="flex items-start gap-3 font-bold text-lg mb-3">
                  <HelpCircle className="w-6 h-6 text-emerald-500 shrink-0" /> 
                  <span>{faq.q}</span>
                </h4>
                <p className="text-muted-foreground pl-9 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Final CTA - Solid Color Block */}
      <section className="py-24">
        <div className="container mx-auto px-6 max-w-5xl text-center">
          <div className="p-12 md:p-20 rounded-[3rem] bg-emerald-600 relative overflow-hidden text-white shadow-2xl">
            <div className="absolute top-0 right-0 p-8 opacity-10">
               <TrendingUp className="w-64 h-64" />
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 relative z-10 max-w-2xl mx-auto">Stop Leaving Money on the Table</h2>
            <p className="text-emerald-100 text-lg mb-10 max-w-xl mx-auto relative z-10">
              Your competitors are capturing your potential clients right now. Get a comprehensive SEO audit and find out exactly how to beat them.
            </p>
            <div className="relative z-10">
              <Link href="/contact" className={buttonVariants({ variant: "secondary", size: "lg", className: "rounded-full text-emerald-700 font-bold px-10 text-lg shadow-xl" })}>
                Claim Your Free Audit
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
