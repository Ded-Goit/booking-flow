type Props = {
  monthName: string;
  year: number;
  onPrev: () => void;
  onNext: () => void;
};

export const MonthNavigation = ({ monthName, year, onPrev, onNext }: Props) => (
  /* Контейнер: ширина max, margin-bottom 16px */
  <div className="flex justify-between items-center w-full mb-[16px]">
    {/* Кнопка "Назад" — зазвичай вона має бути такого ж стилю, як і "Вперед" */}
    <button
      onClick={onPrev}
      className="w-9 h-9 flex items-center justify-center text-[var(--color-white-100)] hover:opacity-70 transition-opacity"
    >
      <span className="text-2xl leading-none">‹</span>
    </button>

    {/* Назва місяця: Inter, 400, 16px, 1.5, #f4f1eb */}
    <span className="font-normal text-[16px] leading-[1.5] text-[var(--color-white-100)] font-sans">
      {monthName} {year}
    </span>

    {/* Кнопка "Вперед" */}
    <button
      onClick={onNext}
      className="w-9 h-9 rounded-full bg-[var(--accent)] flex items-center justify-center text-[var(--color-secondary-100)] hover:bg-[var(--accent-hover)] transition-colors"
    >
      <span className="text-2xl leading-none">›</span>
    </button>
  </div>
);
