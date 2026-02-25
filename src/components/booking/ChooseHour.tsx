import type { BookingData } from "../../types/booking";
import Button from "../ui/Button";
import Progress from "../ui/Progress";

interface Props {
  data: BookingData;
  setData: React.Dispatch<React.SetStateAction<BookingData>>;
  onNext: () => void;
  onBack: () => void;
}

export default function ChooseHour({ data, setData, onNext, onBack }: Props) {
  const times = ["09:00", "10:00", "11:00", "14:00", "15:00"];

  return (
    <div>
      <Progress step={2} />

      <h2 className="text-xl font-semibold text-white mb-4">Select time</h2>

      <div className="grid grid-cols-2 gap-3 mb-6">
        {times.map((t) => (
          <button
            key={t}
            onClick={() => setData((prev) => ({ ...prev, time: t }))}
            className={`py-2 rounded-lg border transition ${
              data.time === t
                ? "bg-[var(--color-primary)] text-black"
                : "border-white/10 text-gray-300 hover:bg-white/5"
            }`}
          >
            {t}
          </button>
        ))}
      </div>

      <div className="flex gap-3">
        <Button variant="secondary" onClick={onBack}>
          Back
        </Button>
        <Button disabled={!data.time} onClick={onNext}>
          Next
        </Button>
      </div>
    </div>
  );
}
