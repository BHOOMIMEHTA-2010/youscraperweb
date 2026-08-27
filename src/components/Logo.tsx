import React from 'react';

interface LogoProps {
  variant?: 'light' | 'dark';
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const Logo: React.FC<LogoProps> = ({ variant = 'dark', className = '', size = 'md' }) => {
  const sizeMap = {
    sm: { icon: 'w-7 h-7', text: 'text-lg', sub: 'text-[9px]' },
    md: { icon: 'w-9 h-9', text: 'text-xl', sub: 'text-[10px]' },
    lg: { icon: 'w-12 h-12', text: 'text-2xl', sub: 'text-xs' },
  };

  const isLight = variant === 'light';

  return (
    <div className={`flex items-center gap-2.5 select-none ${className}`}>
      {/* Brand Icon SVG */}
      <div className={`relative ${sizeMap[size].icon} flex-shrink-0 transition-transform duration-300 hover:rotate-12`}>
        <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-sm">
          {/* Base outer circle container */}
          <circle cx="50" cy="50" r="46" fill={isLight ? '#FFFFFF' : '#1A5C3A'} />
          
          {/* Top Arc: Electronic scrap arrow */}
          <path
            d="M28 50 C28 34, 40 24, 56 24 C68 24, 76 32, 78 40"
            stroke={isLight ? '#1A5C3A' : '#D4A574'}
            strokeWidth="8"
            strokeLinecap="round"
          />
          <polygon
            points="81,28 80,45 64,41"
            fill={isLight ? '#1A5C3A' : '#D4A574'}
          />

          {/* Bottom Arc: Circular green revival loop */}
          <path
            d="M72 50 C72 66, 60 76, 44 76 C32 76, 24 68, 22 60"
            stroke={isLight ? '#D4A574' : '#58C28A'}
            strokeWidth="8"
            strokeLinecap="round"
          />
          <polygon
            points="19,72 20,55 36,59"
            fill={isLight ? '#D4A574' : '#58C28A'}
          />

          {/* Center core chip node */}
          <rect
            x="43"
            y="43"
            width="14"
            height="14"
            rx="3"
            fill={isLight ? '#1A5C3A' : '#FFFFFF'}
          />
          <circle cx="50" cy="50" r="2.5" fill={isLight ? '#D4A574' : '#1A5C3A'} />
        </svg>
      </div>

      {/* Brand Typography */}
      <div className="flex flex-col leading-none">
        <span className={`font-heading font-bold tracking-tight ${sizeMap[size].text} ${isLight ? 'text-white' : 'text-[#17201B]'}`}>
          Your<span className="text-[#D4A574]">Scraper</span>
        </span>
        <span className={`font-sans tracking-wider uppercase font-medium mt-0.5 ${sizeMap[size].sub} ${isLight ? 'text-white/70' : 'text-[#56685E]'}`}>
          Circular Electronics
        </span>
      </div>
    </div>
  );
};
