import { useState, useMemo, useCallback } from "react";
import type { SelectedDate } from "../../types/booking";
import { isValidEmail } from "../../utils/validation";
import { AddGuests } from "./AddGuests";

type Props = {
  selectedDate: SelectedDate;
  selectedTime: string;
  onConfirm: (data: {
    name: string;
    email: string;
    guests: string[];
    notes: string;
  }) => void;
};

export const Details = ({ selectedDate, selectedTime, onConfirm }: Props) => {
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

  const handleSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault(); // ✅ щоб форма не перезавантажувала сторінку

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

      onConfirm({
        name: name.trim(),
        email,
        guests,
        notes,
      });
    },
    [isFormValid, name, email, guests, notes, meetingTime, onConfirm],
  );

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="mx-auto p-6 md:p-10 max-w-[350px]"
    >
      <h3 className="text-xl font-semibold mb-6">Enter details</h3>

      <div className="space-y-5">
        {/* NAME */}
        <div>
          <label htmlFor="name" className="block text-sm mb-2">
            Name *
          </label>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            required
            minLength={2}
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full bg-transparent border border-[var(--color-white-25)] rounded-lg px-4 py-3 focus:outline-none focus:border-[var(--color-primary-100)] transition"
          />
        </div>

        {/* EMAIL */}
        <div>
          <label htmlFor="email" className="block text-sm mb-2">
            Email *
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full bg-transparent border border-[var(--color-white-25)] rounded-lg px-4 py-3 focus:outline-none focus:border-[var(--color-primary-100)] transition"
          />
        </div>

        <AddGuests value={guests} onChange={setGuests} />

        {/* NOTES */}
        <div>
          <label htmlFor="notes" className="block text-sm mb-2">
            Please share anything that will help prepare our meeting
          </label>
          <textarea
            id="notes"
            name="notes"
            autoComplete="off"
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            rows={4}
            className="w-full bg-transparent border border-[var(--color-white-25)] rounded-lg px-4 py-3 focus:outline-none focus:border-[var(--color-primary-100)] transition resize-none"
          />
        </div>

        <button
          type="submit"
          disabled={!isFormValid}
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

      <div className="mt-6 text-sm text-[var(--color-primary-100)] mx-auto w-fit">
        Cookie settings
      </div>
    </form>
  );
};
