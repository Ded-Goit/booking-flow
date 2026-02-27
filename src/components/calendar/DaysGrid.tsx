import type { SelectedDate } from "../../types/booking";
import { DateButton } from "../ui/DateButton";

type Props = {
  days: (number | null)[];
  year: number;
  month: number;
  isPast: (day: number) => boolean;
  isSelected: (day: number) => boolean;
  onSelect?: (date: SelectedDate) => void;
};

export const DaysGrid = ({
  days,
  year,
  month,
  isPast,
  isSelected,
  onSelect,
}: Props) => {
  const today = new Date();
  const currentDay = today.getDate();
  const currentMonth = today.getMonth();
  const currentYear = today.getFullYear();

  return (
    <div className="w-full">
      {" "}
      {/* Одине обмеження ширини для всього календаря */}
      {/* Заголовки днів тижня */}
      <div className="grid grid-cols-7 mb-3">
        {["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"].map((d) => (
          <div
            key={d}
            className="text-center font-sans font-normal text-[12px] leading-[1.33] text-[var(--text-primary)]"
          >
            {d}
          </div>
        ))}
      </div>
      {/* Сітка чисел календаря */}
      <div className="grid grid-cols-7 gap-y-1 justify-items-center">
        {days.map((day, i) => {
          if (!day)
            return (
              <div
                key={`empty-${i}`}
                className="w-[var(--date-size)] h-[var(--date-size)]"
              />
            );

          const disabled = isPast(day);
          const selected = isSelected(day);
          const isToday =
            day === currentDay &&
            month === currentMonth &&
            year === currentYear;

          return (
            <DateButton
              key={`${year}-${month}-${day}`}
              isDisabled={disabled}
              isSelected={selected}
              isToday={isToday}
              onClick={() => !disabled && onSelect?.({ day, month, year })}
            >
              {day}
            </DateButton>
          );
        })}
      </div>
    </div>
  );
};
