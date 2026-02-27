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
    <div className="w-full p-10 text-center space-y-6">
      {/* Title block */}
      <div className="space-y-2">
        <h2 className="text-2xl font-semibold">You are scheduled</h2>

        <p className="text-sm text-[var(--color-white-75)]">
          A calendar invitation has been sent to your email address.
        </p>
      </div>

      {/* Main info */}
      <div className="space-y-2">
        <div className="text-lg font-semibold">{name}</div>

        <div className="text-[var(--color-white-75)]">{range}</div>

        <div className="text-[var(--color-white-75)]">{timezone}</div>
      </div>

      {/* Guests */}
      {guests.length > 0 && (
        <div className="text-sm">Guests: {guests.join(", ")}</div>
      )}

      {/* Notes */}
      {notes && <div className="text-sm">Notes: {notes}</div>}
    </div>
  );
};
