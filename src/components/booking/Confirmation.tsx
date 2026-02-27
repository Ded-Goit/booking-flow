import type { SelectedDate } from "../../types/booking";
import { buildMeetingDate, formatMeetingRange } from "../../utils/meeting";

type Props = {
  selectedDate: SelectedDate;
  selectedTime: string;
  timezone: string;
  name: string;
  guests?: string[];
  notes?: string;
};

export const Confirmation = ({
  selectedDate,
  selectedTime,
  timezone,
  name,
  guests = [],
  notes = "",
}: Props) => {
  const { start, end } = buildMeetingDate(selectedDate, selectedTime);

  const range = formatMeetingRange(start, end);

  return (
    <div className="p-6 md:p-10 text-center">
      <h2 className="text-2xl font-semibold mb-4">You are scheduled</h2>

      <div className="text-lg font-semibold mb-1">{name}</div>
      <div className="text-[var(--color-white-75)]">{range}</div>
      <div className="text-[var(--color-white-75)]">{timezone}</div>

      {guests.length > 0 && (
        <div className="mt-2 text-sm">Guests: {guests.join(", ")}</div>
      )}

      {notes && <div className="mt-2 text-sm">Notes: {notes}</div>}
    </div>
  );
};
