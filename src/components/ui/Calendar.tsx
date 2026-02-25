import { useState } from "react";

interface Props {
  value: Date | null;
  onChange: (date: Date) => void;
}

export default function Calendar({ value, onChange }: Props) {
  const today = new Date();

  const [currentMonth, setCurrentMonth] = useState(
    new Date(
      value?.getFullYear() ?? today.getFullYear(),
      value?.getMonth() ?? today.getMonth(),
      1,
    ),
  );

  const year = currentMonth.getFullYear();
  const month = currentMonth.getMonth();

  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const firstDayRaw = new Date(year, month, 1).getDay();
  const firstDay = (firstDayRaw + 6) % 7;

  const monthName = currentMonth.toLocaleString("en-US", {
    month: "long",
  });

  const days: (number | null)[] = [];
  for (let i = 0; i < firstDay; i++) days.push(null);
  for (let d = 1; d <= daysInMonth; d++) days.push(d);

  const isPast = (day: number) => {
    const date = new Date(year, month, day);
    return date < new Date(today.setHours(0, 0, 0, 0));
  };

  const isWeekend = (day: number) => {
    const date = new Date(year, month, day);
    const d = date.getDay();
    return d === 0 || d === 6; // Sunday or Saturday
  };

  const isSelected = (day: number) =>
    value &&
    value.getDate() === day &&
    value.getMonth() === month &&
    value.getFullYear() === year;

  return (
    <div className="border border-white/10 rounded-2xl p-6 bg-white/5 text-center">
      {/* Month Nav */}
      <div className="flex items-center justify-between mb-6">
        <button
          onClick={() => setCurrentMonth(new Date(year, month - 1, 1))}
          className="text-white/40 hover:text-white text-lg transition"
        >
          ‹
        </button>

        <span className="text-sm font-medium text-white">
          {monthName} {year}
        </span>

        <button
          onClick={() => setCurrentMonth(new Date(year, month + 1, 1))}
          className="text-white/40 hover:text-white text-lg transition"
        >
          ›
        </button>
      </div>

      {/* Week labels */}
      <div className="grid grid-cols-7 text-[11px] text-white/40 mb-3">
        {["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"].map((d) => (
          <div key={d}>{d}</div>
        ))}
      </div>

      {/* Days */}
      <div className="grid grid-cols-7 gap-y-3">
        {days.map((day, i) => {
          if (!day) return <div key={i} />;

          const past = isPast(day);
          const weekend = isWeekend(day);
          const selected = isSelected(day);
          const disabled = past || weekend;

          return (
            <button
              key={`${year}-${month}-${day}`}
              disabled={disabled}
              onClick={() => onChange(new Date(year, month, day))}
              className={`
                w-9 h-9 mx-auto rounded-full text-sm
                transition-all duration-200
                ${
                  selected
                    ? "bg-[var(--color-primary)] text-black shadow-[0_0_20px_rgba(209,142,27,0.45)]"
                    : disabled
                      ? "text-white/20 cursor-not-allowed"
                      : "border border-[var(--color-primary)] text-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-black"
                }
              `}
            >
              {day}
            </button>
          );
        })}
      </div>
    </div>
  );
}
