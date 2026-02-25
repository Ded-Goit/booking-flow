import type { ReactNode } from "react";
import clsx from "clsx";

interface CardProps {
  children: ReactNode;
  className?: string;
  padding?: "sm" | "md" | "lg";
}

export default function Card({
  children,
  className,
  padding = "md",
}: CardProps) {
  const paddings = {
    sm: "p-4",
    md: "p-6 sm:p-8",
    lg: "p-8 sm:p-10",
  };

  return (
    <div
      className={clsx(
        "w-full",
        "max-w-[420px]",
        "bg-[var(--color-bg-card)]",
        "rounded-2xl",
        "shadow-xl",
        "border border-white/5",
        "backdrop-blur-sm",
        "transition-all duration-300",
        paddings[padding],
        className,
      )}
    >
      {children}
    </div>
  );
}
