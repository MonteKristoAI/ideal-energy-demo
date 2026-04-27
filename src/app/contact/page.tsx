import { Navbar } from '../../components/Navbar';
import { Contact } from '../../components/Contact';
import { Footer } from '../../components/Footer';

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#050505]">
      <Navbar />
      <main className="flex-grow pt-10">
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
