import React from 'react';
import { Hero3D } from './Hero3D';
import { ArrowRight, Sparkles, ShieldCheck, RefreshCw } from 'lucide-react';

export const HeroSection: React.FC = () => {
  const scrollTo = (selector: string) => {
    const el = document.querySelector(selector);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative min-h-[92vh] pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden emerald-mesh text-white flex items-center"
    >
      {/* Layered atmospheric glows & organic rings */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-[#D4A574]/15 blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[450px] h-[450px] rounded-full bg-[#2E7D52]/30 blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-b from-[#D4A574]/10 to-transparent blur-2xl pointer-events-none" />

      {/* Abstract Circular Ring Graphic Accent */}
      <div className="absolute -right-24 top-1/4 w-80 h-80 rounded-full border border-[#D4A574]/20 pointer-events-none" />
      <div className="absolute -right-36 top-1/4 w-[420px] h-[420px] rounded-full border border-white/10 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Typography & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Top Pilot Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#123822] border border-[#D4A574]/40 text-[#D4A574] text-xs font-medium mb-6 shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-[#D4A574]" />
              <span>India's Modern Circular Electronics Network</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-heading font-extrabold text-4xl sm:text-5xl md:text-6xl xl:text-7xl tracking-tight leading-[1.08] mb-4 text-white">
              Turn Trash Into <br className="hidden sm:inline" />
              <span className="text-[#D4A574] relative inline-block">
                Treasure.
                {/* Subtle golden underline accent */}
                <svg
                  className="absolute -bottom-2 left-0 w-full h-3 text-[#D4A574]/60"
                  viewBox="0 0 200 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3 9C50 3 150 3 197 9"
                    stroke="currentColor"
                    strokeWidth="4"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h1>

            {/* Subheading */}
            <h2 className="text-xl sm:text-2xl font-medium text-emerald-100 font-heading mb-4 tracking-tight">
              Fair price. Free pickup. Get valued today.
            </h2>

            {/* Supporting paragraph */}
            <p className="text-base sm:text-lg text-emerald-100/80 max-w-xl font-normal leading-relaxed mb-8">
              Give your old electronics a second life while helping build a smarter, more circular future. We connect sellers, collectors, and responsible recyclers.
            </p>

            {/* Dual CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-10">
              <button
                onClick={() => scrollTo('#sellers')}
                id="hero-sell-cta"
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-[#D4A574] hover:bg-[#c6945f] text-[#17201B] font-bold text-base transition-all duration-200 shadow-xl hover:shadow-2xl hover:scale-[1.02] active:scale-[0.99] cursor-pointer"
              >
                <span>Sell Your Device</span>
                <ArrowRight className="w-5 h-5" />
              </button>

              <button
                onClick={() => scrollTo('#collectors')}
                id="hero-collector-cta"
                className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-full bg-white/10 hover:bg-white/20 text-white font-semibold text-base border border-white/20 backdrop-blur-md transition-all duration-200 hover:border-white/40 cursor-pointer"
              >
                <span>Join Bulk Network</span>
                <RefreshCw className="w-4 h-4 text-[#D4A574]" />
              </button>
            </div>

            {/* Value Highlights Pill Row */}
            <div className="grid grid-cols-2 sm:flex sm:items-center gap-4 pt-6 border-t border-white/15 text-xs text-emerald-100/90">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#D4A574]" />
                <span>Zero Fake Valuations</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#58C28A]" />
                <span>100% Free Doorstep Pickup</span>
              </div>
              <div className="flex items-center gap-2 col-span-2 sm:col-span-1">
                <div className="w-2 h-2 rounded-full bg-[#D4A574]" />
                <span>Certified E-Waste Recycling</span>
              </div>
            </div>

          </div>

          {/* Right Column: 3D Interactive Ecosystem */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            {/* Ambient halo behind 3D */}
            <div className="absolute inset-0 bg-radial from-[#D4A574]/20 via-[#124027]/40 to-transparent blur-2xl pointer-events-none" />
            
            <div className="w-full relative z-10">
              <Hero3D />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
