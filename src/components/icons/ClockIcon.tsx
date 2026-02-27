import type { FC } from "react";

type IconProps = {
  size?: number;
  className?: string;
  strokeWidth?: number;
};

export const ClockIcon: FC<IconProps> = ({
  size = 20,
  className,
  strokeWidth = 1.995,
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 20 20"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clockClip)">
        <path
          d="M1 10C1 12.3869 1.94821 14.6761 3.63604 16.3639C5.32387 18.0518 7.61305 19 10 19C12.3869 19 14.6761 18.0518 16.364 16.3639C18.0518 14.6761 19 12.3869 19 10C19 7.61305 18.0518 5.32387 16.364 3.63604C14.6761 1.94821 12.3869 1 10 1C7.61305 1 5.32387 1.94821 3.63604 3.63604C1.94821 5.32387 1 7.61305 1 10Z"
          stroke="currentColor"
          strokeOpacity="0.5"
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M10 6.538V10L13.518 14.104"
          stroke="currentColor"
          strokeOpacity="0.5"
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clockClip">
          <rect width="20" height="20" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};
