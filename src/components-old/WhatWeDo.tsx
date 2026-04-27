"use client";
export function WhatWeDo() {
  return (
    <section className="relative py-32 md:py-48 flex items-center justify-center overflow-hidden">
      {/* Parallax Background Image */}
      <div 
        className="absolute inset-0 z-0 bg-[url('/what-we-do-bg.png')] bg-cover bg-center bg-fixed bg-no-repeat"
      ></div>
      
      {/* Dark Luxury Overlay */}
      <div className="absolute inset-0 z-10 bg-[#050505]/85 mix-blend-multiply"></div>
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#050505] via-transparent to-[#050505]/40"></div>

      <div className="container mx-auto px-6 max-w-5xl relative z-20 text-center">
        <span className="text-white/40 uppercase tracking-[0.3em] text-xs font-semibold mb-8 block">
          Our Mission
        </span>
        
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-heading font-light text-white tracking-tight leading-[1.1] mb-12">
          We bridge the gap between <span className="font-normal text-white/90">sustainability</span> and <span className="font-normal text-white/90">profitability.</span>
        </h2>
        
        <p className="text-white/50 text-lg md:text-xl font-light leading-relaxed max-w-3xl mx-auto mb-24">
          Ideal Energy transforms commercial real estate into high-performing energy assets. We navigate the complexities of procurement, efficiency, and renewable integration so you can focus on scaling your business.
        </p>

        {/* Premium Statistics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 border-t border-white/10 pt-16">
          <div className="flex flex-col items-center">
            <span className="text-5xl font-heading font-light text-white mb-4">$50M+</span>
            <span className="text-white/40 text-sm uppercase tracking-widest">Energy Savings</span>
          </div>
          <div className="flex flex-col items-center border-t md:border-t-0 md:border-l border-white/10 pt-8 md:pt-0">
            <span className="text-5xl font-heading font-light text-white mb-4">150+</span>
            <span className="text-white/40 text-sm uppercase tracking-widest">Facilities Optimized</span>
          </div>
          <div className="flex flex-col items-center border-t md:border-t-0 md:border-l border-white/10 pt-8 md:pt-0">
            <span className="text-5xl font-heading font-light text-white mb-4">100%</span>
            <span className="text-white/40 text-sm uppercase tracking-widest">Carbon Offset</span>
          </div>
        </div>
      </div>
    </section>
  );
}
