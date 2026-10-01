import React from 'react';

interface FoidBrainIconProps {
  className?: string;
  size?: number;
  color?: string;
}

/**
 * FoidBrainIcon: Recreating the exact neural brain circuit emblem
 * from the user's uploaded "Logo FOID.svg".
 */
export const FoidBrainIcon: React.FC<FoidBrainIconProps> = ({
  className = 'w-8 h-8',
  size,
  color = 'currentColor',
}) => {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      width={size}
      height={size}
    >
      {/* Central Left Stem with Top Circuit Dot */}
      <circle cx="39" cy="27" r="4.5" fill={color} />
      <path
        d="M39 31.5V72C39 79 34 84 27 84C20 84 15 78 15 70C15 63 20 57 26 57"
        stroke={color}
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Central Right Stem with Top Circuit Dot */}
      <circle cx="61" cy="27" r="4.5" fill={color} />
      <path
        d="M61 31.5V72C61 79 66 84 73 84C80 84 85 78 85 70C85 63 80 57 74 57"
        stroke={color}
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Left Hemisphere Lobes */}
      <path
        d="M48 20C44 14 36 10 27 12C17 14 10 23 10 33C10 40 14 46 20 49"
        stroke={color}
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M19 46C12 49 7 56 7 64C7 75 16 84 27 84C38 84 46 76 47 65"
        stroke={color}
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Right Hemisphere Lobes */}
      <path
        d="M52 20C56 14 64 10 73 12C83 14 90 23 90 33C90 40 86 46 80 49"
        stroke={color}
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M81 46C88 49 93 56 93 64C93 75 84 84 73 84C62 84 54 76 53 65"
        stroke={color}
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Center divider separation */}
      <line x1="50" y1="18" x2="50" y2="84" stroke="currentColor" strokeWidth="2.5" opacity="0.3" strokeLinecap="round" />
    </svg>
  );
};

interface FoidLogoProps {
  className?: string;
  iconSize?: string;
  textSize?: string;
  showDomain?: boolean;
}

/**
 * Full FOID AI Brand Lockup: Brain Symbol + Exact FOID Typography + AI
 */
export const FoidLogo: React.FC<FoidLogoProps> = ({
  className = '',
  iconSize = 'w-8 h-8',
  textSize = 'text-xl',
  showDomain = true,
}) => {
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      {/* Brain Icon from Logo FOID.svg */}
      <div className="shrink-0 text-white group-hover:text-orange-400 transition-colors">
        <FoidBrainIcon className={iconSize} color="currentColor" />
      </div>

      {/* Exact FOID Typography matching uploaded SVG */}
      <div className="flex items-baseline tracking-wide">
        <span className={`font-black text-white ${textSize} tracking-[0.05em]`}>
          FOID
        </span>
        <span className={`ml-1 font-extrabold text-orange-500 ${textSize}`}>
          AI
        </span>
        {showDomain && (
          <span className="ml-1 text-[11px] text-neutral-400 font-mono font-normal">
            .app
          </span>
        )}
      </div>
    </div>
  );
};
