"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { submitLead } from "@/app/actions/crm";
import { CheckCircle2 } from "lucide-react";

export default function ContactClient() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [services, setServices] = useState<string[]>([]);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState("");

  const toggleService = (srv: string) => {
    setServices(prev => prev.includes(srv) ? prev.filter(s => s !== srv) : [...prev, srv]);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (services.length === 0) {
      setError("Please select at least one service.");
      return;
    }
    
    setIsSubmitting(true);
    setError("");

    try {
      const result = await submitLead({ name, email, company, service: services.join(", "), message });
      if (result.error) {
        setError(result.error);
      } else {
        setIsSuccess(true);
      }
    } catch (err) {
      setError("An unexpected error occurred.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="container mx-auto px-6 py-24 max-w-3xl">
      <h1 className="font-heading text-5xl font-bold mb-6 text-foreground animate-fade-down">
        Contact <span className="text-primary">Kazzona Marketing</span>
      </h1>
      <p className="text-xl text-muted-foreground leading-relaxed mb-12 animate-slide-left" style={{ animationDelay: "0.1s" }}>
        Ready to scale? Let&apos;s discuss your enterprise growth strategy.
      </p>

      <div className="bg-card border border-border/40 p-8 rounded-2xl shadow-xl overflow-hidden relative animate-fade-up">
        {!isSuccess ? (
          <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-sm font-medium">Full Name *</label>
                <Input 
                  id="name"
                  placeholder="John Doe" 
                  className="bg-secondary/30" 
                  required
                  value={name}
                  onChange={e => setName(e.target.value)}
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-sm font-medium">Work Email *</label>
                <Input 
                  id="email"
                  type="email" 
                  placeholder="john@company.com" 
                  className="bg-secondary/30" 
                  required
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                />
              </div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label htmlFor="company" className="text-sm font-medium">Company Name</label>
                <Input 
                  id="company"
                  placeholder="Acme Corp" 
                  className="bg-secondary/30" 
                  value={company}
                  onChange={e => setCompany(e.target.value)}
                />
              </div>
              <div className="flex flex-col gap-2 relative">
                <label htmlFor="service" className="text-sm font-medium">Services Requested *</label>
                <div 
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  className="flex min-h-10 w-full items-center justify-between rounded-md border border-input bg-secondary/30 px-3 py-2 text-sm ring-offset-background cursor-pointer"
                >
                  <span className={services.length > 0 ? "text-foreground" : "text-muted-foreground"}>
                    {services.length > 0 ? `${services.length} selected` : "Select services..."}
                  </span>
                  <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className={`transition-transform ${dropdownOpen ? 'rotate-180' : ''}`}><path d="M3.13523 6.15803C3.3241 5.95657 3.64052 5.94637 3.84197 6.13523L7.5 9.56464L11.158 6.13523C11.3595 5.94637 11.6759 5.95657 11.8648 6.15803C12.0536 6.35949 12.0434 6.67591 11.842 6.86477L7.84197 10.6148C7.64964 10.7951 7.35036 10.7951 7.15803 10.6148L3.15803 6.86477C2.95657 6.67591 2.94637 6.35949 3.13523 6.15803Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path></svg>
                </div>
                
                {dropdownOpen && (
                  <div className="absolute top-[72px] left-0 w-full z-10 bg-card border border-border/40 rounded-xl shadow-xl max-h-64 overflow-y-auto p-2">
                    {[
                      { group: "Website Development", prefix: "Web", options: ["Starter", "Recommended", "Shopify / E-Commerce"] },
                      { group: "SEO Optimization", prefix: "SEO", options: ["Local SEO", "National SEO", "Ecommerce SEO"] },
                      { group: "Advertising", prefix: "Ads", options: ["Meta Ads", "Google Ads", "Combined Package"] },
                      { group: "Other Services", prefix: "", options: ["Email Marketing", "Graphic Designing", "Programmatic SEO", "Full Service Retainer"] }
                    ].map(category => (
                      <div key={category.group} className="mb-3 last:mb-0">
                        <div className="px-2 py-1.5 text-xs font-bold text-muted-foreground uppercase tracking-wider bg-secondary/20 rounded-md mb-1">
                          {category.group}
                        </div>
                        <div className="flex flex-col gap-1">
                          {category.options.map(opt => {
                            const val = category.prefix ? `${category.prefix} - ${opt}` : opt;
                            const isSelected = services.includes(val);
                            return (
                              <label key={val} className="flex items-center gap-2 px-2 py-1.5 rounded-md hover:bg-secondary/40 cursor-pointer transition-colors">
                                <input 
                                  type="checkbox" 
                                  className="w-4 h-4 rounded border-border text-primary focus:ring-primary/25 cursor-pointer accent-primary"
                                  checked={isSelected}
                                  onChange={() => toggleService(val)}
                                />
                                <span className="text-sm font-medium">{opt}</span>
                              </label>
                            );
                          })}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="text-sm font-medium">How can we help? *</label>
              <Textarea 
                id="message"
                rows={5} 
                placeholder="Tell us about your project..." 
                className="bg-secondary/30" 
                required
                value={message}
                onChange={e => setMessage(e.target.value)}
              />
            </div>

            {error && <p className="text-sm font-medium text-destructive">{error}</p>}

            <Button type="submit" size="lg" disabled={isSubmitting} className="mt-4 font-bold shadow-lg shadow-primary/20">
              {isSubmitting ? "Sending..." : "Send Message"}
            </Button>
          </form>
        ) : (
          <div className="py-16 flex flex-col items-center justify-center text-center space-y-4">
            <div className="w-20 h-20 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-500 mb-4">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h2 className="text-3xl font-bold font-heading">Inquiry Received</h2>
            <p className="text-muted-foreground max-w-sm text-lg">
              Thank you for reaching out, {name.split(" ")[0]}. Our team will review your project and contact you shortly.
            </p>
            <Button onClick={() => setIsSuccess(false)} variant="outline" className="mt-8">
              Send Another Message
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
