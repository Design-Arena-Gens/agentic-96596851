interface RadialGaugeProps {
  value: number;
  size?: number;
  strokeWidth?: number;
  label: string;
}

export function RadialGauge({
  value,
  size = 120,
  strokeWidth = 12,
  label,
}: RadialGaugeProps) {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (value / 100) * circumference;

  return (
    <figure className="flex flex-col items-center gap-3 text-center" role="group" aria-label={label}>
      <svg width={size} height={size} role="img" aria-hidden="true">
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="transparent"
          stroke="rgba(148,163,184,0.18)"
          strokeWidth={strokeWidth}
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="transparent"
          stroke="var(--color-brand)"
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
        />
        <text
          x="50%"
          y="50%"
          textAnchor="middle"
          dy="0.35em"
          fontWeight="600"
          fontSize="20"
          fill="var(--color-foreground)"
        >
          {value}%
        </text>
      </svg>
      <figcaption className="text-sm text-muted">{label}</figcaption>
    </figure>
  );
}
