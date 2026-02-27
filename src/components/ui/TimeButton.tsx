import type { ButtonHTMLAttributes } from "react";

type Props = {
  selected?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const TimeButton = ({
  selected = false,
  disabled = false,
  className = "",
  ...props
}: Props) => {
  const base = `
    inline-flex
    items-center
    justify-center
    h-[var(--time-btn-height)]
    px-[var(--time-btn-padding-x)]
    rounded-[var(--time-btn-radius)]
    font-semibold
    text-[var(--time-btn-font-size)]
    leading-[var(--time-btn-line-height)]
    text-center
    border-2
    transition-all
    duration-200
  `;

  const restState = `
    border-[var(--time-btn-border-rest)]
    text-[var(--time-btn-text-rest)]
    hover:border-[var(--time-btn-border-hover)]
  `;

  const pressedState = `
    active:border-[var(--time-btn-border-pressed)]
    active:bg-[var(--time-btn-bg-pressed)]
    active:text-[var(--time-btn-text-pressed)]
  `;

  const selectedState = `
    border-[var(--time-btn-border-rest)]
    bg-[var(--time-btn-bg-selected)]
    text-[var(--color-secondary-100)]
  `;

  return (
    <button
      disabled={disabled}
      className={`
        ${base}
        ${selected ? selectedState : restState}
        ${!selected && pressedState}
        ${className}
      `}
      {...props}
    />
  );
};
