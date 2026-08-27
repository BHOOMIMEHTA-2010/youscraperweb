import React from 'react';
import { AlertCircle, ArrowUpRight, Cpu, Layers, Archive, Flame } from 'lucide-react';

export const ProblemSection: React.FC = () => {
  return (
    <section className="py-20 lg:py-28 bg-[#F7F5EF] relative overflow-hidden text-[#17201B]">
      {/* Decorative subtle background elements */}
      <div className="absolute top-10 right-10 w-72 h-72 rounded-full bg-[#1A5C3A]/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 rounded-full bg-[#D4A574]/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1A5C3A]/10 text-[#1A5C3A] text-xs font-semibold uppercase tracking-wider mb-4">
            <AlertCircle className="w-3.5 h-3.5" />
            The Materials & Recycling Challenge
          </div>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl text-[#17201B] tracking-tight leading-[1.15] mb-6">
            Recyclable materials shouldn’t end up lost in landfills.
          </h2>
          <p className="text-lg text-[#56685E] font-normal leading-relaxed">
            Every year, vast amounts of paper, cardboard, plastics, glass, scrap metals, electronics, and textiles end up mixed with general waste. Disposing of them responsibly is confusing, while their recoverable value remains trapped and disconnected from certified recyclers.
          </p>
        </div>

        {/* Editorial Bento Grid (Inspired by the Reference Layouts) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-8">
          
          {/* Card 1: Drawer Syndrome & Storage (Large Pill Card) */}
          <div className="md:col-span-7 bg-white rounded-3xl p-8 sm:p-10 border border-[#1A5C3A]/10 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between relative overflow-hidden group">
            <div className="relative z-10">
              <div className="w-12 h-12 rounded-2xl bg-[#F7F5EF] text-[#1A5C3A] flex items-center justify-center mb-6 font-semibold shadow-inner">
                <Archive className="w-6 h-6" />
              </div>
              <h3 className="font-heading font-bold text-2xl text-[#17201B] mb-3">
                Recoverable Value Sitting Unused
              </h3>
              <p className="text-[#56685E] text-base leading-relaxed max-w-lg mb-6">
                Most households and businesses store or dump recyclable materials simply because there is no convenient, trusted way to determine their true value or arrange reliable doorstep collection.
              </p>
            </div>

            {/* Visual Capsule Strip */}
            <div className="pt-6 border-t border-gray-100 flex flex-wrap items-center gap-3">
              <span className="px-3.5 py-1.5 rounded-full bg-[#F7F5EF] text-xs font-medium text-[#1A5C3A] border border-[#1A5C3A]/10">
                Plastic & Packaging
              </span>
              <span className="px-3.5 py-1.5 rounded-full bg-[#F7F5EF] text-xs font-medium text-[#1A5C3A] border border-[#1A5C3A]/10">
                Paper & Cardboard
              </span>
              <span className="px-3.5 py-1.5 rounded-full bg-[#F7F5EF] text-xs font-medium text-[#1A5C3A] border border-[#1A5C3A]/10">
                Metals & Glass
              </span>
              <span className="px-3.5 py-1.5 rounded-full bg-[#F7F5EF] text-xs font-medium text-[#1A5C3A] border border-[#1A5C3A]/10">
                E-Waste & Textiles
              </span>
            </div>
          </div>

          {/* Card 2: Fragmented Scrap Supply Chain */}
          <div className="md:col-span-5 bg-[#1A5C3A] text-white rounded-3xl p-8 sm:p-10 shadow-sm flex flex-col justify-between relative overflow-hidden">
            {/* Background circular accent */}
            <div className="absolute -bottom-10 -right-10 w-48 h-48 rounded-full bg-[#D4A574]/20 blur-2xl" />

            <div>
              <div className="w-12 h-12 rounded-2xl bg-white/10 text-[#D4A574] flex items-center justify-center mb-6 font-semibold border border-white/10">
                <Layers className="w-6 h-6" />
              </div>
              <h3 className="font-heading font-bold text-2xl text-white mb-3">
                Disconnected Recyclers & Collectors
              </h3>
              <p className="text-emerald-100/80 text-base leading-relaxed mb-6">
                Material recovery facilities and certified recyclers need steady input streams, but local supply remains unorganized, inconsistent, and difficult to mobilize.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-white/10 border border-white/15 backdrop-blur-sm">
              <div className="flex items-center gap-2 text-xs font-semibold text-[#D4A574] uppercase tracking-wider mb-1">
                <Flame className="w-3.5 h-3.5" />
                The Opportunity
              </div>
              <p className="text-xs text-white/90">
                A unified digital platform connecting households, commercial facilities, collectors, and certified recyclers into one seamless circular loop.
              </p>
            </div>
          </div>

          {/* Card 3: Material Extraction Reality */}
          <div className="md:col-span-12 bg-white rounded-3xl p-8 sm:p-10 border border-[#1A5C3A]/10 shadow-sm flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#D4A574] uppercase tracking-wider mb-2">
                <Cpu className="w-4 h-4 text-[#1A5C3A]" />
                Circular Resource Recovery
              </div>
              <h3 className="font-heading font-bold text-2xl text-[#17201B] mb-2">
                Every discarded material has value when returned to circulation.
              </h3>
              <p className="text-[#56685E] text-base leading-relaxed">
                Producing new polymers, virgin paper, refined metals, and glass from scratch consumes immense energy. YourScraper bridges the gap to keep high-quality materials moving from waste back into purposeful reuse.
              </p>
            </div>

            <a
              href="#solution"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#1A5C3A] text-white font-medium text-sm hover:bg-[#13462b] transition-colors flex-shrink-0 shadow-sm"
            >
              <span>See How YourScraper Solves This</span>
              <ArrowUpRight className="w-4 h-4 text-[#D4A574]" />
            </a>
          </div>

        </div>

      </div>
    </section>
  );
};
