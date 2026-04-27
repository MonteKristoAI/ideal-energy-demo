"use client";
import { ArrowRight } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="bg-[#050505] relative border-t border-white/5 py-32 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 right-1/4 w-[600px] h-[600px] bg-yellow-500/5 rounded-full blur-[150px] pointer-events-none -translate-y-1/2"></div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        
        <div className="flex flex-col lg:flex-row gap-20 lg:gap-32 items-center">
          
          {/* Left Side: Contact Info */}
          <div className="lg:w-1/2">
            <span className="text-white/40 uppercase tracking-[0.2em] text-xs font-semibold mb-6 block">
              Contact Us
            </span>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-heading font-light text-white tracking-tight leading-[1.1] mb-12">
              Ready to engineer your energy future?
            </h2>
            
            <div className="space-y-10 text-white/60 font-light">
              <div>
                <span className="block text-white/30 text-xs uppercase tracking-[0.2em] mb-3 font-semibold">Email</span>
                <a href="mailto:consulting@idealenergyllc.com" className="text-xl md:text-2xl hover:text-yellow-400 transition-colors">
                  consulting@idealenergyllc.com
                </a>
              </div>
              
              <div>
                <span className="block text-white/30 text-xs uppercase tracking-[0.2em] mb-3 font-semibold">Phone</span>
                <a href="tel:+18005550199" className="text-xl md:text-2xl hover:text-yellow-400 transition-colors">
                  +1 (800) 555-0199
                </a>
              </div>

              <div>
                <span className="block text-white/30 text-xs uppercase tracking-[0.2em] mb-3 font-semibold">Headquarters</span>
                <address className="text-xl md:text-2xl not-italic leading-relaxed">
                  100 Energy Corridor<br />
                  Suite 4500<br />
                  Houston, TX 77079
                </address>
              </div>
            </div>
          </div>

          {/* Right Side: Highly Visible Premium Form Card */}
          <div className="lg:w-1/2 w-full">
            <div className="bg-[#0A0A0A] border border-white/10 rounded-3xl p-10 md:p-14 shadow-2xl relative overflow-hidden">
              
              {/* Premium Top Border on the Card */}
              <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-yellow-500/50 via-yellow-500/10 to-transparent"></div>

              <form className="space-y-10" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div className="relative">
                    <input 
                      type="text" 
                      required
                      className="w-full bg-transparent border-b border-white/20 py-3 text-white text-lg focus:outline-none focus:border-yellow-400 transition-colors peer placeholder-transparent"
                      placeholder="Full Name"
                    />
                    <label className="absolute left-0 top-3 text-white/40 text-sm transition-all peer-focus:-top-6 peer-focus:text-xs peer-focus:text-yellow-400 peer-valid:-top-6 peer-valid:text-xs">
                      Full Name
                    </label>
                  </div>
                  <div className="relative">
                    <input 
                      type="text" 
                      required
                      className="w-full bg-transparent border-b border-white/20 py-3 text-white text-lg focus:outline-none focus:border-yellow-400 transition-colors peer placeholder-transparent"
                      placeholder="Company"
                    />
                    <label className="absolute left-0 top-3 text-white/40 text-sm transition-all peer-focus:-top-6 peer-focus:text-xs peer-focus:text-yellow-400 peer-valid:-top-6 peer-valid:text-xs">
                      Company
                    </label>
                  </div>
                </div>

                <div className="relative">
                  <input 
                    type="email" 
                    required
                    className="w-full bg-transparent border-b border-white/20 py-3 text-white text-lg focus:outline-none focus:border-yellow-400 transition-colors peer placeholder-transparent"
                    placeholder="Work Email"
                  />
                  <label className="absolute left-0 top-3 text-white/40 text-sm transition-all peer-focus:-top-6 peer-focus:text-xs peer-focus:text-yellow-400 peer-valid:-top-6 peer-valid:text-xs">
                    Work Email
                  </label>
                </div>

                <div className="relative">
                  <textarea 
                    required
                    rows={4}
                    className="w-full bg-transparent border-b border-white/20 py-3 text-white text-lg focus:outline-none focus:border-yellow-400 transition-colors peer placeholder-transparent resize-none"
                    placeholder="How can we help?"
                  ></textarea>
                  <label className="absolute left-0 top-3 text-white/40 text-sm transition-all peer-focus:-top-6 peer-focus:text-xs peer-focus:text-yellow-400 peer-valid:-top-6 peer-valid:text-xs">
                    How can we help?
                  </label>
                </div>

                <button 
                  type="submit"
                  className="group w-full flex items-center justify-between text-white hover:text-yellow-400 transition-colors duration-300 mt-6 pt-4 border-t border-white/5"
                >
                  <span className="uppercase tracking-widest text-sm font-semibold">
                    Send Message
                  </span>
                  <span className="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center group-hover:border-yellow-400/50 group-hover:bg-yellow-400/10 transition-all duration-300">
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform duration-300" />
                  </span>
                </button>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
