import React from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { TrustStrip } from './components/TrustStrip';
import { ProblemSection } from './components/ProblemSection';
import { SolutionSection } from './components/SolutionSection';
import { HowItWorks } from './components/HowItWorks';
import { SellerLeadForm } from './components/SellerLeadForm';
import { CollectorSection } from './components/CollectorSection';
import { CollegeSection } from './components/CollegeSection';
import { ComingSoonRoadmap } from './components/ComingSoonRoadmap';
import { ImpactSection } from './components/ImpactSection';
import { AboutSection } from './components/AboutSection';
import { FAQSection } from './components/FAQSection';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white text-[#17201B] flex flex-col selection:bg-[#D4A574]/30 selection:text-[#1A5C3A]">
      {/* 1. Sticky Navigation */}
      <Navbar />

      {/* Main Content Flow */}
      <main className="flex-grow">
        {/* 2. Hero Section with 3D Circular Ecosystem */}
        <HeroSection />

        {/* 3. Value & Trust Strip */}
        <TrustStrip />

        {/* 4. Problem Definition (Editorial Layout) */}
        <ProblemSection />

        {/* 5. Solution (Sell, Collect, Recycle Pillars) */}
        <SolutionSection />

        {/* 6. How It Works (3-Step Honest Valuation Flow) */}
        <HowItWorks />

        {/* 7. Seller Lead Generation Form */}
        <SellerLeadForm />

        {/* 8. Collector & Recycler Network Section */}
        <CollectorSection />

        {/* 9. College / Organization B2B Section */}
        <CollegeSection />

        {/* 10. Coming Soon Roadmap (Future Tech) */}
        <ComingSoonRoadmap />

        {/* 11. Circular Impact & Materials Storytelling */}
        <ImpactSection />

        {/* 12. About YourScraper Mission */}
        <AboutSection />

        {/* 13. FAQ Accordion */}
        <FAQSection />

        {/* 14. Final High-Impact Conversion CTA */}
        <FinalCTA />
      </main>

      {/* 15. Premium Dark Green Footer */}
      <Footer />
    </div>
  );
}
