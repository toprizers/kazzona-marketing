"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, BarChart, Code, Megaphone, Mail, PenTool, CheckCircle2, Zap, Users, TrendingUp, Star, Shield, Clock, IndianRupee, ArrowUpRight, HelpCircle, PlayCircle, ChevronLeft, ChevronRight } from "lucide-react";
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { buttonVariants } from "@/components/ui/button";

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
  { name: "Neha Gupta", role: "Director, UrbanPulse", text: "We were struggling to scale our Google Ads profitably. Kazzona audited the account, restructured campaigns, and brought our CPA down by 40%." },
  { name: "Sameer Desai", role: "VP Marketing, TechNova", text: "The website Kazzona built for us isn't just beautiful; it's a lead generation machine. Conversion rates have doubled since launch." },
  { name: "Ananya Rao", role: "Founder, GreenLeaf", text: "I appreciate their transparency. Unlike other agencies, I know exactly where every rupee is going and what ROI it brings." },
  { name: "Vikram Singh", role: "Head of Growth, FinStack", text: "They truly act as an extension of our in-house team. The speed of execution and strategic insights are world-class." },
  { name: "Sneha Reddy", role: "Marketing Manager, MediCare+", text: "Our local SEO rankings shot up within 90 days. We now dominate search results for all our target clinics in Bangalore." },
  { name: "Kunal Bajaj", role: "E-commerce Head, LuxeWear", text: "The email automation flows they set up currently generate 25% of our total monthly revenue on autopilot." },
  { name: "Ritu Kapoor", role: "CEO, NextGen Interiors", text: "Highly professional and results-driven. They don't just chase metrics; they chase actual business growth." },
];

