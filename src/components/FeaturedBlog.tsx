"use client";
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export function FeaturedBlog() {
  return (
    <section className="py-32 bg-[#0A0A0A] relative border-t border-white/5 overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        
        {/* Header Section */}
        <div className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <span className="text-white/40 uppercase tracking-[0.2em] text-xs font-semibold mb-6 block">
              Energy Intelligence
            </span>
            <h2 className="text-4xl md:text-5xl font-heading font-light text-white tracking-tight leading-tight">
              Latest insights.
            </h2>
          </div>
          <div className="pb-2">
            <a 
              href="#"
              className="inline-flex items-center gap-3 px-6 py-3 bg-white/[0.02] border border-white/20 text-white font-medium uppercase tracking-widest text-xs rounded-full hover:border-yellow-400 hover:text-yellow-400 hover:bg-yellow-400/5 transition-all duration-300"
            >
              View All Insights <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Featured Article Split Layout */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center group cursor-pointer"
        >
          {/* Image Container */}
          <div className="w-full lg:w-3/5 relative rounded-3xl overflow-hidden aspect-[4/3] lg:aspect-[16/10]">
            <div className="absolute inset-0 bg-black/30 group-hover:bg-transparent transition-colors duration-700 z-10"></div>
            <img 
              src="/blog-image.png" 
              alt="BESS Technology" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)]"
            />
          </div>

          {/* Content Container */}
          <div className="w-full lg:w-2/5 flex flex-col justify-center">
            <div className="flex items-center gap-4 mb-6">
              <span className="text-yellow-400 uppercase tracking-widest text-xs font-semibold">
                Market Analysis
              </span>
              <span className="w-1 h-1 rounded-full bg-white/20"></span>
              <span className="text-white/40 text-sm">
                October 24, 2026
              </span>
            </div>

            <h3 className="text-3xl md:text-4xl font-heading font-light text-white mb-6 leading-[1.3] group-hover:text-yellow-400 transition-colors duration-500">
              Rooftop Real Estate: Turning Dead Space into Revenue Streams
            </h3>

            <p className="text-white/50 font-light leading-relaxed text-lg mb-10">
              For industrial facilities, the roof is the most underutilized asset. We break down the financial architecture of how massive commercial solar arrays are transforming passive warehouses into aggressive revenue generators, independent of grid volatility.
            </p>

            <div className="flex items-center gap-3 text-white font-medium uppercase tracking-widest text-sm group-hover:text-yellow-400 transition-colors duration-300">
              Read Article <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-500" />
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
