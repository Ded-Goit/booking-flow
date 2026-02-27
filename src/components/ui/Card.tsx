import type { ReactNode } from "react";

export const Card = ({ children }: { children: ReactNode }) => {
  return (
    <div className="bg-[var(--card-bg)] p-8 rounded-2xl w-[420px] shadow-lg">
      {children}
    </div>
  );
};
