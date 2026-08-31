import React from 'react';
import { AuthProvider } from './context/AuthContext';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { TrustStrip } from './components/TrustStrip';
import { SolutionSection } from './components/SolutionSection';
import { HowItWorks } from './components/HowItWorks';
import { SellerLeadForm } from './components/SellerLeadForm';
import { CollectorSection } from './components/CollectorSection';
import { CollegeSection } from './components/CollegeSection';
import { ImpactSection } from './components/ImpactSection';
import { AboutSection } from './components/AboutSection';
import { FAQSection } from './components/FAQSection';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { AuthModal } from './components/AuthModal';
import { UserBookingsModal } from './components/UserBookingsModal';

export default function App() {
  return (
    <AuthProvider>
      <div className="min-h-screen bg-white text-[#17201B] flex flex-col selection:bg-[#D4A574]/30 selection:text-[#1A5C3A]">
        {/* 1. Sticky Navigation with User Auth & Booking Triggers */}
        <Navbar />

        {/* Main Content Flow */}
        <main className="flex-grow">
          {/* 2. Hero Section */}
          <HeroSection />

          {/* 3. Value & Trust Strip */}
          <TrustStrip />

          {/* 4. Solution Pillars */}
          <SolutionSection />

          {/* 5. How It Works */}
          <HowItWorks />

          {/* 6. Seller Lead / Booking Form */}
          <SellerLeadForm />

          {/* 7. Collector & Recycler Network */}
          <CollectorSection />

          {/* 8. College / Organization B2B Section */}
          <CollegeSection />

          {/* 9. Circular Impact & Materials */}
          <ImpactSection />

          {/* 10. About YourScraper Mission */}
          <AboutSection />

          {/* 11. FAQ Accordion */}
          <FAQSection />

          {/* 12. Final Conversion CTA */}
          <FinalCTA />
        </main>

        {/* 13. Footer */}
        <Footer />

        {/* Dynamic Modals */}
        <AuthModal />
        <UserBookingsModal />
      </div>
    </AuthProvider>
  );
}
