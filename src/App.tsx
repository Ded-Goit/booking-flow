import { useState, useCallback } from "react";
import type { Step, SelectedDate } from "./types/booking";

import { Calendar } from "./components/calendar/Calendar";
import { TimeSelector } from "./components/booking/TimeSelector";
import { Details } from "./components/booking/Details";
import { Header } from "./components/booking/Header";

export default function App() {
  const [step, setStep] = useState<Step>("date");
  const [selectedDate, setSelectedDate] = useState<SelectedDate | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [selectedTimezone, setSelectedTimezone] =
    useState<string>("Europe/Berlin");

  /* =========================
     Handlers (стабільні)
  ========================== */

  const handleDateSelect = useCallback((date: SelectedDate) => {
    setSelectedDate(date);
    setSelectedTime(null); // reset якщо змінюємо дату
    setStep("time");
  }, []);

  const handleTimeSelect = useCallback((time: string) => {
    setSelectedTime(time);
    setStep("details");
  }, []);

  const handleTimezoneChange = useCallback((tz: string) => {
    setSelectedTimezone(tz);
  }, []);

  /* ========================= */

  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--text-primary)] flex items-center justify-center p-6">
      <div className="w-full max-w-[980px] bg-gradient-to-br from-[#140d1f] to-[#0c0614] rounded-2xl shadow-2xl overflow-hidden border border-[var(--color-white-25)]">
        <div>
          <Header
            step={step}
            selectedDate={selectedDate}
            selectedTime={selectedTime}
            timezone={selectedTimezone}
          />
        </div>

        {step === "date" && (
          <Calendar
            selectedDate={selectedDate}
            selectedTimezone={selectedTimezone}
            onSelect={handleDateSelect}
            onTimezoneChange={handleTimezoneChange}
          />
        )}

        {step === "time" && selectedDate && (
          <TimeSelector
            selectedDate={selectedDate}
            selectedTimezone={selectedTimezone}
            onSelectTime={handleTimeSelect}
            onTimezoneChange={handleTimezoneChange}
          />
        )}

        {step === "details" && selectedDate && selectedTime && (
          <Details selectedDate={selectedDate} selectedTime={selectedTime} />
        )}
      </div>
    </div>
  );
}
