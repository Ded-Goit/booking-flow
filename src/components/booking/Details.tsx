import { useState, useMemo, useCallback } from "react";
import type { SelectedDate } from "../../types/booking";
import { validateBookingForm, MAX_NOTES_LENGTH } from "../../utils/validation";
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
    return validateBookingForm({ name, email, notes });
  }, [name, email, notes]);

  const handleSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
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
        <div>
          <label htmlFor="name" className="block text-sm mb-2">
            Name *
          </label>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            maxLength={100}
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full bg-transparent border border-[var(--color-white-25)] rounded-lg px-4 py-3 focus:outline-none focus:border-[var(--color-primary-100)] transition"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm mb-2">
            Email *
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full bg-transparent border border-[var(--color-white-25)] rounded-lg px-4 py-3 focus:outline-none focus:border-[var(--color-primary-100)] transition"
          />
        </div>

        <AddGuests value={guests} onChange={setGuests} />

        <div>
          <label htmlFor="notes" className="block text-sm mb-2">
            Please share anything that will help prepare our meeting
          </label>
          <textarea
            id="notes"
            name="notes"
            autoComplete="off"
            maxLength={MAX_NOTES_LENGTH} // ✅ обмеження
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            rows={4}
            className="w-full bg-transparent border border-[var(--color-white-25)] rounded-lg px-4 py-3 focus:outline-none focus:border-[var(--color-primary-100)] transition resize-none"
          />
          <div className="text-xs text-right text-[var(--color-white-50)] mt-1">
            {notes.length}/{MAX_NOTES_LENGTH}
          </div>
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
