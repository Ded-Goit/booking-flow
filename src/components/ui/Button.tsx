import type { ButtonHTMLAttributes } from "react";

type Variant = "primary" | "secondary";
type Size = "lg" | "sm";

type Props = {
  variant?: Variant;
  size?: Size;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = ({
  variant = "primary",
  size = "lg",
  disabled = false,
  className = "",
  ...props
}: Props) => {
  const sizeClasses =
    size === "lg"
      ? `
        h-[60px]
        px-[48px]
        text-[18px]
        leading-[1.55556]
      `
      : `
        h-[42px]
        px-[18px]
        text-[14px]
        leading-[1.28571]
      `;

  const primaryClasses = disabled
    ? `
      bg-[var(--color-grey-300)]
      text-[var(--color-grey-500)]
      cursor-not-allowed
    `
    : `
      bg-[var(--color-primary-200)]
      text-[var(--color-secondary-100)]
      hover:bg-[var(--color-primary-300)]
      active:bg-[var(--color-primary-400)]
      active:shadow-[inset_5px_6px_4px_rgba(12,17,31,0.3)]
    `;

  const secondaryClasses = disabled
    ? `
      bg-[var(--color-secondary-50)]
      border-2
      border-[var(--color-grey-300)]
      text-[var(--color-grey-300)]
      cursor-not-allowed
    `
    : `
      bg-[var(--color-secondary-50)]
      border-2
      border-[var(--color-primary-200)]
      text-[var(--color-primary-200)]
      hover:border-[var(--color-primary-300)]
      hover:text-[var(--color-primary-300)]
      active:border-[var(--color-primary-400)]
      active:text-[var(--color-primary-400)]
    `;

  return (
    <button
      disabled={disabled}
      className={`
        inline-flex
        items-center
        justify-center
        font-medium
        rounded-[100px]
        transition-all
        duration-200
        ${sizeClasses}
        ${variant === "primary" ? primaryClasses : secondaryClasses}
        ${className}
      `}
      {...props}
    />
  );
};
