import type { SVGProps } from "react";

export const CalendarIcon = ({
  className = "",
  ...props
}: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 20 20"
    fill="none"
    className={`w-5 h-5 ${className}`}
    {...props}
  >
    <path
      d="M6 1V5"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M13 1V5"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M16.1111 3H2.88889C1.84568 3 1 3.79594 1 4.77778V17.2222C1 18.2041 1.84568 19 2.88889 19H16.1111C17.1543 19 18 18.2041 18 17.2222V4.77778C18 3.79594 17.1543 3 16.1111 3Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M1 8H18"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
