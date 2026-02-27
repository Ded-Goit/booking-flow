import type { FC } from "react";

type IconProps = {
  size?: number;
  className?: string;
  strokeWidth?: number;
};

export const CameraIcon: FC<IconProps> = ({
  size = 20,
  className,
  strokeWidth = 2,
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
      <path
        d="M18.95 8.2C18.95 7.82869 18.804 7.4726 18.5444 7.21005C18.2848 6.9475 17.9325 6.8 17.5653 6.8H14.7961L12.7192 4H7.18072L5.1038 6.8H2.33457C1.96734 6.8 1.61516 6.9475 1.3555 7.21005C1.09583 7.4726 0.949951 7.82869 0.949951 8.2V16.6C0.949951 16.9713 1.09583 17.3274 1.3555 17.5899C1.61516 17.8524 1.96734 18 2.33457 18H17.5653C17.9325 18 18.2848 17.8524 18.5444 17.5899C18.804 17.3274 18.95 16.9713 18.95 16.6V8.2Z"
        stroke="currentColor"
        strokeOpacity="0.5"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.95 15C11.6068 15 12.95 13.6569 12.95 12C12.95 10.3431 11.6068 9 9.95 9C8.2931 9 6.95 10.3431 6.95 12C6.95 13.6569 8.2931 15 9.95 15Z"
        stroke="currentColor"
        strokeOpacity="0.5"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
