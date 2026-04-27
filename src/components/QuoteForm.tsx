"use client";
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ArrowLeft, CheckCircle2, CheckSquare, Square } from 'lucide-react';

const services = [
  "Energy Procurement",
  "Cost Reduction Analysis",
  "Hardware Engineering",
  "Sustainability & Carbon Offset"
];

const spendLevels = [
  "Under $10k / month",
  "$10k - $50k / month",
  "$50k - $250k / month",
  "$250k+ / month"
];

export function QuoteForm() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    services: [] as string[],
    spend: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: ""
  });

  const handleNext = () => setStep((s) => s + 1);
  const handlePrev = () => setStep((s) => s - 1);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you would send formData to an API here
    setStep(4); // Move to success step
  };

  const isStepValid = () => {
    if (step === 1) return formData.services.length > 0;
    if (step === 2) return formData.spend !== "";
    if (step === 3) return formData.firstName && formData.lastName && formData.email && formData.phone;
    return true;
  };

  const toggleService = (service: string) => {
    setFormData(prev => ({
      ...prev,
      services: prev.services.includes(service) 
        ? prev.services.filter(s => s !== service)
        : [...prev.services, service]
    }));
  };

  return (
    <section id="quote" className="py-32 md:py-48 bg-[#050505] relative border-t border-white/5 overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 right-0 w-[800px] h-[800px] bg-yellow-500/5 rounded-full blur-[150px] pointer-events-none translate-x-1/2"></div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
          
          {/* Left Side: Copy */}
          <div className="lg:w-5/12">
            <span className="text-white/40 uppercase tracking-[0.2em] text-xs font-semibold mb-6 block">
              Initiate Discovery
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-light text-white tracking-tight leading-[1.1] mb-8">
              Request a comprehensive energy audit.
            </h2>
            <p className="text-white/50 text-lg font-light leading-relaxed mb-12">
              Provide us with basic details regarding your facility and operational goals. Our senior engineers will prepare a preliminary financial projection prior to our first consultation.
            </p>
            
            {/* Step Indicators */}
            {step < 4 && (
              <div className="flex gap-4">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="flex flex-col gap-2">
                    <div className={`h-[2px] w-12 transition-colors duration-500 ${step >= i ? 'bg-yellow-400' : 'bg-white/10'}`}></div>
                    <span className={`text-xs font-semibold tracking-widest uppercase transition-colors duration-500 ${step >= i ? 'text-yellow-400' : 'text-white/30'}`}>
                      Step 0{i}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Right Side: Interactive Form (Now wrapped in a highly visible premium card) */}
          <div className="lg:w-7/12 w-full">
            <div className="bg-[#0A0A0A] border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden min-h-[500px] flex flex-col justify-center">
              
              {/* Premium Top Border on the Card */}
              <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-yellow-500/50 via-yellow-500/10 to-transparent"></div>

              <AnimatePresence mode="wait">
                
                {/* STEP 1: Service Selection (Multi-select) */}
                {step === 1 && (
                  <motion.div
                    key="step1"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.5 }}
                    className="w-full"
                  >
                    <h3 className="text-2xl font-heading text-white mb-2">What are your primary objectives?</h3>
                    <p className="text-white/40 mb-8 text-sm">Select all that apply.</p>

                    <div className="grid grid-cols-1 gap-4 mb-10">
                      {services.map((service) => {
                        const isSelected = formData.services.includes(service);
                        return (
                          <button
                            key={service}
                            onClick={() => toggleService(service)}
                            className={`p-5 text-left border rounded-xl flex items-center gap-4 transition-all duration-300 ${
                              isSelected 
                                ? 'border-yellow-400 bg-yellow-400/5 text-white' 
                                : 'border-white/10 text-white/50 hover:border-white/30 hover:text-white/80 hover:bg-white/[0.02]'
                            }`}
                          >
                            {isSelected ? (
                              <CheckSquare className="w-5 h-5 text-yellow-400 flex-shrink-0" />
                            ) : (
                              <Square className="w-5 h-5 text-white/20 flex-shrink-0" />
                            )}
                            <span className="block font-medium tracking-wide">{service}</span>
                          </button>
                        );
                      })}
                    </div>
                    <div className="flex justify-end">
                      <button 
                        onClick={handleNext}
                        disabled={!isStepValid()}
                        className="flex items-center gap-3 px-8 py-4 bg-white text-black font-semibold rounded-full hover:bg-yellow-400 disabled:opacity-50 disabled:hover:bg-white transition-colors duration-300"
                      >
                        Continue <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </motion.div>
                )}

                {/* STEP 2: Spend Selection (Single select, manual advance) */}
                {step === 2 && (
                  <motion.div
                    key="step2"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.5 }}
                    className="w-full"
                  >
                    <h3 className="text-2xl font-heading text-white mb-8">What is your estimated monthly energy spend?</h3>
                    <div className="flex flex-col gap-4 mb-10">
                      {spendLevels.map((spend) => {
                        const isSelected = formData.spend === spend;
                        return (
                          <button
                            key={spend}
                            onClick={() => setFormData({ ...formData, spend })}
                            className={`p-5 text-left border rounded-xl flex items-center justify-between transition-all duration-300 ${
                              isSelected 
                                ? 'border-yellow-400 bg-yellow-400/5 text-white' 
                                : 'border-white/10 text-white/50 hover:border-white/30 hover:text-white/80 hover:bg-white/[0.02]'
                            }`}
                          >
                            <span className="block font-medium tracking-wide">{spend}</span>
                            {isSelected && <div className="w-3 h-3 rounded-full bg-yellow-400"></div>}
                          </button>
                        );
                      })}
                    </div>
                    <div className="flex justify-between items-center">
                      <button onClick={handlePrev} className="text-white/50 hover:text-white flex items-center gap-2 transition-colors">
                        <ArrowLeft className="w-4 h-4" /> Back
                      </button>
                      <button 
                        onClick={handleNext}
                        disabled={!isStepValid()}
                        className="flex items-center gap-3 px-8 py-4 bg-white text-black font-semibold rounded-full hover:bg-yellow-400 disabled:opacity-50 disabled:hover:bg-white transition-colors duration-300"
                      >
                        Continue <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </motion.div>
                )}

                {/* STEP 3: Contact Info */}
                {step === 3 && (
                  <motion.div
                    key="step3"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.5 }}
                    className="w-full"
                  >
                    <h3 className="text-2xl font-heading text-white mb-8">Where should we send the audit details?</h3>
                    <form onSubmit={handleSubmit} className="space-y-6 mb-10">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div className="relative">
                          <input 
                            type="text" 
                            required
                            value={formData.firstName}
                            onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                            className="w-full bg-transparent border-b border-white/20 py-3 text-white focus:outline-none focus:border-yellow-400 transition-colors peer placeholder-transparent"
                            placeholder="First Name"
                          />
                          <label className="absolute left-0 top-3 text-white/40 text-sm transition-all peer-focus:-top-4 peer-focus:text-xs peer-focus:text-yellow-400 peer-valid:-top-4 peer-valid:text-xs">
                            First Name
                          </label>
                        </div>
                        <div className="relative">
                          <input 
                            type="text" 
                            required
                            value={formData.lastName}
                            onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                            className="w-full bg-transparent border-b border-white/20 py-3 text-white focus:outline-none focus:border-yellow-400 transition-colors peer placeholder-transparent"
                            placeholder="Last Name"
                          />
                          <label className="absolute left-0 top-3 text-white/40 text-sm transition-all peer-focus:-top-4 peer-focus:text-xs peer-focus:text-yellow-400 peer-valid:-top-4 peer-valid:text-xs">
                            Last Name
                          </label>
                        </div>
                      </div>
                      
                      <div className="relative mt-8">
                        <input 
                          type="email" 
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({...formData, email: e.target.value})}
                          className="w-full bg-transparent border-b border-white/20 py-3 text-white focus:outline-none focus:border-yellow-400 transition-colors peer placeholder-transparent"
                          placeholder="Work Email"
                        />
                        <label className="absolute left-0 top-3 text-white/40 text-sm transition-all peer-focus:-top-4 peer-focus:text-xs peer-focus:text-yellow-400 peer-valid:-top-4 peer-valid:text-xs">
                          Work Email
                        </label>
                      </div>

                      <div className="relative mt-8">
                        <input 
                          type="tel" 
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({...formData, phone: e.target.value})}
                          className="w-full bg-transparent border-b border-white/20 py-3 text-white focus:outline-none focus:border-yellow-400 transition-colors peer placeholder-transparent"
                          placeholder="Phone Number"
                        />
                        <label className="absolute left-0 top-3 text-white/40 text-sm transition-all peer-focus:-top-4 peer-focus:text-xs peer-focus:text-yellow-400 peer-valid:-top-4 peer-valid:text-xs">
                          Phone Number
                        </label>
                      </div>
                    </form>
                    
                    <div className="flex justify-between items-center">
                      <button onClick={handlePrev} className="text-white/50 hover:text-white flex items-center gap-2 transition-colors">
                        <ArrowLeft className="w-4 h-4" /> Back
                      </button>
                      <button 
                        onClick={handleSubmit}
                        disabled={!isStepValid()}
                        className="flex items-center gap-3 px-8 py-4 bg-yellow-400 text-black font-bold tracking-wide uppercase text-sm rounded-full hover:bg-white disabled:opacity-50 disabled:hover:bg-yellow-400 transition-colors duration-300"
                      >
                        Submit Request
                      </button>
                    </div>
                  </motion.div>
                )}

                {/* STEP 4: Success Message */}
                {step === 4 && (
                  <motion.div
                    key="step4"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="w-full h-full flex flex-col items-center justify-center text-center py-12"
                  >
                    <div className="w-20 h-20 bg-yellow-400/10 rounded-full flex items-center justify-center mb-8">
                      <CheckCircle2 className="w-10 h-10 text-yellow-400" />
                    </div>
                    <h3 className="text-3xl font-heading text-white mb-4">Request Successfully Submitted</h3>
                    <p className="text-white/50 font-light text-lg max-w-md mx-auto">
                      Thank you, {formData.firstName}. Our senior engineering team is reviewing your details and will contact you at {formData.email} within 24 hours.
                    </p>
                    <button 
                      onClick={() => {
                        setFormData({ services: [], spend: "", firstName: "", lastName: "", email: "", phone: "" });
                        setStep(1);
                      }}
                      className="mt-12 text-yellow-400 hover:text-white transition-colors text-sm uppercase tracking-widest font-semibold"
                    >
                      Submit another request
                    </button>
                  </motion.div>
                )}

              </AnimatePresence>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
