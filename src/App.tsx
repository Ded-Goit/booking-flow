import { useState, useCallback, useEffect } from "react";
import type { Step, SelectedDate } from "./types/booking";

import { Calendar } from "./components/calendar/Calendar";
import { TimeSelector } from "./components/booking/TimeSelector";
import { Details } from "./components/booking/Details";
import { Header } from "./components/booking/Header";
import { Confirmation } from "./components/booking/Confirmation";
import { notifyBooking } from "./utils/api";

export default function App() {
  const [step, setStep] = useState<Step>("date");
  const [selectedDate, setSelectedDate] = useState<SelectedDate | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [selectedTimezone, setSelectedTimezone] =
    useState<string>("Europe/Berlin");

  const [formData, setFormData] = useState<{
    name: string;
    guests: string[];
    notes: string;
  } | null>(null);

  /*      Handlers  */

  const handleDateSelect = useCallback((date: SelectedDate) => {
    setSelectedDate(date);
    setSelectedTime(null);
    setStep("time");
  }, []);

  const handleTimeSelect = useCallback((time: string) => {
    setSelectedTime(time);
    setStep("details");
  }, []);

  const handleTimezoneChange = useCallback((tz: string) => {
    setSelectedTimezone(tz);
  }, []);

  const handleConfirm = useCallback(
    async (data: { name: string; guests: string[]; notes: string }) => {
      setFormData(data);
      setStep("confirmation");

      await notifyBooking(data); //  notify backend (minimal integration)
    },
    [],
  );

  /*      Global navigation (first page)  */

  const goToFirstStep = useCallback(() => {
    setStep("date");
  }, []);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" || e.key === "Enter") {
        goToFirstStep();
      }
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [goToFirstStep]);

  return (
    <div
      className="min-h-screen bg-[var(--background)] text-[var(--text-primary)] flex items-center justify-center p-6"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          goToFirstStep();
        }
      }}
    >
      <div className="w-full max-w-[980px] bg-gradient-to-br from-[#140d1f] to-[#0c0614] rounded-2xl shadow-2xl overflow-hidden border border-[var(--color-white-25)]">
        {step !== "confirmation" && (
          <Header
            step={step}
            selectedDate={selectedDate}
            selectedTime={selectedTime}
            timezone={selectedTimezone}
          />
        )}

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
          <Details
            selectedDate={selectedDate}
            selectedTime={selectedTime}
            onConfirm={handleConfirm}
          />
        )}

        {step === "confirmation" &&
          selectedDate &&
          selectedTime &&
          formData && (
            <Confirmation
              selectedDate={selectedDate}
              selectedTime={selectedTime}
              timezone={selectedTimezone}
              name={formData.name}
              guests={formData.guests}
              notes={formData.notes}
            />
          )}
      </div>
    </div>
  );
}
