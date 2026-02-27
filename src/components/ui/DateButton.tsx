import type { ButtonHTMLAttributes, FC } from "react";

type Props = {
  isToday?: boolean;
  isSelected?: boolean;
  isDisabled?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const DateButton: FC<Props> = ({
  isToday = false,
  isSelected = false,
  isDisabled = false,
  className = "",
  children,
  ...props
}) => {
  const base = `
    relative flex items-center justify-center
    w-[var(--date-size)] h-[var(--date-size)]
    rounded-[var(--date-radius)]
    text-[var(--date-font-size)] leading-[var(--date-line-height)]
    font-sans text-center transition-all duration-200
  `;

  let stateClasses = "";

  if (isDisabled) {
    stateClasses = "text-[var(--color-white-25)] cursor-not-allowed opacity-50";
  } else if (isSelected) {
    stateClasses = `
      bg-[var(--date-bg-selected)] 
      text-[var(--date-text-selected)] 
      font-semibold scale-105
    `;
  } else {
    // Default "Active" state + "Selected" on Hover
    stateClasses = `
      bg-[var(--date-bg-active)] 
      text-[var(--date-text-active)] 
      font-semibold
      hover:bg-[var(--date-bg-selected)] 
      hover:text-[var(--date-text-selected)] 
      hover:scale-105
      active:scale-95
    `;
  }

  return (
    <button
      disabled={isDisabled}
      className={`${base} ${stateClasses} ${className}`}
      {...props}
    >
      {children}

      {/* Today Dot */}
      {isToday && !isSelected && (
        <span
          className="
            absolute bottom-2 
            w-[var(--date-dot-size)] h-[var(--date-dot-size)] 
            rounded-[var(--date-dot-radius)] 
            bg-[var(--date-dot-color)]
          "
        />
      )}
    </button>
  );
};
