"use client";
import { Navbar } from '../../components/Navbar';
import { Footer } from '../../components/Footer';
import { Contact } from '../../components/Contact';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight } from 'lucide-react';

const servicesData = [
  {
    id: 'procurement',
    title: 'Energy Procurement',
    subtitle: 'Market Intelligence & Stability',
    description: 'Secure competitive energy rates with long-term price stability and protection from market volatility.',
    extended: 'Our procurement strategies are designed to shield your bottom line from the unpredictable swings of the global energy market. We leverage our extensive network and deep market intelligence to structure bespoke power purchase agreements (PPAs). This proactive approach ensures that your operations remain cost-effective and fully isolated from unexpected spikes, giving you total financial predictability.',
    image: '/services/procurement.png'
  },
  {
    id: 'cost',
    title: 'Cost Reduction',
    subtitle: 'Systemic Optimization',
    description: 'Identify systemic inefficiencies and significantly reduce overall operational energy expenses.',
    extended: 'Every kilowatt wasted is capital lost. We deploy advanced auditing protocols to meticulously map your facility\'s energy fingerprint. By identifying and eliminating hidden inefficiencies, we implement targeted retrofits and demand-response strategies. The result is an immediate, verifiable drop in your operating expenses, turning previously sunk costs into reinvestment capital.',
    image: '/services/cost.png'
  },
  {
    id: 'efficiency',
    title: 'Energy Efficiency',
    subtitle: 'Intelligent Infrastructure',
    description: 'Optimize facilities and systems to lower energy consumption and enhance structural performance.',
    extended: 'True efficiency goes beyond simple LED retrofits. We engineer comprehensive building optimizations integrating smart sensors, automated HVAC controls, and intelligent load-balancing. Our systems learn from your daily operational cadences, dynamically adjusting energy flow to guarantee peak performance. We ensure your facility operates at maximum productivity while consuming the absolute minimum.',
    image: '/services/efficiency.png'
  },
  {
    id: 'sustainability',
    title: 'Sustainability Services',
    subtitle: 'Renewable Integration',
    description: 'Implement strategic renewable energy assets to aggressively reduce environmental impact.',
    extended: 'Sustainability is no longer a corporate buzzword; it is a critical business asset. We design and integrate heavy-duty renewable infrastructure, from commercial-scale solar arrays to high-capacity battery storage systems. By transitioning your facilities to resilient, green energy grids, we not only slash your carbon footprint but also secure lucrative tax incentives and elevate your brand equity.',
    image: '/services/sustainability.png'
  }
];

function ServiceSection({ service, index }: { service: typeof servicesData[0], index: number }) {
  const isEven = index % 2 === 0;
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);

  return (
    <section ref={ref} id={service.id} className="relative min-h-screen flex items-center overflow-hidden bg-[#050505]">
      {/* Full Width Parallax Image */}
      <motion.div style={{ y }} className="absolute inset-0 w-full h-[130%] -top-[15%]">
        <Image 
          src={service.image}
          alt={service.title}
          fill
          className="object-cover opacity-60"
          sizes="100vw"
        />
      </motion.div>

      {/* Heavy Gradient Fade */}
      {/* On Mobile: Dark gradient at the bottom where text sits */}
      {/* On Desktop: Dark gradient on the right (if isEven) or left (if odd) */}
      <div className={`absolute inset-0 z-10 bg-gradient-to-t ${isEven ? 'md:bg-gradient-to-l' : 'md:bg-gradient-to-r'} from-[#050505] via-[#050505]/90 md:via-[#050505]/80 to-transparent`}></div>
      <div className="absolute inset-0 z-10 bg-black/10"></div>

      {/* Content Container */}
      <div className="container mx-auto px-6 max-w-7xl relative z-20 py-32 mt-[30vh] md:mt-0">
        <div className={`flex flex-col md:flex-row ${isEven ? 'md:justify-end' : 'md:justify-start'}`}>
          <div className="w-full md:w-1/2 lg:w-5/12">
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-20%" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="bg-[#050505]/40 md:bg-transparent p-8 md:p-0 rounded-3xl backdrop-blur-sm md:backdrop-blur-none border border-white/5 md:border-none"
            >
              <span className="text-yellow-400 text-sm uppercase tracking-widest font-semibold mb-6 block drop-shadow-md">
                {String(index + 1).padStart(2, '0')} // {service.subtitle}
              </span>
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-heading font-light text-white mb-8 leading-[1.1] drop-shadow-xl">
                {service.title}
              </h2>
              <div className="w-20 h-[2px] bg-yellow-400 mb-8 shadow-[0_0_15px_rgba(255,193,7,0.5)]"></div>
              <p className="text-white/90 font-light text-xl leading-relaxed mb-8 drop-shadow-md">
                {service.description}
              </p>
              <p className="text-white/50 font-light leading-relaxed mb-12 drop-shadow-md">
                {service.extended}
              </p>
              
              <a 
                href="/#quote" 
                className="group flex items-center gap-4 text-white hover:text-yellow-400 transition-colors duration-300 inline-flex"
              >
                <span className="uppercase tracking-widest text-sm font-semibold">
                  Get a Free Quote
                </span>
                <span className="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center group-hover:border-yellow-400/50 group-hover:bg-yellow-400/10 transition-all duration-300 backdrop-blur-md shadow-[0_0_20px_rgba(0,0,0,0.5)]">
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function ServicesPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#050505]">
      <Navbar />
      
      <main className="flex-grow">
        
        {/* Services Hero */}
        <section className="min-h-[70vh] flex items-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-yellow-500/10 rounded-full blur-[150px] pointer-events-none -translate-y-1/2"></div>
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-brand-secondary/5 rounded-full blur-[150px] pointer-events-none translate-y-1/2"></div>
          
          <div className="container mx-auto px-6 max-w-6xl relative z-10 text-center pt-32">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <span className="text-yellow-400 uppercase tracking-[0.4em] text-xs font-semibold mb-8 block">
                Enterprise Solutions
              </span>
              <h1 className="text-6xl md:text-8xl lg:text-9xl font-heading font-light text-white tracking-tighter leading-[1.05] mb-10">
                Engineered for <br/>
                <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/40">Impact.</span>
              </h1>
              <p className="text-white/60 text-xl md:text-2xl font-light max-w-3xl mx-auto leading-relaxed">
                We design sophisticated commercial energy strategies to aggressively reduce costs, maximize asset value, and guarantee operational resilience.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Dynamic Services Sections */}
        <div className="flex flex-col">
          {servicesData.map((service, index) => (
            <ServiceSection key={service.id} service={service} index={index} />
          ))}
        </div>
      </main>
      
      <Contact />
      <Footer />
    </div>
  );
}
