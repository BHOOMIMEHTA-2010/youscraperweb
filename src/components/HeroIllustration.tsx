import React from 'react';
import scaleImg from '../assets/images/scale_website_bg_1788026333244.jpg';

export const HeroIllustration: React.FC = () => {
  return (
    <div className="relative w-full max-w-[560px] mx-auto lg:max-w-none select-none flex items-center justify-center bg-transparent">
      {/* Pure Illustration seamless with website background */}
      <div className="relative w-full bg-transparent flex items-center justify-center">
        <img
          src={scaleImg}
          alt="Smart digital weighing scale with recyclable scrap materials"
          className="w-full max-h-[500px] object-contain bg-[#f2fff9] rounded-3xl mix-blend-multiply [mask-image:radial-gradient(ellipse_at_center,black_75%,transparent_100%)]"
          referrerPolicy="no-referrer"
        />
      </div>
    </div>
  );
};
