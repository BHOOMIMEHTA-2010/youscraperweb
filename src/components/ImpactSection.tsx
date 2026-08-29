import React from 'react';
import { HeartHandshake, Layers, Sparkles, Compass, ShieldCheck } from 'lucide-react';

export const ImpactSection: React.FC = () => {
  return (
    <section id="impact" className="py-20 lg:py-28 bg-[#17201B] text-white relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#1A5C3A]/30 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#D4A574]/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-[#D4A574] text-xs font-semibold uppercase tracking-wider mb-4 border border-white/10">
            <HeartHandshake className="w-3.5 h-3.5" />
            The Circular Economy
          </div>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl text-white tracking-tight mb-5">
            Every material has another life.
          </h2>
          <p className="text-base sm:text-lg text-emerald-100/80 font-normal leading-relaxed">
            When plastics, paper, cardboard, glass, metals, electronics, or textiles reach the end of their first use, they shouldn't end up in an incinerator or landfill. Here is how YourScraper creates ongoing circular value.
          </p>
        </div>

        {/* 3 Story Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Pillar 1 */}
          <div className="bg-[#1F2E25] rounded-3xl p-8 border border-white/10 hover:border-[#D4A574]/40 transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#1A5C3A] text-[#D4A574] flex items-center justify-center mb-6">
                <Compass className="w-6 h-6" />
              </div>
              <h3 className="font-heading font-bold text-xl text-white mb-3">
                Keep useful materials in circulation.
              </h3>
              <p className="text-sm text-emerald-100/70 leading-relaxed mb-6">
                Extend the functional life of products, components, and raw materials by routing them to secondary markets, refurbishers, and authorized remanufacturers.
              </p>
            </div>
            <div className="pt-4 border-t border-white/10 text-xs font-medium text-[#D4A574]">
              Extending material utility
            </div>
          </div>

          {/* Pillar 2 */}
          <div className="bg-[#1F2E25] rounded-3xl p-8 border border-white/10 hover:border-[#D4A574]/40 transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#1A5C3A] text-[#58C28A] flex items-center justify-center mb-6">
                <Layers className="w-6 h-6" />
              </div>
              <h3 className="font-heading font-bold text-xl text-white mb-3">
                Recover value from what would otherwise be wasted.
              </h3>
              <p className="text-sm text-emerald-100/70 leading-relaxed mb-6">
                Extract high-grade polymers, recycled paper pulp, metals, and minerals. Diverting scrap to vetted processors minimizes virgin extraction and lowers carbon footprint.
              </p>
            </div>
            <div className="pt-4 border-t border-white/10 text-xs font-medium text-[#58C28A]">
              Resource conservation
            </div>
          </div>

          {/* Pillar 3 */}
          <div className="bg-[#1F2E25] rounded-3xl p-8 border border-white/10 hover:border-[#D4A574]/40 transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#1A5C3A] text-[#D4A574] flex items-center justify-center mb-6">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="font-heading font-bold text-xl text-white mb-3">
                Make responsible recycling easier.
              </h3>
              <p className="text-sm text-emerald-100/70 leading-relaxed mb-6">
                By offering transparent multi-material valuations and free scheduled doorstep pickup, we eliminate the friction that keeps scrap sitting forgotten in storage.
              </p>
            </div>
            <div className="pt-4 border-t border-white/10 text-xs font-medium text-[#D4A574]">
              Zero landfill diversion
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
