import type { SVGProps } from "react";

export const ChevronIcon = ({
  className = "",
  ...props
}: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 9 15"
    fill="none"
    xmlns="http://www.w3.org"
    className={`w-[9px] h-[15px] ${className}`}
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M0.311946 14.1774C-0.103982 13.7823 -0.103982 13.1419 0.311946 12.7468L6.11299 7.23684L0.311946 1.7269C-0.103982 1.33185 -0.103982 0.691338 0.311946 0.296288C0.727873 -0.0987626 1.40222 -0.0987626 1.81815 0.296288L8.37227 6.52152C8.78819 6.91659 8.78819 7.55711 8.37227 7.95218L1.81815 14.1774C1.40222 14.5724 0.727873 14.5724 0.311946 14.1774Z"
      fill="currentColor"
    />
  </svg>
);
