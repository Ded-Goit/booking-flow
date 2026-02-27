import { MEETING_DURATION_MINUTES } from "../constants/booking";
import type { SelectedDate } from "../types/booking";

export const buildMeetingDate = (
  selectedDate: SelectedDate,
  selectedTime: string,
) => {
  const [h, m] = selectedTime.split(":").map(Number);

  const start = new Date(
    selectedDate.year,
    selectedDate.month,
    selectedDate.day,
    h,
    m,
  );

  const end = new Date(start);
  end.setMinutes(end.getMinutes() + MEETING_DURATION_MINUTES);

  return { start, end };
};

export const formatMeetingRange = (
  start: Date,
  end: Date,
  locale = "en-US",
) => {
  const formattedDate = start.toLocaleDateString(locale, {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  const startTime = start.toTimeString().slice(0, 5);
  const endTime = end.toTimeString().slice(0, 5);

  return `${startTime} - ${endTime}, ${formattedDate}`;
};

export const formatMeetingRangeInTimezone = (
  start: Date,
  end: Date,
  timezone: string,
  locale = "en-US",
) => {
  const timeOptions: Intl.DateTimeFormatOptions = {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
    timeZone: timezone,
  };

  const tzStart = start.toLocaleTimeString(locale, timeOptions);
  const tzEnd = end.toLocaleTimeString(locale, timeOptions);

  const formattedDate = start.toLocaleDateString(locale, {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return {
    timeRange: `${tzStart} - ${tzEnd}`,
    date: formattedDate,
    timezone,
  };
};
