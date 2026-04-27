"use client";
import { motion } from 'framer-motion';
import Image from 'next/image';
import { ArrowRight, Activity, ShieldCheck } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-20 overflow-hidden bg-[#050505]">
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0 bg-black/40 z-10"></div>
        {/* Deep dark gradient from left and bottom to blend with the site */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-[#050505]/80 to-transparent z-10"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent z-10"></div>
        
        {/* Using CSS animation for the zoom to prevent Next.js hydration jumps */}
        <div className="absolute inset-0 animate-[slowZoom_10s_ease-out_forwards]">
          <Image 
            src="/hero-bg.png" 
            alt="Massive Commercial Solar Farm at Dusk"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-20 max-w-7xl">
        <div className="max-w-4xl">
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="inline-block mb-8"
          >
            <span className="text-yellow-400 uppercase tracking-[0.3em] text-xs font-semibold">
              // Corporate Energy Engineering
            </span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-6xl md:text-8xl lg:text-[7.5rem] font-heading font-light text-white tracking-tighter leading-[0.95] mb-8"
          >
            We engineer <br />
            <span className="text-yellow-400 italic font-medium pr-4">revenue.</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-xl md:text-2xl text-white/50 font-light max-w-2xl leading-relaxed mb-12"
          >
            Transform your commercial property from a passive liability into an aggressive, grid-independent revenue generator.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row items-center gap-6"
          >
            <a href="/#quote" className="group w-full sm:w-auto flex items-center justify-center gap-4 bg-yellow-400 text-black px-8 py-4 rounded-full font-semibold uppercase tracking-widest text-xs transition-all hover:bg-yellow-300">
              Get a Free Quote
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="/contact" className="group w-full sm:w-auto flex items-center justify-center gap-4 bg-white/5 text-white border border-white/10 px-8 py-4 rounded-full font-semibold uppercase tracking-widest text-xs transition-all hover:bg-white/10 hover:border-white/20">
              Contact Us
            </a>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.8 }}
            className="mt-20 pt-10 border-t border-white/10 flex flex-col sm:flex-row gap-10"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full border border-yellow-400/20 bg-yellow-400/5 flex items-center justify-center">
                <Activity className="w-5 h-5 text-yellow-400" />
              </div>
              <div>
                <div className="text-white font-medium uppercase tracking-widest text-xs mb-1">Guaranteed Output</div>
                <div className="text-white/40 text-sm font-light">Performance SLA included</div>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full border border-white/10 bg-white/5 flex items-center justify-center">
                <ShieldCheck className="w-5 h-5 text-white/60" />
              </div>
              <div>
                <div className="text-white font-medium uppercase tracking-widest text-xs mb-1">Zero Capex Models</div>
                <div className="text-white/40 text-sm font-light">Off-balance sheet financing</div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
