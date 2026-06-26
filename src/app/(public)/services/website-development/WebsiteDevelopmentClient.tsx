"use client";
import React, { useRef, useEffect } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Code, LayoutTemplate, Smartphone, Gauge, Shield, Zap, Search, ChevronRight, Star } from "lucide-react";

export default function WebsiteDevelopmentClient() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end end"] });
  
  // Floating laptop 3D effect
  const [mousePosition, setMousePosition] = React.useState({ x: 0, y: 0 });
  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const x = (clientX / window.innerWidth - 0.5) * 20;
    const y = (clientY / window.innerHeight - 0.5) * -20;
    setMousePosition({ x, y });
  };

  return (
    <div 
      ref={containerRef}
      className="min-h-screen bg-[#050816] text-[#CBD5E1] font-sans overflow-hidden selection:bg-[#8B5CF6] selection:text-white"
      onMouseMove={handleMouseMove}
    >
      {/* Dynamic Background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-[#6D5DFE]/10 blur-[120px]" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] rounded-full bg-[#06B6D4]/10 blur-[120px]" />
      </div>

      {/* Hero Section */}
      <section className="relative z-10 lg:min-h-[85vh] flex items-center pt-12 md:pt-16 pb-16 overflow-hidden">
        {/* Floating Ambient Objects */}
        <motion.div 
          animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }} 
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 right-1/4 w-24 h-24 rounded-2xl bg-gradient-to-br from-[#8B5CF6]/30 to-[#06B6D4]/30 backdrop-blur-3xl border border-white/10 hidden lg:block"
          style={{ transformStyle: 'preserve-3d' }}
        />
        <motion.div 
          animate={{ y: [0, 30, 0], scale: [1, 1.1, 1] }} 
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-1/4 right-1/3 w-32 h-32 rounded-full bg-gradient-to-br from-[#6D5DFE]/20 to-[#A855F7]/20 blur-xl hidden lg:block"
        />

        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="max-w-2xl"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8">
                <span className="w-2 h-2 rounded-full bg-[#06B6D4] shadow-[0_0_10px_#06B6D4]" />
                <span className="text-xs font-bold text-[#E2E8F0] tracking-widest uppercase">Premium Agency Grade</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-[1.1] tracking-tight">
                Premium Websites <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6D5DFE] via-[#8B5CF6] to-[#06B6D4]">
                  Engineered For Growth.
                </span>
              </h1>
              
              <p className="text-base md:text-lg text-[#94A3B8] mb-10 leading-relaxed max-w-xl">
                We design and develop high-ticket, futuristic web experiences that convert visitors into high-paying clients. Say goodbye to generic templates.
              </p>

              <div className="flex flex-wrap items-center gap-5 mb-16">
                <Link href="/contact">
                  <button className="relative group overflow-hidden rounded-full p-[1px]">
                    <span className="absolute inset-0 bg-gradient-to-r from-[#6D5DFE] to-[#06B6D4] opacity-100 group-hover:opacity-80 transition-opacity duration-300"></span>
                    <div className="relative bg-[#0B1020] px-8 py-4 rounded-full flex items-center gap-2 group-hover:bg-transparent transition-colors duration-300">
                      <span className="font-bold text-white group-hover:text-white">Book Free Consultation</span>
                      <ArrowRight className="w-5 h-5 text-[#06B6D4] group-hover:text-white transition-colors" />
                    </div>
                  </button>
                </Link>
                <Link href="#portfolio" className="text-[#CBD5E1] font-medium hover:text-white transition-colors flex items-center gap-2">
                  View Portfolio
                </Link>
              </div>

              {/* Trust Metrics */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-white/10">
                <div>
                  <div className="text-xl font-bold text-white">250+</div>
                  <div className="text-xs text-[#94A3B8] uppercase tracking-wider mt-1">Clients</div>
                </div>
                <div>
                  <div className="text-xl font-bold text-white">500+</div>
                  <div className="text-xs text-[#94A3B8] uppercase tracking-wider mt-1">Projects</div>
                </div>
                <div>
                  <div className="text-xl font-bold text-white">98%</div>
                  <div className="text-xs text-[#94A3B8] uppercase tracking-wider mt-1">Satisfaction</div>
                </div>
                <div>
                  <div className="text-xl font-bold text-white">10+</div>
                  <div className="text-xs text-[#94A3B8] uppercase tracking-wider mt-1">Years</div>
                </div>
              </div>
            </motion.div>

            {/* Right: Interactive Mockup */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="relative hidden lg:flex justify-center items-center h-[600px] perspective-1000"
            >
              <motion.div 
                className="relative w-full max-w-[800px]"
                animate={{ rotateX: mousePosition.y, rotateY: mousePosition.x }}
                transition={{ type: "spring", stiffness: 50, damping: 20 }}
              >
                <img 
                  src="/images/website/hero-image.png" 
                  alt="Premium Website Mockup" 
                  className="w-full h-auto drop-shadow-[0_0_50px_rgba(109,93,254,0.4)]" 
                />
                
                {/* Floating Performance Badge */}
                <motion.div 
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="absolute bottom-12 -right-4 p-4 bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 shadow-2xl"
                >
                  <div className="flex items-center gap-4 mb-2">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#6D5DFE] to-[#06B6D4] flex items-center justify-center">
                      <Gauge className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="text-white font-bold text-sm">Performance</div>
                      <div className="text-[#06B6D4] text-xs font-mono">99/100</div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-32 relative z-10 bg-[#0B1020]">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">Our Core Services</h2>
            <p className="text-[#94A3B8] text-base">We deliver enterprise-grade digital solutions tailored to elevate your brand.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Code, title: "Website Development", desc: "Custom-coded, high-performance websites built with React and Next.js." },
              { icon: LayoutTemplate, title: "Ecommerce Development", desc: "Scalable storefronts engineered to maximize your conversion rates." },
              { icon: Smartphone, title: "Custom Web Apps", desc: "Complex SaaS platforms and web applications tailored to your business." },
              { icon: Zap, title: "Landing Pages", desc: "Conversion-focused landing pages designed for high-ticket offers." },
              { icon: Gauge, title: "Website Redesign", desc: "Modernize your outdated website with our premium UI/UX overhaul." },
              { icon: Shield, title: "Maintenance & Support", desc: "24/7 security monitoring, updates, and dedicated technical support." }
            ].map((srv, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -10 }}
                className="group relative p-[1px] rounded-3xl overflow-hidden bg-[#111827]"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative bg-[#0B1020] h-full p-8 rounded-[23px] border border-white/5 group-hover:border-[#6D5DFE]/30 transition-colors">
                  <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:bg-[#6D5DFE]/10 group-hover:scale-110 transition-all duration-300">
                    <srv.icon className="w-6 h-6 text-[#06B6D4]" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-3">{srv.title}</h3>
                  <p className="text-[#94A3B8] text-sm leading-relaxed">{srv.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section id="portfolio" className="py-32 relative z-10">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-3">Featured Work</h2>
              <p className="text-[#94A3B8] text-base max-w-xl">A glimpse into our recent premium web transformations.</p>
            </div>
            <Link href="/portfolio" className="text-[#06B6D4] hover:text-white font-bold flex items-center gap-2 transition-colors">
              View All Projects <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              { title: "Lumina Interior Design", tag: "Interior Design Website", res: "+210% Leads", bg: "from-amber-900/40" },
              { title: "Aura Luxury", tag: "Ecommerce Brand", res: "3x Revenue", bg: "from-purple-900/40" },
              { title: "Nova Health", tag: "Healthcare Portal", res: "99.9% Uptime", bg: "from-blue-900/40" },
              { title: "The Pinnacle", tag: "Luxury Real Estate", res: "+180% Engagement", bg: "from-emerald-900/40" }
            ].map((proj, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="group relative h-[450px] rounded-[2rem] overflow-hidden cursor-pointer"
              >
                <div className={`absolute inset-0 bg-gradient-to-t ${proj.bg} via-[#050816]/80 to-[#050816] z-10`} />
                <div className="absolute inset-0 bg-[#111827] z-0" />
                {/* Fallback pattern instead of images */}
                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/20 via-transparent to-transparent group-hover:scale-110 transition-transform duration-700 z-0" />
                
                <div className="absolute inset-0 p-10 flex flex-col justify-end z-20">
                  <div className="mb-auto self-end px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-bold">
                    {proj.res}
                  </div>
                  <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <p className="text-[#06B6D4] text-sm font-bold mb-2 uppercase tracking-wider">{proj.tag}</p>
                    <h3 className="text-2xl font-bold text-white mb-4">{proj.title}</h3>
                    <div className="w-12 h-12 rounded-full bg-white text-[#050816] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <ArrowRight className="w-5 h-5 -rotate-45" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="py-32 relative z-10 bg-[#0B1020]">
        <div className="container mx-auto px-6 lg:px-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-16 text-center">Our Execution Framework</h2>
          
          <div className="relative">
            <div className="absolute top-1/2 left-0 right-0 h-[2px] bg-white/5 -translate-y-1/2 hidden md:block" />
            <div className="grid md:grid-cols-5 gap-8">
              {["Discovery", "Strategy", "Design", "Development", "Launch"].map((step, i) => (
                <div key={i} className="relative z-10 flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-[#111827] border-2 border-[#6D5DFE] flex items-center justify-center text-white font-bold text-lg mb-4 shadow-[0_0_20px_rgba(109,93,254,0.2)]">
                    0{i+1}
                  </div>
                  <h3 className="text-white font-bold text-base">{step}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats / Results Case Study */}
      <section className="py-32 relative z-10">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="bg-gradient-to-r from-[#111827] to-[#050816] rounded-[3rem] border border-white/5 p-12 lg:p-20 shadow-2xl">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-white mb-4 leading-tight">The difference between a website and a <span className="text-[#06B6D4]">Sales Engine.</span></h2>
                <p className="text-[#94A3B8] text-base mb-8">We don't just write code; we engineer user journeys that maximize conversions. Here is what happens when you switch to our premium architecture.</p>
                <div className="space-y-6">
                  <div className="flex items-center gap-4 border-b border-white/10 pb-6">
                    <div className="text-3xl font-black text-[#8B5CF6]">+350%</div>
                    <div className="text-[#CBD5E1] font-medium">Increase in Qualified Leads</div>
                  </div>
                  <div className="flex items-center gap-4 border-b border-white/10 pb-6">
                    <div className="text-3xl font-black text-[#06B6D4]">+210%</div>
                    <div className="text-[#CBD5E1] font-medium">Boost in Conversion Rate</div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="text-3xl font-black text-[#6D5DFE]">+180%</div>
                    <div className="text-[#CBD5E1] font-medium">Overall Revenue Growth</div>
                  </div>
                </div>
              </div>
              <div className="relative aspect-square rounded-2xl bg-[#0B1020] border border-white/10 flex items-center justify-center p-8">
                {/* Abstract Chart Graphic */}
                <div className="absolute inset-0 opacity-20 bg-[url('/noise.png')] mix-blend-overlay" />
                <div className="w-full h-full flex items-end justify-between gap-4">
                  {[20, 35, 50, 40, 70, 85, 100].map((h, i) => (
                    <motion.div 
                      key={i}
                      initial={{ height: 0 }}
                      whileInView={{ height: `${h}%` }}
                      transition={{ duration: 1, delay: i * 0.1 }}
                      className="w-full bg-gradient-to-t from-[#6D5DFE] to-[#06B6D4] rounded-t-md opacity-80"
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 relative z-10">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="relative rounded-[3rem] overflow-hidden bg-gradient-to-br from-[#6D5DFE] via-[#8B5CF6] to-[#06B6D4] p-16 md:p-24 text-center">
            <div className="absolute inset-0 bg-[url('/noise.png')] opacity-20 mix-blend-overlay" />
            <div className="relative z-10 max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-6 tracking-tight">Ready To Build Your Dream Website?</h2>
              <p className="text-white/80 text-lg mb-10">Stop losing clients to competitors with better websites. Elevate your brand today.</p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link href="/contact">
                  <button className="bg-[#050816] hover:bg-black text-white font-bold px-10 py-5 rounded-full text-lg shadow-2xl transition-transform hover:scale-105">
                    Book Free Consultation
                  </button>
                </Link>
                <button className="bg-white/20 hover:bg-white/30 backdrop-blur-md border border-white/30 text-white font-bold px-10 py-5 rounded-full text-lg transition-colors">
                  Schedule Call
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
