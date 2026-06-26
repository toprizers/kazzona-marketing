import Link from "next/link";
import { ArrowRight, CheckCircle2, Mail, Users, Inbox, RefreshCw, MessageSquare, Repeat, HelpCircle } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import PricingClient from "@/app/(public)/pricing/PricingClient";
import { getPricingConfig } from "@/app/actions/pricing";

export const metadata = {
  title: "Email Marketing Services in India | Kazzona Marketing",
  description: "Generate up to 30% of your total revenue from automated email flows. Klaviyo & Mailchimp experts for Indian D2C and B2B brands.",
};

export default async function EmailMarketingPage() {
  const config = await getPricingConfig();
  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. Hero Section - Inbox UI Abstract */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-background">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-purple-500/15 via-background to-background -z-10" />
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 text-purple-500 text-sm font-bold mb-6 border border-purple-500/20">
                <Mail className="w-4 h-4" /> Klaviyo & Mailchimp Certified
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6 leading-tight">
                Unlock Your Hidden <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-fuchsia-500">Revenue Stream.</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed max-w-lg">
                Stop relying solely on expensive paid ads. We build automated email sequences that nurture leads, recover abandoned carts, and turn one-time buyers into loyal brand advocates.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact" className={buttonVariants({ size: "lg", className: "rounded-full px-8 text-lg shadow-lg shadow-purple-500/20 bg-purple-600 hover:bg-purple-700 text-white" })}>
                  Get a Free Strategy Plan <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </div>
            </div>

            {/* Abstract Inbox/Flow UI */}
            <div className="relative h-[500px] w-full rounded-3xl bg-card border border-border/50 p-6 overflow-hidden shadow-2xl flex flex-col gap-4">
               {/* Header */}
               <div className="flex justify-between items-center pb-4 border-b border-border/50">
                  <div className="flex items-center gap-2">
                     <div className="w-3 h-3 rounded-full bg-destructive/80" />
                     <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                     <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  </div>
                  <div className="text-sm font-bold text-muted-foreground">Automation Flow: Cart Recovery</div>
               </div>
               
               {/* Nodes */}
               <div className="flex-1 flex flex-col items-center justify-center gap-2 relative">
                  <div className="absolute top-0 bottom-0 left-1/2 w-0.5 bg-purple-500/20 -translate-x-1/2 -z-10" />
                  
                  <div className="bg-background border border-border/50 rounded-xl p-4 w-64 shadow-lg flex items-center gap-3">
                     <div className="w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-500"><Users className="w-4 h-4" /></div>
                     <div>
                        <div className="text-sm font-bold">User Abandons Cart</div>
                        <div className="text-xs text-muted-foreground">Trigger</div>
                     </div>
                  </div>
                  
                  <div className="h-6" /> {/* Spacer */}
                  
                  <div className="bg-purple-500/10 border border-purple-500/30 rounded-xl p-4 w-64 shadow-lg flex items-center gap-3 scale-105">
                     <div className="w-8 h-8 rounded-full bg-purple-500 flex items-center justify-center text-white"><Mail className="w-4 h-4" /></div>
                     <div>
                        <div className="text-sm font-bold text-purple-400">Send Email 1</div>
                        <div className="text-xs text-purple-500/70">Wait 1 Hour</div>
                     </div>
                  </div>
                  
                  <div className="h-6" /> {/* Spacer */}

                  <div className="bg-background border border-border/50 rounded-xl p-4 w-64 shadow-lg flex items-center gap-3 opacity-60">
                     <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center text-muted-foreground"><Mail className="w-4 h-4" /></div>
                     <div>
                        <div className="text-sm font-bold">Send Email 2 (Discount)</div>
                        <div className="text-xs text-muted-foreground">Wait 24 Hours</div>
                     </div>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Problem / Context Section */}
      <section className="py-24 bg-secondary/20 border-y border-border/50">
        <div className="container mx-auto px-6 max-w-7xl">
           <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">The "Leaky Bucket" Problem</h2>
              <p className="text-lg text-muted-foreground">You are spending thousands on ads to drive traffic. But what happens when 98% of those visitors don't buy on their first visit?</p>
           </div>
           <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-card p-8 rounded-[2rem] border border-border/50">
                 <div className="text-4xl font-black text-purple-500 mb-4">69%</div>
                 <h3 className="font-bold text-lg mb-2">Average Cart Abandonment</h3>
                 <p className="text-muted-foreground text-sm leading-relaxed">Nearly 7 out of 10 Indian shoppers add items to their cart but leave before paying. Without an automated email flow, that revenue is gone forever.</p>
              </div>
              <div className="bg-card p-8 rounded-[2rem] border border-border/50">
                 <div className="text-4xl font-black text-purple-500 mb-4">42x</div>
                 <h3 className="font-bold text-lg mb-2">ROI Potential</h3>
                 <p className="text-muted-foreground text-sm leading-relaxed">Email marketing consistently delivers the highest ROI of any digital channel. For every ₹1 spent, the average return is ₹42.</p>
              </div>
              <div className="bg-card p-8 rounded-[2rem] border border-border/50">
                 <div className="text-4xl font-black text-purple-500 mb-4">0%</div>
                 <h3 className="font-bold text-lg mb-2">Algorithm Dependency</h3>
                 <p className="text-muted-foreground text-sm leading-relaxed">Unlike Facebook or Google, you own your email list. No algorithm changes can suddenly cut off your access to your customers.</p>
              </div>
           </div>
        </div>
      </section>

      {/* 3. Services / Flows */}
      <section className="py-24">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-16 max-w-3xl mx-auto">
             <h2 className="text-3xl md:text-5xl font-bold mb-6">Automated Revenue Systems</h2>
             <p className="text-lg text-muted-foreground">We set up, design, and write complex automation flows that make you money while you sleep.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: "Welcome Series Flow", desc: "Introduce your brand, build trust, and convert new subscribers with a strategic sequence of emails.", icon: Users },
              { title: "Cart Abandonment Flow", desc: "The highest-converting flow. Recover lost sales with perfectly timed reminders and psychological triggers.", icon: RefreshCw },
              { title: "Post-Purchase & Cross-Sell", desc: "Turn first-time buyers into repeat customers by recommending complementary products.", icon: Repeat },
              { title: "B2B Lead Nurturing", desc: "Educate B2B leads over a 30-90 day cycle, handling objections before the sales call.", icon: MessageSquare }
            ].map((feature, i) => (
              <div key={i} className="p-8 rounded-[2rem] bg-card border border-border/50 hover:bg-purple-500/5 transition-colors flex items-start gap-6">
                <div className="w-14 h-14 rounded-2xl bg-purple-500/10 flex items-center justify-center shrink-0">
                  <feature.icon className="w-7 h-7 text-purple-500" />
                </div>
                <div>
                   <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                   <p className="text-muted-foreground leading-relaxed">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. The Process */}
      <section className="py-24 bg-card/30 border-y border-border/50">
        <div className="container mx-auto px-6 max-w-5xl">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">End-to-End Management</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { step: "01. Technical Setup", desc: "Domain authentication (DKIM, SPF, DMARC) to ensure your emails actually land in the primary inbox, not spam." },
              { step: "02. Design & Copy", desc: "Creating visually stunning, mobile-responsive HTML templates and writing persuasive, conversion-focused copy." },
              { step: "03. Segmentation", desc: "Splitting your list into active buyers, VIPs, and churn risks to send highly personalized campaigns." }
            ].map((process, i) => (
              <div key={i} className="text-center p-8 rounded-3xl bg-background border border-border/50">
                 <div className="text-xl font-black text-purple-500 mb-4">{process.step}</div>
                 <p className="text-muted-foreground leading-relaxed">{process.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Case Study Highlights */}
      <section className="py-24">
        <div className="container mx-auto px-6 max-w-6xl">
           <div className="bg-gradient-to-br from-purple-900/40 to-background rounded-[3rem] border border-purple-500/20 p-8 md:p-16 flex flex-col md:flex-row items-center gap-12">
              <div className="flex-1 space-y-6">
                 <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/20 text-purple-400 text-xs font-bold uppercase tracking-wider">Client Win</div>
                 <h2 className="text-3xl md:text-4xl font-bold leading-tight">Increasing D2C Fashion Revenue by 28% Without Ad Spend</h2>
                 <p className="text-lg text-muted-foreground">By implementing an aggressive 5-part cart abandonment flow and a VIP segmentation strategy, we added ₹12L/month in pure profit for StyleHive.</p>
              </div>
              <div className="w-full md:w-1/3 space-y-4">
                 <div className="bg-card/50 p-6 rounded-2xl text-center border border-purple-500/10">
                    <div className="text-3xl font-black text-purple-500 mb-1">28%</div>
                    <div className="text-xs text-muted-foreground">Total Revenue from Email</div>
                 </div>
                 <div className="bg-card/50 p-6 rounded-2xl text-center border border-purple-500/10">
                    <div className="text-3xl font-black text-purple-500 mb-1">44%</div>
                    <div className="text-xs text-muted-foreground">Open Rate on Flows</div>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* 6. Pricing Packages - Dynamic */}
      <section className="bg-card/30 border-y border-border/50">
        <PricingClient config={config} filterSectionId="email-marketing" hideHeader />
      </section>

      {/* 7. FAQ */}
      <section className="py-24">
        <div className="container mx-auto px-6 max-w-3xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Email Marketing FAQs</h2>
          </div>
          <div className="space-y-4">
            {[
              { q: "Do you use Klaviyo or Mailchimp?", a: "For D2C and e-commerce, we strictly use Klaviyo due to its superior Shopify integrations and segmentation. For B2B or service businesses, we can work with Mailchimp, ActiveCampaign, or Hubspot." },
              { q: "Will our emails go to spam?", a: "We prioritize deliverability above all else. We handle full domain authentication (DKIM, SPF, DMARC) and actively clean your list to remove unengaged subscribers, ensuring high inbox placement rates." },
              { q: "Do you write the copy and design the emails?", a: "Yes. Our Growth and Enterprise retainers are completely done-for-you. Our copywriters write the subject lines and body copy, and our designers build custom HTML templates." }
            ].map((faq, i) => (
              <div key={i} className="p-6 rounded-2xl bg-card border border-border/50 hover:border-purple-500/30 transition-colors">
                <h4 className="flex items-start gap-3 font-bold text-lg mb-3">
                  <HelpCircle className="w-6 h-6 text-purple-500 shrink-0" /> 
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
          <div className="p-12 md:p-20 rounded-[3rem] bg-gradient-to-r from-purple-600 to-fuchsia-600 relative overflow-hidden text-white shadow-2xl">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 relative z-10 max-w-2xl mx-auto">Don't Let Your Leads Go Cold</h2>
            <p className="text-purple-100 text-lg mb-10 max-w-xl mx-auto relative z-10">
              Start building an automated revenue engine today. We'll audit your current setup for free.
            </p>
            <div className="relative z-10">
              <Link href="/contact" className={buttonVariants({ variant: "secondary", size: "lg", className: "rounded-full text-purple-700 font-bold px-10 text-lg shadow-xl" })}>
                Claim Your Free Audit
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
