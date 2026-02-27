import { useMemo } from "react";
import type { SelectedDate, Step } from "../../types/booking";
import {
  buildMeetingDate,
  formatMeetingRangeInTimezone,
} from "../../utils/meeting";

import { ClockIcon } from "../icons/ClockIcon";
import { CameraIcon } from "../icons/CameraIcon";
import { GlobeIcon } from "../icons/GlobeIcon";
import { CalendarIcon } from "../icons/CalendarIcon";

type Props = {
  step: Step;
  selectedDate: SelectedDate | null;
  selectedTime: string | null;
  timezone?: string;
  duration?: number;
};

export const Header = ({
  step,
  selectedDate,
  selectedTime,
  timezone,
  duration = 30,
}: Props) => {
  const detailsInfo = useMemo(() => {
    if (step !== "details" || !selectedDate || !selectedTime || !timezone) {
      return null;
    }

    const { start, end } = buildMeetingDate(selectedDate, selectedTime);
    return formatMeetingRangeInTimezone(start, end, timezone);
  }, [step, selectedDate, selectedTime, timezone]);

  return (
    <header className="w-full px-7 py-6 flex flex-col items-center text-center border-b border-[var(--color-white-25)]">
      <h1 className="text-[32px] font-semibold leading-[1.25] text-primary">
        Consultation
      </h1>

      <div className="flex flex-wrap justify-center items-center gap-8 mt-6 text-[16px] font-semibold leading-[1.5] text-[var(--color-white-50)]">
        <div className="flex items-center gap-2">
          <ClockIcon className="text-current" />
          <span>{duration} min</span>
        </div>

        <div className="flex items-center gap-2">
          <CameraIcon className="text-current" />
          <span>Web conferencing details provided upon confirmation.</span>
        </div>
      </div>

      {detailsInfo && (
        <div className="flex flex-wrap justify-center items-center gap-8 mt-6 text-[16px] font-semibold leading-[1.5] text-[var(--color-white-50)]">
          <div className="flex items-center gap-2">
            <CalendarIcon className="text-current" />
            <span>
              {detailsInfo.timeRange}, {detailsInfo.date}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <GlobeIcon className="text-current" />
            <span>({detailsInfo.timezone})</span>
          </div>
        </div>
      )}
    </header>
  );
};
