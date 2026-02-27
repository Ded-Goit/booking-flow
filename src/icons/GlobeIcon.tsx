import type { FC } from "react";

type IconProps = {
  size?: number;
  className?: string;
  strokeWidth?: number;
};

export const GlobeIcon: FC<IconProps> = ({
  size = 20,
  className,
  strokeWidth = 1.5,
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 15 15"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.25 13.75C10.8399 13.75 13.75 10.8399 13.75 7.25C13.75 3.66015 10.8399 0.75 7.25 0.75C3.66015 0.75 0.75 3.66015 0.75 7.25C0.75 10.8399 3.66015 13.75 7.25 13.75Z"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M1.25 9.75032H3C3.46413 9.75032 3.90925 9.56594 4.23744 9.23775C4.56563 8.90957 4.75 8.46444 4.75 8.00032V6.50032C4.75 6.03619 4.93437 5.59107 5.26256 5.26288C5.59075 4.93469 6.03587 4.75032 6.5 4.75032C6.96413 4.75032 7.40925 4.56594 7.73744 4.23775C8.06563 3.90956 8.25 3.46445 8.25 3.00032V0.820312"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.75 7.15C13.2493 6.89021 12.6941 6.75311 12.13 6.75H10C9.53587 6.75 9.09075 6.93437 8.76256 7.26256C8.43437 7.59075 8.25 8.03587 8.25 8.5C8.25 8.96413 8.43437 9.40925 8.76256 9.73744C9.09075 10.0656 9.53587 10.25 10 10.25C10.3315 10.25 10.6495 10.3817 10.8839 10.6161C11.1183 10.8505 11.25 11.1685 11.25 11.5V12.37"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
