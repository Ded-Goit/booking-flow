import type { ReactNode, MouseEvent } from "react";

interface Props {
  children: ReactNode;
  onOutsideClick?: () => void;
}

export default function CenteredLayout({ children, onOutsideClick }: Props) {
  const handleClick = (e: MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onOutsideClick?.();
    }
  };

  return (
    <div
      onClick={handleClick}
      className="
        min-h-screen
        w-full
        bg-[var(--color-bg-main)]
        flex
        items-center
        justify-center
        px-4
        py-8
      "
    >
      {children}
    </div>
  );
}
