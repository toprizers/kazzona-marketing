import Link from "next/link";
import { ArrowRight, CheckCircle2, PenTool, Layout, Image as ImageIcon, Sparkles, MonitorSmartphone, Palette, HelpCircle } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import PricingClient from "@/app/(public)/pricing/PricingClient";
import { getPricingConfig } from "@/app/actions/pricing";

export const metadata = {
  title: "Premium Graphic Design & Branding | Kazzona Marketing",
  description: "Enterprise-grade UI/UX, branding, and ad creatives for Indian startups and D2C brands. Elevate your visual identity.",
};

export default async function GraphicDesigningPage() {
  const config = await getPricingConfig();
  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. Hero Section - Masonry/Gallery Abstract */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-background">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-rose-500/15 via-background to-background -z-10" />
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-rose-500/10 text-rose-500 text-sm font-bold mb-6 border border-rose-500/20">
                <Palette className="w-4 h-4" /> World-Class Visuals
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6 leading-tight">
                Design That <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-pink-500">Demands Attention.</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed max-w-lg">
                In a crowded digital feed, average design gets ignored. We craft premium brand identities, high-converting ad creatives, and seamless UI/UX that make your business look like a Fortune 500 company.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact" className={buttonVariants({ size: "lg", className: "rounded-full px-8 text-lg shadow-lg shadow-rose-500/20 bg-rose-600 hover:bg-rose-700 text-white" })}>
                  Discuss Your Brand Vision <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </div>
            </div>

            {/* Abstract Design Portfolio UI */}
            <div className="relative h-[500px] w-full flex gap-4 overflow-hidden">
               {/* Left Column (Scrolling up) */}
               <div className="flex-1 flex flex-col gap-4 translate-y-8">
                  <div className="h-48 bg-card border border-border/50 rounded-3xl shadow-xl p-4 flex flex-col justify-between">
                     <div className="w-12 h-12 rounded-full bg-rose-500/20 flex items-center justify-center"><Layout className="w-6 h-6 text-rose-500" /></div>
                     <div className="h-2 w-1/2 bg-muted rounded" />
                  </div>
                  <div className="h-64 bg-gradient-to-br from-rose-500/20 to-orange-500/20 border border-rose-500/30 rounded-3xl shadow-xl flex items-center justify-center backdrop-blur">
                     <Sparkles className="w-16 h-16 text-rose-500 opacity-50" />
                  </div>
               </div>
               
               {/* Middle Column (Scrolling down) */}
               <div className="flex-1 flex flex-col gap-4 -translate-y-12">
                  <div className="h-72 bg-gradient-to-bl from-pink-500/20 to-purple-500/20 border border-pink-500/30 rounded-3xl shadow-xl flex items-center justify-center p-6 text-center">
                     <div className="w-full h-full border-2 border-dashed border-pink-500/50 rounded-xl flex items-center justify-center">
                        <span className="font-bold text-pink-500">Ad Creative A</span>
                     </div>
                  </div>
                  <div className="h-40 bg-card border border-border/50 rounded-3xl shadow-xl p-6 flex flex-col gap-3">
                     <div className="w-full h-2 bg-muted rounded" />
                     <div className="w-3/4 h-2 bg-muted rounded" />
                     <div className="w-full h-2 bg-muted rounded" />
                     <div className="mt-auto w-1/3 h-6 bg-rose-500 rounded-full" />
                  </div>
               </div>
               
               {/* Right Column (Scrolling up) */}
               <div className="flex-1 flex flex-col gap-4 translate-y-16 hidden md:flex">
                  <div className="h-32 bg-card border border-border/50 rounded-3xl shadow-xl flex items-center justify-center">
                     <div className="text-3xl font-black font-serif text-foreground">Brand.</div>
                  </div>
                  <div className="h-80 bg-gradient-to-t from-background via-rose-900/20 to-background border border-border/50 rounded-3xl shadow-xl flex items-end p-6">
                     <div className="w-full h-32 bg-background/50 backdrop-blur rounded-xl border border-border/50" />
                  </div>
               </div>
               
               {/* Gradients to fade edges */}
               <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-background to-transparent z-10" />
               <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-background to-transparent z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* 2. Problem Statement */}
      <section className="py-24 bg-secondary/20 border-y border-border/50">
        <div className="container mx-auto px-6 max-w-7xl">
           <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">Ugly Design Costs Money</h2>
              <p className="text-lg text-muted-foreground">In 2024, trust is established visually in milliseconds. If your branding looks cheap, customers assume your product is cheap.</p>
           </div>
           <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-card p-10 rounded-[3rem] border border-border/50 flex flex-col justify-center">
                 <h3 className="text-2xl font-bold mb-4">The D2C Dilemma</h3>
                 <p className="text-muted-foreground leading-relaxed mb-6">Indian consumers are bombarded with thousands of ads daily. Generic Canva templates and stock photos suffer from "banner blindness" and tank your ad ROAS.</p>
                 <div className="flex items-center gap-4 text-rose-500 font-bold">
                    <CheckCircle2 className="w-6 h-6" /> We create custom, thumb-stopping creatives.
                 </div>
              </div>
              <div className="bg-card p-10 rounded-[3rem] border border-border/50 flex flex-col justify-center">
                 <h3 className="text-2xl font-bold mb-4">The B2B Trust Gap</h3>
                 <p className="text-muted-foreground leading-relaxed mb-6">Enterprise clients won't sign a ₹10 Lakh contract if your pitch deck and website look like they were made in 2010. Visual authority dictates pricing power.</p>
                 <div className="flex items-center gap-4 text-rose-500 font-bold">
                    <CheckCircle2 className="w-6 h-6" /> We build enterprise-grade visual identities.
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* 3. Core Capabilities */}
      <section className="py-24">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-16 max-w-3xl mx-auto">
             <h2 className="text-3xl md:text-5xl font-bold mb-6">Full-Spectrum Design</h2>
             <p className="text-lg text-muted-foreground">From a single logo to complete UI/UX overhauls, our design team executes with precision.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Brand Identity", desc: "Logos, color palettes, typography, and comprehensive brand guidelines that tell your story.", icon: PenTool },
              { title: "UI/UX Design", desc: "Figma prototyping for web and mobile apps focused on frictionless user journeys.", icon: MonitorSmartphone },
              { title: "Ad Creatives", desc: "High-CTR static and motion graphics engineered specifically for Meta and Google Ads.", icon: ImageIcon },
              { title: "Pitch Decks", desc: "Persuasive, beautifully formatted investor decks and B2B sales presentations.", icon: Layout }
            ].map((feature, i) => (
              <div key={i} className="p-8 rounded-3xl bg-card border border-border/50 hover:bg-rose-500/5 transition-colors group">
                <feature.icon className="w-10 h-10 text-rose-500 mb-6 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. The Design Process */}
      <section className="py-24 bg-card/30 border-y border-border/50">
        <div className="container mx-auto px-6 max-w-5xl">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">Our Creative Process</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { step: "01. Discovery", desc: "We study your target audience, competitors, and core brand values before drawing a single line." },
              { step: "02. Concepts", desc: "Presenting multiple mood boards and initial directions for your feedback and alignment." },
              { step: "03. Execution", desc: "Pixel-perfect refinement and delivery of all assets in required formats (Figma, AI, PSD, etc.)." }
            ].map((process, i) => (
              <div key={i} className="text-center p-8 rounded-3xl bg-background border border-border/50 hover:border-rose-500/30 transition-colors">
                 <div className="w-12 h-12 rounded-full bg-rose-500/10 text-rose-500 flex items-center justify-center mx-auto font-black mb-6">
                    {process.step.split('.')[0]}
                 </div>
                 <h3 className="text-xl font-bold mb-3">{process.step.split('. ')[1]}</h3>
                 <p className="text-muted-foreground leading-relaxed">{process.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. ROI of Design */}
      <section className="py-24">
        <div className="container mx-auto px-6 max-w-6xl">
           <div className="bg-gradient-to-br from-rose-900/40 to-background rounded-[3rem] border border-rose-500/20 p-8 md:p-16 flex flex-col md:flex-row items-center gap-12">
              <div className="w-full md:w-1/3 space-y-4">
                 <div className="bg-card/50 p-6 rounded-2xl text-center border border-rose-500/10">
                    <div className="text-3xl font-black text-rose-500 mb-1">3x</div>
                    <div className="text-xs text-muted-foreground">Increase in CTR</div>
                 </div>
                 <div className="bg-card/50 p-6 rounded-2xl text-center border border-rose-500/10">
                    <div className="text-3xl font-black text-rose-500 mb-1">+45%</div>
                    <div className="text-xs text-muted-foreground">Conversion Uplift</div>
                 </div>
              </div>
              <div className="flex-1 space-y-6">
                 <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/20 text-rose-400 text-xs font-bold uppercase tracking-wider">The Power of Aesthetics</div>
                 <h2 className="text-3xl md:text-4xl font-bold leading-tight">Design is Not Just How It Looks. It's How It Converts.</h2>
                 <p className="text-lg text-muted-foreground">By overhauling the UI/UX and ad creatives for a major Indian FinTech startup, we dropped their Customer Acquisition Cost (CAC) by 40% simply because users trusted the new, premium interface instantly.</p>
              </div>
           </div>
        </div>
      </section>

      {/* 6. Pricing Packages - Dynamic */}
      <section className="bg-card/30 border-y border-border/50">
        <PricingClient config={config} filterSectionId="design" hideHeader />
      </section>

      {/* 7. FAQ */}
      <section className="py-24">
        <div className="container mx-auto px-6 max-w-3xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Design FAQs</h2>
          </div>
          <div className="space-y-4">
            {[
              { q: "How does the 'Creative Retainer' work?", a: "It's like having an in-house designer for a fraction of the cost. You submit tasks to a Trello board (e.g., 'need 4 Instagram creatives for a Diwali sale'), and we deliver them one by one, typically within 24-48 hours." },
              { q: "Do you provide source files?", a: "Yes. Upon project completion and full payment, you own 100% of the rights to the designs and we will provide all raw source files (Figma, AI, PSD, etc.)." },
              { q: "Can you implement the UI/UX designs into code?", a: "Absolutely. We have an in-house development team specializing in Next.js and React. If you want us to both design and build your product, we can provide a combined quote." }
            ].map((faq, i) => (
              <div key={i} className="p-6 rounded-2xl bg-card border border-border/50 hover:border-rose-500/30 transition-colors">
                <h4 className="flex items-start gap-3 font-bold text-lg mb-3">
                  <HelpCircle className="w-6 h-6 text-rose-500 shrink-0" /> 
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
          <div className="p-12 md:p-20 rounded-[3rem] bg-gradient-to-r from-rose-600 to-pink-600 relative overflow-hidden text-white shadow-2xl">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 relative z-10 max-w-2xl mx-auto">Upgrade Your Brand's Perception</h2>
            <p className="text-rose-100 text-lg mb-10 max-w-xl mx-auto relative z-10">
              Stop letting poor design hold your revenue back. Let's create visuals that your customers trust instantly.
            </p>
            <div className="relative z-10">
              <Link href="/contact" className={buttonVariants({ variant: "secondary", size: "lg", className: "rounded-full text-rose-700 font-bold px-10 text-lg shadow-xl" })}>
                Discuss Your Design Needs
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
