"use client";
import { motion } from 'framer-motion';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

export function AboutUs() {
  return (
    <section className="bg-[#030303] relative border-t border-white/5 overflow-hidden">
      <div className="flex flex-col lg:flex-row min-h-[80vh]">
        
        {/* Left Side: Image Container */}
        <div className="lg:w-1/2 relative min-h-[500px] lg:min-h-full overflow-hidden group">
          <motion.div
            initial={{ scale: 1.1 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="absolute inset-0"
          >
            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-1000 z-10"></div>
            <Image 
              src="/about-us.png" 
              alt="Ideal Energy Boardroom" 
              fill
              className="object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-1000"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </motion.div>
        </div>

        {/* Right Side: Content */}
        <div className="lg:w-1/2 flex items-center bg-[#050505]">
          <div className="p-10 md:p-20 lg:p-24 xl:p-32 max-w-3xl">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="text-white/40 uppercase tracking-[0.2em] text-xs font-semibold mb-8 block">
                About Ideal Energy
              </span>
              
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-light text-white tracking-tight leading-[1.1] mb-10">
                A syndicate of engineers and financial strategists.
              </h2>
              
              <div className="w-12 h-[1px] bg-yellow-500/50 mb-10"></div>

              <div className="space-y-6 text-white/50 font-light leading-relaxed text-lg mb-16">
                <p>
                  We were founded on a singular premise: commercial energy is no longer just an operational necessity—it is the most underutilized financial asset on your balance sheet.
                </p>
                <p>
                  For over a decade, we have partnered with Fortune 500 companies, national logistics providers, and industrial manufacturers to design, procure, and execute energy systems that transform liabilities into guaranteed revenue streams.
                </p>
              </div>

              <button className="group flex items-center gap-4 text-white hover:text-yellow-400 transition-colors duration-300">
                <span className="uppercase tracking-widest text-sm font-medium">
                  Discover Our Heritage
                </span>
                <span className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:border-yellow-400/50 group-hover:bg-yellow-400/10 transition-all duration-300">
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </button>
            </motion.div>
          </div>
        </div>

      </div>
    </section>
  );
}
