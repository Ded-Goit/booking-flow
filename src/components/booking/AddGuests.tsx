import { useState, useCallback } from "react";
import { isValidEmail } from "../../utils/validation";

type Props = {
  value: string[];
  onChange: (guests: string[]) => void;
};

export const AddGuests = ({ value, onChange }: Props) => {
  const [input, setInput] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const addGuest = useCallback(() => {
    const email = input.trim();

    if (!email || !isValidEmail(email)) return;
    if (value.includes(email)) return;

    onChange([...value, email]);
    setInput("");
    setIsOpen(false);
  }, [input, value, onChange]);

  const removeGuest = useCallback(
    (email: string) => {
      onChange(value.filter((g) => g !== email));
    },
    [value, onChange],
  );

  return (
    <div>
      {!isOpen && value.length === 0 && (
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          className="px-5 py-2 rounded-full border border-[var(--color-primary-100)] text-[var(--color-primary-100)] text-sm"
        >
          Add Guests
        </button>
      )}

      {isOpen && (
        <div className="space-y-2">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="guest@email.com"
            className="w-full bg-transparent border border-[var(--color-white-25)] rounded-lg px-4 py-3 focus:outline-none focus:border-[var(--color-primary-100)] transition"
          />

          <button
            type="button"
            onClick={addGuest}
            className="px-5 py-2 rounded-full bg-[var(--color-primary-100)] text-black text-sm"
          >
            Add
          </button>
        </div>
      )}

      {value.length > 0 && (
        <div className="mt-3 space-y-2">
          {value.map((guest) => (
            <div
              key={guest}
              className="flex items-center justify-between border border-[var(--color-white-25)] rounded-lg px-4 py-2"
            >
              <span className="text-sm">{guest}</span>
              <button
                type="button"
                onClick={() => removeGuest(guest)}
                className="text-red-400 text-sm"
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
