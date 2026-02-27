import { useMemo, useState } from "react";
import type { SelectedDate } from "../../types/calendar";
import {
  getToday,
  getDaysInMonth,
  getFirstDayOfMonth,
  isDatePast,
  getMonthName,
} from "../../utils/date";

type Props = {
  selectedDate: SelectedDate | null;
};

export const useCalendar = ({ selectedDate }: Props) => {
  const today = useMemo(() => getToday(), []);

  const [currentMonth, setCurrentMonth] = useState(
    () =>
      new Date(
        selectedDate?.year ?? today.getFullYear(),
        selectedDate?.month ?? today.getMonth(),
        1,
      ),
  );

  const year = currentMonth.getFullYear();
  const month = currentMonth.getMonth();

  const days = useMemo(() => {
    const daysInMonth = getDaysInMonth(year, month);
    const firstDay = getFirstDayOfMonth(year, month);

    const result: (number | null)[] = [];

    for (let i = 0; i < firstDay; i++) result.push(null);
    for (let d = 1; d <= daysInMonth; d++) result.push(d);

    return result;
  }, [year, month]);

  const isPast = (day: number) => {
    const date = new Date(year, month, day);
    const dayOfWeek = date.getDay(); // 0 - sun, 6 - sat
    const isWeekend = dayOfWeek === 0 || dayOfWeek === 6;

    return isWeekend || isDatePast(year, month, day, today);
  };

  const isSelected = (day: number): boolean => {
    if (!selectedDate) return false;

    const date = new Date(year, month, day); // 0 - sun, 6 - sat
    const isWeekend = date.getDay() === 0 || date.getDay() === 6;
    if (isWeekend) return false;

    return (
      selectedDate.day === day &&
      selectedDate.month === month &&
      selectedDate.year === year
    );
  };

  const nextMonth = () => setCurrentMonth(new Date(year, month + 1, 1));
  const prevMonth = () => setCurrentMonth(new Date(year, month - 1, 1));
  const monthName = getMonthName(year, month);

  return {
    year,
    month,
    monthName,
    days,
    isPast,
    isSelected,
    nextMonth,
    prevMonth,
  };
};
