import { useState, useMemo, useCallback } from "react";
import type { SelectedDate } from "../../types/booking";
import { isValidEmail } from "../../utils/validation";
import { AddGuests } from "./AddGuests";

type Props = {
  selectedDate: SelectedDate;
  selectedTime: string;
};

export const Details = ({ selectedDate, selectedTime }: Props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [guests, setGuests] = useState<string[]>([]);
  const [notes, setNotes] = useState("");

  /* ========================
     Derived data (memoized)
  ========================= */

  const meetingTime = useMemo(() => {
    const dateObj = new Date(
      selectedDate.year,
      selectedDate.month,
      selectedDate.day,
    );

    const [h, m] = selectedTime.split(":").map(Number);

    const start = new Date(dateObj);
    start.setHours(h);
    start.setMinutes(m);

    const end = new Date(start);
    end.setMinutes(end.getMinutes() + 30);

    return { start, end };
  }, [selectedDate, selectedTime]);

  const isFormValid = useMemo(() => {
    return name.trim().length > 1 && isValidEmail(email);
  }, [name, email]);

  /* ======================== */

  const handleSubmit = useCallback(() => {
    if (!isFormValid) return;

    const payload = {
      name: name.trim(),
      email,
      guests,
      notes,
      start: meetingTime.start,
      end: meetingTime.end,
    };

    console.log("Booking payload:", payload);

    // !!!!!!!!!!! тут буде API виклик!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  }, [isFormValid, name, email, guests, notes, meetingTime]);

  return (
    <div className="p-6 md:p-10 max-w-[640px]">
      <h3 className="text-xl font-semibold mb-6">Enter details</h3>

      <div className="space-y-5">
        <div>
          <label className="block text-sm mb-2">Name *</label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full bg-transparent border border-[var(--color-white-25)] rounded-lg px-4 py-3 focus:outline-none focus:border-[var(--color-primary-100)] transition"
          />
        </div>

        <div>
          <label className="block text-sm mb-2">Email *</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full bg-transparent border border-[var(--color-white-25)] rounded-lg px-4 py-3 focus:outline-none focus:border-[var(--color-primary-100)] transition"
          />
        </div>

        <AddGuests value={guests} onChange={setGuests} />

        <div>
          <label className="block text-sm mb-2">
            Please share anything that will help prepare our meeting
          </label>
          <textarea
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            rows={4}
            className="w-full bg-transparent border border-[var(--color-white-25)] rounded-lg px-4 py-3 focus:outline-none focus:border-[var(--color-primary-100)] transition resize-none"
          />
        </div>

        <button
          type="button"
          disabled={!isFormValid}
          onClick={handleSubmit}
          className={`
            mt-4 w-full py-4 rounded-full transition
            ${
              isFormValid
                ? "bg-[var(--color-primary-100)] text-black"
                : "bg-gray-600 text-gray-400 cursor-not-allowed"
            }
          `}
        >
          Schedule Event
        </button>
      </div>

      <div className="mt-6 text-sm text-[var(--color-primary-100)]">
        Cookie settings
      </div>
    </div>
  );
};
