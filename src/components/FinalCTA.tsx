import React from 'react';
import { ArrowRight, Sparkles, RefreshCw, ShieldCheck } from 'lucide-react';

export const FinalCTA: React.FC = () => {
  const scrollTo = (selector: string) => {
    const el = document.querySelector(selector);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-20 lg:py-28 emerald-mesh text-white relative overflow-hidden">
      {/* Ambient background lighting */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-[#D4A574]/20 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-[#124229]/40 blur-3xl pointer-events-none" />

      {/* Decorative large circular ring */}
      <div className="absolute -right-20 -bottom-20 w-[420px] h-[420px] rounded-full border border-[#D4A574]/20 pointer-events-none" />
      <div className="absolute -right-32 -bottom-32 w-[540px] h-[540px] rounded-full border border-white/10 pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#123822] border border-[#D4A574]/40 text-[#D4A574] text-xs font-semibold uppercase tracking-wider mb-6 shadow-sm">
          <Sparkles className="w-3.5 h-3.5" />
          Join The Circular Revolution
        </div>

        <h2 className="font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white tracking-tight mb-6 leading-tight">
          Ready to give your old electronics <br className="hidden sm:inline" />
          <span className="text-[#D4A574]">a new purpose?</span>
        </h2>

        <p className="text-base sm:text-xl text-emerald-100/90 font-normal max-w-2xl mx-auto mb-10 leading-relaxed">
          Whether you have a single retired phone or an enterprise campus full of IT assets, YourScraper ensures honest valuation and responsible circular recycling.
        </p>

        {/* Dual CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto mb-12">
          <button
            onClick={() => scrollTo('#sellers')}
            id="final-sell-cta"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-[#D4A574] hover:bg-[#c6945f] text-[#17201B] font-bold text-base transition-all duration-200 shadow-xl hover:shadow-2xl hover:scale-[1.02] cursor-pointer"
          >
            <span>Sell Your Device</span>
            <ArrowRight className="w-5 h-5" />
          </button>

          <button
            onClick={() => scrollTo('#collectors')}
            id="final-collector-cta"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-white/10 hover:bg-white/20 text-white font-semibold text-base border border-white/25 backdrop-blur-md transition-all duration-200 cursor-pointer"
          >
            <span>Join Bulk Network</span>
            <RefreshCw className="w-4 h-4 text-[#D4A574]" />
          </button>
        </div>

        {/* Trust Badges */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-emerald-100/80">
          <span className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-[#D4A574]" />
            Free Doorstep Pickup
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-[#58C28A]" />
            Zero Landfill Guarantee
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-[#D4A574]" />
            Verified Recyclers Network
          </span>
        </div>

      </div>
    </section>
  );
};
