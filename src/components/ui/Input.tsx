import type { InputHTMLAttributes } from "react";
import clsx from "clsx";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

export default function Input({ label, error, className, ...props }: Props) {
  return (
    <div className="flex flex-col gap-1">
      <label className="text-sm text-gray-400">{label}</label>

      <input
        {...props}
        className={clsx(
          "bg-transparent",
          "border border-white/10",
          "rounded-xl",
          "px-4 py-2.5",
          "text-white",
          "outline-none",
          "transition",
          "focus:border-[var(--color-primary)]",
          error && "border-red-500",
          className,
        )}
      />

      {error && <span className="text-red-400 text-xs mt-1">{error}</span>}
    </div>
  );
}
