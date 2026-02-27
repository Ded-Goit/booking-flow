import type { CalendarProps } from "../../types/calendar";
import { timezones } from "../../constants/timezones";
import { useCalendar } from "./useCalendar";
import { MonthNavigation } from "./MonthNavigation";
import { DaysGrid } from "./DaysGrid";
import { TimezoneSelect } from "./TimezoneSelect";

export const Calendar = ({
  selectedDate,
  selectedTimezone,
  onSelect,
  onTimezoneChange,
}: CalendarProps) => {
  const {
    year,
    month,
    monthName,
    days,
    isPast,
    isSelected,
    nextMonth,
    prevMonth,
  } = useCalendar({ selectedDate });

  return (
    <div className="max-w-[344px] mx-auto text-left">
      <h3 className="text-xl font-semibold mt-8 mb-8 ">Select a Date & Time</h3>

      <MonthNavigation
        monthName={monthName}
        year={year}
        onPrev={prevMonth}
        onNext={nextMonth}
      />

      <DaysGrid
        days={days}
        year={year}
        month={month}
        isPast={isPast}
        isSelected={isSelected}
        onSelect={onSelect}
      />

      <TimezoneSelect
        selectedTimezone={selectedTimezone}
        timezones={timezones}
        onChange={onTimezoneChange}
      />

      <div className="mt-6 text-[var(--accent)] text-sm text-center">
        Cookie settings
      </div>
    </div>
  );
};
