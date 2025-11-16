interface AttendanceEntry {
  date: string;
  status: "present" | "late" | "excused" | "absent";
}

const statusStyles: Record<AttendanceEntry["status"], string> = {
  present: "bg-[rgba(22,163,74,0.12)] text-[var(--color-success)]",
  late: "bg-[rgba(245,158,11,0.12)] text-[var(--color-warning)]",
  excused: "bg-[rgba(37,99,235,0.12)] text-[var(--color-brand)]",
  absent: "bg-[rgba(220,38,38,0.12)] text-[var(--color-danger)]",
};

function generateMonthGrid(reference: Date) {
  const year = reference.getFullYear();
  const month = reference.getMonth();
  const firstDay = new Date(year, month, 1);
  const lastDay = new Date(year, month + 1, 0);

  const startOffset = firstDay.getDay();
  const totalDays = lastDay.getDate();

  const days: Array<{ date: Date; isCurrentMonth: boolean }> = [];

  for (let i = 0; i < startOffset; i += 1) {
    const date = new Date(year, month, i - startOffset + 1);
    days.push({ date, isCurrentMonth: false });
  }

  for (let day = 1; day <= totalDays; day += 1) {
    days.push({ date: new Date(year, month, day), isCurrentMonth: true });
  }

  while (days.length % 7 !== 0) {
    const nextDate = new Date(year, month, totalDays + (days.length % 7));
    days.push({ date: nextDate, isCurrentMonth: false });
  }

  return days;
}

const weekdayLabels = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

export function AttendanceCalendar({
  month,
  data,
}: {
  month: string;
  data: AttendanceEntry[];
}) {
  const reference = new Date(`${month}-01`);
  const entries = new Map(data.map((entry) => [entry.date, entry.status]));
  const grid = generateMonthGrid(reference);

  return (
    <div>
      <div className="mb-4 flex items-center justify-between">
        <h3 className="text-sm font-semibold">{new Intl.DateTimeFormat("en", { month: "long", year: "numeric" }).format(reference)}</h3>
        <div className="flex gap-4 text-xs text-muted">
          <span className="flex items-center gap-1">
            <span className="inline-block h-2.5 w-2.5 rounded-full bg-[rgba(22,163,74,0.9)]" />
            Present
          </span>
          <span className="flex items-center gap-1">
            <span className="inline-block h-2.5 w-2.5 rounded-full bg-[rgba(245,158,11,0.9)]" />
            Late
          </span>
          <span className="flex items-center gap-1">
            <span className="inline-block h-2.5 w-2.5 rounded-full bg-[rgba(37,99,235,0.9)]" />
            Excused
          </span>
        </div>
      </div>
      <div className="grid grid-cols-7 gap-2 text-center text-xs text-muted">
        {weekdayLabels.map((day) => (
          <div key={day} className="font-medium">
            {day}
          </div>
        ))}
        {grid.map(({ date, isCurrentMonth }) => {
          const iso = date.toISOString().slice(0, 10);
          const status = entries.get(iso);
          return (
            <div
              key={iso}
              className={`rounded-lg border border-[rgba(148,163,184,0.18)] px-2 py-3 text-sm ${isCurrentMonth ? "bg-white" : "bg-slate-100 text-slate-400"}`}
            >
              <div>{date.getDate()}</div>
              {status && (
                <span
                  className={`mt-2 inline-block rounded-full px-2 py-0.5 text-[10px] font-semibold ${statusStyles[status]}`}
                >
                  {status}
                </span>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
