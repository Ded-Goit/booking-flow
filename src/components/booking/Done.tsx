import { useEffect } from "react";
import type { BookingData } from "../../types/booking";
import Button from "../ui/Button";

interface Props {
  data: BookingData;
  onRestart: () => void;
}

export default function Done({ data, onRestart }: Props) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Enter" || e.key === "Escape") {
        onRestart();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onRestart]);

  return (
    <div className="text-center space-y-6">
      <h2 className="text-xl font-semibold text-white">Booking Confirmed 🎉</h2>

      <p className="text-gray-400">
        {data.date?.toDateString()} at {data.time}
      </p>

      <Button onClick={onRestart}>Book again</Button>

      <p className="text-xs text-gray-500">
        Press Enter, Escape or click outside to restart
      </p>
    </div>
  );
}
