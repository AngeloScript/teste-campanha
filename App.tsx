import React from 'react';
import { Hero } from './components/Hero';
import { TestimonialCard } from './components/TestimonialCard';
import { Gallery } from './components/Gallery';
import { Benefits } from './components/Benefits';
import { Offer } from './components/Offer';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';
import { StickyCTA } from './components/StickyCTA';

function App() {
  const scrollToOffer = () => {
    const offerSection = document.getElementById('offer');
    if (offerSection) {
      offerSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="font-sans text-gray-900 bg-white min-h-screen">
      <Hero scrollToOffer={scrollToOffer} />
      
      <Gallery />
      <Benefits />

      {/* Featured Testimonial Section - Moved to before Offer */}
      <section className="bg-gray-50 py-8 px-4 border-t border-gray-200">
        <div className="max-w-4xl mx-auto">
            <h3 className="text-center text-gray-500 text-xs uppercase tracking-widest font-bold mb-6">
                Veja o que estão falando no Facebook
            </h3>
            <TestimonialCard />
        </div>
      </section>

      <Offer id="offer" />
      <FAQ />

      <Footer />
      <StickyCTA onClick={scrollToOffer} />
    </div>
  );
}

export default App;