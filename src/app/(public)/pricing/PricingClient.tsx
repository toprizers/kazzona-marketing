"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, ChevronRight, Zap } from "lucide-react";
import Link from "next/link";
import type { PricingConfig } from "@/lib/pricing-defaults";

export default function PricingClient({ 
  config: originalConfig,
  filterSectionId,
  hideHeader = false 
}: { 
  config: PricingConfig;
  filterSectionId?: string;
  hideHeader?: boolean;
}) {
  const config = {
    ...originalConfig,
    sections: filterSectionId 
      ? originalConfig.sections.filter(s => s.id === filterSectionId)
      : originalConfig.sections
  };

  const [activeSectionId, setActiveSectionId] = useState(config.sections[0]?.id || "");
  const [activeCategoryIds, setActiveCategoryIds] = useState<Record<string, string>>(() => {
    const initial: Record<string, string> = {};
    config.sections.forEach(section => {
      if (section.categories.length > 0) {
        initial[section.id] = section.categories[0].id;
      }
    });
    return initial;
  });

  const activeSection = config.sections.find(s => s.id === activeSectionId);
  const activeCategoryId = activeCategoryIds[activeSectionId];
  const activeCategory = activeSection?.categories.find(c => c.id === activeCategoryId);

  if (config.sections.length === 0) {
    return null;
  }

  return (
    <div className={`bg-background relative overflow-hidden ${hideHeader ? 'py-12' : 'min-h-screen pt-32 pb-24'}`}>
      {/* Background Elements */}
      {!hideHeader && (
        <>
          <div className="absolute top-0 inset-x-0 h-[500px] bg-gradient-to-b from-primary/10 via-background to-background pointer-events-none" />
          <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-primary/5 blur-[120px] pointer-events-none" />
          <div className="absolute top-[20%] right-[-10%] w-[40%] h-[40%] rounded-full bg-accent/5 blur-[120px] pointer-events-none" />
        </>
      )}

      <div className="container max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header Section */}
        {!hideHeader && (
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-6">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-semibold"
            >
              <Zap className="w-4 h-4" />
              <span>Transparent Pricing</span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold tracking-tight"
            >
              Scale Your Business With <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Premium Solutions</span>
            </motion.h1>
            
            {config.bannerText && (
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-lg md:text-xl text-muted-foreground"
              >
                {config.bannerText}
              </motion.p>
            )}
          </div>
        )}

        {/* Section Tabs */}
        {config.sections.length > 1 && (
          <div className="flex justify-center mb-12">
            <div className="inline-flex bg-secondary/50 p-1.5 rounded-2xl border border-border/50 backdrop-blur-sm">
              {config.sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => setActiveSectionId(section.id)}
                  className={`relative px-6 py-3 rounded-xl text-sm md:text-base font-semibold transition-all duration-300 ${
                    activeSectionId === section.id 
                      ? "text-white" 
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {activeSectionId === section.id && (
                    <motion.div 
                      layoutId="activeSection"
                      className="absolute inset-0 bg-gradient-to-r from-primary to-orange-600 rounded-xl shadow-lg shadow-primary/20"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                  <span className="relative z-10">{section.title}</span>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Category Tabs */}
        {activeSection && activeSection.categories.length > 1 && (
          <div className="flex justify-center mb-16">
            <div className="inline-flex flex-wrap justify-center gap-2">
              {activeSection.categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategoryIds(prev => ({ ...prev, [activeSection.id]: category.id }))}
                  className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 border ${
                    activeCategoryId === category.id
                      ? "bg-primary/10 border-primary text-primary shadow-[0_0_15px_rgba(99,102,241,0.2)]"
                      : "bg-background border-border text-muted-foreground hover:border-primary/50 hover:text-foreground"
                  }`}
                >
                  {category.title}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Pricing Cards */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategoryId}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8"
          >
            {activeCategory?.plans.map((plan, idx) => (
              <div 
                key={idx}
                className={`relative flex flex-col bg-card/40 backdrop-blur-sm border rounded-3xl p-8 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl ${
                  plan.popular 
                    ? "border-primary/50 shadow-xl shadow-primary/10" 
                    : "border-border/50 hover:border-border"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 inset-x-0 flex justify-center">
                    <span className="bg-gradient-to-r from-primary to-accent text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider shadow-lg shadow-primary/20">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="mb-8 text-center">
                  <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                  <div className="flex justify-center items-baseline gap-2">
                    <span className="text-4xl font-extrabold tracking-tight">{plan.price}</span>
                  </div>
                </div>

                <div className="flex-1 flex flex-col items-center">
                  <ul className="space-y-4">
                    {plan.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-center gap-3 justify-center text-center">
                        <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                        <span className="text-sm text-muted-foreground">{feature.text}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 pt-8 border-t border-border/50">
                  <Link 
                    href={config.ctaHref}
                    className={`w-full rounded-xl py-4 font-bold text-base transition-all duration-300 flex items-center justify-center ${
                      plan.popular 
                        ? "bg-gradient-to-r from-primary to-orange-600 text-white hover:shadow-lg hover:shadow-primary/25" 
                        : "bg-secondary/80 hover:bg-secondary text-foreground"
                    }`}
                  >
                    {config.ctaText} <ChevronRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>

      </div>
    </div>
  );
}
