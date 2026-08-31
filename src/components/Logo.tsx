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
      <defs>
        {/* Curved Path for Top Text "YOUR" */}
        <path
          id="yourscraper-top-text-arc"
          d="M 50 78 A 54 54 0 0 1 150 78"
          fill="none"
        />

        {/* Curved Path for Bottom Text "SCRAPER" */}
        <path
          id="yourscraper-bottom-text-arc"
          d="M 40 132 A 66 66 0 0 0 160 132"
          fill="none"
        />

        {/* Stipple pattern filter or subtle grain for texture */}
        <linearGradient id="leafGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#8EA676" />
          <stop offset="100%" stopColor="#647F4E" />
        </linearGradient>

        <linearGradient id="plugGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#C9D8B6" />
          <stop offset="100%" stopColor="#8EA676" />
        </linearGradient>

        <linearGradient id="arrowLight" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#D5E5C0" />
          <stop offset="100%" stopColor="#C2D6A7" />
        </linearGradient>

        <linearGradient id="arrowDark" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#6A8552" />
          <stop offset="100%" stopColor="#556E40" />
        </linearGradient>
      </defs>

      {/* Clean circular backdrop for pristine legibility on both dark and light surfaces */}
      <circle cx="100" cy="100" r="94" fill="#FFFFFF" />

      {/* 1. Organic outer ring with subtle natural hand-drawn contour */}
      <path
        d="M 98 12 
           C 125 12, 150 22, 166 42 
           C 180 60, 185 85, 182 108 
           C 180 120, 172 135, 170 148 
           C 166 170, 142 186, 118 188 
           C 92 190, 68 184, 48 170 
           C 30 156, 18 136, 16 114 
           C 14 90, 24 66, 42 46 
           C 56 30, 76 14, 98 12 Z"
        stroke="#5B7645"
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />

      {/* 2. Top-Left Attached Eco Leaf (around 10 o'clock) */}
      <g transform="translate(18, 18) rotate(-18)">
        {/* Leaf blade */}
        <path
          d="M 5 35 C 5 15, 25 5, 45 2 C 45 25, 35 45, 15 48 C 10 49, 5 43, 5 35 Z"
          fill="url(#leafGrad)"
          stroke="#4F6739"
          strokeWidth="2.5"
          strokeLinejoin="round"
        />
        {/* Leaf central stem and veins */}
        <path
          d="M 6 36 Q 25 24 44 3"
          stroke="#3B4E2B"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M 16 28 Q 18 20 25 18"
          stroke="#3B4E2B"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M 23 23 Q 26 31 34 32"
          stroke="#3B4E2B"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M 30 16 Q 34 10 39 9"
          stroke="#3B4E2B"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </g>

      {/* 3. Bottom-Right Attached Electric Wall Plug (around 4-5 o'clock) */}
      <g transform="translate(156, 116) rotate(16)">
        {/* 2 Electrical Prongs */}
        <rect x="18" y="2" width="5.5" height="12" rx="2" fill="#5B7645" />
        <rect x="29" y="2" width="5.5" height="12" rx="2" fill="#5B7645" />

        {/* Plug Body */}
        <path
          d="M 12 12 H 40 C 44 12, 46 15, 46 18 V 32 C 46 42, 38 48, 26 48 C 14 48, 6 42, 6 32 V 18 C 6 15, 8 12, 12 12 Z"
          fill="url(#plugGrad)"
          stroke="#5B7645"
          strokeWidth="2.5"
          strokeLinejoin="round"
        />

        {/* Plug cord base */}
        <path
          d="M 26 48 V 56"
          stroke="#5B7645"
          strokeWidth="5"
          strokeLinecap="round"
        />

        {/* Subtle stipple texture effect on plug */}
        <circle cx="16" cy="30" r="1.2" fill="#475D35" opacity="0.6" />
        <circle cx="22" cy="35" r="1" fill="#475D35" opacity="0.6" />
        <circle cx="28" cy="32" r="1.2" fill="#475D35" opacity="0.6" />
        <circle cx="34" cy="34" r="1" fill="#475D35" opacity="0.6" />
        <circle cx="20" cy="41" r="1.2" fill="#475D35" opacity="0.6" />
        <circle cx="31" cy="40" r="1" fill="#475D35" opacity="0.6" />
      </g>

      {/* 4. Arched Text "YOUR" at Top */}
      <text
        fill="#17201B"
        fontFamily="'Poppins', 'Inter', system-ui, sans-serif"
        fontSize="17"
        fontWeight="800"
        letterSpacing="5"
      >
        <textPath
          href="#yourscraper-top-text-arc"
          startOffset="50%"
          textAnchor="middle"
        >
          YOUR
        </textPath>
      </text>

      {/* 5. Center 3-Arrow Mobius Recycling Symbol */}
      <g transform="translate(100, 100) scale(0.82) translate(-100, -100)">
        
        {/* ARROW 1: Top Right */}
        <g>
          {/* Light segment ribbon */}
          <path
            d="M 85 58 L 110 58 C 117 58, 123 63, 125 70 L 132 88 L 114 96 L 108 81 C 107 78, 104 76, 100 76 L 85 76 Z"
            fill="url(#arrowLight)"
          />
          {/* Dark fold & arrow head */}
          <path
            d="M 125 70 L 140 80 L 118 100 L 114 96 L 132 88 Z"
            fill="url(#arrowDark)"
          />
          <polygon
            points="145,66 142,98 116,84"
            fill="url(#arrowDark)"
          />
          {/* Subtle stipple on arrowhead */}
          <circle cx="132" cy="82" r="1" fill="#2E4420" opacity="0.4" />
          <circle cx="136" cy="86" r="1.2" fill="#2E4420" opacity="0.4" />
        </g>

        {/* ARROW 2: Bottom */}
        <g transform="rotate(120 100 106)">
          {/* Light segment ribbon */}
          <path
            d="M 85 58 L 110 58 C 117 58, 123 63, 125 70 L 132 88 L 114 96 L 108 81 C 107 78, 104 76, 100 76 L 85 76 Z"
            fill="url(#arrowLight)"
          />
          {/* Dark fold & arrow head */}
          <path
            d="M 125 70 L 140 80 L 118 100 L 114 96 L 132 88 Z"
            fill="url(#arrowDark)"
          />
          <polygon
            points="145,66 142,98 116,84"
            fill="url(#arrowDark)"
          />
          {/* Subtle stipple on arrowhead */}
          <circle cx="132" cy="82" r="1" fill="#2E4420" opacity="0.4" />
          <circle cx="136" cy="86" r="1.2" fill="#2E4420" opacity="0.4" />
        </g>

        {/* ARROW 3: Left */}
        <g transform="rotate(240 100 106)">
          {/* Light segment ribbon */}
          <path
            d="M 85 58 L 110 58 C 117 58, 123 63, 125 70 L 132 88 L 114 96 L 108 81 C 107 78, 104 76, 100 76 L 85 76 Z"
            fill="url(#arrowLight)"
          />
          {/* Dark fold & arrow head */}
          <path
            d="M 125 70 L 140 80 L 118 100 L 114 96 L 132 88 Z"
            fill="url(#arrowDark)"
          />
          <polygon
            points="145,66 142,98 116,84"
            fill="url(#arrowDark)"
          />
          {/* Subtle stipple on arrowhead */}
          <circle cx="132" cy="82" r="1" fill="#2E4420" opacity="0.4" />
          <circle cx="136" cy="86" r="1.2" fill="#2E4420" opacity="0.4" />
        </g>

      </g>

      {/* 6. Arched Text "SCRAPER" at Bottom */}
      <text
        fill="#17201B"
        fontFamily="'Poppins', 'Inter', system-ui, sans-serif"
        fontSize="17"
        fontWeight="800"
        letterSpacing="6"
      >
        <textPath
          href="#yourscraper-bottom-text-arc"
          startOffset="50%"
          textAnchor="middle"
        >
          SCRAPER
        </textPath>
      </text>

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
