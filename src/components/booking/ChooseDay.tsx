import type { BookingData } from "../../types/booking";
import Calendar from "../ui/Calendar";

interface Props {
  data: BookingData;
  setData: React.Dispatch<React.SetStateAction<BookingData>>;
  onNext: () => void;
}

export default function ChooseDay({ data, setData, onNext }: Props) {
  return (
    <div className="text-center">
      {/* TOP BLOCK */}
      <div className="mb-8">
        <h1 className="text-xl font-semibold text-white mb-4">Consultation</h1>

        <div className="flex items-center justify-center gap-2 text-sm text-white/60 mb-2">
          <span>⏱</span>
          <span>30 min</span>
        </div>

        <div className="flex items-center justify-center gap-2 text-sm text-white/60">
          <span>📹</span>
          <span>Web conferencing details provided upon confirmation.</span>
        </div>
      </div>

      {/* TITLE */}
      <h2 className="text-lg font-medium text-white mb-6">
        Select a Date & Time
      </h2>

      {/* CALENDAR */}
      <Calendar
        value={data.date}
        onChange={(date: Date) => {
          setData((prev) => ({ ...prev, date }));
          onNext(); // автоперехід
        }}
      />

      {/* TIMEZONE */}
      <div className="mt-8 text-left">
        <p className="text-xs text-white/40 mb-1">Time zone</p>

        <button className="flex items-center justify-between w-full border border-white/10 rounded-xl px-4 py-3 text-sm text-white/70 hover:border-white/30 transition">
          Central European Time (8:11pm)
          <span className="text-white/40">▼</span>
        </button>
      </div>

      {/* COOKIE */}
      <div className="mt-6 text-xs text-white/40 hover:text-white transition cursor-pointer">
        Cookie settings
      </div>
    </div>
  );
}
