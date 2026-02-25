interface Props {
  step: number;
}

export default function Progress({ step }: Props) {
  return (
    <div className="flex gap-2 mb-6">
      {[1, 2, 3].map((s) => (
        <div
          key={s}
          className={`h-1 flex-1 rounded ${
            s <= step ? "bg-[var(--color-primary)]" : "bg-white/10"
          }`}
        />
      ))}
    </div>
  );
}
