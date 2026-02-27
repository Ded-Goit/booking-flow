import type { InputHTMLAttributes } from "react";

type Props = {
  label?: string;
  error?: string;
  leftIcon?: React.ReactNode;
} & InputHTMLAttributes<HTMLInputElement>;

export const Input = ({
  label,
  error,
  leftIcon,
  disabled = false,
  className = "",
  ...props
}: Props) => {
  const base = `
    w-full
    h-[var(--input-height)]
    rounded-[var(--input-radius)]
    px-[var(--input-padding-x)]
    bg-[var(--input-bg)]
    border
    text-[var(--input-text)]
    placeholder:text-[var(--input-placeholder)]
    transition-all
    duration-200
    outline-none
  `;

  const stateClasses = disabled
    ? `
      bg-[var(--input-disabled-bg)]
      text-[var(--input-disabled-text)]
      border-[var(--input-border)]
      cursor-not-allowed
    `
    : error
      ? `
      border-[var(--input-border-error)]
      focus:border-[var(--input-border-error)]
    `
      : `
      border-[var(--input-border)]
      hover:border-[var(--input-border-hover)]
      focus:border-[var(--input-border-focus)]
    `;

  return (
    <div className="w-[350px] flex flex-col gap-1">
      {label && (
        <label className="text-sm text-[var(--color-white-75)]">{label}</label>
      )}

      <div className="relative flex items-center">
        {leftIcon && (
          <div className="absolute left-3 text-[var(--color-white-50)]">
            {leftIcon}
          </div>
        )}

        <input
          disabled={disabled}
          className={`
            ${base}
            ${leftIcon ? "pl-10" : ""}
            ${stateClasses}
            ${className}
          `}
          {...props}
        />
      </div>

      {error && <span className="text-xs text-red-500">{error}</span>}
    </div>
  );
};
