import { Navbar } from '../components/Navbar';
import { Hero } from '../components/Hero';
import { WhatWeDo } from '../components/WhatWeDo';
import { Services } from '../components/Services';
import { HowItWorks } from '../components/HowItWorks';
import { WhyChooseUs } from '../components/WhyChooseUs';
import { SocialProof } from '../components/SocialProof';
import { QuoteForm } from '../components/QuoteForm';
import { FeaturedBlog } from '../components/FeaturedBlog';
import { AboutUs } from '../components/AboutUs';
import { Footer } from '../components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <WhatWeDo />
        <Services />
        <HowItWorks />
        <WhyChooseUs />
        <SocialProof />
        <QuoteForm />
        <AboutUs />
        <FeaturedBlog />
      </main>
      <Footer />
    </div>
  );
}
