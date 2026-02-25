import { useState, useCallback, useEffect } from "react";
import CenteredLayout from "./layout/CenteredLayout";
import Card from "./components/ui/Card";

import ChooseDay from "./components/booking/ChooseDay";
import ChooseHour from "./components/booking/ChooseHour";
import Details from "./components/booking/Details";
import Done from "./components/booking/Done";

import type { BookingData } from "./types/booking";

type Step = "day" | "hour" | "details" | "done";

const initialState: BookingData = {
  date: null,
  time: null,
  name: "",
  email: "",
};

function App() {
  const [step, setStep] = useState<Step>("day");
  const [data, setData] = useState<BookingData>(initialState);

  // Переходи між кроками
  const next = () => {
    if (step === "day") setStep("hour");
    else if (step === "hour") setStep("details");
    else if (step === "details") setStep("done");
  };

  const back = () => {
    if (step === "hour") setStep("day");
    else if (step === "details") setStep("hour");
  };

  // Скидання форми
  const reset = useCallback(() => {
    setData(initialState);
    setStep("day");
  }, []);

  // Обробка Escape для reset
  useEffect(() => {
    if (step !== "done") return;

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") reset();
    };

    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [step, reset]);

  return (
    <CenteredLayout onOutsideClick={step === "done" ? reset : undefined}>
      <Card>
        {step === "day" && (
          <ChooseDay data={data} setData={setData} onNext={next} />
        )}

        {step === "hour" && (
          <ChooseHour
            data={data}
            setData={setData}
            onNext={next}
            onBack={back}
          />
        )}

        {step === "details" && (
          <Details data={data} setData={setData} onNext={next} onBack={back} />
        )}

        {step === "done" && <Done data={data} onRestart={reset} />}
      </Card>
    </CenteredLayout>
  );
}

export default App;
