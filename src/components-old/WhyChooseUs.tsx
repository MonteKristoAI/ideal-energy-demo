"use client";
import { useState } from 'react';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';

const reasons = [
  {
    title: 'Financial Superiority',
    description: 'We don’t just install panels; we engineer financial assets. Maximize tax incentives, accelerate depreciation, and deliver an ROI that outperforms traditional market investments.',
    image: '/why-1.png'
  },
  {
    title: 'Zero Disruption',
    description: 'Your business cannot stop. Our installation methodology is surgically precise, executed in phases that guarantee 100% operational continuity for your facility.',
    image: '/why-2.png'
  },
  {
    title: 'Tier-1 Hardware',
    description: 'We refuse to compromise. We exclusively source Tier-1 Bloomberg-rated modules and industrial-grade inverters, ensuring a 25-year lifespan with minimal degradation.',
    image: '/why-3.png'
  },
  {
    title: 'Holistic Integration',
    description: 'We look beyond the roof. By integrating BESS (Battery Energy Storage Systems) and advanced monitoring, we protect you from peak demand charges and grid instability.',
    image: '/why-4.png'
  }
];

export function WhyChooseUs() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(0);

  return (
    <section className="py-32 bg-[#050505] relative border-t border-white/5">
      <div className="container mx-auto px-6 max-w-7xl">
        
        {/* Section Header */}
        <div className="mb-20">
          <span className="text-white/40 uppercase tracking-[0.2em] text-xs font-semibold mb-6 block">
            The Advantage
          </span>
          <h2 className="text-4xl md:text-5xl font-heading font-light text-white tracking-tight leading-tight">
            Why partner with us.
          </h2>
        </div>

        {/* Interactive Image Accordion */}
        <div className="flex flex-col lg:flex-row h-[800px] lg:h-[600px] gap-4 w-full">
          {reasons.map((reason, index) => {
            const isHovered = hoveredIndex === index;
            
            return (
              <div
                key={index}
                onMouseEnter={() => setHoveredIndex(index)}
                className={`relative h-1/4 lg:h-full rounded-2xl overflow-hidden cursor-pointer group transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] will-change-[flex] ${
                  isHovered ? 'lg:flex-[3] flex-[2]' : 'flex-1'
                }`}
              >
                {/* Background Image */}
                <div className="absolute inset-0 bg-black">
                  <Image 
                    src={reason.image} 
                    alt={reason.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className={`object-cover mix-blend-lighten transition-all duration-700 ease-out will-change-transform ${
                      isHovered ? 'scale-105 opacity-70 grayscale-0' : 'scale-110 opacity-30 grayscale'
                    }`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
                  
                  {/* Subtle Border overlay */}
                  <div className={`absolute inset-0 border border-white/10 rounded-2xl transition-colors duration-500 ${isHovered ? 'border-white/30' : ''}`}></div>
                </div>

                {/* Content Container */}
                <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-white/40 font-heading text-lg font-light">
                      0{index + 1}
                    </span>
                    <div
                      className={`transition-all duration-500 transform ${
                        isHovered ? 'opacity-100 translate-x-0 translate-y-0' : 'opacity-0 -translate-x-2 translate-y-2'
                      }`}
                    >
                      <ArrowUpRight className="w-6 h-6 text-white/60" strokeWidth={1.5} />
                    </div>
                  </div>
                  
                  <h3 className={`text-2xl md:text-3xl font-heading font-light text-white mb-4 transition-all duration-500 ${isHovered ? '' : 'truncate lg:whitespace-normal lg:break-words'}`}>
                    {reason.title}
                  </h3>
                  
                  <div
                    className={`overflow-hidden transition-all duration-500 ease-in-out ${
                      isHovered ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <p className="text-white/60 font-light leading-relaxed text-sm md:text-base max-w-sm mt-2">
                      {reason.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
