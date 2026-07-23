import Link from "next/link";
import { ArrowRight, ArrowUpRight, TrendingUp, IndianRupee, BarChart3, Users, ExternalLink } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";

import { prisma } from "@/lib/db";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const page = await prisma.page.findUnique({
    where: { slug: "case-studies" },
  });

  const metadata: Metadata = {
    title: page?.seoTitle || "Case Studies & Success Stories | Kazzona Marketing",
    description: page?.seoDesc || "Read our case studies of how we helped businesses in Delhi NCR and beyond scale their revenue through performance marketing.",
  };

  if (page?.canonicalUrl) {
    metadata.alternates = {
      canonical: page.canonicalUrl,
    };
  } else {
    metadata.alternates = {
      canonical: "https://kazzonamarketing.com/case-studies",
    };
  }

  metadata.openGraph = {
    title: metadata.title as string,
    description: metadata.description as string,
    url: "https://kazzonamarketing.com/case-studies",
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

const caseStudies = [
  {
    brand: "FreshKart",
    industry: "D2C E-Commerce",
    logo: "🛒",
    challenge: "FreshKart was spending ₹8L/month on Google Ads with a 1.2x ROAS. Their organic traffic was negligible, and customer acquisition costs were unsustainable for their fresh grocery delivery model in Delhi-NCR.",
    solution: "We implemented a full-funnel strategy: Technical SEO overhaul, 50+ location pages targeting 'grocery delivery in [city]', Google Shopping Ads optimization, and a cart abandonment email flow.",
    results: [
      { metric: "312%", label: "Organic Traffic Growth" },
      { metric: "₹2.1Cr", label: "Monthly Revenue" },
      { metric: "3.8x", label: "Google Ads ROAS" },
      { metric: "42%", label: "Reduction in CAC" },
    ],
    services: ["SEO", "Google Ads", "Email Marketing"],
    color: "from-emerald-500 to-teal-600",
  },
  {
    brand: "CloudMinds",
    industry: "B2B SaaS",
    logo: "☁️",
    challenge: "CloudMinds had a great product but zero inbound pipeline. Their entire sales process relied on cold outreach, and their website converted at just 0.3%.",
    solution: "We rebuilt their entire website on Next.js with CRO-optimized landing pages, launched LinkedIn Ads targeting CIOs and CTOs, and created a thought-leadership blog strategy targeting enterprise keywords.",
    results: [
      { metric: "₹4.2Cr", label: "Pipeline Generated" },
      { metric: "2.8%", label: "Website Conversion Rate" },
      { metric: "156", label: "Qualified Leads/Month" },
      { metric: "₹1,200", label: "Cost Per Lead" },
    ],
    services: ["Web Development", "LinkedIn Ads", "SEO"],
    color: "from-blue-500 to-orange-600",
  },
  {
    brand: "StyleHive",
    industry: "Fashion Retail",
    logo: "👗",
    challenge: "StyleHive was a Tier-2 fashion brand struggling to compete with Myntra and Ajio. Their D2C website had low traffic and their Meta Ads were burning cash with no returns.",
    solution: "Complete brand identity redesign, Shopify store optimization, Meta Ads restructure with UGC creatives, influencer seeding strategy, and WhatsApp marketing integration.",
    results: [
      { metric: "2.8x", label: "Meta Ads ROAS" },
      { metric: "₹18L", label: "Monthly Ad Revenue" },
      { metric: "45%", label: "Repeat Purchase Rate" },
      { metric: "12K+", label: "Instagram Followers" },
    ],
    services: ["Advertisement", "Graphic Design", "Email Marketing"],
    color: "from-rose-500 to-pink-600",
  },
  {
    brand: "MediCare+",
    industry: "Healthcare",
    logo: "🏥",
    challenge: "MediCare+ was a chain of diagnostic centers in Mumbai with no digital presence. All patient acquisition came through offline referrals and newspaper ads.",
    solution: "Built a SEO-optimized website with online booking, Google My Business optimization for all 12 locations, Google Ads for high-intent searches like 'blood test near me', and review management strategy.",
    results: [
      { metric: "500%", label: "Organic Traffic Growth" },
      { metric: "2,400+", label: "Monthly Online Bookings" },
      { metric: "#1", label: "Google Maps Ranking" },
      { metric: "4.8★", label: "Average Google Rating" },
    ],
    services: ["SEO", "Google Ads", "Web Development"],
    color: "from-cyan-500 to-blue-600",
  },
  {
    brand: "FinStack",
    industry: "FinTech",
    logo: "💰",
    challenge: "FinStack needed to acquire CA firms and accountants as users for their GST filing SaaS. Their Google Ads CPA was ₹3,500 — unsustainable at a ₹999/month subscription price.",
    solution: "SEO-driven content strategy targeting 'GST filing software', 'best accounting software India' etc. Programmatic SEO for 'GST return filing for [industry]' pages. LinkedIn thought-leadership ads.",
    results: [
      { metric: "₹450", label: "Reduced CPA" },
      { metric: "3,200+", label: "Monthly Sign-ups" },
      { metric: "87%", label: "Traffic from Organic" },
      { metric: "₹1.8Cr", label: "Annual ARR Growth" },
    ],
    services: ["SEO", "Content Marketing", "LinkedIn Ads"],
    color: "from-amber-500 to-orange-600",
  },
  {
    brand: "UrbanPulse",
    industry: "Real Estate",
    logo: "🏢",
    challenge: "UrbanPulse was a Gurugram-based real estate developer launching a new residential project. They needed 500+ qualified leads in 3 months before the project launch.",
    solution: "Landing page with virtual tour integration, Google Ads targeting 'flats in Gurugram', Meta lead gen forms with WhatsApp integration, and email nurture sequences for warm leads.",
    results: [
      { metric: "840+", label: "Qualified Leads" },
      { metric: "₹12Cr", label: "Revenue from Bookings" },
      { metric: "₹1,800", label: "Cost Per Lead" },
      { metric: "68%", label: "Lead-to-Visit Rate" },
    ],
    services: ["Advertisement", "Web Development", "Email Marketing"],
    color: "from-purple-500 to-violet-600",
  },
];

export default async function CaseStudiesPage() {
  const page = await prisma.page.findUnique({
    where: { slug: "case-studies" },
  });

  return (
    <div className="flex flex-col">
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
      {/* SECTION 1: Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(6,182,212,0.15),transparent)] -z-10" />
        <div className="container mx-auto px-6 max-w-5xl text-center animate-fade-down">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-sm font-semibold text-accent mb-6">
            <TrendingUp className="w-4 h-4" /> Verified Results
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
            Digital Marketing Case Studies —{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Real Results. Real Brands.</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We don&apos;t believe in vanity metrics. Here are detailed case studies showing exactly how we helped companies grow their revenue through digital marketing.
          </p>
        </div>
      </section>

      {/* SECTION 2: Summary Stats */}
      <section className="py-12 border-y border-border/50 bg-card/30">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center animate-scale-up">
            {[
              { icon: Users, number: "200+", label: "Clients Served" },
              { icon: IndianRupee, number: "₹100Cr+", label: "Revenue Generated" },
              { icon: TrendingUp, number: "4.5x", label: "Average ROAS" },
              { icon: BarChart3, number: "300%", label: "Avg Traffic Growth" },
            ].map((s, i) => (
              <div key={i} className="flex flex-col items-center gap-2">
                <s.icon className="w-6 h-6 text-primary" />
                <div className="text-2xl md:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">{s.number}</div>
                <div className="text-xs text-muted-foreground">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3-8: Case Studies */}
      {caseStudies.map((cs, i) => (
        <section key={i} className={`py-20 ${i % 2 === 0 ? "" : "bg-card/30 border-y border-border/50"}`}>
          <div className="container mx-auto px-6 max-w-7xl">
            <div className={`grid lg:grid-cols-2 gap-12 items-start ${i % 2 === 0 ? "animate-slide-left" : "animate-slide-right"}`} style={{ animationDelay: `${i * 0.1}s` }}>
              <div className={i % 2 !== 0 ? "lg:order-2" : ""}>
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-16 h-16 rounded-3xl bg-gradient-to-br ${cs.color} flex items-center justify-center text-3xl`}>
                    {cs.logo}
                  </div>
                  <div>
                    <h2 className="text-2xl md:text-3xl font-bold">{cs.brand}</h2>
                    <span className="text-sm text-muted-foreground">{cs.industry}</span>
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-sm font-bold text-destructive uppercase tracking-wider mb-2">The Challenge</h3>
                    <p className="text-muted-foreground leading-relaxed">{cs.challenge}</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-accent uppercase tracking-wider mb-2">Our Solution</h3>
                    <p className="text-muted-foreground leading-relaxed">{cs.solution}</p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {cs.services.map(s => (
                      <Link key={s} href={`/services/${s.toLowerCase().replace(/\s+/g, '-')}`} className="text-xs bg-primary/10 text-primary px-3 py-1.5 rounded-full font-bold hover:bg-primary/20 transition-colors">
                        {s}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              <div className={i % 2 !== 0 ? "lg:order-1" : ""}>
                <div className="grid grid-cols-2 gap-4">
                  {cs.results.map((r, j) => (
                    <div key={j} className="p-6 rounded-3xl bg-card border border-border/50 text-center hover:border-primary/30 transition-colors">
                      <div className={`text-3xl md:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r ${cs.color}`}>{r.metric}</div>
                      <div className="text-xs text-muted-foreground mt-2">{r.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Final CTA */}
      <section className="py-24">
        <div className="container mx-auto px-6 max-w-5xl text-center">
          <div className="p-16 rounded-[3rem] bg-gradient-to-r from-primary via-orange-500 to-accent text-white relative overflow-hidden shadow-2xl animate-fade-up">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 relative z-10">Want Results Like These?</h2>
            <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto relative z-10">
              Every case study started with a single conversation. Let&apos;s discuss how we can transform your business.
            </p>
            <div className="relative z-10">
              <Link href="/contact" className={buttonVariants({ variant: "secondary", size: "lg", className: "rounded-full font-bold px-10 text-lg" })}>
                Get Your Free Strategy Session <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
