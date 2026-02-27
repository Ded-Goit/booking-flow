import { useState } from "react";
import type { SelectedDate } from "../../types/booking";
import { TIME_SLOTS } from "../../constants/booking";
import { Calendar } from "../calendar/Calendar";
import { TimeButton } from "../ui/TimeButton";
import { Button } from "../ui/Button";

type Props = {
  selectedDate: SelectedDate;
  selectedTimezone: string;
  onSelectTime: (time: string) => void;
  onTimezoneChange?: (tz: string) => void;
};

export const TimeSelector = ({
  selectedDate,
  selectedTimezone,
  onSelectTime,
  onTimezoneChange,
}: Props) => {
  const [selectedTime, setSelectedTime] = useState<string | null>(null);

  const hideScrollbarStyle = {
    msOverflowStyle: "none", // IE/Edge
    scrollbarWidth: "none", // Firefox
    WebkitOverflowScrolling: "touch",
  } as const;

  return (
    <div className="w-full h-auto flex justify-center bg-[var(--color-bg)]">
      <div
        className="
      w-full max-w-[1000px] 
      h-fit 
      md:p-[28px] 
      md:grid md:grid-cols-[1fr_244px] 
      md:gap-2 
      box-border
    "
      >
        {/* LEFT PART: Calendar */}
        <div className="p-6 md:p-0 md:pr-[28px] md:border-r border-[var(--color-white-25)] flex flex-col h-fit">
          <div className="w-full max-w-[344px] mx-auto md:mx-0 text-left">
            <Calendar
              selectedDate={selectedDate}
              selectedTimezone={selectedTimezone}
              onTimezoneChange={onTimezoneChange}
            />
          </div>
        </div>

        {/* RIGHT PART: Timing */}

        <div className="p-6 md:p-0 md:pl-[20px] flex flex-col h-fit self-start relative overflow-hidden">
          <div
            className="
            flex flex-col gap-3 
            h-[430px] /* Фіксована висота зони скролу */
            overflow-y-auto 
            [&::-webkit-scrollbar]:hidden
          "
            style={hideScrollbarStyle}
          >
            {TIME_SLOTS.map((time) => (
              <TimeButton
                key={time}
                selected={selectedTime === time}
                onClick={() => setSelectedTime(time)}
                className="w-full shrink-0"
              >
                {time}
              </TimeButton>
            ))}
          </div>

          {/* Next button */}
          <div className="relative z-10 -mt-12 pt-12 bg-gradient-to-t from-[#0c0614] via-[#0c0614] to-transparent">
            <Button
              variant="primary"
              size="lg"
              disabled={!selectedTime}
              onClick={() => selectedTime && onSelectTime(selectedTime)}
              className="w-full shadow-lg"
            >
              Next
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
