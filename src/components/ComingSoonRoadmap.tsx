import React from 'react';
import {
  Sparkles,
  Camera,
  Store,
  Boxes,
  Navigation,
  CreditCard,
  BarChart,
  FileCheck,
  Clock,
} from 'lucide-react';

export const ComingSoonRoadmap: React.FC = () => {
  const roadmapItems = [
    {
      icon: Sparkles,
      title: 'AI-Assisted Material Valuation',
      desc: 'Predictive pricing models estimating market salvage value across plastics, paper, metals, electronics, and bulk streams.',
    },
    {
      icon: Camera,
      title: 'Photo-Based Material ID',
      desc: 'Computer vision to identify polymer grades, paper types, metal purities, electronic components, and condition directly from photos.',
    },
    {
      icon: Store,
      title: 'Recycling Marketplace',
      desc: 'Live B2B exchange connecting local collectors with certified mills, smelters, recyclers, and material recovery facilities.',
    },
    {
      icon: Boxes,
      title: 'Bulk Material Collection',
      desc: 'Consolidated freight and truckload scheduling for high-volume commercial and institutional material scrap.',
    },
    {
      icon: Navigation,
      title: 'Real-Time Pickup Tracking',
      desc: 'Live GPS status and route updates for doorstep pickups and scheduled organizational bin collections.',
    },
    {
      icon: CreditCard,
      title: 'Instant Online Payouts',
      desc: 'Automated direct UPI & bank transfers immediately upon on-site verification and material weigh-in.',
    },
    {
      icon: BarChart,
      title: 'Circular Impact Dashboard',
      desc: 'Interactive visualizer measuring materials diverted from landfills, energy saved, and net carbon offset.',
    },
    {
      icon: FileCheck,
      title: 'ESG & Compliance Reporting',
      desc: 'Automated digital recycling certificates and audited material recovery metrics for corporate governance.',
    },
  ];

  return (
    <section id="roadmap" className="py-20 lg:py-28 bg-[#FFFFFF] relative overflow-hidden text-[#17201B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#D4A574]/15 text-[#8c6031] text-xs font-semibold uppercase tracking-wider mb-4 border border-[#D4A574]/30">
            <Clock className="w-3.5 h-3.5" />
            Future Ecosystem Roadmap
          </div>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl text-[#17201B] tracking-tight mb-4">
            What’s next for YourScraper?
          </h2>
          <p className="text-base sm:text-lg text-[#56685E] font-normal leading-relaxed">
            We are actively architecting the technological infrastructure for India's comprehensive multi-material circular recycling economy.
          </p>
        </div>

        {/* 8 Roadmap Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {roadmapItems.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-[#F7F5EF] rounded-3xl p-6 sm:p-7 border border-gray-200/80 shadow-sm hover:border-[#D4A574]/60 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Top Bar: Icon & Explicit COMING SOON Badge */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-11 h-11 rounded-2xl bg-white text-[#1A5C3A] flex items-center justify-center shadow-inner group-hover:scale-105 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="px-2.5 py-1 rounded-full bg-[#D4A574]/20 border border-[#D4A574]/40 text-[#8c6031] text-[10px] font-extrabold uppercase tracking-wider">
                      COMING SOON
                    </span>
                  </div>

                  <h3 className="font-heading font-bold text-lg text-[#17201B] mb-2 leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-xs text-[#56685E] leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-gray-200/60 flex items-center gap-1.5 text-[11px] font-medium text-[#56685E]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D4A574]" />
                  <span>In active research & development</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