export default function HomeClient() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: 'start' },
    [Autoplay({ delay: 4000, stopOnInteraction: true })]
  );

  return (
    <div className="flex flex-col">
      {/* SECTION 1: Hero */}
      <section className="relative pt-32 pb-20 md:pt-44 md:pb-32 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(252,74,26,0.15),transparent)]" />
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
        </div>
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-sm font-semibold text-primary mb-6">
                <Zap className="w-4 h-4" /> Best Digital Marketing Agency in Delhi NCR
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 leading-[1.1]">
                <span className="block">Digital Marketing Agency{" "}</span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-primary">
                  Delhi NCR
                </span>{" "}
                <span className="block">We Help Brands Scale Revenue Digitally</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed max-w-xl">
                From Delhi startups to global enterprises — we've generated <strong className="text-foreground">₹100Cr+ in revenue</strong> for businesses through SEO, performance marketing, and premium web development.
              </p>
              <div className="mt-8">
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    window.location.href = '/contact?audit=true';
                  }}
                  className="flex flex-col sm:flex-row gap-3 max-w-xl relative"
                >
                  <div className="relative flex-1">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <Zap className="h-5 w-5 text-primary" />
                    </div>
                    <input
                      type="url"
                      placeholder="Enter your website URL"
                      required
                      className="w-full bg-secondary border border-primary/30 text-foreground text-lg rounded-full pl-12 pr-4 py-4 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary backdrop-blur-sm transition-all placeholder:text-muted-foreground placeholder:opacity-100"
                    />
                  </div>
                  <button
                    type="submit"
                    className="shrink-0 flex items-center justify-center rounded-full px-8 py-4 text-lg font-bold shadow-xl shadow-primary/25 bg-gradient-to-r from-primary to-orange-500 text-white hover:shadow-primary/40 hover:-translate-y-1 transition-all duration-300"
                  >
                    Analyze My Website <ArrowRight className="ml-2 w-5 h-5" />
                  </button>
                </form>
                <p className="text-sm text-muted-foreground mt-3 ml-2 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" /> Free 25-point SEO & Performance Audit
                </p>
              </div>
              <div className="flex items-center gap-8 mt-10 pt-8 border-t border-border/50">
                <div>
                  <div className="text-3xl font-black text-primary">200+</div>
                  <div className="text-sm text-muted-foreground">Clients Served</div>
                </div>
                <div>
                  <div className="text-3xl font-black text-accent">₹100Cr+</div>
                  <div className="text-sm text-muted-foreground">Revenue Generated</div>
                </div>
                <div>
                  <div className="text-3xl font-black text-primary">4.9/5</div>
                  <div className="text-sm text-muted-foreground">Google Rating</div>
                </div>
              </div>
            </div>

            <div className="hidden lg:block">
              <div className="relative aspect-[4/3] rounded-[3rem] bg-gradient-to-br from-primary/10 via-card to-accent/10 border border-border/50 overflow-hidden p-8">
                <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5" />
                <div className="relative z-10 h-full flex flex-col gap-3">
                  <div className="flex gap-3">
                    <div className="flex-1 rounded-2xl bg-card/80 backdrop-blur border border-border/50 p-4">
                      <TrendingUp className="w-6 h-6 text-emerald-500 mb-2" />
                      <div className="text-xl lg:text-2xl font-bold">+312%</div>
                      <div className="text-[10px] lg:text-xs text-muted-foreground">Organic Traffic</div>
                    </div>
                    <div className="flex-1 rounded-2xl bg-card/80 backdrop-blur border border-border/50 p-4">
                      <IndianRupee className="w-6 h-6 text-amber-500 mb-2" />
                      <div className="text-xl lg:text-2xl font-bold">₹4.2Cr</div>
                      <div className="text-[10px] lg:text-xs text-muted-foreground">Pipeline Generated</div>
                    </div>
                  </div>
                  <div className="flex-1 rounded-2xl bg-card/80 backdrop-blur border border-border/50 p-4 flex flex-col justify-end">
                    <div className="flex items-end gap-2 h-16 lg:h-20">
                      {[30, 45, 38, 55, 42, 68, 60, 78, 72, 90, 85, 95].map((h, i) => (
                        <div key={i} className="flex-1 bg-gradient-to-t from-primary to-accent rounded-t-sm transition-all" style={{ height: `${h}%` }} />
                      ))}
                    </div>
                    <div className="text-[10px] lg:text-xs text-muted-foreground mt-2">Monthly Growth — Last 12 Months</div>
                  </div>
                  <div className="flex gap-3">
                    <div className="flex-1 rounded-2xl bg-primary/20 border border-primary/30 p-3 flex items-center gap-2">
                      <Users className="w-5 h-5 text-primary shrink-0" />
                      <div>
                        <div className="text-sm font-bold leading-tight">1,240</div>
                        <div className="text-[10px] text-muted-foreground leading-tight">Leads This Month</div>
                      </div>
                    </div>
                    <div className="flex-1 rounded-2xl bg-accent/20 border border-accent/30 p-3 flex items-center gap-2">
                      <BarChart className="w-5 h-5 text-accent shrink-0" />
                      <div>
                        <div className="text-sm font-bold leading-tight">4.5x</div>
                        <div className="text-[10px] text-muted-foreground leading-tight">ROAS</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 1.5: Trust Badges (EEAT) */}
      <section className="py-8 bg-card border-y border-border/50 flex flex-wrap justify-center items-center gap-6 md:gap-12 px-6">
        {["Google Partner", "Meta Business Partner", "Shopify Expert", "HubSpot Certified"].map((badge, idx) => (
          <div key={idx} className="flex items-center gap-2 text-muted-foreground font-semibold text-sm md:text-base">
            <CheckCircle2 className="w-5 h-5 text-emerald-500" />
            {badge}
          </div>
        ))}
      </section>

      {/* SECTION 2: Trusted By (Infinite Marquee) */}
      <section className="py-14 border-b border-border/50 bg-card/30 overflow-hidden relative">
        <div className="container mx-auto px-6 max-w-6xl mb-10">
          <p className="text-center text-sm text-muted-foreground uppercase tracking-wider font-medium">Trusted by 200+ brands across industries</p>
        </div>

        <div className="absolute left-0 top-0 bottom-0 w-24 md:w-48 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 md:w-48 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

        {/* Row 1: Scrolls Left */}
        <div className="flex overflow-hidden mb-6">
          <div className="flex min-w-full shrink-0 items-center gap-10 sm:gap-16 px-8 animate-marquee">
            {[
              { src: "/clients/1.png", alt: "TripNest" },
              { src: "/clients/2.png", alt: "Kazzona Marketing Client" },
              { src: "/clients/3.png", alt: "Kazzona Marketing Client" },
              { src: "/clients/4.png", alt: "Client 4" },
              { src: "/clients/5.jpg", alt: "Eris" },
              { src: "/clients/6.jpg", alt: "Client 6" },
              { src: "/clients/7.jpg", alt: "Client 7" },
              { src: "/clients/8.jpg", alt: "Client 8" },
              { src: "/clients/9.png", alt: "Client 9" },
              { src: "/clients/10.jpg", alt: "Client 10" },
              { src: "/clients/11.jpg", alt: "Client 11" },
              { src: "/clients/12.jpg", alt: "Client 12" },
              { src: "/clients/13.jpg", alt: "Client 13" },
              { src: "/clients/14.jpg", alt: "Client 14" },
              { src: "/clients/15.jpg", alt: "Client 15" },
              { src: "/clients/16.jpg", alt: "Client 16" },
            ].map((logo, idx) => (
              <div key={idx} className="shrink-0 w-[110px] h-[55px] md:w-[140px] md:h-[65px] relative rounded-xl bg-white/90 p-2.5 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 hover:scale-105 transition-all duration-500 shadow-sm">
                <Image src={logo.src} alt={logo.alt} fill className="object-contain p-1" sizes="140px" />
              </div>
            ))}
          </div>
          <div className="flex min-w-full shrink-0 items-center gap-10 sm:gap-16 px-8 animate-marquee" aria-hidden>
            {[
              { src: "/clients/1.png", alt: "TripNest" },
              { src: "/clients/2.png", alt: "Kazzona Marketing Client" },
              { src: "/clients/3.png", alt: "Kazzona Marketing Client" },
              { src: "/clients/4.png", alt: "Client 4" },
              { src: "/clients/5.jpg", alt: "Eris" },
              { src: "/clients/6.jpg", alt: "Client 6" },
              { src: "/clients/7.jpg", alt: "Client 7" },
              { src: "/clients/8.jpg", alt: "Client 8" },
              { src: "/clients/9.png", alt: "Client 9" },
              { src: "/clients/10.jpg", alt: "Client 10" },
              { src: "/clients/11.jpg", alt: "Client 11" },
              { src: "/clients/12.jpg", alt: "Client 12" },
              { src: "/clients/13.jpg", alt: "Client 13" },
              { src: "/clients/14.jpg", alt: "Client 14" },
              { src: "/clients/15.jpg", alt: "Client 15" },
              { src: "/clients/16.jpg", alt: "Client 16" },
            ].map((logo, idx) => (
              <div key={idx} className="shrink-0 w-[110px] h-[55px] md:w-[140px] md:h-[65px] relative rounded-xl bg-white/90 p-2.5 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 hover:scale-105 transition-all duration-500 shadow-sm">
                <Image src={logo.src} alt={logo.alt} fill className="object-contain p-1" sizes="140px" />
              </div>
            ))}
          </div>
        </div>

        {/* Row 2: Scrolls Right (reverse) */}
        <div className="flex overflow-hidden">
          <div className="flex min-w-full shrink-0 items-center gap-10 sm:gap-16 px-8 animate-marquee-reverse">
            {[
              { src: "/clients/17.jpg", alt: "Client 17" },
              { src: "/clients/18.jpg", alt: "Client 18" },
              { src: "/clients/19.jpg", alt: "Client 19" },
              { src: "/clients/20.jpg", alt: "Client 20" },
              { src: "/clients/21.jpg", alt: "Client 21" },
              { src: "/clients/22.jpg", alt: "Client 22" },
              { src: "/clients/23.jpg", alt: "Client 23" },
              { src: "/clients/24.jpg", alt: "Client 24" },
              { src: "/clients/25.jpg", alt: "Client 25" },
              { src: "/clients/26.jpg", alt: "Client 26" },
              { src: "/clients/27.jpg", alt: "Client 27" },
              { src: "/clients/28.jpg", alt: "Client 28" },
              { src: "/clients/29.jpg", alt: "Client 29" },
              { src: "/clients/30.jpg", alt: "Client 30" },
              { src: "/clients/31.jpg", alt: "Client 31" },
            ].map((logo, idx) => (
              <div key={idx} className="shrink-0 w-[110px] h-[55px] md:w-[140px] md:h-[65px] relative rounded-xl bg-white/90 p-2.5 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 hover:scale-105 transition-all duration-500 shadow-sm">
                <Image src={logo.src} alt={logo.alt} fill className="object-contain p-1" sizes="140px" />
              </div>
            ))}
          </div>
          <div className="flex min-w-full shrink-0 items-center gap-10 sm:gap-16 px-8 animate-marquee-reverse" aria-hidden>
            {[
              { src: "/clients/17.jpg", alt: "Client 17" },
              { src: "/clients/18.jpg", alt: "Client 18" },
              { src: "/clients/19.jpg", alt: "Client 19" },
              { src: "/clients/20.jpg", alt: "Client 20" },
              { src: "/clients/21.jpg", alt: "Client 21" },
              { src: "/clients/22.jpg", alt: "Client 22" },
              { src: "/clients/23.jpg", alt: "Client 23" },
              { src: "/clients/24.jpg", alt: "Client 24" },
              { src: "/clients/25.jpg", alt: "Client 25" },
              { src: "/clients/26.jpg", alt: "Client 26" },
              { src: "/clients/27.jpg", alt: "Client 27" },
              { src: "/clients/28.jpg", alt: "Client 28" },
              { src: "/clients/29.jpg", alt: "Client 29" },
              { src: "/clients/30.jpg", alt: "Client 30" },
              { src: "/clients/31.jpg", alt: "Client 31" },
            ].map((logo, idx) => (
              <div key={idx} className="shrink-0 w-[110px] h-[55px] md:w-[140px] md:h-[65px] relative rounded-xl bg-white/90 p-2.5 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 hover:scale-105 transition-all duration-500 shadow-sm">
                <Image src={logo.src} alt={logo.alt} fill className="object-contain p-1" sizes="140px" />
              </div>
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

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div key={service.title} className={`group relative bg-card border border-border/50 rounded-3xl p-8 hover:border-primary/50 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-2 overflow-hidden gradient-border`}>
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
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3.5: Meet the Founder / Team */}
      <section className="py-24">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="bg-gradient-to-br from-card to-card/50 border border-border/50 rounded-[3rem] p-8 md:p-16 flex flex-col lg:flex-row items-center gap-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
            <div className="w-48 h-48 md:w-64 md:h-64 rounded-full bg-secondary overflow-hidden shrink-0 border-4 border-background shadow-2xl relative">
              <div className="absolute inset-0 bg-primary/10 flex items-center justify-center">
                <Image
                  src="/founder.jpg"
                  alt="Founder, Kazzona Marketing"
                  fill
                  className="object-cover"
                  onError={(e) => {
                    (e.target as HTMLElement).style.display = 'none';
                  }}
                />
                <Users className="w-24 h-24 text-primary opacity-50 absolute -z-10" />
              </div>
            </div>
            <div className="flex-1 space-y-6 text-center lg:text-left relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider">Built by Marketers</div>
              <h2 className="text-3xl md:text-4xl font-bold font-heading">"We don't just run campaigns. We build revenue engines."</h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                After spending years seeing agencies promise the world and deliver nothing but vanity metrics, we built Kazzona Marketing with a single mission: To tie every single marketing activity directly to your pipeline and revenue. No fluff, just scalable growth.
              </p>
              <div>
                <div className="font-bold text-lg">Kazzona Leadership</div>
                <div className="text-sm text-primary font-semibold">Scaling Indian Businesses Since 2016</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: Why Choose Us — Indian Market Focus */}
      <section className="py-24 bg-card/30 border-y border-border/50">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
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
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { number: "200+", label: "Clients Across India", color: "from-primary to-orange-600" },
                { number: "₹100Cr+", label: "Revenue Generated", color: "from-accent to-teal-500" },
                { number: "15+", label: "Industries Served", color: "from-amber-500 to-orange-600" },
                { number: "98%", label: "Client Retention Rate", color: "from-rose-500 to-pink-600" },
              ].map((stat, i) => (
                <div key={i} className="p-6 rounded-3xl bg-card border border-border/50 text-center hover:border-primary/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/5">
                  <div className={`text-3xl md:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r ${stat.color}`}>{stat.number}</div>
                  <div className="text-sm text-muted-foreground mt-2">{stat.label}</div>
                </div>
              ))}
            </div>
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
              <div key={i} className="bg-card border border-border/50 rounded-3xl p-0 overflow-hidden hover:border-primary/50 transition-all duration-300 group hover:-translate-y-2 hover:shadow-xl hover:shadow-primary/10 gradient-border flex flex-col">
                <div className="h-32 bg-secondary/30 relative flex items-end px-4 gap-2 border-b border-border/50 pt-8">
                  {[40, 25, 55, 45, 75, 60, 95, 85].map((h, gi) => (
                    <div key={gi} className="flex-1 bg-gradient-to-t from-primary/80 to-primary/20 rounded-t-sm group-hover:from-primary group-hover:to-accent transition-all duration-500" style={{ height: `${h}%` }} />
                  ))}
                  <div className="absolute top-4 left-4 bg-background/90 backdrop-blur-sm px-3 py-1 rounded-full text-[10px] font-bold border border-border/50 uppercase tracking-wider text-primary">
                    {cs.service}
                  </div>
                </div>
                <div className="p-8 flex-1 flex flex-col">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold text-xl shadow-lg">
                      {cs.brand.charAt(0)}
                    </div>
                    <div>
                      <div className="font-bold text-lg">{cs.brand}</div>
                      <div className="text-xs text-muted-foreground">{cs.industry}</div>
                    </div>
                  </div>
                  <p className="text-foreground font-semibold text-xl mb-6 leading-snug flex-1">{cs.result}</p>
                  <div className="mt-auto">
                    <Link href="/case-studies" className="inline-flex items-center text-sm font-bold text-primary hover:text-accent transition-colors">
                      View Full Campaign <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
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
      <section className="py-24 bg-card/30 border-y border-border/50 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-full max-h-[400px] bg-primary/5 blur-[100px] rounded-full pointer-events-none" />

        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold mb-4 uppercase tracking-wider">Client Love</div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">What Our Partners Say</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">We measure our success by the success of our clients. Here's what they think about working with Kazzona.</p>
          </div>
          <div className="relative max-w-7xl mx-auto">
            <div className="overflow-hidden" ref={emblaRef}>
              <div className="flex -ml-6">
                {testimonials.map((t, i) => (
                  <div key={i} className="flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.333333%] pl-6">
                    <div className="h-full bg-card/80 backdrop-blur-xl border border-border/60 rounded-3xl p-8 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/10 hover:border-primary/50 transition-all duration-300 relative group flex flex-col">
                      <div className="absolute top-6 right-8 text-6xl text-primary/10 font-serif leading-none group-hover:text-primary/20 transition-colors">&quot;</div>

                      <div className="flex gap-1 mb-6 relative z-10">
                        {[1, 2, 3, 4, 5].map(s => <Star key={s} className="w-4 h-4 fill-amber-400 text-amber-400" />)}
                      </div>

                      {i === 0 && (
                        <div className="w-full h-40 bg-secondary rounded-2xl mb-6 relative overflow-hidden group/video cursor-pointer border border-border/50 shrink-0">
                          <div className="absolute inset-0 bg-black/40 group-hover/video:bg-black/20 transition-colors z-10 flex items-center justify-center">
                            <PlayCircle className="w-12 h-12 text-white opacity-80 group-hover/video:scale-110 transition-transform" />
                          </div>
                          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20" />
                        </div>
                      )}

                      <p className="text-foreground/90 mb-8 leading-relaxed text-base relative z-10 font-medium flex-1">&quot;{t.text}&quot;</p>

                      <div className="flex items-center gap-4 pt-6 border-t border-border/50 relative z-10 mt-auto shrink-0">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-primary/20">
                          {t.name.charAt(0)}
                        </div>
                        <div>
                          <div className="font-bold text-foreground line-clamp-1">{t.name}</div>
                          <div className="text-xs text-muted-foreground line-clamp-1">{t.role}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <button onClick={() => emblaApi?.scrollPrev()} className="absolute top-1/2 -left-4 md:-left-12 -translate-y-1/2 w-10 h-10 rounded-full bg-card border border-border/50 flex items-center justify-center hover:bg-primary hover:text-white hover:border-primary transition-all shadow-lg z-20">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button onClick={() => emblaApi?.scrollNext()} className="absolute top-1/2 -right-4 md:-right-12 -translate-y-1/2 w-10 h-10 rounded-full bg-card border border-border/50 flex items-center justify-center hover:bg-primary hover:text-white hover:border-primary transition-all shadow-lg z-20">
              <ChevronRight className="w-5 h-5" />
            </button>
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
              <div key={i} className="text-center p-6 rounded-3xl bg-card border border-border/50 relative hover:-translate-y-2 hover:border-primary/40 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5">
                <div className="text-4xl mb-4">{p.icon}</div>
                <div className="text-xs font-bold text-primary mb-2">{p.step}</div>
                <h3 className="text-lg font-bold mb-2">{p.title}</h3>
                <p className="text-sm text-muted-foreground">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 7.5: FAQ (SGE Optimized) */}
      <section className="py-24 bg-card/30 border-t border-border/50">
        <div className="container mx-auto px-6 max-w-3xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-muted-foreground text-lg">Everything you need to know about working with Kazzona.</p>
          </div>
          <div className="space-y-4">
            {[
              { q: "What makes Kazzona different from other marketing agencies in India?", a: "Unlike traditional agencies that focus on vanity metrics like impressions and clicks, we operate as a growth partner. We tie every marketing activity directly to your pipeline and revenue generation. We guarantee transparent reporting and a focus on ROAS." },
              { q: "How long does it take to see results?", a: "For Paid Ads (Google/Meta), we typically launch campaigns within 7 days and you can see initial lead flow immediately. For SEO and organic growth, significant compounding results usually take 3 to 6 months depending on the competitive landscape." },
              { q: "Do you offer custom pricing packages?", a: "Yes. Every business is unique. While we have standard guidelines, we conduct a thorough discovery call to audit your current digital presence and propose a custom pricing structure based on your specific growth targets." },
              { q: "Who will be managing my account?", a: "You will be assigned a dedicated Account Manager along with a team of specialists (SEO experts, Ad buyers, designers) based out of our Delhi NCR office. You will have a direct communication channel via Slack/WhatsApp." }
            ].map((faq, i) => (
              <details key={i} className="group p-6 rounded-2xl bg-card border border-border/50 hover:border-emerald-500/30 transition-colors [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex items-center justify-between font-bold text-lg cursor-pointer outline-none">
                  <span className="flex items-center gap-3">
                    <HelpCircle className="w-6 h-6 text-primary shrink-0" />
                    {faq.q}
                  </span>
                  <span className="transition group-open:rotate-180">
                    <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                  </span>
                </summary>
                <p className="text-muted-foreground pl-9 leading-relaxed mt-4 group-open:animate-in group-open:slide-in-from-top-2 group-open:fade-in-0 group-open:duration-300">
                  {faq.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 8: Final CTA */}
      <section className="py-24">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="bg-gradient-to-r from-primary via-orange-500 to-accent rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden shadow-2xl shadow-primary/20">
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
          </div>
        </div>
      </section>
    </div>
  );
}
