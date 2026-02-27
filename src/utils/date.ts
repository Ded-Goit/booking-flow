export const getToday = (): Date => {
  const now = new Date();
  return new Date(now.getFullYear(), now.getMonth(), now.getDate());
};

export const getDaysInMonth = (year: number, month: number) =>
  new Date(year, month + 1, 0).getDate();

export const getFirstDayOfMonth = (year: number, month: number) => {
  const firstDayRaw = new Date(year, month, 1).getDay();
  return (firstDayRaw + 6) % 7; // Monday start
};

export const isDatePast = (
  year: number,
  month: number,
  day: number,
  today: Date,
) => {
  return new Date(year, month, day) < today;
};

export const getMonthName = (year: number, month: number, locale = "en-US") =>
  new Date(year, month).toLocaleString(locale, {
    month: "long",
  });
