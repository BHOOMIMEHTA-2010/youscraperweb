import React, { useState, useEffect } from 'react';
import { Logo } from './Logo';
import { Menu, X, ArrowRight } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'How It Works', href: '#how-it-works' },
    { name: 'For Sellers', href: '#sellers' },
    { name: 'For Collectors', href: '#collectors' },
    { name: 'For Colleges', href: '#colleges' },
    { name: 'About', href: '#about' },
  ];

  const handleLinkClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#124027]/95 backdrop-blur-md shadow-lg border-b border-[#D4A574]/20 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick('#hero');
            }}
            className="flex items-center group cursor-pointer"
            id="nav-logo"
          >
            <Logo variant="light" size="md" />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(link.href);
                }}
                className="text-sm font-medium text-emerald-100/90 hover:text-[#D4A574] transition-colors duration-200"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right CTA */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="#sellers"
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick('#sellers');
              }}
              id="nav-cta-button"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#D4A574] hover:bg-[#c49360] text-[#17201B] font-semibold text-sm transition-all duration-200 shadow-md hover:shadow-lg hover:translate-y-[-1px] active:translate-y-[0px]"
            >
              <span>Sell Your Device</span>
              <ArrowRight className="w-4 h-4 text-[#17201B]" />
            </a>
          </div>

          {/* Mobile menu toggle */}
          <div className="flex lg:hidden items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              type="button"
              id="mobile-menu-toggle"
              aria-label="Toggle menu"
              className="p-2 rounded-xl text-white hover:bg-white/10 transition-colors focus:outline-none focus:ring-2 focus:ring-[#D4A574]"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#103520] border-b border-[#D4A574]/30 px-6 pt-4 pb-6 mt-3 shadow-2xl animate-in slide-in-from-top duration-200">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(link.href);
                }}
                className="text-base font-medium text-white/90 hover:text-[#D4A574] py-2 border-b border-white/5 transition-colors"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-2">
              <a
                href="#sellers"
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick('#sellers');
                }}
                className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-[#D4A574] text-[#17201B] font-semibold text-sm shadow-md"
              >
                <span>Sell Your Device</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
