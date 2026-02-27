import { Card } from "../ui/Card";

interface Props {
  date: string | null;
  time: string | null;
}

export const SuccessScreen = ({ date, time }: Props) => {
  return (
    <Card>
      <h2 className="text-xl font-semibold mb-4"> You are scheduled</h2>

      <p className="text-[var(--text-muted)]">
        {date} at {time}
      </p>
    </Card>
  );
};
