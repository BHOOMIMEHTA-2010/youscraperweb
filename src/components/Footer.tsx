import React, { useState } from 'react';
import { Logo } from './Logo';
import { Mail, Phone, MapPin, X, ArrowUp, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  const [legalModal, setLegalModal] = useState<'privacy' | 'terms' | null>(null);

  const scrollTo = (selector: string) => {
    const el = document.querySelector(selector);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="bg-[#0e2c1c] text-white border-t border-[#D4A574]/20 pt-16 pb-12 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-[#1A5C3A]/20 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          
          {/* Col 1 & 2: Brand & Tagline */}
          <div className="lg:col-span-2 space-y-4">
            <Logo variant="light" size="lg" />
            
            <p className="font-heading font-semibold text-lg text-[#D4A574]">
              "Turn Trash Into Treasure"
            </p>

            <p className="text-sm text-emerald-100/70 max-w-sm leading-relaxed">
              YourScraper is India's multi-material recycling platform connecting individuals, businesses, and institutions with responsible scrap collectors, certified recyclers, and circular-economy opportunities for everything and anything that can be recycled.
            </p>

            <div className="pt-2 text-xs text-emerald-100/60 space-y-1.5">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#D4A574]" />
                <span>Pan-India Scrap & Recycling Logistics Network</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#D4A574]" />
                <span>contact@yourscraper.com</span>
              </div>
            </div>
          </div>

          {/* Col 3: Navigation Links */}
          <div>
            <h4 className="font-heading font-semibold text-sm text-white uppercase tracking-wider mb-4 border-b border-white/10 pb-2">
              Platform
            </h4>
            <ul className="space-y-2.5 text-sm text-emerald-100/80">
              <li>
                <button
                  onClick={() => scrollTo('#hero')}
                  className="hover:text-[#D4A574] transition-colors cursor-pointer text-left"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('#how-it-works')}
                  className="hover:text-[#D4A574] transition-colors cursor-pointer text-left"
                >
                  How It Works
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('#sellers')}
                  className="hover:text-[#D4A574] transition-colors cursor-pointer text-left"
                >
                  For Sellers
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('#collectors')}
                  className="hover:text-[#D4A574] transition-colors cursor-pointer text-left"
                >
                  For Collectors
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('#colleges')}
                  className="hover:text-[#D4A574] transition-colors cursor-pointer text-left"
                >
                  For Colleges & Orgs
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Company & Info */}
          <div>
            <h4 className="font-heading font-semibold text-sm text-white uppercase tracking-wider mb-4 border-b border-white/10 pb-2">
              Company
            </h4>
            <ul className="space-y-2.5 text-sm text-emerald-100/80">
              <li>
                <button
                  onClick={() => scrollTo('#about')}
                  className="hover:text-[#D4A574] transition-colors cursor-pointer text-left"
                >
                  About YourScraper
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('#solution')}
                  className="hover:text-[#D4A574] transition-colors cursor-pointer text-left"
                >
                  Circular Ecosystem
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('#sellers')}
                  className="hover:text-[#D4A574] transition-colors cursor-pointer text-left"
                >
                  Request Valuation
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('#colleges')}
                  className="hover:text-[#D4A574] transition-colors cursor-pointer text-left"
                >
                  Schedule Campus Drive
                </button>
              </li>
            </ul>
          </div>

          {/* Col 5: Support & Quick Action */}
          <div>
            <h4 className="font-heading font-semibold text-sm text-white uppercase tracking-wider mb-4 border-b border-white/10 pb-2">
              Get Started
            </h4>
            <p className="text-xs text-emerald-100/70 mb-4 leading-relaxed">
              Have scrap metals, paper, plastics, appliances, or old electronics? Submit your details in 60 seconds.
            </p>
            <button
              onClick={() => scrollTo('#sellers')}
              id="footer-valuation-cta"
              className="w-full py-3 px-4 rounded-full bg-[#D4A574] text-[#17201B] font-bold text-xs hover:bg-[#c6945f] transition-all shadow-md cursor-pointer"
            >
              Get Materials Valued Today
            </button>
          </div>

        </div>

        {/* Bottom Legal & Copyright Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-emerald-100/60">
          <p>© {new Date().getFullYear()} YourScraper. All rights reserved. Building a sustainable, zero-landfill future.</p>

          <div className="flex items-center gap-6">
            <button
              onClick={() => setLegalModal('privacy')}
              className="hover:text-[#D4A574] transition-colors cursor-pointer"
            >
              Privacy Policy
            </button>
            <button
              onClick={() => setLegalModal('terms')}
              className="hover:text-[#D4A574] transition-colors cursor-pointer"
            >
              Terms of Service
            </button>
            <button
              onClick={scrollToTop}
              className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-4 h-4 text-[#D4A574]" />
            </button>
          </div>
        </div>

      </div>

      {/* Privacy Policy & Terms Modal */}
      {legalModal && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-[#17201B] border border-[#D4A574]/40 rounded-3xl p-6 sm:p-8 max-w-2xl w-full max-h-[85vh] overflow-y-auto text-white shadow-2xl relative">
            <button
              onClick={() => setLegalModal(null)}
              className="absolute top-6 right-6 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {legalModal === 'privacy' ? (
              <div>
                <h3 className="font-heading font-bold text-2xl text-white mb-4">
                  Privacy Policy
                </h3>
                <div className="text-sm text-emerald-100/80 space-y-3 leading-relaxed">
                  <p>
                    <strong>YourScraper</strong> is committed to respecting your privacy. When you submit contact details, scrap item details, or organization requirements through our lead forms, we use this information strictly to assess equipment and material valuation, coordinate free collection, and communicate with you about our recycling services.
                  </p>
                  <p>
                    <strong>Data Usage:</strong> We do not sell, rent, or lease your personal contact information to third-party advertisers. Information is only shared with authorized logistics handlers and verified recycling partners directly involved in your pickup.
                  </p>
                  <p>
                    <strong>Electronic Device Data Security:</strong> For electronic devices and computer hardware, we advise all sellers to wipe personal data and perform factory resets prior to collection.
                  </p>
                </div>
              </div>
            ) : (
              <div>
                <h3 className="font-heading font-bold text-2xl text-white mb-4">
                  Terms of Service
                </h3>
                <div className="text-sm text-emerald-100/80 space-y-3 leading-relaxed">
                  <p>
                    <strong>Service Scope:</strong> YourScraper provides scrap lead generation, honest manual valuation appraisal across all recyclable material streams, and doorstep pickup coordination.
                  </p>
                  <p>
                    <strong>Valuation Process:</strong> Valuations provided via phone or email are provisional estimates based on the condition and quantity reported by the user and confirmed upon physical inspection during collection.
                  </p>
                  <p>
                    <strong>Future Features:</strong> Automated AI valuation, live marketplace trading, and online payment gateways are upcoming roadmap items marked as COMING SOON and are not currently active contractual terms.
                  </p>
                </div>
              </div>
            )}

            <div className="mt-8 pt-4 border-t border-white/10 flex justify-end">
              <button
                onClick={() => setLegalModal(null)}
                className="px-6 py-2.5 rounded-full bg-[#D4A574] text-[#17201B] font-semibold text-sm hover:bg-[#c6945f]"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};
