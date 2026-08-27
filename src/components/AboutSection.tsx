import React from 'react';
import { Target, Eye, Sparkles, CheckCircle2, Shield } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 lg:py-28 bg-[#FFFFFF] relative overflow-hidden text-[#17201B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Mission & Story */}
          <div className="lg:col-span-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1A5C3A]/10 text-[#1A5C3A] text-xs font-semibold uppercase tracking-wider mb-4">
              <Target className="w-3.5 h-3.5" />
              Our Purpose
            </div>

            <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-[#17201B] tracking-tight leading-[1.15] mb-6">
              Building a smarter way to deal with e-waste.
            </h2>

            <p className="text-base sm:text-lg text-[#56685E] font-normal leading-relaxed mb-6">
              YourScraper was founded with a straightforward conviction: electronic scrap should never be treated as useless garbage. We are engineering a platform that bridges households and organizations directly with responsible scrap collectors, refurbishers, and certified recyclers.
            </p>

            <p className="text-sm text-[#56685E] leading-relaxed mb-8">
              By replacing informal, opaque scrap disposal with transparent valuations, free doorstep collection, and organized downstream circular pathways, we aim to make responsible e-waste handling the easiest choice for everyone.
            </p>

            {/* Core Commitments List */}
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-[#1A5C3A]/10 text-[#1A5C3A] flex items-center justify-center flex-shrink-0">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                </div>
                <span className="text-sm font-medium text-[#17201B]">
                  Prioritizing circular reuse before material shredding
                </span>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-[#1A5C3A]/10 text-[#1A5C3A] flex items-center justify-center flex-shrink-0">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                </div>
                <span className="text-sm font-medium text-[#17201B]">
                  Unlocking genuine value recovery for sellers of all scales
                </span>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-[#1A5C3A]/10 text-[#1A5C3A] flex items-center justify-center flex-shrink-0">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                </div>
                <span className="text-sm font-medium text-[#17201B]">
                  Empowering local scrap operators with bulk aggregation
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Philosophy Card */}
          <div className="lg:col-span-6">
            <div className="bg-[#F7F5EF] rounded-3xl p-8 sm:p-10 border border-[#1A5C3A]/15 shadow-md relative">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-[#1A5C3A] text-[#D4A574] flex items-center justify-center">
                  <Eye className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-xl text-[#17201B]">
                    Our 5 Guiding Principles
                  </h3>
                  <p className="text-xs text-[#56685E]">How we approach the circular transition</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="p-4 rounded-2xl bg-white border border-gray-200/80">
                  <h4 className="font-semibold text-sm text-[#17201B] mb-1">1. Circular Economy First</h4>
                  <p className="text-xs text-[#56685E]">Extending useful lifespan before breakdown and extraction.</p>
                </div>

                <div className="p-4 rounded-2xl bg-white border border-gray-200/80">
                  <h4 className="font-semibold text-sm text-[#17201B] mb-1">2. Transparent Valuation</h4>
                  <p className="text-xs text-[#56685E]">Honest review based on salvage reality, not gimmicky algorithms.</p>
                </div>

                <div className="p-4 rounded-2xl bg-white border border-gray-200/80">
                  <h4 className="font-semibold text-sm text-[#17201B] mb-1">3. Technology-Driven Logistics</h4>
                  <p className="text-xs text-[#56685E]">Connecting scattered micro-supplies into organized bulk streams.</p>
                </div>

                <div className="p-4 rounded-2xl bg-white border border-gray-200/80">
                  <h4 className="font-semibold text-sm text-[#17201B] mb-1">4. Radical Accessibility</h4>
                  <p className="text-xs text-[#56685E]">Free doorstep pickup so zero electronics end up in trash cans.</p>
                </div>

                <div className="p-4 rounded-2xl bg-white border border-gray-200/80">
                  <h4 className="font-semibold text-sm text-[#17201B] mb-1">5. Responsible Environmental Stewardship</h4>
                  <p className="text-xs text-[#56685E]">Zero toxic dumping through strict vetted downstream handling.</p>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
