import { Navbar } from '../../components/Navbar';
import { Footer } from '../../components/Footer';
import { Contact } from '../../components/Contact';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

const servicesData = [
  {
    id: 'procurement',
    title: 'Energy Procurement',
    subtitle: 'Market Intelligence & Stability',
    description: 'Secure competitive energy rates with long-term price stability and protection from market volatility.',
    extended: 'Our procurement strategies are designed to shield your bottom line from the unpredictable swings of the global energy market. We leverage our extensive network and deep market intelligence to structure bespoke power purchase agreements (PPAs). This proactive approach ensures that your operations remain cost-effective and fully isolated from unexpected spikes, giving you total financial predictability.',
    image: '/procurement.png'
  },
  {
    id: 'cost',
    title: 'Cost Reduction',
    subtitle: 'Systemic Optimization',
    description: 'Identify systemic inefficiencies and significantly reduce overall operational energy expenses.',
    extended: 'Every kilowatt wasted is capital lost. We deploy advanced auditing protocols to meticulously map your facility\'s energy fingerprint. By identifying and eliminating hidden inefficiencies, we implement targeted retrofits and demand-response strategies. The result is an immediate, verifiable drop in your operating expenses, turning previously sunk costs into reinvestment capital.',
    image: '/cost.png'
  },
  {
    id: 'efficiency',
    title: 'Energy Efficiency',
    subtitle: 'Intelligent Infrastructure',
    description: 'Optimize facilities and systems to lower energy consumption and enhance structural performance.',
    extended: 'True efficiency goes beyond simple LED retrofits. We engineer comprehensive building optimizations integrating smart sensors, automated HVAC controls, and intelligent load-balancing. Our systems learn from your daily operational cadences, dynamically adjusting energy flow to guarantee peak performance. We ensure your facility operates at maximum productivity while consuming the absolute minimum.',
    image: '/efficiency.png'
  },
  {
    id: 'sustainability',
    title: 'Sustainability Services',
    subtitle: 'Renewable Integration',
    description: 'Implement strategic renewable energy assets to aggressively reduce environmental impact.',
    extended: 'Sustainability is no longer a corporate buzzword; it is a critical business asset. We design and integrate heavy-duty renewable infrastructure, from commercial-scale solar arrays to high-capacity battery storage systems. By transitioning your facilities to resilient, green energy grids, we not only slash your carbon footprint but also secure lucrative tax incentives and elevate your brand equity.',
    image: '/sustainability.png'
  }
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#050505]">
      <Navbar />
      
      <main className="flex-grow">
        
        {/* Services Hero */}
        <section className="pt-40 pb-20 md:pt-48 md:pb-24 border-b border-white/5 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-yellow-500/5 rounded-full blur-[150px] pointer-events-none -translate-y-1/2"></div>
          <div className="container mx-auto px-6 max-w-5xl relative z-10 text-center">
            <span className="text-yellow-400 uppercase tracking-[0.3em] text-xs font-semibold mb-6 block">
              Our Capabilities
            </span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-light text-white tracking-tight leading-[1.1] mb-8">
              Engineered for <span className="font-semibold">Impact.</span>
            </h1>
            <p className="text-white/60 text-lg md:text-xl font-light max-w-2xl mx-auto leading-relaxed">
              We design sophisticated commercial energy strategies to aggressively reduce costs, maximize asset value, and guarantee operational resilience.
            </p>
          </div>
        </section>

        {/* Zig-Zag Services Sections */}
        <div className="flex flex-col">
          {servicesData.map((service, index) => {
            const isEven = index % 2 === 0;
            return (
              <section 
                key={service.title} 
                id={service.id}
                className={`py-24 md:py-32 relative border-b border-white/5 scroll-mt-24 ${isEven ? 'bg-[#0A0A0A]' : 'bg-[#020202]'}`}
              >
                <div className="container mx-auto px-6 max-w-7xl">
                  <div className={`flex flex-col lg:flex-row gap-16 lg:gap-24 items-center ${isEven ? '' : 'lg:flex-row-reverse'}`}>
                    
                    {/* Image Box */}
                    <div className="w-full lg:w-1/2">
                      <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border border-white/10 shadow-2xl group">
                        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-colors duration-700 z-10 mix-blend-overlay"></div>
                        <Image 
                          src={service.image} 
                          alt={service.title} 
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)]"
                          sizes="(max-width: 1024px) 100vw, 50vw"
                        />
                      </div>
                    </div>

                    {/* Text Box */}
                    <div className="w-full lg:w-1/2">
                      <span className="text-yellow-400 text-sm uppercase tracking-widest font-semibold mb-4 block">
                        {service.subtitle}
                      </span>
                      <h2 className="text-4xl md:text-5xl font-heading font-light text-white mb-8">
                        {service.title}
                      </h2>
                      <p className="text-white/70 font-light text-xl leading-relaxed mb-6">
                        {service.description}
                      </p>
                      <p className="text-white/40 font-light leading-relaxed mb-12">
                        {service.extended}
                      </p>
                      
                      {/* CTA Button linking to Home Quote Section */}
                      <a 
                        href="/#quote" 
                        className="group flex items-center gap-4 text-white hover:text-yellow-400 transition-colors duration-300 inline-flex"
                      >
                        <span className="uppercase tracking-widest text-sm font-semibold">
                          Get a Free Quote
                        </span>
                        <span className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:border-yellow-400/50 group-hover:bg-yellow-400/10 transition-all duration-300 shadow-lg">
                          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                        </span>
                      </a>
                    </div>
                    
                  </div>
                </div>
              </section>
            );
          })}
        </div>
      </main>
      
      <Contact />
      <Footer />
    </div>
  );
}
