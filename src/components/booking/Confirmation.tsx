import { CalendarIcon } from "../../icons/CalendarIcon";
import { UserIcon } from "../../icons/UserIcon";
import type { SelectedDate } from "../../types/booking";
import { buildMeetingDate, formatMeetingRange } from "../../utils/meeting";
import { CheckCircleIcon } from "../icons/CheckCircleIcon";
import { GlobeIcon } from "../icons/GlobeIcon";

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
    <div className="w-full p-10 flex flex-col items-center space-y-8 relative">
      <div className="flex flex-col items-center space-y-2">
        <div className="flex items-center gap-[10px]">
          {/* Button icon */}
          <button
            // onClick={onClose}  You can add a closure function to the component's props.
            className="
            transition-transform hover:scale-110 active:scale-95 
            text-[#e9ac32] /* Передаємо колір у currentColor іконки */
            focus:outline-none
          "
            aria-label="Close"
          >
            <CheckCircleIcon className="w-7 h-7" />
          </button>

          <h2 className="text-2xl font-semibold text-[#f4f1eb]">
            You are scheduled
          </h2>
        </div>

        <p className="text-sm text-[var(--color-white-75)] text-center">
          A calendar invitation has been sent to your email address.
        </p>
      </div>

      <div
        className="    
    w-full max-w-[458px] min-h-[162px] 
    p-[16px_24px] 
    border border-[var(--color-white-25)] 
    rounded-[8px] 
    flex flex-col justify-between 
    box-border
  "
      >
        <h3 className="font-sans font-semibold text-[20px] leading-[1.2] text-[#f4f1eb]">
          Schedule eClosing
        </h3>

        <div className="flex flex-col space-y-2">
          {/* Name */}
          <div className="flex items-start gap-2">
            <UserIcon className="w-5 h-5 shrink-0 text-[rgba(253,252,252,0.5)]" />
            <span className="font-sans font-semibold text-[16px] leading-[1.5] text-[rgba(253,252,252,0.5)]">
              {name}
            </span>
          </div>

          {/* Date and Time */}
          <div className="flex items-start gap-2">
            <CalendarIcon className="w-5 h-5 shrink-0 text-[rgba(253,252,252,0.5)]" />
            <span className="font-sans font-semibold text-[16px] leading-[1.5] text-[rgba(253,252,252,0.5)]">
              {range}
            </span>
          </div>

          {/* time zone */}
          <div className="flex items-start gap-2">
            <GlobeIcon className="w-5 h-5 shrink-0 text-[rgba(253,252,252,0.5)]" />
            <span className="font-sans font-semibold text-[16px] leading-[1.5] text-[rgba(253,252,252,0.5)]">
              {timezone}
            </span>
          </div>
        </div>
      </div>

      {/* Additional fields (outside the card) */}
      <div className="space-y-1 text-sm text-[rgba(253,252,252,0.5)] text-center">
        {guests.length > 0 && <div>Guests: {guests.join(", ")}</div>}
        {notes && <div>Notes: {notes}</div>}
      </div>
    </div>
  );
};
