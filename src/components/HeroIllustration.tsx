import React from 'react';
import { OfficialLogoEmblem } from './Logo';
import { Truck, CheckCircle2, ShieldCheck, Sparkles, Smartphone, Laptop, Leaf, RefreshCw } from 'lucide-react';

export const HeroIllustration: React.FC = () => {
  return (
    <div className="relative w-full max-w-[560px] mx-auto lg:max-w-none flex items-center justify-center select-none">
      
      {/* Background Soft Glow & Organic Shape */}
      <div className="absolute inset-0 -m-6 bg-gradient-to-tr from-[#D4E8C2]/40 via-[#F3ECE0]/60 to-[#E1EED9]/40 rounded-[3rem] blur-xl pointer-events-none transform -rotate-1" />

      {/* Main Illustration Canvas Frame */}
      <div className="relative w-full aspect-[4/3.4] sm:aspect-[4/3.2] bg-gradient-to-b from-[#FDFBF7] to-[#F5F8F2] rounded-3xl border border-[#1A5C3A]/10 shadow-xl overflow-hidden flex items-center justify-center p-4 sm:p-6">
        
        {/* SVG Graphic Art Layer */}
        <svg
          viewBox="0 0 540 440"
          className="w-full h-full object-contain"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/* Gradients */}
            <linearGradient id="hillGrad1" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#86A96F" />
              <stop offset="100%" stopColor="#5E8347" />
            </linearGradient>

            <linearGradient id="hillGrad2" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#ABC498" />
              <stop offset="100%" stopColor="#7E9E66" />
            </linearGradient>

            <linearGradient id="waveCurve" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#E9F2E2" />
              <stop offset="100%" stopColor="#D5E6CA" />
            </linearGradient>

            <linearGradient id="skinGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#FCD5B5" />
              <stop offset="100%" stopColor="#F5BF9B" />
            </linearGradient>

            <linearGradient id="hairGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#2A312D" />
              <stop offset="100%" stopColor="#1B201D" />
            </linearGradient>

            <linearGradient id="binGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#4D845D" />
              <stop offset="100%" stopColor="#2D603B" />
            </linearGradient>

            <linearGradient id="toteGrad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#E5B888" />
              <stop offset="100%" stopColor="#C9945B" />
            </linearGradient>

            <linearGradient id="pantsGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#244E3D" />
              <stop offset="100%" stopColor="#163729" />
            </linearGradient>

            {/* Stipple dot pattern */}
            <pattern id="stipple" width="12" height="12" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="0.8" fill="#3D5A2E" opacity="0.18" />
              <circle cx="8" cy="8" r="0.9" fill="#3D5A2E" opacity="0.22" />
            </pattern>
          </defs>

          {/* 1. Background Organic Sky & Sun Glow */}
          <circle cx="430" cy="110" r="85" fill="#FCEBD6" opacity="0.6" />
          <circle cx="430" cy="110" r="55" fill="#FCE4C3" opacity="0.8" />

          {/* 2. Stylized Organic Mountain / Rolling Hills (inspired by Carbonex reference) */}
          <path
            d="M -20 380 C 60 300, 160 310, 240 350 C 320 390, 420 340, 560 370 L 560 460 L -20 460 Z"
            fill="url(#hillGrad2)"
            opacity="0.4"
          />
          <path
            d="M -20 380 C 60 300, 160 310, 240 350 C 320 390, 420 340, 560 370 L 560 460 L -20 460 Z"
            fill="url(#stipple)"
          />

          {/* Wave transition path */}
          <path
            d="M -20 410 C 100 370, 200 420, 310 390 C 420 360, 480 390, 560 380 L 560 460 L -20 460 Z"
            fill="url(#hillGrad1)"
          />

          {/* 3. Foreground Botanical Plant Fronds (Bottom Left, like Recycling reference) */}
          <g transform="translate(10, 290)">
            {/* Big Monstera / Palm Leaf 1 */}
            <path
              d="M 10 130 C 5 70, 50 40, 95 30 C 90 65, 75 105, 30 135 Z"
              fill="#527D48"
            />
            <path d="M 15 125 Q 55 75 90 35" stroke="#3A5D33" strokeWidth="2.5" />
            <path d="M 35 100 Q 55 90 70 85" stroke="#3A5D33" strokeWidth="1.5" />
            <path d="M 50 78 Q 70 65 82 58" stroke="#3A5D33" strokeWidth="1.5" />

            {/* Big Palm Leaf 2 */}
            <path
              d="M -15 130 C -20 40, 40 10, 80 0 C 70 45, 55 95, -5 135 Z"
              fill="#749F67"
            />
            <path d="M -8 125 Q 35 55 75 5" stroke="#507843" strokeWidth="2.5" />

            {/* Small accent Leaf */}
            <path
              d="M 50 140 C 60 90, 100 80, 130 85 C 115 110, 95 135, 60 142 Z"
              fill="#98BD89"
            />
          </g>

          {/* 4. The Smart E-Waste Recycling Station / Green Bin */}
          <g transform="translate(145, 175)">
            {/* Bin Shadow */}
            <ellipse cx="65" cy="205" rx="60" ry="12" fill="#143120" opacity="0.25" />

            {/* Bin Wheels */}
            <rect x="18" y="190" width="16" height="20" rx="6" fill="#1B2B20" />
            <rect x="96" y="190" width="16" height="20" rx="6" fill="#1B2B20" />

            {/* Bin Main Body */}
            <path
              d="M 20 50 L 30 195 C 30 200, 35 204, 42 204 L 88 204 C 95 204, 100 200, 100 195 L 110 50 Z"
              fill="url(#binGrad)"
              stroke="#214D30"
              strokeWidth="2.5"
            />

            {/* Bin Lip / Rim */}
            <rect x="12" y="38" width="106" height="14" rx="4" fill="#3D734C" stroke="#214D30" strokeWidth="2" />
            
            {/* Bin Handle / Grip Bar */}
            <rect x="25" y="42" width="80" height="5" rx="2.5" fill="#2A5337" />

            {/* Bin Flap Lid (Open angle) */}
            <path
              d="M 12 38 L 8 20 C 8 16, 12 14, 16 14 L 114 14 C 118 14, 122 16, 122 20 L 118 38 Z"
              fill="#346841"
              stroke="#214D30"
              strokeWidth="2"
            />

            {/* Recycling Mobius Emblem on Bin Body */}
            <g transform="translate(65, 120) scale(0.65) translate(-65, -120)">
              {/* Central Mobius Vector */}
              <circle cx="65" cy="120" r="28" fill="#FFFFFF" opacity="0.9" />
              <path
                d="M 65 100 L 73 100 C 78 100, 82 104, 83 109 L 85 116 L 75 120 L 73 113 C 72 111, 70 110, 68 110 L 65 110 Z"
                fill="#2E7D52"
              />
              <polygon points="90,105 88,122 75,114" fill="#1A5C3A" />
              
              <g transform="rotate(120 65 120)">
                <path
                  d="M 65 100 L 73 100 C 78 100, 82 104, 83 109 L 85 116 L 75 120 L 73 113 C 72 111, 70 110, 68 110 L 65 110 Z"
                  fill="#2E7D52"
                />
                <polygon points="90,105 88,122 75,114" fill="#1A5C3A" />
              </g>

              <g transform="rotate(240 65 120)">
                <path
                  d="M 65 100 L 73 100 C 78 100, 82 104, 83 109 L 85 116 L 75 120 L 73 113 C 72 111, 70 110, 68 110 L 65 110 Z"
                  fill="#2E7D52"
                />
                <polygon points="90,105 88,122 75,114" fill="#1A5C3A" />
              </g>
            </g>

            {/* Horizontal bin rib lines */}
            <line x1="38" y1="155" x2="92" y2="155" stroke="#214D30" strokeWidth="2" strokeLinecap="round" />
            <line x1="42" y1="165" x2="88" y2="165" stroke="#214D30" strokeWidth="2" strokeLinecap="round" />
          </g>

          {/* 5. Character (Eco champion participating in circular recycling) */}
          <g transform="translate(295, 110)">
            {/* Back leg */}
            <path
              d="M 62 210 L 60 300 C 60 304, 56 308, 50 308 L 40 308 L 44 210 Z"
              fill="#183B2B"
            />
            {/* Front leg */}
            <path
              d="M 72 205 L 75 298 C 75 304, 79 308, 86 308 L 96 308 L 88 205 Z"
              fill="url(#pantsGrad)"
            />

            {/* Shoes */}
            <path d="M 36 306 L 52 306 C 55 306, 56 309, 56 312 L 32 312 C 32 308, 34 306, 36 306 Z" fill="#D4A574" />
            <path d="M 84 306 L 102 306 C 105 306, 106 309, 106 312 L 80 312 C 80 308, 82 306, 84 306 Z" fill="#D4A574" />

            {/* Torso / Top */}
            <path
              d="M 50 85 C 45 105, 42 150, 44 205 L 94 205 C 96 150, 92 105, 85 85 Z"
              fill="#F7F1E5"
              stroke="#D8CCA8"
              strokeWidth="1.5"
            />

            {/* Head & Neck */}
            <rect x="62" y="65" width="12" height="22" fill="url(#skinGrad)" rx="3" />
            
            {/* Face Profile / Smiling Head */}
            <ellipse cx="68" cy="52" rx="19" ry="21" fill="url(#skinGrad)" />
            
            {/* Cheerful eye & smile */}
            <circle cx="60" cy="50" r="2.2" fill="#1F2620" />
            <path d="M 54 58 Q 62 65 68 59" stroke="#9C4436" strokeWidth="2" strokeLinecap="round" fill="none" />
            <ellipse cx="56" cy="56" rx="4" ry="2.5" fill="#F09B8B" opacity="0.6" />

            {/* Modern Chic Hair Bun */}
            <path
              d="M 55 45 C 55 30, 75 25, 85 35 C 92 42, 90 60, 82 66 C 75 72, 60 70, 56 55 Z"
              fill="url(#hairGrad)"
            />
            <circle cx="86" cy="32" r="14" fill="url(#hairGrad)" />

            {/* Golden statement hoop earring */}
            <circle cx="73" cy="55" r="5" stroke="#D4A574" strokeWidth="2.5" fill="none" />

            {/* Left Arm: reaching forward guiding e-waste into bin */}
            {/* Shoulder to elbow */}
            <path
              d="M 52 92 C 35 105, -5 125, -60 120 C -70 119, -75 123, -75 128 C -75 134, -68 136, -58 136 C -10 142, 32 120, 50 104 Z"
              fill="url(#skinGrad)"
            />

            {/* Tote Bag strap around shoulder */}
            <path
              d="M 75 88 C 65 110, 55 145, 48 165 C 46 170, 50 172, 54 170 C 62 145, 74 110, 84 88 Z"
              fill="#A8753B"
            />

            {/* Eco Tote Bag hanging on side */}
            <g transform="translate(40, 160)">
              {/* Bag Body */}
              <path
                d="M 5 0 L 85 5 C 90 5, 94 9, 93 15 L 85 95 C 84 100, 80 105, 74 105 L 12 100 C 6 100, 2 95, 3 90 L 0 5 C 0 2, 2 0, 5 0 Z"
                fill="url(#toteGrad)"
                stroke="#A8753B"
                strokeWidth="2"
              />
              {/* Recycled mobius stamp on tote bag */}
              <g transform="translate(46, 50) scale(0.65) translate(-65, -120)">
                <circle cx="65" cy="120" r="28" fill="#FFFFFF" opacity="0.95" />
                <path
                  d="M 65 100 L 73 100 C 78 100, 82 104, 83 109 L 85 116 L 75 120 L 73 113 C 72 111, 70 110, 68 110 L 65 110 Z"
                  fill="#1A5C3A"
                />
                <polygon points="90,105 88,122 75,114" fill="#D4A574" />
                
                <g transform="rotate(120 65 120)">
                  <path
                    d="M 65 100 L 73 100 C 78 100, 82 104, 83 109 L 85 116 L 75 120 L 73 113 C 72 111, 70 110, 68 110 L 65 110 Z"
                    fill="#1A5C3A"
                  />
                  <polygon points="90,105 88,122 75,114" fill="#D4A574" />
                </g>

                <g transform="rotate(240 65 120)">
                  <path
                    d="M 65 100 L 73 100 C 78 100, 82 104, 83 109 L 85 116 L 75 120 L 73 113 C 72 111, 70 110, 68 110 L 65 110 Z"
                    fill="#1A5C3A"
                  />
                  <polygon points="90,105 88,122 75,114" fill="#D4A574" />
                </g>
              </g>
            </g>
          </g>

          {/* 6. Floating Multi-Material Recyclable Stream (Plastic, Paper/Cardboard, Glass, Metal, Electronics) */}
          
          {/* Item 1: Recyclable Cardboard Box with Mobius Symbol */}
          <g transform="translate(90, 70) rotate(-10)">
            {/* Box Front Face */}
            <path d="M 0 15 L 42 10 L 42 46 L 0 50 Z" fill="#D4A574" stroke="#B38250" strokeWidth="1.5" />
            {/* Box Top Flap */}
            <path d="M 0 15 L 22 2 L 60 0 L 42 10 Z" fill="#E8C39E" stroke="#B38250" strokeWidth="1.5" />
            {/* Box Side */}
            <path d="M 42 10 L 60 0 L 60 36 L 42 46 Z" fill="#C49360" stroke="#B38250" strokeWidth="1.5" />
            {/* Mobius stamp on cardboard */}
            <circle cx="21" cy="30" r="8" fill="#FFFFFF" opacity="0.8" />
            <path d="M 18 27 L 24 27 L 21 34 Z" fill="#1A5C3A" />
          </g>

          {/* Item 2: Recyclable Plastic Bottle / Container */}
          <g transform="translate(195, 80) rotate(22)">
            {/* Bottle body */}
            <rect x="5" y="16" width="22" height="42" rx="6" fill="#88D4B4" opacity="0.85" stroke="#3D9372" strokeWidth="1.2" />
            {/* Bottle neck */}
            <rect x="10" y="8" width="12" height="9" rx="2" fill="#88D4B4" opacity="0.85" stroke="#3D9372" strokeWidth="1.2" />
            {/* Bottle cap */}
            <rect x="9" y="4" width="14" height="5" rx="1.5" fill="#1A5C3A" />
            {/* Recycling wave stripes */}
            <line x1="9" y1="28" x2="23" y2="28" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" opacity="0.8" />
            <line x1="9" y1="36" x2="23" y2="36" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" opacity="0.8" />
          </g>

          {/* Item 3: Glass Bottle / Jar */}
          <g transform="translate(145, 45) rotate(-15)">
            <path d="M 8 12 C 8 8, 12 6, 12 2 L 20 2 C 20 6, 24 8, 24 12 L 26 40 C 26 44, 22 46, 16 46 C 10 46, 6 44, 6 40 Z" fill="#A7D3E8" opacity="0.8" stroke="#4F8DAE" strokeWidth="1.2" />
            <rect x="11" y="0" width="10" height="3" rx="1" fill="#D4A574" />
            {/* Glass reflection highlight */}
            <path d="M 10 16 L 10 38" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" opacity="0.9" />
          </g>

          {/* Item 4: Aluminum / Metal Tin Can */}
          <g transform="translate(230, 115) rotate(-12)">
            <ellipse cx="14" cy="6" rx="12" ry="5" fill="#D1D9D4" stroke="#8A9E92" strokeWidth="1.2" />
            <path d="M 2 6 L 2 32 C 2 36, 26 36, 26 32 L 26 6 Z" fill="#E5EDE8" stroke="#8A9E92" strokeWidth="1.2" />
            <ellipse cx="14" cy="32" rx="12" ry="5" fill="#C5D1CB" stroke="#8A9E92" strokeWidth="1.2" />
            {/* Metal ridges */}
            <line x1="6" y1="16" x2="22" y2="16" stroke="#8A9E92" strokeWidth="1" />
            <line x1="6" y1="22" x2="22" y2="22" stroke="#8A9E92" strokeWidth="1" />
          </g>

          {/* Item 5: Circuit / E-waste Component */}
          <g transform="translate(195, 140) rotate(-18)">
            <rect x="0" y="0" width="28" height="42" rx="4" fill="#2C3E35" stroke="#D4A574" strokeWidth="1.2" />
            <rect x="3" y="4" width="22" height="30" rx="2" fill="#5E8A73" opacity="0.8" />
            <path d="M 6 12 H 20 M 10 12 V 24 M 10 24 H 18" stroke="#FFFFFF" strokeWidth="0.9" opacity="0.8" />
            <circle cx="18" cy="24" r="1.2" fill="#D4A574" />
          </g>

          {/* Item 6: Floating Green Botanical Leaves & Sparkles in the air */}
          {/* Leaf 1 */}
          <g transform="translate(255, 55) rotate(35)">
            <path d="M 0 25 C 0 10, 15 0, 30 0 C 30 15, 20 28, 5 30 Z" fill="#6EA35B" />
            <path d="M 2 24 Q 15 15 28 2" stroke="#487538" strokeWidth="1.5" />
          </g>

          {/* Leaf 2 */}
          <g transform="translate(110, 30) rotate(-25)">
            <path d="M 0 20 C 0 8, 12 0, 24 0 C 24 12, 16 22, 4 24 Z" fill="#8EBE79" />
            <path d="M 2 20 Q 12 12 22 2" stroke="#5E8C4A" strokeWidth="1.2" />
          </g>

          {/* Circular Flow Mobius Ribbon Tag: COLLECT -> SORT -> RECOVER -> REUSE -> VALUE */}
          <g transform="translate(50, 395)">
            <rect x="0" y="0" width="440" height="28" rx="14" fill="#17201B" opacity="0.92" />
            <text x="220" y="18" textAnchor="middle" fill="#D4A574" fontSize="10.5" fontWeight="bold" fontFamily="sans-serif" letterSpacing="1">
              COLLECT  •  SORT  •  RECOVER  •  REUSE  •  VALUE
            </text>
          </g>

          {/* Floating Eco Hearts */}
          <g transform="translate(270, 45)">
            <path
              d="M 12 4 C 8 0, 2 2, 2 7 C 2 13, 12 19, 12 19 C 12 19, 22 13, 22 7 C 22 2, 16 0, 12 4 Z"
              fill="#529B69"
              opacity="0.8"
            />
          </g>

          <g transform="translate(130, 135) scale(0.75)">
            <path
              d="M 12 4 C 8 0, 2 2, 2 7 C 2 13, 12 19, 12 19 C 12 19, 22 13, 22 7 C 22 2, 16 0, 12 4 Z"
              fill="#D4A574"
              opacity="0.9"
            />
          </g>

          {/* Sparkles & Circular Eco Dots */}
          <circle cx="210" cy="50" r="3" fill="#D4A574" />
          <circle cx="150" cy="95" r="2.5" fill="#58C28A" />
          <circle cx="280" cy="90" r="3" fill="#8EBE79" />
          <circle cx="95" cy="140" r="2" fill="#D4A574" />
        </svg>

        {/* 3 Interactive Floating Modern Pill Badges over the illustration */}
        
        {/* Badge 1: Top-Left "Doorstep Pickup Confirmed" */}
        <div className="absolute top-4 left-4 sm:top-6 sm:left-6 bg-white/95 backdrop-blur-md px-3.5 py-2 sm:px-4 sm:py-2.5 rounded-2xl shadow-lg border border-[#1A5C3A]/15 flex items-center gap-2.5 transform hover:-translate-y-1 transition-all duration-300">
          <div className="w-8 h-8 rounded-xl bg-[#1A5C3A] text-[#D4A574] flex items-center justify-center flex-shrink-0 shadow-sm">
            <Truck className="w-4 h-4" />
          </div>
          <div>
            <div className="text-[11px] sm:text-xs font-bold text-[#17201B] leading-none flex items-center gap-1">
              <span>Free Doorstep Pickup</span>
              <CheckCircle2 className="w-3 h-3 text-[#1A5C3A]" />
            </div>
            <div className="text-[9px] sm:text-[10px] text-[#56685E] font-medium mt-0.5">
              Scheduled at your address
            </div>
          </div>
        </div>

        {/* Badge 2: Bottom-Right "100% Landfill Diverted" */}
        <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 bg-white/95 backdrop-blur-md px-3.5 py-2 sm:px-4 sm:py-2.5 rounded-2xl shadow-lg border border-[#1A5C3A]/15 flex items-center gap-2.5 transform hover:-translate-y-1 transition-all duration-300">
          <div className="w-8 h-8 rounded-xl bg-[#58C28A]/20 text-[#1A5C3A] flex items-center justify-center flex-shrink-0">
            <Leaf className="w-4 h-4 text-[#1A5C3A]" />
          </div>
          <div>
            <div className="text-[11px] sm:text-xs font-bold text-[#17201B] leading-none">
              100% Landfill Diverted
            </div>
            <div className="text-[9px] sm:text-[10px] text-[#56685E] font-medium mt-0.5">
              Responsible R2/E-Stewards Path
            </div>
          </div>
        </div>

        {/* Badge 3: Top-Right "Fair Salvage Value" */}
        <div className="hidden sm:flex absolute top-4 right-4 bg-[#17201B]/90 backdrop-blur-md px-3 py-2 rounded-2xl shadow-md border border-[#D4A574]/40 items-center gap-2 text-white">
          <Sparkles className="w-3.5 h-3.5 text-[#D4A574]" />
          <span className="text-[10px] font-bold text-[#D4A574] tracking-wide">
            HONEST APPRAISAL
          </span>
        </div>

      </div>

    </div>
  );
};
