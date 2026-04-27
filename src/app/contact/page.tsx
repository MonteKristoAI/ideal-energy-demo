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
            src="https://maps.google.com/maps?q=100%20Energy%20Corridor%2C%20Suite%204500%2C%20Houston%2C%20TX%2077079&t=&z=14&ie=UTF8&iwloc=&output=embed" 
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
