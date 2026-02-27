import { ChevronIcon } from "../icons/ChevronIcon";

type Props = {
  monthName: string;
  year: number;
  onPrev: () => void;
  onNext: () => void;
};

export const MonthNavigation = ({ monthName, year, onPrev, onNext }: Props) => (
  <div className="flex justify-between items-center w-full max-w-full mb-[16px] px-1 box-border">
    <button
      onClick={onPrev}
      className="shrink-0 w-9 h-9 flex items-center justify-center text-[var(--color-white-100)] hover:opacity-70 transition-opacity"
      aria-label="Previous month"
    >
      <ChevronIcon className="rotate-180" />
    </button>

    <span className="font-normal text-[16px] leading-[1.5] text-[var(--color-white-100)] font-sans truncate mx-2">
      {monthName} {year}
    </span>

    <button
      onClick={onNext}
      className="shrink-0 w-9 h-9 rounded-full bg-[var(--accent)] flex items-center justify-center text-[var(--color-secondary-100)] hover:bg-[var(--accent-hover)] transition-colors"
      aria-label="Next month"
    >
      <ChevronIcon />
    </button>
  </div>
);
