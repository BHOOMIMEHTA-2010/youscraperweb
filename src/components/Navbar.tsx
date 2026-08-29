import React, { useState, useEffect, useRef } from 'react';
import { Logo } from './Logo';
import { useAuth } from '../context/AuthContext';
import {
  Menu,
  X,
  ArrowRight,
  User,
  Package,
  LogOut,
  ChevronDown,
  Sparkles,
  ShieldCheck,
  HelpCircle,
  Truck,
  Building2,
  Recycle,
  Clock,
  HeartHandshake,
  Layers,
  CheckCircle2,
  DollarSign,
  Phone,
  Info,
} from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [userDropdownOpen, setUserDropdownOpen] = useState(false);
  const [moreDropdownOpen, setMoreDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const moreDropdownRef = useRef<HTMLDivElement>(null);

  const { user, profile, openAuthModal, openBookingsModal, logOut } = useAuth();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setUserDropdownOpen(false);
      }
      if (moreDropdownRef.current && !moreDropdownRef.current.contains(event.target as Node)) {
        setMoreDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const primaryNavLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Scrap Rates', href: '#sellers' },
    { name: 'Contact', href: '#contact' },
  ];

  const moreNavLinks = [
    {
      name: 'How It Works',
      href: '#how-it-works',
      desc: '3-step simple doorstep recycling & appraisal process',
      icon: CheckCircle2,
    },
    {
      name: 'Recycling Solutions',
      href: '#solution',
      desc: 'Sellers, collectors, and institutional recovery',
      icon: Recycle,
    },
    {
      name: 'Materials & Scrap Types',
      href: '#problem',
      desc: 'Plastics, metals, paper, e-waste, glass & textiles',
      icon: Layers,
    },
    {
      name: 'Collectors & Recyclers',
      href: '#collectors',
      desc: 'B2B supply network for licensed scrap aggregators',
      icon: Truck,
    },
    {
      name: 'Campus & Institutions',
      href: '#colleges',
      desc: 'Corporate & university recycling drives',
      icon: Building2,
    },
    {
      name: 'Future Roadmap',
      href: '#roadmap',
      desc: 'Upcoming AI valuation, photo grading & marketplace',
      icon: Clock,
    },
    {
      name: 'Circular Impact',
      href: '#impact',
      desc: 'Resource recovery & environmental stewardship',
      icon: HeartHandshake,
    },
    {
      name: 'FAQs',
      href: '#faq',
      desc: 'Common questions about valuation, pickup & items',
      icon: HelpCircle,
    },
  ];

  const handleLinkClick = (href: string) => {
    setMobileMenuOpen(false);
    setMoreDropdownOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const getInitials = () => {
    if (profile?.displayName) {
      const parts = profile.displayName.split(' ');
      if (parts.length >= 2) {
        return `${parts[0][0]}${parts[1][0]}`.toUpperCase();
      }
      return profile.displayName.slice(0, 2).toUpperCase();
    }
    if (user?.email) {
      return user.email.slice(0, 2).toUpperCase();
    }
    return 'YS';
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#124027]/95 backdrop-blur-md shadow-lg border-b border-[#D4A574]/20 py-3'
          : 'bg-white/80 backdrop-blur-md border-b border-[#1A5C3A]/10 py-4 shadow-sm'
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
            <Logo variant={isScrolled ? 'light' : 'dark'} size="md" />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8" aria-label="Main Navigation">
            {primaryNavLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(link.href);
                }}
                className={`text-sm font-semibold transition-colors duration-200 cursor-pointer ${
                  isScrolled
                    ? 'text-emerald-100/90 hover:text-[#D4A574]'
                    : 'text-[#2D4036] hover:text-[#1A5C3A]'
                }`}
              >
                {link.name}
              </a>
            ))}

            {/* "More" Dropdown Menu */}
            <div className="relative" ref={moreDropdownRef}>
              <button
                type="button"
                onClick={() => setMoreDropdownOpen(!moreDropdownOpen)}
                onMouseEnter={() => setMoreDropdownOpen(true)}
                className={`inline-flex items-center gap-1.5 text-sm font-semibold transition-colors duration-200 cursor-pointer py-1 ${
                  isScrolled
                    ? 'text-emerald-100/90 hover:text-[#D4A574]'
                    : 'text-[#2D4036] hover:text-[#1A5C3A]'
                }`}
                aria-expanded={moreDropdownOpen}
              >
                <span>More</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${
                    moreDropdownOpen ? 'rotate-180 text-[#D4A574]' : ''
                  }`}
                />
              </button>

              {/* Dropdown Panel */}
              {moreDropdownOpen && (
                <div
                  onMouseLeave={() => setMoreDropdownOpen(false)}
                  className="absolute left-1/2 -translate-x-1/2 mt-2 w-80 sm:w-96 bg-white rounded-2xl shadow-2xl border border-[#1A5C3A]/15 p-3 text-[#17201B] animate-in fade-in zoom-in-95 duration-150 z-50"
                >
                  <div className="px-3 py-1.5 mb-1 border-b border-[#1A5C3A]/10 flex items-center justify-between">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#1A5C3A]">
                      Explore All Sections
                    </span>
                    <span className="text-[10px] text-[#56685E]">8 features</span>
                  </div>

                  <div className="grid grid-cols-1 gap-1 max-h-[380px] overflow-y-auto pr-1">
                    {moreNavLinks.map((item) => {
                      const IconComponent = item.icon;
                      return (
                        <a
                          key={item.name}
                          href={item.href}
                          onClick={(e) => {
                            e.preventDefault();
                            handleLinkClick(item.href);
                          }}
                          className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-[#F7F5EF] transition-colors group cursor-pointer"
                        >
                          <div className="p-2 rounded-lg bg-[#1A5C3A]/10 text-[#1A5C3A] group-hover:bg-[#1A5C3A] group-hover:text-white transition-colors shrink-0 mt-0.5">
                            <IconComponent className="w-4 h-4" />
                          </div>
                          <div>
                            <p className="text-xs font-bold text-[#17201B] group-hover:text-[#1A5C3A] transition-colors leading-tight">
                              {item.name}
                            </p>
                            <p className="text-[11px] text-[#56685E] leading-normal line-clamp-1">
                              {item.desc}
                            </p>
                          </div>
                        </a>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          </nav>

          {/* Right Action Cluster */}
          <div className="hidden sm:flex items-center gap-3">
            {user ? (
              /* Signed In User Profile & Bookings */
              <div className="flex items-center gap-2.5">
                <button
                  type="button"
                  onClick={openBookingsModal}
                  className={`inline-flex items-center gap-2 px-4 py-2 rounded-full font-semibold text-xs transition-all shadow-sm cursor-pointer ${
                    isScrolled
                      ? 'bg-white/15 hover:bg-white/25 text-white border border-white/20'
                      : 'bg-[#1A5C3A]/10 hover:bg-[#1A5C3A]/15 text-[#1A5C3A] border border-[#1A5C3A]/20'
                  }`}
                >
                  <Package className="w-3.5 h-3.5" />
                  <span>My Bookings</span>
                </button>

                {/* Avatar with dropdown */}
                <div className="relative" ref={dropdownRef}>
                  <button
                    type="button"
                    onClick={() => setUserDropdownOpen(!userDropdownOpen)}
                    className={`flex items-center gap-2 p-1.5 pl-2.5 pr-2 rounded-full transition-all cursor-pointer ${
                      isScrolled
                        ? 'bg-white/10 hover:bg-white/20 text-white'
                        : 'bg-[#FAF8F3] hover:bg-[#F3EFE6] text-[#17201B] border border-[#1A5C3A]/15'
                    }`}
                  >
                    <span className="text-xs font-bold truncate max-w-[100px]">
                      {profile?.displayName?.split(' ')[0] || 'Account'}
                    </span>
                    <div className="w-7 h-7 rounded-full bg-[#1A5C3A] text-white text-xs font-extrabold flex items-center justify-center shadow-sm">
                      {getInitials()}
                    </div>
                    <ChevronDown className="w-3.5 h-3.5 opacity-70" />
                  </button>

                  {/* Dropdown Menu */}
                  {userDropdownOpen && (
                    <div className="absolute right-0 mt-2 w-56 bg-white rounded-2xl shadow-xl border border-[#1A5C3A]/15 py-2 text-[#17201B] animate-in fade-in zoom-in-95 duration-150 z-50">
                      <div className="px-4 py-2 border-b border-[#1A5C3A]/10">
                        <p className="text-xs font-bold text-[#17201B] truncate">
                          {profile?.displayName || 'Eco Member'}
                        </p>
                        <p className="text-[11px] text-[#56685E] truncate">{user.email}</p>
                      </div>

                      <button
                        type="button"
                        onClick={() => {
                          setUserDropdownOpen(false);
                          openBookingsModal();
                        }}
                        className="w-full text-left px-4 py-2.5 text-xs font-semibold text-[#17201B] hover:bg-[#FAF8F3] flex items-center gap-2.5 cursor-pointer"
                      >
                        <Package className="w-4 h-4 text-[#1A5C3A]" />
                        <span>Track Bookings</span>
                      </button>

                      <button
                        type="button"
                        onClick={() => {
                          setUserDropdownOpen(false);
                          logOut();
                        }}
                        className="w-full text-left px-4 py-2.5 text-xs font-semibold text-red-600 hover:bg-red-50 flex items-center gap-2.5 cursor-pointer border-t border-[#1A5C3A]/10 mt-1"
                      >
                        <LogOut className="w-4 h-4 text-red-500" />
                        <span>Sign Out</span>
                      </button>
                    </div>
                  )}
                </div>
              </div>
            ) : (
              /* Signed Out State: Sign In + Sign Up / Sell */
              <div className="flex items-center gap-2.5">
                <button
                  type="button"
                  onClick={() => openAuthModal('signin')}
                  className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-full font-bold text-xs transition-all cursor-pointer ${
                    isScrolled
                      ? 'text-white hover:text-[#D4A574] hover:bg-white/10'
                      : 'text-[#1A5C3A] hover:bg-[#1A5C3A]/10'
                  }`}
                >
                  <User className="w-3.5 h-3.5" />
                  <span>Sign In</span>
                </button>

                <button
                  type="button"
                  onClick={() => openAuthModal('signup')}
                  className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-full font-bold text-xs transition-all shadow-sm cursor-pointer ${
                    isScrolled
                      ? 'bg-[#D4A574] hover:bg-[#c49360] text-[#17201B]'
                      : 'bg-[#1A5C3A] hover:bg-[#14472D] text-white'
                  }`}
                >
                  <span>Sign Up</span>
                </button>
              </div>
            )}

            {/* Get Valued Primary CTA */}
            <a
              href="#sellers"
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick('#sellers');
              }}
              id="nav-cta-button"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#D4A574] hover:bg-[#c49360] text-[#17201B] font-bold text-xs transition-all duration-200 shadow-md hover:shadow-lg hover:scale-105"
            >
              <span>Get Valued</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#17201B]" />
            </a>
          </div>

          {/* Mobile menu toggle */}
          <div className="flex lg:hidden items-center gap-2">
            {user && (
              <button
                type="button"
                onClick={openBookingsModal}
                className="p-2 rounded-xl bg-[#1A5C3A] text-white text-xs font-bold"
                aria-label="My Bookings"
              >
                <Package className="w-4 h-4" />
              </button>
            )}

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              type="button"
              id="mobile-menu-toggle"
              aria-label="Toggle menu"
              className={`p-2 rounded-xl transition-colors focus:outline-none focus:ring-2 focus:ring-[#1A5C3A] ${
                isScrolled ? 'text-white hover:bg-white/10' : 'text-[#17201B] hover:bg-black/5'
              }`}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#103520] border-b border-[#D4A574]/30 px-6 pt-4 pb-6 mt-3 shadow-2xl animate-in slide-in-from-top duration-200">
          
          {/* User Status in Mobile */}
          {user ? (
            <div className="bg-[#1A5C3A]/60 p-4 rounded-2xl border border-white/10 mb-4 flex items-center justify-between">
              <div>
                <p className="text-xs font-bold text-white">{profile?.displayName || user.email}</p>
                <p className="text-[10px] text-emerald-200/70">{user.email}</p>
              </div>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    openBookingsModal();
                  }}
                  className="px-3 py-1.5 rounded-xl bg-white text-[#1A5C3A] text-xs font-bold"
                >
                  Bookings
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    logOut();
                  }}
                  className="p-1.5 rounded-xl bg-red-500/20 text-red-300 text-xs"
                >
                  <LogOut className="w-4 h-4" />
                </button>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-2 gap-2 mb-4">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  openAuthModal('signin');
                }}
                className="py-2.5 px-4 rounded-xl bg-white/10 text-white text-xs font-bold text-center"
              >
                Sign In
              </button>
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  openAuthModal('signup');
                }}
                className="py-2.5 px-4 rounded-xl bg-[#D4A574] text-[#17201B] text-xs font-bold text-center"
              >
                Sign Up
              </button>
            </div>
          )}

          <div className="flex flex-col space-y-2">
            {primaryNavLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(link.href);
                }}
                className="text-base font-semibold text-white hover:text-[#D4A574] py-2 border-b border-white/10 transition-colors"
              >
                {link.name}
              </a>
            ))}

            {/* Mobile More Sections Accordion */}
            <div className="pt-2 pb-1">
              <p className="text-xs font-bold uppercase tracking-wider text-[#D4A574] mb-2 px-1">
                More Sections
              </p>
              <div className="grid grid-cols-2 gap-2">
                {moreNavLinks.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleLinkClick(item.href);
                    }}
                    className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-xs font-medium text-emerald-100/90 hover:text-white transition-colors border border-white/5 flex items-center gap-2"
                  >
                    <item.icon className="w-3.5 h-3.5 text-[#D4A574] shrink-0" />
                    <span className="truncate">{item.name}</span>
                  </a>
                ))}
              </div>
            </div>

            <div className="pt-2">
              <a
                href="#sellers"
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick('#sellers');
                }}
                className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-[#D4A574] text-[#17201B] font-semibold text-sm shadow-md"
              >
                <span>Get Materials Valued</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
