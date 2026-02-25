import { useState } from "react";
import type { BookingData } from "../../types/booking";
import { getMonthData } from "../../utils/calendar";
import CalendarDay from "../ui/CalendarDay";
import Button from "../ui/Button";
import Progress from "../ui/Progress";

interface Props {
  data: BookingData;
  setData: React.Dispatch<React.SetStateAction<BookingData>>;
  onNext: () => void;
}

export default function ChooseDay({ data, setData, onNext }: Props) {
  const today = new Date();
  const [month] = useState(today.getMonth());
  const [year] = useState(today.getFullYear());

  const days = getMonthData(year, month);

  const weekdays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  return (
    <div>
      <Progress step={1} />

      <h2 className="text-xl font-semibold text-white mb-4">Select a day</h2>

      <div className="flex justify-between items-center mb-4 text-sm text-gray-400">
        <span>
          {today.toLocaleString("default", { month: "long" })} {year}
        </span>
        <span className="text-xs">Central European Time (8:11pm) ▼</span>
      </div>

      <div className="grid grid-cols-7 gap-2 mb-2 text-xs text-gray-500">
        {weekdays.map((d) => (
          <div key={d} className="text-center">
            {d}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-7 gap-2 mb-6">
        {days.map((date, i) =>
          date ? (
            <CalendarDay
              key={i}
              date={date}
              selected={data.date?.toDateString() === date.toDateString()}
              onSelect={() => setData((prev) => ({ ...prev, date }))}
            />
          ) : (
            <div key={i} />
          ),
        )}
      </div>

      <Button disabled={!data.date} onClick={onNext}>
        Next
      </Button>
    </div>
  );
}
