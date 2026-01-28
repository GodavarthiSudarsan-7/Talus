import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { FeaturedIn } from '@/components/FeaturedIn';
import { Testimonials } from '@/components/Testimonials';
import { HowItWorks } from '@/components/HowItWorks';
import { Features } from '@/components/Features';
import { Mission } from '@/components/Mission';
import { FAQ } from '@/components/FAQ';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <FeaturedIn />
        <Testimonials />
        <HowItWorks />
        <Features />
        <Mission />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
