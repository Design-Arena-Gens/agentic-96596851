import { cn } from "@/lib/utils";

interface SparkPoint {
  month: string;
  value: number;
}

interface SparklineProps {
  data: SparkPoint[];
  label?: string;
  className?: string;
}

export function Sparkline({ data, label, className }: SparklineProps) {
  const maxValue = Math.max(...data.map((point) => point.value));
  const minValue = Math.min(...data.map((point) => point.value));
  const points = data
    .map((point, index) => {
      const x = (index / (data.length - 1)) * 100;
      const y =
        100 - ((point.value - minValue) / (maxValue - minValue || 1)) * 100;
      return `${x},${y}`;
    })
    .join(" ");

  return (
    <figure className={cn("space-y-2", className)}>
      {label && <figcaption className="sr-only">{label}</figcaption>}
      <svg viewBox="0 0 100 100" role="img" aria-label={label ?? "Trend line chart"} className="h-28 w-full rounded-lg bg-[rgba(37,99,235,0.08)] p-2">
        <polyline
          fill="none"
          stroke="rgba(37,99,235,0.9)"
          strokeWidth="4"
          strokeLinecap="round"
          points={points}
        />
        {data.map((point, index) => {
          const x = (index / (data.length - 1)) * 100;
          const y =
            100 - ((point.value - minValue) / (maxValue - minValue || 1)) * 100;
          return (
            <circle
              key={point.month}
              cx={x}
              cy={y}
              r="2.8"
              fill="white"
              stroke="rgba(37,99,235,0.8)"
              strokeWidth="1.6"
            />
          );
        })}
      </svg>
      <dl className="grid grid-cols-5 gap-1 text-xs text-muted">
        {data.map((point) => (
          <div key={point.month} className="text-center">
            <dt className="sr-only">{point.month}</dt>
            <dd>{point.month}</dd>
          </div>
        ))}
      </dl>
    </figure>
  );
}
