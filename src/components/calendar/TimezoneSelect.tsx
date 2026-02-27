import { useState } from "react";
import { GlobeIcon } from "../icons/GlobeIcon";

type Props = {
  selectedTimezone: string;
  timezones: string[];
  onChange?: (tz: string) => void;
};

export const TimezoneSelect = ({
  selectedTimezone,
  timezones,
  onChange,
}: Props) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="mt-8 text-left relative w-full font-sans">
      <p className="font-semibold text-[16px] leading-[1.5] text-[var(--color-white-100)] mb-2">
        Time zone
      </p>

      <div className="flex items-center gap-3">
        <GlobeIcon
          className="text-[var(--color-white-50)] shrink-0"
          size={20}
        />

        {/* Інпут-кнопка */}
        <button
          onClick={() => setOpen((p) => !p)}
          className="
        flex items-center justify-center w-full 
        h-[var(--input-height)] px-[var(--input-padding-x)]
        bg-[var(--input-bg)] border border-[var(--input-border)] 
        rounded-[var(--input-radius)] 
        font-medium text-[14px] leading-[1.28571] text-center text-[var(--color-white-100)]
        hover:border-[var(--input-border-hover)] 
        focus:border-[var(--input-border-focus)]
        transition-all duration-200 relative
      "
        >
          <span className="truncate w-full px-4">{selectedTimezone}</span>

          <span
            className={`absolute right-4 text-[var(--color-white-50)] text-[10px] transition-transform duration-200 ${open ? "rotate-180" : ""}`}
          >
            ▼
          </span>
        </button>
      </div>

      {open && (
        <div
          className="
      absolute z-20 left-[32px] right-0 max-h-[200px] overflow-y-auto 
      bg-[var(--color-secondary-800)] 
      bottom-full mb-2 
      border border-[var(--input-border)] 
      rounded-[var(--input-radius)]
      shadow-xl
    "
        >
          {timezones.map((tz) => (
            <button
              key={tz}
              onClick={() => {
                onChange?.(tz);
                setOpen(false);
              }}
              className="
                w-full text-center px-4 py-2.5 text-[14px]
                text-[var(--color-white-75)] font-medium
                hover:bg-[var(--accent)] hover:text-[var(--color-secondary-100)] 
                transition-colors
              "
            >
              {tz}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};
