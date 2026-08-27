import React from 'react';
import { Package, Truck, Recycle, ArrowRight } from 'lucide-react';

export const SolutionSection: React.FC = () => {
  const scrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const pillars = [
    {
      id: 'sell',
      tag: 'FOR INDIVIDUALS & BUSINESSES',
      title: 'SELL / RECYCLE',
      heading: 'Turn unwanted materials into value.',
      description:
        'Submit any recyclable materials—plastic, paper, cardboard, glass, metal, electronics, or textiles—in any condition. We review the details, provide a transparent valuation, and arrange free doorstep pickup.',
      icon: Package,
      ctaText: 'Get Materials Valued',
      targetId: '#sellers',
      bgClass: 'bg-white',
      accentColor: 'text-[#1A5C3A]',
      badgeBg: 'bg-[#1A5C3A]/10 text-[#1A5C3A]',
      buttonClass: 'bg-[#1A5C3A] text-white hover:bg-[#124229]',
    },
    {
      id: 'collect',
      tag: 'FOR OPERATORS & VENDORS',
      title: 'COLLECT',
      heading: 'Connect with opportunities to collect recyclable materials.',
      description:
        'Join a growing network of collectors, recyclers, refurbishers, and material recovery businesses. Gain verified access to steady supply streams across all recyclable categories.',
      icon: Truck,
      ctaText: 'Join Collector Network',
      targetId: '#collectors',
      bgClass: 'bg-[#1A5C3A] text-white',
      accentColor: 'text-[#D4A574]',
      badgeBg: 'bg-white/15 text-[#D4A574]',
      buttonClass: 'bg-[#D4A574] text-[#17201B] hover:bg-[#c6945f]',
    },
    {
      id: 'recycle',
      tag: 'FOR CAMPUSES & ORGANIZATIONS',
      title: 'RECOVER',
      heading: 'Help materials move back into the circular economy.',
      description:
        'Partner with YourScraper to run institutional collection drives, establish effective waste segregation, and ensure all recoverable materials reach certified circular recyclers.',
      icon: Recycle,
      ctaText: 'Explore Campus Drives',
      targetId: '#colleges',
      bgClass: 'bg-white',
      accentColor: 'text-[#1A5C3A]',
      badgeBg: 'bg-[#D4A574]/20 text-[#8c6031]',
      buttonClass: 'bg-[#17201B] text-white hover:bg-[#2c3d34]',
    },
  ];

  return (
    <section id="solution" className="py-20 lg:py-28 bg-[#FFFFFF] relative overflow-hidden text-[#17201B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1A5C3A]/10 text-[#1A5C3A] text-xs font-semibold uppercase tracking-wider mb-4">
            The YourScraper Ecosystem
          </div>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl text-[#17201B] tracking-tight mb-5">
            Connecting every stakeholder in material recovery.
          </h2>
          <p className="text-lg text-[#56685E] font-normal leading-relaxed">
            YourScraper is building a modern platform that connects individuals, commercial entities, collectors, and certified recyclers for every recyclable material category.
          </p>
        </div>

        {/* 3 Main Pillar Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            const isDark = pillar.bgClass.includes('bg-[#1A5C3A]');

            return (
              <div
                key={pillar.id}
                className={`${pillar.bgClass} rounded-3xl p-8 sm:p-10 border ${
                  isDark ? 'border-emerald-600/30' : 'border-gray-200/80'
                } shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1`}
              >
                <div>
                  {/* Top Badge & Icon */}
                  <div className="flex items-center justify-between mb-8">
                    <span className={`px-3 py-1 rounded-full text-[11px] font-semibold tracking-wide uppercase ${pillar.badgeBg}`}>
                      {pillar.title}
                    </span>
                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${
                      isDark ? 'bg-white/10 text-[#D4A574]' : 'bg-[#F7F5EF] text-[#1A5C3A]'
                    }`}>
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>

                  <div className={`text-xs font-bold uppercase tracking-wider mb-2 ${isDark ? 'text-emerald-200/80' : 'text-[#8c6031]'}`}>
                    {pillar.tag}
                  </div>

                  {/* Heading */}
                  <h3 className={`font-heading font-bold text-2xl mb-4 leading-snug ${isDark ? 'text-white' : 'text-[#17201B]'}`}>
                    {pillar.heading}
                  </h3>

                  {/* Description */}
                  <p className={`text-sm leading-relaxed mb-8 ${isDark ? 'text-emerald-100/80' : 'text-[#56685E]'}`}>
                    {pillar.description}
                  </p>
                </div>

                {/* Bottom Action CTA */}
                <button
                  onClick={() => scrollTo(pillar.targetId)}
                  className={`w-full py-3.5 px-6 rounded-full font-semibold text-sm flex items-center justify-center gap-2 transition-all duration-200 cursor-pointer ${pillar.buttonClass}`}
                >
                  <span>{pillar.ctaText}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
