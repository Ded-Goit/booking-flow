import type { ButtonHTMLAttributes } from "react";
import clsx from "clsx";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary";
};

export default function Button({
  variant = "primary",
  className,
  ...props
}: Props) {
  return (
    <button
      {...props}
      className={clsx(
        "w-full py-2.5 rounded-xl font-medium transition duration-200",
        variant === "primary" &&
          "bg-[var(--color-primary)] text-black hover:opacity-90 disabled:bg-gray-700 disabled:text-gray-400",
        variant === "secondary" &&
          "border border-white/10 text-white hover:bg-white/5",
        className,
      )}
    />
  );
}
