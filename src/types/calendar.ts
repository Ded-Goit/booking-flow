export type SelectedDate = {
  day: number;
  month: number;
  year: number;
};

export type CalendarProps = {
  selectedDate: SelectedDate | null;
  selectedTimezone: string;
  onSelect?: (date: SelectedDate) => void;
  onTimezoneChange?: (tz: string) => void;
};
