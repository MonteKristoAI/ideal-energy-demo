"use client";
import { useRef, useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const steps = [
  {
    number: '01',
    title: 'Energy Audit & Discovery',
    description: 'We conduct a comprehensive analysis of your facility’s energy consumption, utility tariffs, and operational infrastructure to identify high-value optimization opportunities.'
  },
  {
    number: '02',
    title: 'Engineering & Strategy',
    description: 'Our engineers design a bespoke energy system—integrating solar, storage, and efficiency measures—maximizing ROI while adhering to your exact architectural constraints.'
  },
  {
    number: '03',
    title: 'Procurement & Build',
    description: 'Leveraging our global supply chain, we secure premium-tier hardware and execute the installation with zero disruption to your daily commercial operations.'
  },
  {
    number: '04',
    title: 'Commissioning & Management',
    description: 'Post-installation, the system is fully commissioned, integrated with the grid, and monitored 24/7 to guarantee performance and immediate cost reductions.'
  }
];

export function HowItWorks() {
  const sectionRef = useRef<HTMLElement>(null);
  
  // Motion values to track the exact mouse position
  const mouseX = useMotionValue(-1000); // Start way off-screen
  const mouseY = useMotionValue(-1000);

  // Springs add a "delay" and smoothness for the trailing glow
  const springX = useSpring(mouseX, { stiffness: 150, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 150, damping: 20 });

  useEffect(() => {
    const handlePointerMove = (e: PointerEvent) => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      mouseX.set(e.clientX - rect.left);
      mouseY.set(e.clientY - rect.top);
    };

    const section = sectionRef.current;
    if (section) {
      section.addEventListener('pointermove', handlePointerMove as EventListener, { passive: true });
    }

    return () => {
      if (section) {
        section.removeEventListener('pointermove', handlePointerMove as EventListener);
      }
    };
  }, [mouseX, mouseY]);

  return (
    <section 
      ref={sectionRef}
      className="py-32 bg-[#050505] relative border-t border-white/5 overflow-hidden"
    >
      {/* Background Lightning Flash 
          Total cycle is 2.7s. 
          The flash happens in the last 0.75s (approx 28% of the timeline).
          So from 0 to 0.72 it's completely dark.
      */}
      <motion.div
        className="absolute inset-0 z-0 bg-[url('/lightning-bg.png')] bg-cover bg-center pointer-events-none mix-blend-lighten"
        animate={{ opacity: [0, 0, 0.4, 0, 0.2, 0] }}
        transition={{ 
          duration: 2.7, 
          times: [0, 0.72, 0.79, 0.86, 0.93, 1], 
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* 
        Trailing Yellow Plasma Energy 
      */}
      <motion.div 
        className="absolute top-0 left-0 pointer-events-none z-0 mix-blend-screen"
        style={{
          x: springX,
          y: springY,
          translateX: "-50%",
          translateY: "-50%"
        }}
      >
        <motion.div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[250px] h-[250px] bg-yellow-500/10 rounded-full blur-[60px]"
          animate={{ opacity: [0.6, 1, 0.7, 0.9, 0.5, 1], scale: [0.95, 1.05, 0.98, 1.02, 0.95, 1] }}
          transition={{ repeat: Infinity, duration: 0.15, ease: "linear" }}
        />
        <motion.div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80px] h-[80px] bg-yellow-300/20 rounded-full blur-[30px]"
          animate={{ opacity: [0.8, 1, 0.7, 1], scale: [0.9, 1.1, 0.95, 1] }}
          transition={{ repeat: Infinity, duration: 0.1, ease: "linear" }}
        />
      </motion.div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        
        {/* Section Header */}
        <div className="mb-24 md:w-1/2">
          <span className="text-white/40 uppercase tracking-[0.2em] text-xs font-semibold mb-6 block">
            Methodology
          </span>
          <h2 className="text-4xl md:text-5xl font-heading font-light text-white tracking-tight leading-tight">
            How we execute.
          </h2>
        </div>

        {/* Vertical Process Layout */}
        <div className="max-w-4xl ml-auto">
          {steps.map((step, index) => (
            <div 
              key={index}
              className={`relative pl-12 md:pl-24 pb-24 group ${index !== steps.length - 1 ? 'border-l border-white/10' : 'border-l border-transparent pb-0'}`}
            >
              {/* Timeline Indicator */}
              <div className="absolute top-0 left-[-4px] w-[7px] h-[7px] bg-white/20 rounded-full group-hover:bg-white group-hover:scale-150 transition-all duration-700"></div>

              {/* Connecting line glow effect on hover */}
              {index !== steps.length - 1 && (
                <div className="absolute top-0 left-[-1px] w-[1px] h-0 bg-white/30 group-hover:h-full transition-all duration-1000 ease-out"></div>
              )}

              <div className="flex flex-col md:flex-row gap-4 md:gap-16 items-start -mt-3 relative z-20">
                <span className="text-4xl md:text-6xl font-heading font-light text-white/10 group-hover:text-white/40 transition-colors duration-700 w-20">
                  {step.number}
                </span>
                
                <div className="flex-1 mt-2 md:mt-1">
                  <h3 className="text-2xl font-heading font-normal text-white mb-4 tracking-wide group-hover:text-white transition-colors duration-500">
                    {step.title}
                  </h3>
                  <p className="text-white/40 font-light leading-relaxed text-base md:text-lg max-w-2xl group-hover:text-white/60 transition-colors duration-700">
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
