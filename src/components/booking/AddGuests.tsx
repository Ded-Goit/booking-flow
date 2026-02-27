import { useState, useCallback } from "react";
import { isValidEmail } from "../../utils/validation";
import { Button } from "../ui/Button";

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
      {/* Кнопка відкриття поля вводу */}
      {!isOpen && (
        <Button
          variant="secondary"
          size="sm"
          type="button"
          onClick={() => setIsOpen(true)}
        >
          Add Guests
        </Button>
      )}

      {/* Поле вводу нового гостя */}
      {isOpen && (
        <div className="space-y-2 mt-2">
          <input
            autoFocus
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) =>
              e.key === "Enter" && (e.preventDefault(), addGuest())
            }
            placeholder="guest@email.com"
            className="w-full bg-transparent border border-[var(--color-white-25)] rounded-lg px-4 py-3 focus:outline-none focus:border-[var(--color-primary-100)] transition text-white"
          />
          <div className="flex gap-2">
            <Button
              variant="primary"
              size="sm"
              type="button"
              onClick={addGuest}
            >
              Add
            </Button>
            <Button
              variant="secondary"
              size="sm"
              type="button"
              onClick={() => setIsOpen(false)}
            >
              Cancel
            </Button>
          </div>
        </div>
      )}

      {/* Список доданих гостей */}
      {value.length > 0 && (
        <div className="mt-3 space-y-2">
          {value.map((guest) => (
            <div
              key={guest}
              className="flex items-center justify-between border border-[var(--color-white-25)] rounded-lg px-4 py-2 bg-[var(--color-white-5)]"
            >
              <span className="text-sm text-white">{guest}</span>
              <button
                type="button"
                onClick={() => removeGuest(guest)}
                className="text-red-400 text-xs hover:text-red-300 transition-colors"
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
