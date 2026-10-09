import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showWordmark?: boolean;
}

export const PathfinderLogo: React.FC<LogoProps> = ({
  className = '',
  size = 'md',
  showWordmark = false,
}) => {
  // Dimensions matching the original square aspect ratio
  const sizeClasses = {
    sm: 'w-10 h-10',
    md: 'w-12 h-12',
    lg: 'w-16 h-16',
    xl: 'w-24 h-24 sm:w-28 sm:h-28',
  };

  return (
    <div className={`inline-flex items-center gap-3 select-none ${className}`}>
      <div className={`relative ${sizeClasses[size]} shrink-0 bg-white rounded-full overflow-hidden flex items-center justify-center`}>
        <img
          src="/assets/pathfinder-logo.jpeg"
          alt="PATHFINDER — Learn • Build • Test • Deploy • Grow"
          className="w-full h-full object-contain"
          loading="eager"
          decoding="async"
        />
      </div>

      {showWordmark && (
        <div className="flex flex-col justify-center text-left">
          <span className="font-extrabold tracking-wider text-[#102A56] text-base md:text-lg leading-tight font-sans">
            PATHFINDER
          </span>
          <span className="text-[10px] md:text-[11px] font-medium text-[#667085] tracking-wide">
            Learn • Build • Test • Deploy • Grow
          </span>
        </div>
      )}
    </div>
  );
};
