import React from 'react';
import { HeroIllustration } from './HeroIllustration';
import { OfficialLogoEmblem } from './Logo';
import { ArrowRight, Sparkles, ShieldCheck, RefreshCw, Truck, Award, CheckCircle2 } from 'lucide-react';

export const HeroSection: React.FC = () => {
  const scrollTo = (selector: string) => {
    const el = document.querySelector(selector);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative pt-28 pb-12 lg:pt-36 lg:pb-16 overflow-hidden bg-[#FAF8F3] text-[#17201B] flex flex-col justify-between"
    >
      {/* Background Soft Organic Curves & Nature Blobs (inspired by Carbonex & Recycling references) */}
      <div className="absolute top-0 right-0 w-[550px] h-[550px] bg-gradient-to-bl from-[#E2EFE0]/70 via-[#F3ECE0]/50 to-transparent rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-[#E8F3E4]/60 via-[#F7F2E8]/40 to-transparent rounded-full blur-3xl pointer-events-none -ml-20" />
      
      {/* Decorative Botanical Leaf Accents in Background */}
      <div className="absolute left-6 top-32 opacity-25 pointer-events-none hidden md:block">
        <svg width="60" height="60" viewBox="0 0 100 100" fill="none">
          <path d="M 10 90 C 10 30, 60 10, 90 10 C 90 70, 40 90, 10 90 Z" fill="#6A8552" />
        </svg>
      </div>

      <div className="absolute right-12 bottom-28 opacity-20 pointer-events-none hidden md:block">
        <svg width="80" height="80" viewBox="0 0 100 100" fill="none">
          <path d="M 90 10 C 90 70, 40 90, 10 90 C 10 30, 60 10, 90 10 Z" fill="#8EA676" />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        {/* Main Grid: Left Typography & Right Organic Illustration */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Typography & Action Flow */}
          <div className="lg:col-span-6 xl:col-span-6 flex flex-col items-start text-left">
            
            {/* Top Pilot Badge with Official Logo Seal */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#1A5C3A]/10 border border-[#1A5C3A]/20 text-[#1A5C3A] text-xs font-bold mb-6 shadow-sm">
              <OfficialLogoEmblem size={22} className="flex-shrink-0" />
              <span>India's All-In-One Recyclable Materials & Circular Recovery Network</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-heading font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-[3.65rem] xl:text-7xl tracking-tight leading-[1.08] mb-5 text-[#17201B]">
              Turn Trash Into <br />
              <span className="text-[#1A5C3A] relative inline-block">
                Treasure.
                {/* Organic botanical underline accent */}
                <svg
                  className="absolute -bottom-2.5 left-0 w-full h-3 text-[#D4A574]"
                  viewBox="0 0 200 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3 9C50 2 150 2 197 9"
                    stroke="currentColor"
                    strokeWidth="4.5"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h1>

            {/* Subheading */}
            <h2 className="text-xl sm:text-2xl font-bold text-[#2D4036] font-heading mb-4 tracking-tight">
              Fair price. Free pickup. Get valued today.
            </h2>

            {/* Supporting paragraph */}
            <p className="text-base sm:text-lg text-[#56685E] max-w-xl font-normal leading-relaxed mb-6">
              YourScraper makes it easier to turn recyclable materials into value — connecting people, collectors, recyclers, and organizations for a cleaner, more circular future.
            </p>

            {/* Material categories highlight bar */}
            <div className="flex flex-wrap items-center gap-2 mb-8">
              {['Plastic', 'Paper', 'Cardboard', 'Glass', 'Metal', 'E-Waste', 'Textiles'].map((cat) => (
                <span
                  key={cat}
                  className="px-2.5 py-1 rounded-lg bg-white border border-[#1A5C3A]/15 text-xs font-semibold text-[#1A5C3A] shadow-xs"
                >
                  {cat}
                </span>
              ))}
              <span className="px-2.5 py-1 rounded-lg bg-[#D4A574]/20 border border-[#D4A574]/30 text-xs font-semibold text-[#8C6031]">
                + More
              </span>
            </div>

            {/* Dual CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-8">
              <button
                onClick={() => scrollTo('#sellers')}
                id="hero-sell-cta"
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-[#1A5C3A] hover:bg-[#14472D] text-white font-bold text-base transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.99] cursor-pointer"
              >
                <span>Get Materials Valued</span>
                <ArrowRight className="w-5 h-5 text-[#D4A574]" />
              </button>

              <button
                onClick={() => scrollTo('#collectors')}
                id="hero-collector-cta"
                className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-full bg-white hover:bg-[#F3EFE6] text-[#17201B] font-semibold text-base border border-[#1A5C3A]/20 transition-all duration-200 hover:border-[#1A5C3A]/40 shadow-sm cursor-pointer"
              >
                <span>Join Bulk Network</span>
                <RefreshCw className="w-4 h-4 text-[#1A5C3A]" />
              </button>
            </div>

            {/* Micro Trust Checkmarks */}
            <div className="flex flex-wrap items-center gap-y-2 gap-x-5 text-xs font-semibold text-[#56685E]">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#1A5C3A]" />
                <span>Zero Fake Estimates</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#1A5C3A]" />
                <span>100% Free Doorstep Pickup</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#1A5C3A]" />
                <span>All Recyclable Streams</span>
              </div>
            </div>

          </div>

          {/* Right Column: Custom Vector Eco-Recycling Illustration */}
          <div className="lg:col-span-6 xl:col-span-6 relative flex items-center justify-center">
            <HeroIllustration />
          </div>

        </div>

        {/* Bottom Trust Metrics Row (Inspired by Carbonex reference layout) */}
        <div className="mt-14 pt-8 border-t border-[#1A5C3A]/15 grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
          
          <div className="flex flex-col">
            <span className="font-heading font-extrabold text-3xl sm:text-4xl text-[#1A5C3A] tracking-tight">
              100%
            </span>
            <span className="text-xs sm:text-sm font-semibold text-[#56685E] mt-0.5">
              Free Doorstep Pickup
            </span>
            <span className="text-[11px] text-[#86998F]">Zero hidden logistics fee</span>
          </div>

          <div className="flex flex-col">
            <span className="font-heading font-extrabold text-3xl sm:text-4xl text-[#1A5C3A] tracking-tight">
              0%
            </span>
            <span className="text-xs sm:text-sm font-semibold text-[#56685E] mt-0.5">
              Landfill Waste
            </span>
            <span className="text-[11px] text-[#86998F]">Authorized R2/E-Stewards</span>
          </div>

          <div className="flex flex-col">
            <span className="font-heading font-extrabold text-3xl sm:text-4xl text-[#1A5C3A] tracking-tight">
              24–48h
            </span>
            <span className="text-xs sm:text-sm font-semibold text-[#56685E] mt-0.5">
              Appraisal Guarantee
            </span>
            <span className="text-[11px] text-[#86998F]">Honest, transparent quotes</span>
          </div>

          <div className="flex flex-col">
            <span className="font-heading font-extrabold text-3xl sm:text-4xl text-[#1A5C3A] tracking-tight">
              Pan-India
            </span>
            <span className="text-xs sm:text-sm font-semibold text-[#56685E] mt-0.5">
              Bulk Collector Network
            </span>
            <span className="text-[11px] text-[#86998F]">Tier-1 & Tier-2 coverage</span>
          </div>

        </div>

      </div>
    </section>
  );
};
