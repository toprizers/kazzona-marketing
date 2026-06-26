"use client";

import Link from "next/link";
import { motion, Variants, useScroll, useTransform } from "framer-motion";
import { ArrowRight, BarChart, Code, Megaphone, Mail, PenTool, CheckCircle2, Zap, Users, TrendingUp, Star, Shield, Clock, IndianRupee, ArrowUpRight } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { FloatingOrbs, TiltCard, CountUp, Magnetic } from "@/components/interactive";

const services = [
  {
    title: "SEO Optimization",
    description: "Rank #1 on Google India. We've helped 200+ Indian brands dominate organic search and generate ₹50Cr+ in organic revenue.",
    icon: BarChart,
    href: "/services/seo",
    gradient: "from-emerald-500 to-teal-600",
    bg: "bg-emerald-500/10",
    stat: "300% Avg Traffic Growth",
  },
  {
    title: "Website Development",
    description: "Lightning-fast, conversion-optimized websites built on React & Next.js. From D2C stores to enterprise platforms.",
    icon: Code,
    href: "/services/website-development",
    gradient: "from-blue-500 to-orange-600",
    bg: "bg-blue-500/10",
    stat: "< 1s Load Times",
  },
  {
    title: "Performance Advertising",
    description: "Google Ads, Meta Ads, and LinkedIn campaigns with guaranteed ROAS. We manage ₹2Cr+ in monthly ad spend.",
    icon: Megaphone,
    href: "/services/advertisement",
    gradient: "from-amber-500 to-orange-600",
    bg: "bg-amber-500/10",
    stat: "4.5x Avg ROAS",
  },
  {
    title: "Email Marketing",
    description: "Automated drip campaigns, cart recovery flows, and newsletter strategies that drive 30%+ of your total revenue.",
    icon: Mail,
    href: "/services/email-marketing",
    gradient: "from-purple-500 to-fuchsia-600",
    bg: "bg-purple-500/10",
    stat: "4400% ROI",
  },
  {
    title: "Graphic Designing",
    description: "Premium brand identities, UI/UX design, and ad creatives that make your business look like a Fortune 500 company.",
    icon: PenTool,
    href: "/services/graphic-designing",
    gradient: "from-rose-500 to-pink-600",
    bg: "bg-rose-500/10",
    stat: "100% Custom Design",
  },
];

const caseStudies = [
  { brand: "FreshKart", industry: "D2C E-Commerce", result: "312% increase in organic traffic in 6 months", service: "SEO + Ads" },
  { brand: "CloudMinds", industry: "SaaS B2B", result: "₹4.2Cr pipeline generated from LinkedIn Ads", service: "Advertisement" },
  { brand: "StyleHive", industry: "Fashion Retail", result: "2.8x ROAS with ₹18L/month ad spend", service: "PPC + Email" },
];

const testimonials = [
  { name: "Rajesh Sharma", role: "Founder, FreshKart", text: "Kazzona Marketing transformed our online presence completely. Our organic traffic went from 2,000 to 18,000 monthly visitors in just 6 months." },
  { name: "Priya Mehta", role: "CMO, CloudMinds", text: "Their LinkedIn ad strategy generated more qualified B2B leads in 3 months than our internal team did in an entire year." },
  { name: "Arjun Patel", role: "CEO, StyleHive", text: "The ROI we get from Kazzona is unbelievable. They manage our entire digital marketing stack and the results speak for themselves." },
];

const container: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } },
};

