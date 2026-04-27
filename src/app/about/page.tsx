import { Navbar } from '../../components/Navbar';
import { Footer } from '../../components/Footer';
import { Contact } from '../../components/Contact';
import Image from 'next/image';

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#050505]">
      <Navbar />
      
      <main className="flex-grow">
        {/* Premium Hero Section */}
        <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image 
              src="/about_hero.png" 
              alt="Ideal Energy Corporate Strategy" 
              fill
              priority
              className="object-cover opacity-60 mix-blend-luminosity"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/80 to-transparent"></div>
          </div>
          
          <div className="container mx-auto px-6 max-w-5xl relative z-10 text-center">
            <span className="text-yellow-400 uppercase tracking-[0.3em] text-xs font-semibold mb-6 block">
              Our Heritage & Vision
            </span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-light text-white tracking-tight leading-[1.1] mb-8">
              A Legacy of <br /><span className="font-semibold">Power.</span>
            </h1>
            <p className="text-white/60 text-lg md:text-xl font-light max-w-2xl mx-auto leading-relaxed">
              We engineer complex energy systems that transform commercial liabilities into guaranteed revenue streams. Welcome to the future of energy strategy.
            </p>
          </div>
        </section>

        {/* Mission & Vision Section */}
        <section className="py-24 md:py-32 relative border-t border-white/5">
          <div className="container mx-auto px-6 max-w-6xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <div>
                <h2 className="text-4xl md:text-5xl font-heading font-light text-white mb-8">
                  We don't just reduce costs. <br />
                  <span className="text-yellow-400 font-semibold">We build resilient assets.</span>
                </h2>
                <div className="w-12 h-[1px] bg-yellow-500/50 mb-8"></div>
                <p className="text-white/50 font-light leading-relaxed text-lg mb-6">
                  Founded in 2012, Ideal Energy emerged from a simple realization: the commercial energy sector was stagnant, relying on outdated models that penalized high-consumption industries. 
                </p>
                <p className="text-white/50 font-light leading-relaxed text-lg">
                  We assembled a syndicate of elite engineers, financial strategists, and market analysts. Our mission was to decode energy markets and leverage emerging hardware to completely isolate our clients from grid volatility. Today, we manage over 1.2GW of commercial energy assets nationwide.
                </p>
              </div>
              
              <div className="bg-[#0A0A0A] border border-white/10 rounded-3xl p-12 shadow-2xl relative">
                <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-yellow-500/0 via-yellow-500/50 to-yellow-500/0"></div>
                <h3 className="text-white font-heading text-2xl font-semibold mb-6">The Syndicate</h3>
                <ul className="space-y-8">
                  <li className="border-b border-white/5 pb-6">
                    <span className="block text-yellow-400 text-sm uppercase tracking-widest font-semibold mb-1">Energy Markets Division</span>
                    <span className="text-white/60 font-light">Navigating complex procurement contracts and executing real-time arbitrage.</span>
                  </li>
                  <li className="border-b border-white/5 pb-6">
                    <span className="block text-yellow-400 text-sm uppercase tracking-widest font-semibold mb-1">Systems Engineering</span>
                    <span className="text-white/60 font-light">Designing bespoke solar and high-capacity battery storage architecture.</span>
                  </li>
                  <li>
                    <span className="block text-yellow-400 text-sm uppercase tracking-widest font-semibold mb-1">Financial Strategy</span>
                    <span className="text-white/60 font-light">Structuring zero-capex financing and optimizing tax incentives.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Our Approach / Company Values Section */}
        <section className="py-24 md:py-32 relative bg-[#070707] overflow-hidden">
          {/* Subtle Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-yellow-500/5 rounded-full blur-[120px] pointer-events-none"></div>
          
          <div className="container mx-auto px-6 max-w-5xl relative z-10 text-center">
            <span className="text-white/40 uppercase tracking-[0.2em] text-xs font-semibold mb-6 block">
              Core Philosophy
            </span>
            <h2 className="text-4xl md:text-5xl font-heading font-light text-white mb-12">
              Engineering <span className="font-semibold text-yellow-400">Excellence</span> Meets Financial <span className="font-semibold text-yellow-400">Strategy</span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
              <div className="bg-[#0A0A0A] p-8 rounded-2xl border border-white/5 hover:border-white/10 transition-colors">
                <div className="w-12 h-12 rounded-full bg-yellow-400/10 flex items-center justify-center mb-6">
                  <div className="w-4 h-4 bg-yellow-400 rounded-sm rotate-45"></div>
                </div>
                <h4 className="text-white font-heading text-xl font-semibold mb-4">Zero Downtime</h4>
                <p className="text-white/50 font-light text-sm leading-relaxed">
                  Our microgrid architecture ensures seamless transitions during grid failures. Your operations never stop, regardless of external volatility.
                </p>
              </div>
              
              <div className="bg-[#0A0A0A] p-8 rounded-2xl border border-white/5 hover:border-white/10 transition-colors">
                <div className="w-12 h-12 rounded-full bg-yellow-400/10 flex items-center justify-center mb-6">
                  <div className="w-4 h-4 bg-yellow-400 rounded-sm rotate-45"></div>
                </div>
                <h4 className="text-white font-heading text-xl font-semibold mb-4">Predictive Analytics</h4>
                <p className="text-white/50 font-light text-sm leading-relaxed">
                  Utilizing proprietary AI models, we forecast energy market fluctuations and automatically shift your consumption to the lowest-cost periods.
                </p>
              </div>

              <div className="bg-[#0A0A0A] p-8 rounded-2xl border border-white/5 hover:border-white/10 transition-colors">
                <div className="w-12 h-12 rounded-full bg-yellow-400/10 flex items-center justify-center mb-6">
                  <div className="w-4 h-4 bg-yellow-400 rounded-sm rotate-45"></div>
                </div>
                <h4 className="text-white font-heading text-xl font-semibold mb-4">Capital Preservation</h4>
                <p className="text-white/50 font-light text-sm leading-relaxed">
                  We deploy capital so you don't have to. Through strategic power purchase agreements, we upgrade your infrastructure with zero upfront cost.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="py-24 md:py-32 bg-[#020202] border-t border-white/5">
          <div className="container mx-auto px-6 max-w-4xl text-center mb-20">
            <span className="text-white/30 uppercase tracking-[0.2em] text-xs font-semibold mb-4 block">
              Evolution
            </span>
            <h2 className="text-4xl md:text-5xl font-heading font-light text-white mb-6">
              A Decade of Innovation
            </h2>
          </div>
          
          <div className="container mx-auto px-6 max-w-5xl">
            <div className="space-y-16 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-white/10 before:to-transparent">
              
              <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white/10 bg-[#050505] group-hover:border-yellow-400/50 group-hover:bg-yellow-400/10 transition-colors shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-xl z-10">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                </div>
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 bg-[#0A0A0A] rounded-2xl border border-white/5 shadow-lg group-hover:border-white/10 transition-colors">
                  <div className="text-yellow-400 text-sm uppercase tracking-widest font-bold mb-2">2012</div>
                  <h4 className="text-xl text-white font-heading font-semibold mb-3">The Genesis</h4>
                  <p className="text-white/50 font-light leading-relaxed text-sm">Founded to disrupt traditional commercial energy procurement. We secured our first Fortune 500 contract within 8 months.</p>
                </div>
              </div>

              <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white/10 bg-[#050505] group-hover:border-yellow-400/50 group-hover:bg-yellow-400/10 transition-colors shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-xl z-10">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                </div>
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 bg-[#0A0A0A] rounded-2xl border border-white/5 shadow-lg group-hover:border-white/10 transition-colors">
                  <div className="text-yellow-400 text-sm uppercase tracking-widest font-bold mb-2">2018</div>
                  <h4 className="text-xl text-white font-heading font-semibold mb-3">Scale & Infrastructure</h4>
                  <p className="text-white/50 font-light leading-relaxed text-sm">Pioneered the integration of heavy-duty battery storage with existing logistical frameworks, offering unprecedented grid independence.</p>
                </div>
              </div>

              <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white/10 bg-[#050505] group-hover:border-yellow-400/50 group-hover:bg-yellow-400/10 transition-colors shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-xl z-10">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                </div>
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 bg-[#0A0A0A] rounded-2xl border border-white/5 shadow-lg group-hover:border-white/10 transition-colors">
                  <div className="text-yellow-400 text-sm uppercase tracking-widest font-bold mb-2">2024</div>
                  <h4 className="text-xl text-white font-heading font-semibold mb-3">The Next Era</h4>
                  <p className="text-white/50 font-light leading-relaxed text-sm">Deploying advanced Machine Learning models for predictive energy trading and microgrid management. The smart grid is here.</p>
                </div>
              </div>

            </div>
          </div>
        </section>

      </main>
      
      <Contact />
      <Footer />
    </div>
  );
}
