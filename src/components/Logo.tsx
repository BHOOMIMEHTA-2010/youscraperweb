import React from 'react';

interface LogoProps {
  variant?: 'light' | 'dark';
  className?: string;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  showText?: boolean;
  showTagline?: boolean;
}

/**
 * Official YourScraper Brand Logo Emblem
 * Incorporates the circular eco-seal with the leaf, electric plug, 3-arrow recycling mobius,
 * and arched "YOUR SCRAPER" typography.
 */
export const OfficialLogoEmblem: React.FC<{
  size?: number | string;
  className?: string;
  isLight?: boolean;
}> = ({ size = 48, className = '', isLight = false }) => {
  return (
    <svg
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: size, height: size }}
      className={`drop-shadow-sm flex-shrink-0 transition-transform duration-300 ${className}`}
      aria-label="YourScraper Official Logo"
    >
      {/* Green Circular Emblem Badge */}
      <circle cx="100" cy="100" r="92" fill="#388439" />

      {/* Stem with Y-fork */}
      <path
        d="M 100 148 V 115 M 100 115 L 89 104 M 100 115 L 111 104"
        stroke="#FFFFFF"
        strokeWidth="7.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Left Leaf Body */}
      <path
        d="M 89 104 C 68 114 52 96 53 74 C 53.5 58 60 54 60 54 C 60 54 78 58 90 76 C 97 87 93 100 89 104 Z"
        stroke="#FFFFFF"
        strokeWidth="7.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />

      {/* Left Leaf Inner Vein */}
      <path
        d="M 80 94 L 67 71"
        stroke="#FFFFFF"
        strokeWidth="7.5"
        strokeLinecap="round"
      />

      {/* Right Leaf Body (Symmetrical) */}
      <path
        d="M 111 104 C 132 114 148 96 147 74 C 146.5 58 140 54 140 54 C 140 54 122 58 110 76 C 103 87 107 100 111 104 Z"
        stroke="#FFFFFF"
        strokeWidth="7.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />

      {/* Right Leaf Inner Vein */}
      <path
        d="M 120 94 L 133 71"
        stroke="#FFFFFF"
        strokeWidth="7.5"
        strokeLinecap="round"
      />
    </svg>
  );
};

export const Logo: React.FC<LogoProps> = ({
  variant = 'dark',
  className = '',
  size = 'md',
  showText = true,
  showTagline = true,
}) => {
  const pixelSizes = {
    xs: 28,
    sm: 36,
    md: 44,
    lg: 56,
    xl: 72,
  };

  const textSizes = {
    xs: { main: 'text-sm', sub: 'text-[8px]' },
    sm: { main: 'text-base', sub: 'text-[9px]' },
    md: { main: 'text-xl', sub: 'text-[10px]' },
    lg: { main: 'text-2xl', sub: 'text-xs' },
    xl: { main: 'text-3xl', sub: 'text-sm' },
  };

  const isLight = variant === 'light';

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Official Circular Badge Seal */}
      <div className="relative group flex-shrink-0 transition-transform duration-300 group-hover:scale-105">
        <OfficialLogoEmblem size={pixelSizes[size]} isLight={isLight} />
      </div>

      {/* Brand Typography */}
      {showText && (
        <div className="flex flex-col leading-none">
          <span
            className={`font-heading font-extrabold tracking-tight ${textSizes[size].main} ${
              isLight ? 'text-white' : 'text-[#17201B]'
            }`}
          >
            Your<span className={isLight ? 'text-[#C9D8B6]' : 'text-[#1A5C3A]'}>Scraper</span>
          </span>
          {showTagline && (
            <span
              className={`font-sans tracking-wider uppercase font-semibold mt-0.5 ${textSizes[size].sub} ${
                isLight ? 'text-emerald-100/70' : 'text-[#56685E]'
              }`}
            >
              Turn Trash Into Treasure
            </span>
          )}
        </div>
      )}
    </div>
  );
};
