"use client";
import { motion } from 'framer-motion';
import { Star, ArrowRight } from 'lucide-react';

const testimonials = [
  {
    quote: "Ideal Energy engineered a system that completely eliminated our peak demand penalties. The installation was flawless and the ROI was realized a full 18 months ahead of projections.",
    author: "M. R.",
    title: "Chief Operating Officer",
    company: "National Logistics Provider"
  },
  {
    quote: "Their team executed a complex 2MW installation on our active manufacturing facility without a single hour of operational downtime. Professionalism at the highest level.",
    author: "D. S.",
    title: "Director of Facilities",
    company: "Tier-1 Automotive Manufacturer"
  },
  {
    quote: "Not only did they offset our entire carbon footprint, but the battery storage integration has protected us from grid instability in a highly volatile market.",
    author: "A. K.",
    title: "VP of Sustainability",
    company: "Fortune 500 Data Center"
  }
];

export function SocialProof() {
  return (
    <section className="py-32 bg-[#050505] relative border-t border-white/5 overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-white/[0.02] rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        
        {/* Header Section with CTA */}
        <div className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <span className="text-white/40 uppercase tracking-[0.2em] text-xs font-semibold mb-6 block">
              Client Testimonials
            </span>
            <h2 className="text-4xl md:text-5xl font-heading font-light text-white tracking-tight leading-tight">
              What our partners say.
            </h2>
          </div>
          <div className="pb-2">
            <a 
              href="https://www.google.com/maps/place/Monte+Kristo+AI+Solutions/@44.815344,20.4224682,11z/data=!3m1!4b1!4m6!3m5!1s0x641b554a5edae90b:0x71d1045098ba2018!8m2!3d44.815344!4d20.4224682!16s%2Fg%2F11y_s0lmhg?entry=ttu&g_ep=EgoyMDI2MDQyMi4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-6 py-3 bg-white/[0.02] border border-white/20 text-white font-medium uppercase tracking-widest text-xs rounded-full hover:border-yellow-400 hover:text-yellow-400 hover:bg-yellow-400/5 transition-all duration-300"
            >
              Leave a Review <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Premium Glassmorphic Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="group relative bg-white/[0.02] backdrop-blur-sm border border-white/[0.05] p-8 md:p-10 rounded-3xl flex flex-col justify-between hover:bg-white/[0.04] hover:border-white/[0.1] hover:-translate-y-2 transition-all duration-500"
            >
              <div className="mb-8">
                {/* 5 Stars for immediate "Testimonial" recognition */}
                <div className="flex gap-1 mb-8">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                
                {/* The Quote */}
                <p className="text-white/60 font-light leading-relaxed text-lg">
                  "{item.quote}"
                </p>
              </div>

              {/* Author Block with Initials Avatar */}
              <div className="flex items-center gap-4 mt-auto pt-8 border-t border-white/5">
                <div className="w-12 h-12 rounded-full bg-white/[0.03] border border-white/10 flex items-center justify-center text-white/50 font-heading text-sm">
                  {item.author.replace(/[^A-Z]/g, '')}
                </div>
                <div className="flex flex-col">
                  <span className="text-white/90 font-medium text-sm tracking-wide">
                    {item.title}
                  </span>
                  <span className="text-white/40 text-xs mt-0.5">
                    {item.company}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
