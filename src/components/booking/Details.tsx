import { useState } from "react";
import type { BookingData } from "../../types/booking";
import Button from "../ui/Button";
import Progress from "../ui/Progress";
import Input from "../ui/Input";

interface Props {
  data: BookingData;
  setData: React.Dispatch<React.SetStateAction<BookingData>>;
  onNext: () => void;
  onBack: () => void;
}

export default function Details({ data, setData, onNext, onBack }: Props) {
  const [error, setError] = useState("");

  const submit = () => {
    if (!data.name || !data.email) {
      setError("All fields required");
      return;
    }
    onNext();
  };

  return (
    <div>
      <Progress step={3} />

      <h2 className="text-xl font-semibold text-white mb-4">Your details</h2>

      <div className="space-y-4 mb-6">
        <Input
          label="Name"
          value={data.name}
          onChange={(e) => setData((p) => ({ ...p, name: e.target.value }))}
        />
        <Input
          label="Email"
          value={data.email}
          onChange={(e) => setData((p) => ({ ...p, email: e.target.value }))}
        />
      </div>

      {error && <p className="text-red-400 text-sm mb-4">{error}</p>}

      <div className="flex gap-3">
        <Button variant="secondary" onClick={onBack}>
          Back
        </Button>
        <Button onClick={submit}>Confirm</Button>
      </div>
    </div>
  );
}
