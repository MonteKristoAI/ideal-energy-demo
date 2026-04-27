"use client";
import { Bot, X, MessageSquare, Send } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';

export function Chatbot() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    if (pathname === '/') {
      timeout = setTimeout(() => {
        setIsOpen(true);
      }, 5000);
    } else {
      setIsOpen(false);
    }
    
    return () => {
      if (timeout) clearTimeout(timeout);
    };
  }, [pathname]);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end pointer-events-none">
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
            className="bg-white shadow-[0_10px_40px_rgba(0,0,0,0.5)] rounded-2xl overflow-hidden w-[320px] max-w-[calc(100vw-3rem)] mb-4 pointer-events-auto relative border border-black/5"
          >
            {/* Header */}
            <div className="bg-yellow-400 p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                  <Bot className="w-5 h-5 text-black" />
                </div>
                <div>
                  <h3 className="font-bold text-black text-sm leading-tight">Max</h3>
                  <p className="text-black/70 text-xs">Ideal Energy Assistant</p>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="text-black/50 hover:text-black transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Chat Body */}
            <div className="p-5 bg-zinc-50">
              <div className="flex items-end gap-2 mb-4">
                <div className="w-6 h-6 rounded-full bg-yellow-400 flex items-center justify-center shrink-0 mb-1">
                  <Bot className="w-4 h-4 text-black" />
                </div>
                <div className="bg-white border border-black/5 rounded-2xl rounded-bl-sm p-3 shadow-sm text-sm text-zinc-800 leading-relaxed max-w-[85%]">
                  Welcome! My name is Max. I'm here to answer any questions you have about our energy systems and procurement strategies.
                </div>
              </div>
            </div>

            {/* Fake input to make it look like a real chatbot */}
            <div className="p-3 bg-white border-t border-black/5">
              <div className="bg-zinc-100 rounded-full px-4 py-2 flex items-center justify-between opacity-70 cursor-not-allowed">
                <span className="text-zinc-400 text-sm">Reply to Max...</span>
                <Send className="w-4 h-4 text-zinc-300" />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 bg-yellow-400 hover:bg-yellow-300 rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(255,193,7,0.4)] transition-transform hover:scale-105 pointer-events-auto"
      >
        {isOpen ? <X className="w-6 h-6 text-black" /> : <MessageSquare className="w-6 h-6 text-black" />}
      </button>
    </div>
  );
}
