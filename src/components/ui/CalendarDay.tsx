import clsx from "clsx";

interface Props {
  date: Date;
  selected?: boolean;
  disabled?: boolean;
  onSelect: () => void;
}

export default function CalendarDay({
  date,
  selected,
  disabled,
  onSelect,
}: Props) {
  return (
    <button
      disabled={disabled}
      onClick={onSelect}
      className={clsx(
        "w-10 h-10 flex items-center justify-center rounded-full text-sm transition",
        !selected && "text-gray-300 hover:bg-white/5",
        selected && "bg-[var(--color-primary)] text-black",
        disabled && "text-gray-600 cursor-not-allowed",
      )}
    >
      {date.getDate()}
    </button>
  );
}
