import { Navbar } from '../../components/Navbar';
import { Contact } from '../../components/Contact';
import { Footer } from '../../components/Footer';

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#050505]">
      <Navbar />
      <main className="flex-grow pt-10 flex flex-col">
        <Contact />
        {/* Full Width Google Maps */}
        <div className="w-full h-[400px] md:h-[500px] mt-auto relative z-10 border-t border-white/5 grayscale-[0.8] opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-700">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d110825.21558230232!2d-95.70014295!3d29.77196015!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640d0bd1c944733%3A0xc644b94eb477e682!2sEnergy%20Corridor%2C%20Houston%2C%20TX!5e0!3m2!1sen!2sus!4v1714240500000!5m2!1sen!2sus" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen={false} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Ideal Energy Headquarters"
          ></iframe>
        </div>
      </main>
      <Footer />
    </div>
  );
}
