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

  // Стилі для повного приховування смуги прокрутки в усіх браузерах
  const hideScrollbarStyle = {
    msOverflowStyle: "none", // IE/Edge
    scrollbarWidth: "none", // Firefox
    WebkitOverflowScrolling: "touch",
  } as const;

  return (
    <div className="md:grid md:grid-cols-[1fr_344px] w-full">
      {/* ЛІВА ЧАСТИНА: Календар */}
      <div className="p-6 md:p-10 md:border-r border-[var(--color-white-25)] flex justify-center">
        <Calendar
          selectedDate={selectedDate}
          selectedTimezone={selectedTimezone}
          onTimezoneChange={onTimezoneChange}
        />
      </div>

      {/* ПРАВА ЧАСТИНА: Вибір часу */}
      <div className="p-6 md:p-10 flex flex-col h-full relative overflow-hidden">
        {/* Контейнер кнопок часу */}
        <div
          className="
            flex flex-col gap-3 
            h-[430px] /* Висота підібрана під ~9 кнопок */
            overflow-y-auto 
            [&::-webkit-scrollbar]:hidden /* Приховує скрол у Chrome/Safari */
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

        {/* Контейнер кнопки Next з градієнтом-перекриттям */}
        {/* -mt-12 та pt-12 створюють зону перекриття нижньої кнопки */}
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
  );
};
