import React from 'react';
import { Sparkles, ArrowRight, CheckCircle2, UserCheck, ShieldCheck } from 'lucide-react';

export const HowItWorks: React.FC = () => {
  const steps = [
    {
      number: '01',
      title: 'TELL US WHAT YOU HAVE',
      desc: 'Select your device type, brand, and honest condition (working, damaged, or scrap).',
      detail: 'Smartphones, laptops, monitors, appliances & more',
      icon: CheckCircle2,
    },
    {
      number: '02',
      title: 'SHARE YOUR DETAILS',
      desc: 'Provide your name, phone number, and city so our logistics and appraisal team can coordinate.',
      detail: 'Safe, private, and zero spam guarantee',
      icon: UserCheck,
    },
    {
      number: '03',
      title: "WE'LL VALUE IT",
      desc: 'Our specialists review your submission and contact you with a fair valuation and free pickup schedule.',
      detail: 'Real human assessment — no automated fake estimates',
      icon: ShieldCheck,
    },
  ];

  const scrollToSellers = () => {
    const el = document.querySelector('#sellers');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="how-it-works" className="py-20 lg:py-28 bg-[#F7F5EF] relative overflow-hidden text-[#17201B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1A5C3A]/10 text-[#1A5C3A] text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            Simple 3-Step Process
          </div>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl text-[#17201B] tracking-tight mb-4">
            How YourScraper Works
          </h2>
          <p className="text-base sm:text-lg text-[#56685E] font-normal leading-relaxed">
            Transparent, human-reviewed device valuations and zero-hassle pickup.
          </p>
        </div>

        {/* 3 Step Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-3xl p-8 sm:p-10 border border-[#1A5C3A]/10 shadow-sm hover:shadow-md transition-all duration-300 relative flex flex-col justify-between"
              >
                <div>
                  {/* Step Number with Warm Gold accent */}
                  <div className="flex items-center justify-between mb-8">
                    <span className="font-heading font-extrabold text-4xl text-[#D4A574]">
                      {step.number}
                    </span>
                    <div className="w-12 h-12 rounded-2xl bg-[#F7F5EF] text-[#1A5C3A] flex items-center justify-center shadow-inner">
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>

                  <h3 className="font-heading font-bold text-xl text-[#17201B] mb-3 tracking-tight">
                    {step.title}
                  </h3>

                  <p className="text-[#56685E] text-sm leading-relaxed mb-6">
                    {step.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-gray-100 flex items-center gap-2 text-xs font-medium text-[#1A5C3A]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#1A5C3A]" />
                  <span>{step.detail}</span>
                </div>
              </div>
            );
          })}

        </div>

        {/* Honest Process Clarification Box */}
        <div className="mt-12 bg-[#1A5C3A]/5 border border-[#1A5C3A]/15 rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-[#1A5C3A] text-white flex items-center justify-center flex-shrink-0 mt-1">
              <ShieldCheck className="w-5 h-5 text-[#D4A574]" />
            </div>
            <div>
              <h4 className="font-heading font-semibold text-base text-[#17201B] mb-1">
                Transparent & Honest Valuation
              </h4>
              <p className="text-xs sm:text-sm text-[#56685E] max-w-2xl">
                We don't use misleading algorithms or promise inflated prices that get renegotiated at your door. Every valuation is manually reviewed by certified electronics specialists.
              </p>
            </div>
          </div>

          <button
            onClick={scrollToSellers}
            id="how-it-works-cta"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#1A5C3A] hover:bg-[#124229] text-white font-semibold text-sm transition-all duration-200 shadow-sm flex-shrink-0 cursor-pointer"
          >
            <span>Get Your Device Valued</span>
            <ArrowRight className="w-4 h-4 text-[#D4A574]" />
          </button>
        </div>

      </div>
    </section>
  );
};