export default function HomeClient() {
  return (
    <div className="flex flex-col">
      {/* SECTION 1: Hero */}
      <section className="relative pt-32 pb-20 md:pt-44 md:pb-32 overflow-hidden grid-pattern">
        <FloatingOrbs />
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(252,74,26,0.15),transparent)]" />
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
        </div>
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}>
              <motion.div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-sm font-semibold text-primary mb-6 shimmer" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
                <Zap className="w-4 h-4 animate-float" /> Best Digital Marketing Agency in Delhi NCR
              </motion.div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6 leading-[1.1]">
                <motion.span initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="block">We Help Brands{" "}</motion.span>
                <motion.span initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-primary text-shimmer">
                  Scale Revenue
                </motion.span>{" "}
                <motion.span initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 }}>Digitally</motion.span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed max-w-xl">
                From Delhi startups to global enterprises — we've generated <strong className="text-foreground">₹100Cr+ in revenue</strong> for businesses through SEO, performance marketing, and premium web development.
              </p>
              <motion.div className="flex flex-col sm:flex-row gap-4" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.9 }}>
                <Magnetic strength={0.15}>
                  <Link href="/contact" className={buttonVariants({ size: "lg", className: "rounded-full px-8 text-lg font-bold shadow-xl shadow-primary/25 bg-gradient-to-r from-primary to-orange-500 hover:shadow-primary/40 hover:-translate-y-1 transition-all duration-300 glow-pulse" })}>
                    Get Free Strategy Call <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Magnetic>
                <Magnetic strength={0.15}>
                  <Link href="/case-studies" className={buttonVariants({ variant: "outline", size: "lg", className: "rounded-full px-8 text-lg font-bold hover:-translate-y-1 transition-all duration-300" })}>
                    View Case Studies
                  </Link>
                </Magnetic>
              </motion.div>
              <motion.div className="flex items-center gap-8 mt-10 pt-8 border-t border-border/50" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.1 }}>
                <div>
                  <CountUp target="200+" className="text-3xl font-black text-primary" />
                  <div className="text-sm text-muted-foreground">Clients Served</div>
                </div>
                <div>
                  <CountUp target="₹100Cr+" className="text-3xl font-black text-accent" />
                  <div className="text-sm text-muted-foreground">Revenue Generated</div>
                </div>
                <div>
                  <CountUp target="4.9/5" className="text-3xl font-black text-primary" />
                  <div className="text-sm text-muted-foreground">Google Rating</div>
                </div>
              </motion.div>
            </motion.div>

            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }} className="hidden lg:block">
              <TiltCard className="relative aspect-square rounded-[3rem] bg-gradient-to-br from-primary/10 via-card to-accent/10 border border-border/50 overflow-hidden p-8 gradient-border">
                <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5" />
                <div className="relative z-10 h-full flex flex-col gap-4">
                  <div className="flex gap-4">
                    <div className="flex-1 rounded-2xl bg-card/80 backdrop-blur border border-border/50 p-5">
                      <TrendingUp className="w-8 h-8 text-emerald-500 mb-3" />
                      <div className="text-2xl font-bold">+312%</div>
                      <div className="text-xs text-muted-foreground">Organic Traffic</div>
                    </div>
                    <div className="flex-1 rounded-2xl bg-card/80 backdrop-blur border border-border/50 p-5">
                      <IndianRupee className="w-8 h-8 text-amber-500 mb-3" />
                      <div className="text-2xl font-bold">₹4.2Cr</div>
                      <div className="text-xs text-muted-foreground">Pipeline Generated</div>
                    </div>
                  </div>
                  <div className="flex-1 rounded-2xl bg-card/80 backdrop-blur border border-border/50 p-5 flex flex-col justify-end">
                    <div className="flex items-end gap-2 h-24">
                      {[30, 45, 38, 55, 42, 68, 60, 78, 72, 90, 85, 95].map((h, i) => (
                        <motion.div key={i} className="flex-1 bg-gradient-to-t from-primary to-accent rounded-t-sm" initial={{ height: 0 }} animate={{ height: `${h}%` }} transition={{ duration: 1, delay: 0.8 + i * 0.08, ease: [0.22, 1, 0.36, 1] }} />
                      ))}
                    </div>
                    <div className="text-xs text-muted-foreground mt-3">Monthly Growth — Last 12 Months</div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-1 rounded-2xl bg-primary/20 border border-primary/30 p-4 flex items-center gap-3">
                      <Users className="w-6 h-6 text-primary" />
                      <div>
                        <div className="text-sm font-bold">1,240</div>
                        <div className="text-xs text-muted-foreground">Leads This Month</div>
                      </div>
                    </div>
                    <div className="flex-1 rounded-2xl bg-accent/20 border border-accent/30 p-4 flex items-center gap-3">
                      <BarChart className="w-6 h-6 text-accent" />
                      <div>
                        <div className="text-sm font-bold">4.5x</div>
                        <div className="text-xs text-muted-foreground">ROAS</div>
                      </div>
                    </div>
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 2: Trusted By */}
      <section className="py-12 border-y border-border/50 bg-card/30">
        <div className="container mx-auto px-6 max-w-6xl">
          <p className="text-center text-sm text-muted-foreground mb-6 uppercase tracking-wider font-medium">Trusted by 200+ brands across industries</p>
          <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-4 opacity-40">
            {["FreshKart", "CloudMinds", "StyleHive", "TechNova", "GreenLeaf", "UrbanPulse", "FinStack", "MediCare+"].map(brand => (
              <span key={brand} className="text-lg md:text-xl font-bold tracking-tight">{brand}</span>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: Services — Unique Cards */}
      <section className="py-24 relative">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-bold mb-4 uppercase tracking-wider">Our Expertise</div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">360° Digital Growth Solutions</h2>
            <p className="text-muted-foreground text-lg">Every service we offer is designed with one goal in mind: maximizing your revenue and dominating the digital landscape.</p>
          </div>

          <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-100px" }} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <motion.div key={service.title} variants={item} className={`group relative bg-card border border-border/50 rounded-3xl p-8 hover:border-primary/50 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-2 overflow-hidden gradient-border ${index >= 3 ? "lg:col-span-1" : ""}`}>
                <div className={`absolute top-0 right-0 w-40 h-40 bg-gradient-to-br ${service.gradient} opacity-5 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:opacity-10 transition-opacity`} />
                <div className={`w-14 h-14 rounded-2xl ${service.bg} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform`}>
                  <service.icon className="w-7 h-7" style={{ color: `var(--tw-gradient-from)` }} />
                </div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-muted-foreground mb-6 text-sm leading-relaxed">{service.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-primary bg-primary/10 px-3 py-1 rounded-full">{service.stat}</span>
                  <Link href={service.href} className="inline-flex items-center gap-1 text-sm font-semibold text-primary hover:gap-2 transition-all">
                    Learn More <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* SECTION 4: Why Choose Us — Indian Market Focus */}
      <section className="py-24 bg-card/30 border-y border-border/50">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold mb-4 uppercase tracking-wider">Why Kazzona</div>
              <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
                Your Premier <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Growth Partner</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                As a top digital marketing agency in Delhi, we understand the local and global digital ecosystem. Every strategy we build is designed specifically for your target audience to maximize conversions and ROI.
              </p>
              <div className="grid grid-cols-2 gap-6">
                {[
                  { icon: Shield, title: "Google Premier Partner", desc: "Certified expertise in Google Ads" },
                  { icon: Users, title: "50+ Member Team", desc: "Dedicated specialists in Noida" },
                  { icon: Clock, title: "Same-Day Reporting", desc: "Real-time dashboards for all clients" },
                  { icon: IndianRupee, title: "ROI-First Approach", desc: "Every rupee tracked, every campaign optimized" },
                ].map((f, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                      <f.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="font-bold text-sm">{f.title}</div>
                      <div className="text-xs text-muted-foreground">{f.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="grid grid-cols-2 gap-4">
              {[
                { number: "200+", label: "Clients Across India", color: "from-primary to-orange-600" },
                { number: "₹100Cr+", label: "Revenue Generated", color: "from-accent to-teal-500" },
                { number: "15+", label: "Industries Served", color: "from-amber-500 to-orange-600" },
                { number: "98%", label: "Client Retention Rate", color: "from-rose-500 to-pink-600" },
              ].map((stat, i) => (
                <motion.div key={i} className="p-6 rounded-3xl bg-card border border-border/50 text-center hover:border-primary/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/5" whileHover={{ scale: 1.03 }} transition={{ type: "spring", stiffness: 300, damping: 20 }}>
                  <CountUp target={stat.number} className={`text-3xl md:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r ${stat.color}`} />
                  <div className="text-sm text-muted-foreground mt-2">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 5: Case Study Highlights */}
      <section className="py-24">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-bold mb-4 uppercase tracking-wider">Proven Results</div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Real Results for Real Brands</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">Don't take our word for it. Here are verified results from our recent campaigns.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {caseStudies.map((cs, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15, type: "spring", stiffness: 200 }} className="bg-card border border-border/50 rounded-3xl p-8 hover:border-primary/50 transition-all duration-300 group hover:-translate-y-2 hover:shadow-xl hover:shadow-primary/5 gradient-border" whileHover={{ scale: 1.02 }}>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold text-xl">
                    {cs.brand.charAt(0)}
                  </div>
                  <div>
                    <div className="font-bold">{cs.brand}</div>
                    <div className="text-xs text-muted-foreground">{cs.industry}</div>
                  </div>
                </div>
                <p className="text-foreground font-semibold text-lg mb-4 leading-snug">{cs.result}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full font-bold">{cs.service}</span>
                  <Link href="/case-studies" className="text-sm text-primary font-semibold hover:underline">Read More →</Link>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/case-studies" className={buttonVariants({ variant: "outline", className: "rounded-full px-8" })}>
              View All Case Studies <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 6: Testimonials */}
      <section className="py-24 bg-card/30 border-y border-border/50">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold mb-4 uppercase tracking-wider">Client Love</div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">What Our Clients Say</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15, type: "spring", stiffness: 200 }} className="bg-card border border-border/50 rounded-3xl p-8 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300" whileHover={{ scale: 1.02 }}>
                <div className="flex gap-1 mb-4">
                  {[1, 2, 3, 4, 5].map(s => <Star key={s} className="w-5 h-5 fill-amber-400 text-amber-400" />)}
                </div>
                <p className="text-muted-foreground mb-6 leading-relaxed italic">&ldquo;{t.text}&rdquo;</p>
                <div className="flex items-center gap-3 pt-4 border-t border-border/50">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-bold text-sm">{t.name}</div>
                    <div className="text-xs text-muted-foreground">{t.role}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 7: Process */}
      <section className="py-24">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-bold mb-4 uppercase tracking-wider">Our Process</div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">From Strategy to Scale in 4 Steps</h2>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Discovery", desc: "We audit your current digital presence and understand your business goals.", icon: "🔍" },
              { step: "02", title: "Strategy", desc: "Custom roadmap built specifically for your target market audience.", icon: "📋" },
              { step: "03", title: "Execute", desc: "Our 50+ member team implements the strategy across all channels.", icon: "⚡" },
              { step: "04", title: "Scale", desc: "We optimize, scale winning campaigns, and double down on ROI.", icon: "🚀" },
            ].map((p, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 30, scale: 0.9 }} whileInView={{ opacity: 1, y: 0, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.15, type: "spring", stiffness: 200 }} className="text-center p-6 rounded-3xl bg-card border border-border/50 relative hover:-translate-y-2 hover:border-primary/40 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5" whileHover={{ scale: 1.05 }}>
                <div className="text-4xl mb-4">{p.icon}</div>
                <div className="text-xs font-bold text-primary mb-2">{p.step}</div>
                <h3 className="text-lg font-bold mb-2">{p.title}</h3>
                <p className="text-sm text-muted-foreground">{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 8: Final CTA */}
      <section className="py-24">
        <div className="container mx-auto px-6 max-w-5xl">
          <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="bg-gradient-to-r from-primary via-orange-500 to-accent rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden shadow-2xl shadow-primary/20 shimmer">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImEiIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTTAgMGgyMHYyMEgweiIgZmlsbD0ibm9uZSIvPjxjaXJjbGUgY3g9IjEiIGN5PSIxIiByPSIxIiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDUpIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCBmaWxsPSJ1cmwoI2EpIiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIi8+PC9zdmc+')] opacity-50" />
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 relative z-10">
              Ready to 10x Your Digital Growth?
            </h2>
            <p className="text-lg text-white/80 mb-10 max-w-2xl mx-auto relative z-10">
              Join 200+ brands that trust Kazzona Marketing for their digital marketing. Get a free strategy session worth ₹25,000 — no strings attached.
            </p>
            <div className="relative z-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact" className={buttonVariants({ variant: "secondary", size: "lg", className: "rounded-full font-bold px-10 text-lg hover:scale-105 transition-transform" })}>
                Book Free Strategy Call
              </Link>
              <Link href="/services" className="text-white/90 hover:text-white font-semibold underline underline-offset-4">
                Explore Our Services →
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
