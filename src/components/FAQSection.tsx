import React, { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';

export const FAQSection: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqs = [
    {
      q: 'What is YourScraper?',
      a: 'YourScraper is a modern circular waste & scrap recycling platform that connects individuals, businesses, and educational institutions with responsible scrap collectors, certified recyclers, and refurbishers for everything and anything that can be recycled—including e-waste, scrap metals, plastics, paper, home appliances, automotive scrap, and industrial waste.',
    },
    {
      q: 'What materials can I submit?',
      a: 'You can submit virtually any recyclable material, scrap, or surplus item. This includes plastic, paper, cardboard, glass, scrap metals (iron, copper, aluminum, brass), electronics / e-waste, textiles, furniture, household recyclables, and bulk commercial scrap—in usable, damaged, or complete scrap condition.',
    },
    {
      q: 'Does YourScraper accept electronics and e-waste?',
      a: 'Yes! Electronics and e-waste—including smartphones, laptops, PCs, tablets, monitors, chargers, circuit boards, and appliances—are supported as one of our many recyclable material categories.',
    },
    {
      q: 'Can I submit plastic, paper, metal, or glass?',
      a: 'Absolutely. Plastic bottles, containers, packaging, cardboard boxes, newspapers, scrap iron, aluminum cans, copper wire, glass bottles, and jars can all be submitted for valuation and scheduled doorstep collection.',
    },
    {
      q: 'How does valuation work?',
      a: 'Our valuation process is handled directly by experienced appraisal specialists. Once you submit your item category, approximate quantity/weight, and condition details through our form, our team evaluates salvage value, recoverable materials, and current market scrap benchmark prices, then gets back to you with an honest, transparent quote.',
    },
    {
      q: 'Is pickup available for all waste types?',
      a: 'Yes! We coordinate free doorstep collection for accepted recyclable items and scrap batches. Once we agree on the valuation with you, our logistics team schedules a pickup window directly at your home, warehouse, office, or campus address.',
    },
    {
      q: 'When will I receive a price?',
      a: 'Our appraisal team typically reviews submissions within 24 to 48 business hours. You will receive a direct message or call with the evaluated price and details on scheduling your doorstep pickup.',
    },
    {
      q: 'Do I get paid on pickup?',
      a: 'Yes! Payout occurs directly upon physical verification and pickup by our authorized team representative via direct bank transfer, UPI, or cash as preferred.',
    },
    {
      q: 'How can collectors and scrap dealers join?',
      a: 'Scrap collectors, bulk aggregators, refurbishers, and certified recyclers across all material streams (metals, paper, plastic, e-waste, industrial) can join our bulk network by submitting the Collector Interest Form on this page. We connect members with aggregated scrap streams as we expand operations.',
    },
    {
      q: 'Can colleges and organizations use YourScraper?',
      a: 'Yes! We partner with universities, schools, technology parks, and corporate enterprises to organize dedicated recycling drives and responsible asset disposal across all recyclable categories. You can schedule an institutional consultation using the form on this page.',
    },
    {
      q: 'Is the online marketplace available yet?',
      a: 'The self-serve B2B collector marketplace, automated photo-based AI assessment, and live tracking dashboard are currently under active development and marked as COMING SOON. Today, YourScraper operates as a direct lead-generation, multi-material manual valuation, and doorstep collection service.',
    },
  ];

  const toggleAccordion = (index: number) => {
    setOpenIdx(openIdx === index ? null : index);
  };

  return (
    <section className="py-20 lg:py-28 bg-[#F7F5EF] relative overflow-hidden text-[#17201B]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1A5C3A]/10 text-[#1A5C3A] text-xs font-semibold uppercase tracking-wider mb-4">
            <HelpCircle className="w-3.5 h-3.5" />
            Frequently Asked Questions
          </div>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl text-[#17201B] tracking-tight mb-4">
            Everything you need to know.
          </h2>
          <p className="text-base text-[#56685E] font-normal leading-relaxed">
            Honest clarity about our current services and what’s coming in future releases.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-gray-200/90 shadow-sm overflow-hidden transition-all duration-200"
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(idx)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 font-heading font-semibold text-base sm:text-lg text-[#17201B] hover:text-[#1A5C3A] transition-colors cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span>{faq.q}</span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-transform duration-200 ${
                    isOpen ? 'bg-[#1A5C3A] text-white rotate-180' : 'bg-[#F7F5EF] text-[#17201B]'
                  }`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-sm sm:text-base text-[#56685E] leading-relaxed border-t border-gray-100 animate-in fade-in duration-200">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
