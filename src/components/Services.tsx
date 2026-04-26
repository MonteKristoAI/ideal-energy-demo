"use client";
import { ArrowUpRight } from 'lucide-react';

const solutions = [
  {
    number: '01',
    title: 'Energy Procurement',
    description: 'Secure competitive energy rates with long-term price stability and protection from market volatility.',
    image: '/procurement.png'
  },
  {
    number: '02',
    title: 'Cost Reduction',
    description: 'Identify systemic inefficiencies and significantly reduce overall operational energy expenses.',
    image: '/cost.png'
  },
  {
    number: '03',
    title: 'Energy Efficiency',
    description: 'Optimize facilities and systems to lower energy consumption and enhance structural performance.',
    image: '/efficiency.png'
  },
  {
    number: '04',
    title: 'Sustainability Solutions',
    description: 'Implement strategic renewable energy assets to aggressively reduce environmental impact.',
    image: '/sustainability.png'
  }
];

export function Services() {
  return (
    <section id="solutions" className="py-32 bg-[#0F1115] relative border-t border-white/5">
      <div className="container mx-auto px-6 max-w-7xl">
        
        {/* Header Section - Editorial Style */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-24 gap-12">
          <div className="max-w-2xl">
            <span className="text-white/40 uppercase tracking-[0.2em] text-xs font-semibold mb-6 block">
              Capabilities
            </span>
            <h2 className="text-4xl md:text-5xl font-heading font-light text-white tracking-tight leading-tight">
              Our Energy Solutions
            </h2>
          </div>
          <div className="max-w-md">
            <p className="text-white/50 text-base font-light leading-relaxed">
              We engineer sophisticated commercial energy strategies designed to aggressively reduce operational costs while maximizing facility performance and asset value.
            </p>
          </div>
        </div>

        {/* Grid Section - Architectural / Swiss Design */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-t border-l border-white/10">
          {solutions.map((solution, index) => (
            <div 
              key={index}
              className="group relative border-r border-b border-white/10 p-8 lg:p-10 transition-colors duration-700 hover:bg-white/[0.02] flex flex-col h-full"
            >
              {/* Image Container */}
              <div className="w-full aspect-[4/3] overflow-hidden mb-12 relative bg-black/20">
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/0 transition-colors duration-700 z-10 mix-blend-overlay"></div>
                <img 
                  src={solution.image} 
                  alt={solution.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-all duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)]"
                />
              </div>

              {/* Number Label */}
              <div className="flex justify-between items-start mb-16">
                <span className="text-white/20 font-heading text-lg font-light group-hover:text-white/50 transition-colors duration-500">
                  {solution.number}
                </span>
                <ArrowUpRight className="w-5 h-5 text-white/0 group-hover:text-white/40 transition-all duration-500 -translate-x-4 translate-y-4 group-hover:translate-x-0 group-hover:translate-y-0" strokeWidth={1} />
              </div>
              
              {/* Content */}
              <div className="mt-auto">
                <h3 className="text-xl font-heading font-normal text-white mb-4 tracking-wide group-hover:text-white/90 transition-colors">
                  {solution.title}
                </h3>
                <p className="text-white/40 font-light leading-relaxed text-sm">
                  {solution.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
