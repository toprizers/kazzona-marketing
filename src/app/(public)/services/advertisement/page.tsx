import Link from "next/link";
import { ArrowRight, CheckCircle2, Megaphone, Target, MousePointerClick, BarChart3, HelpCircle, Activity, IndianRupee, Eye, Search } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import PricingClient from "@/app/(public)/pricing/PricingClient";
import { getPricingConfig } from "@/app/actions/pricing";

export const metadata = {
  title: "Performance Advertising in India | Kazzona Marketing",
  description: "Stop burning ad spend. We manage ₹2Cr+ in monthly ad spend across Google, Meta, and LinkedIn for Indian brands with a focus on pure ROAS.",
};

export default async function AdvertisementPage() {
  const config = await getPricingConfig();
  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. Hero Section - Data Dashboard Style */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-background">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-500/10 via-background to-background -z-10" />
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 text-amber-500 text-sm font-bold mb-6 border border-amber-500/20">
              <Megaphone className="w-4 h-4" /> Performance Media Buying
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6 leading-tight">
              Turn Ad Spend Into <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500">Measurable Profit.</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-10 leading-relaxed">
              We don't care about "impressions" or "likes". We engineer Google and Meta ad campaigns that deliver aggressive ROAS for Indian D2C and B2B brands.
            </p>
            <Link href="/contact" className={buttonVariants({ size: "lg", className: "rounded-full px-8 text-lg shadow-lg shadow-amber-500/20 bg-amber-600 hover:bg-amber-700 text-white" })}>
              Audit My Current Campaigns <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>

          {/* Abstract Dashboard Graphic */}
          <div className="relative mx-auto max-w-5xl bg-card border border-border/50 rounded-3xl p-6 shadow-2xl flex flex-col md:flex-row gap-6">
             <div className="flex-1 space-y-6">
                <div className="flex justify-between items-center pb-4 border-b border-border/50">
                   <div className="font-bold text-lg">Campaign Performance</div>
                   <div className="text-xs bg-amber-500/20 text-amber-500 px-3 py-1 rounded-full font-bold">Last 30 Days</div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                   <div className="bg-background rounded-2xl p-4 border border-border/50">
                      <div className="text-sm text-muted-foreground mb-1">Ad Spend</div>
                      <div className="text-2xl font-black">₹4,50,000</div>
                   </div>
                   <div className="bg-amber-500/10 rounded-2xl p-4 border border-amber-500/20">
                      <div className="text-sm text-amber-500 font-bold mb-1">Revenue Generated</div>
                      <div className="text-2xl font-black text-amber-500">₹21,60,000</div>
                   </div>
                </div>
                <div className="h-32 bg-gradient-to-t from-amber-500/20 to-transparent border-b-2 border-amber-500 relative flex items-end">
                   {/* Abstract chart line */}
                   <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 100">
                      <path d="M0,100 L20,80 L40,85 L60,40 L80,50 L100,10" fill="none" stroke="currentColor" strokeWidth="2" className="text-amber-500" />
                   </svg>
                </div>
             </div>
             <div className="w-full md:w-1/3 bg-background rounded-2xl p-6 border border-border/50 flex flex-col justify-center">
                <div className="text-center mb-6">
                   <div className="text-5xl font-black text-amber-500 mb-2">4.8x</div>
                   <div className="font-bold text-foreground">Return on Ad Spend</div>
                </div>
                <div className="space-y-3">
                   <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Google Ads ROAS</span>
                      <span className="font-bold">5.2x</span>
                   </div>
                   <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Meta Ads ROAS</span>
                      <span className="font-bold">4.1x</span>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* 2. Problem Statement */}
      <section className="py-24 bg-card/30 border-y border-border/50">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold mb-6">Stop Burning Money on Ineffective Targeting</h2>
              <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                Most agencies set up basic campaigns and let them run on autopilot. In the highly competitive Indian market, this strategy guarantees you will lose money to rising CPMs and CPCs.
              </p>
              <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                We act as your fractional performance marketing team. We dive deep into attribution, creative testing, and audience segmentation to squeeze every drop of profit from your budget.
              </p>
              <ul className="space-y-4">
                {[
                  "Eliminate wasted spend on unqualified clicks",
                  "A/B test creatives relentlessly to lower CPA",
                  "Scale budgets only when profitability is proven"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-amber-500 shrink-0" />
                    <span className="font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-4">
               <div className="bg-background p-8 rounded-3xl border border-border/50 text-center">
                  <div className="text-4xl font-black text-foreground mb-2">65%</div>
                  <div className="text-sm text-muted-foreground">Average reduction in Cost Per Acquisition (CPA)</div>
               </div>
               <div className="bg-amber-500/10 p-8 rounded-3xl border border-amber-500/20 text-center flex flex-col justify-center">
                  <div className="text-4xl font-black text-amber-500 mb-2">₹2Cr+</div>
                  <div className="text-sm font-bold text-amber-600">Monthly Ad Spend Managed</div>
               </div>
               <div className="col-span-2 bg-background p-8 rounded-3xl border border-border/50 flex items-center justify-between">
                  <div className="font-bold text-lg">Focus on Profit, Not Just Revenue.</div>
                  <Target className="w-8 h-8 text-amber-500" />
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Platform Expertise */}
      <section className="py-24">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-16 max-w-3xl mx-auto">
             <h2 className="text-3xl md:text-5xl font-bold mb-6">Omnichannel Dominance</h2>
             <p className="text-lg text-muted-foreground">We deploy your budget across the platforms where your specific target audience is most likely to convert.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Google Ads (PPC)", desc: "Search, Shopping, and Performance Max campaigns targeting high-intent users actively searching for your solution.", icon: Search, highlight: "Best for immediate high-intent leads" },
              { title: "Meta Ads (FB/IG)", desc: "Hyper-targeted visual campaigns. We handle everything from UGC creative direction to complex retargeting funnels.", icon: Eye, highlight: "Best for D2C scaling & brand awareness" },
              { title: "LinkedIn Ads", desc: "Precision B2B targeting by job title, company size, and industry. Perfect for high-ticket SaaS and enterprise services.", icon: Target, highlight: "Best for premium B2B lead gen" }
            ].map((feature, i) => (
              <div key={i} className="flex flex-col bg-card border border-border/50 rounded-[2rem] overflow-hidden hover:border-amber-500/50 transition-colors">
                 <div className="p-8 flex-1">
                    <feature.icon className="w-10 h-10 text-amber-500 mb-6" />
                    <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{feature.desc}</p>
                 </div>
                 <div className="bg-amber-500/10 px-8 py-4 text-xs font-bold text-amber-600 border-t border-amber-500/10">
                    {feature.highlight}
                 </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Execution Process - Flow chart style */}
      <section className="py-24 bg-card/30 border-y border-border/50">
        <div className="container mx-auto px-6 max-w-6xl">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">The Profitability Framework</h2>
          <div className="grid md:grid-cols-4 gap-4">
            {[
              { step: "01. Research", desc: "Audience mapping and competitor ad spy analysis." },
              { step: "02. Creative", desc: "Designing ad copy, graphics, and video scripts." },
              { step: "03. Launch", desc: "Setting up tracking pixels and launching initial A/B tests." },
              { step: "04. Scale", desc: "Killing losing ads and aggressively scaling winners." }
            ].map((process, i) => (
              <div key={i} className="bg-background p-6 rounded-2xl border border-border/50 relative">
                 {i < 3 && <div className="hidden md:block absolute top-1/2 -right-4 w-4 h-0.5 bg-border z-0" />}
                 <div className="relative z-10">
                    <h3 className="font-bold text-amber-500 mb-2">{process.step}</h3>
                    <p className="text-sm text-muted-foreground">{process.desc}</p>
                 </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Indian Market Case Study */}
      <section className="py-24">
        <div className="container mx-auto px-6 max-w-6xl">
           <div className="bg-gradient-to-br from-amber-900/40 to-background rounded-[3rem] border border-amber-500/20 p-8 md:p-16 flex flex-col md:flex-row items-center gap-12">
              <div className="w-full md:w-1/3 space-y-4">
                 <div className="bg-card/50 p-6 rounded-2xl text-center border border-amber-500/10">
                    <div className="text-3xl font-black text-amber-500 mb-1">3.8x</div>
                    <div className="text-xs text-muted-foreground">ROAS Achieved</div>
                 </div>
                 <div className="bg-card/50 p-6 rounded-2xl text-center border border-amber-500/10">
                    <div className="text-3xl font-black text-amber-500 mb-1">42%</div>
                    <div className="text-xs text-muted-foreground">Drop in CAC</div>
                 </div>
              </div>
              <div className="flex-1 space-y-6">
                 <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 text-amber-500 text-xs font-bold uppercase tracking-wider">D2C Success Story</div>
                 <h2 className="text-3xl md:text-4xl font-bold leading-tight">Scaling an Indian D2C Brand from ₹8L to ₹18L Monthly Spend Profitably</h2>
                 <p className="text-lg text-muted-foreground">By restructuring their Meta Ads account and implementing a robust UGC video strategy, we stabilized their ROAS while doubling their ad spend.</p>
                 <Link href="/case-studies" className="inline-flex items-center font-bold text-amber-500 hover:text-amber-400">View D2C Case Study <ArrowRight className="ml-2 w-4 h-4" /></Link>
              </div>
           </div>
        </div>
      </section>

      {/* 6. Management Pricing - Dynamic */}
      <section className="bg-card/30 border-y border-border/50 pt-24 pb-12">
         <div className="container mx-auto px-6 max-w-7xl">
            <div className="text-center mb-12 max-w-3xl mx-auto">
               <h2 className="text-3xl md:text-5xl font-bold mb-6">Ad Management Pricing</h2>
               <div className="bg-amber-500/10 border border-amber-500/20 rounded-2xl p-6 mb-6">
                  <p className="text-amber-700 font-semibold text-lg">
                     "Ad budget and management fee are separate — your entire budget goes directly to ads, with zero cuts in between."
                  </p>
               </div>
            </div>
         </div>
        <PricingClient config={config} filterSectionId="ads" hideHeader />
      </section>

      {/* 7. FAQ Section */}
      <section className="py-24">
        <div className="container mx-auto px-6 max-w-3xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Ad Campaign FAQs</h2>
          </div>
          <div className="space-y-4">
            {[
              { q: "How long until we see leads?", a: "Unlike SEO, Paid Ads generate results immediately. Once we launch (typically within 7 days of onboarding), you can expect to see traffic and initial leads on day one." },
              { q: "Do you guarantee ROAS?", a: "While we have a strong track record, we cannot legally guarantee a specific ROAS as it depends on product-market fit, pricing, and external market factors. We do guarantee ruthless optimization towards profitability." },
              { q: "Who creates the ad graphics?", a: "For our Scale and Enterprise tiers, our in-house design team creates all static graphics. For video, we provide scripts and direction, but you will need to provide the raw footage/UGC." }
            ].map((faq, i) => (
              <div key={i} className="p-6 rounded-2xl bg-card border border-border/50 hover:border-amber-500/30 transition-colors">
                <h4 className="flex items-start gap-3 font-bold text-lg mb-3">
                  <HelpCircle className="w-6 h-6 text-amber-500 shrink-0" /> 
                  <span>{faq.q}</span>
                </h4>
                <p className="text-muted-foreground pl-9 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Final CTA */}
      <section className="py-24">
        <div className="container mx-auto px-6 max-w-5xl text-center">
          <div className="p-12 md:p-20 rounded-[3rem] bg-gradient-to-r from-amber-600 to-orange-600 relative overflow-hidden text-white shadow-2xl">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 relative z-10 max-w-2xl mx-auto">Ready to Scale Your Revenue?</h2>
            <p className="text-amber-100 text-lg mb-10 max-w-xl mx-auto relative z-10">
              Stop guessing with your ad budget. Let our media buyers craft a campaign that brings in high-quality, profitable leads.
            </p>
            <div className="relative z-10">
              <Link href="/contact" className={buttonVariants({ variant: "secondary", size: "lg", className: "rounded-full text-amber-700 font-bold px-10 text-lg shadow-xl" })}>
                Start Your Campaign
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
