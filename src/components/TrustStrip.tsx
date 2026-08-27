import React from 'react';
import { DollarSign, Truck, Recycle, Repeat } from 'lucide-react';

export const TrustStrip: React.FC = () => {
  const trustItems = [
    {
      icon: DollarSign,
      title: 'Fair Value',
      desc: 'Transparent valuation based on honest assessment of device specs & condition.',
    },
    {
      icon: Truck,
      title: 'Free Pickup',
      desc: 'Convenient doorstep collection scheduled directly around your availability.',
    },
    {
      icon: Recycle,
      title: 'Responsible Recycling',
      desc: 'Ensuring zero toxic e-waste enters open landfills through vetted partners.',
    },
    {
      icon: Repeat,
      title: 'Circular Future',
      desc: 'Reviving components and materials to extend the global electronics lifecycle.',
    },
  ];

  return (
    <section className="bg-[#123E26] text-white border-y border-[#D4A574]/20 py-8 lg:py-10 relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Ticker / Trust Feature Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {trustItems.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="flex items-start gap-4 p-4 rounded-2xl bg-white/[0.04] border border-white/[0.08] hover:border-[#D4A574]/40 hover:bg-white/[0.07] transition-all duration-200"
              >
                <div className="w-12 h-12 rounded-xl bg-[#1A5C3A] border border-[#D4A574]/30 flex items-center justify-center flex-shrink-0 text-[#D4A574] shadow-sm">
                  <Icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-base text-white mb-1">
                    {item.title}
                  </h3>
                  <p className="text-xs text-emerald-100/75 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
