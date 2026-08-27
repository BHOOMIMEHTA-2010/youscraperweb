import React from 'react';
import { HeartHandshake, Layers, Sparkles, Compass, ShieldCheck } from 'lucide-react';

export const ImpactSection: React.FC = () => {
  return (
    <section className="py-20 lg:py-28 bg-[#17201B] text-white relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#1A5C3A]/30 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#D4A574]/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-[#D4A574] text-xs font-semibold uppercase tracking-wider mb-4 border border-white/10">
            <HeartHandshake className="w-3.5 h-3.5" />
            The Circular Lifecycle
          </div>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl text-white tracking-tight mb-5">
            Every device has another story.
          </h2>
          <p className="text-base sm:text-lg text-emerald-100/80 font-normal leading-relaxed">
            When hardware reaches the end of its first ownership cycle, it shouldn't end up in an incinerator or an unorganized landfill. Here is how YourScraper creates ongoing value.
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
                Keep electronics in circulation longer
              </h3>
              <p className="text-sm text-emerald-100/70 leading-relaxed mb-6">
                Many devices only need simple modular repairs, battery replacements, or cleaning before finding a new home with students, remote workers, or secondary markets.
              </p>
            </div>
            <div className="pt-4 border-t border-white/10 text-xs font-medium text-[#D4A574]">
              Extending hardware utility
            </div>
          </div>

          {/* Pillar 2 */}
          <div className="bg-[#1F2E25] rounded-3xl p-8 border border-white/10 hover:border-[#D4A574]/40 transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#1A5C3A] text-[#58C28A] flex items-center justify-center mb-6">
                <Layers className="w-6 h-6" />
              </div>
              <h3 className="font-heading font-bold text-xl text-white mb-3">
                Recover valuable, finite materials
              </h3>
              <p className="text-sm text-emerald-100/70 leading-relaxed mb-6">
                Printed circuit boards contain copper, silver, and gold. Diverting them to certified metallurgical refiners reduces the demand for invasive open-pit virgin mining.
              </p>
            </div>
            <div className="pt-4 border-t border-white/10 text-xs font-medium text-[#58C28A]">
              Essential mineral conservation
            </div>
          </div>

          {/* Pillar 3 */}
          <div className="bg-[#1F2E25] rounded-3xl p-8 border border-white/10 hover:border-[#D4A574]/40 transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#1A5C3A] text-[#D4A574] flex items-center justify-center mb-6">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="font-heading font-bold text-xl text-white mb-3">
                Make responsible disposal effortless
              </h3>
              <p className="text-sm text-emerald-100/70 leading-relaxed mb-6">
                By offering honest valuations and free scheduled doorstep pickup, we eliminate the friction that keeps scrap sitting forgotten in household drawers.
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
