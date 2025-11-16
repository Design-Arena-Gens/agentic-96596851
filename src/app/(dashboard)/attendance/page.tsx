"use client";

import { useState } from "react";
import { TopBar } from "@/components/layout/top-bar";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Select } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { AttendanceCalendar } from "@/components/attendance/calendar";
import { attendanceSessions, attendanceCalendar } from "@/data/mock-data";
import { StatusPill } from "@/components/ui/status-pill";

const statuses = ["Present", "Late", "Excused", "Absent"];

export default function AttendancePage() {
  const [selectedSession, setSelectedSession] = useState(attendanceSessions[0].id);

  return (
    <div className="space-y-6">
      <TopBar
        title="Attendance orchestration"
        subtitle="Mark daily sessions and analyze trends with zero friction."
        actions={<Button>Download monthly report</Button>}
      />

      <section className="grid gap-4 xl:grid-cols-[1.1fr,0.9fr]">
        <Card title="Sessions today" subtitle="Switch between groups seamlessly.">
          <div className="space-y-4">
            <Select
              value={selectedSession}
              onChange={(event) => setSelectedSession(event.target.value)}
            >
              {attendanceSessions.map((session) => (
                <option key={session.id} value={session.id}>
                  {session.batch} · {session.id}
                </option>
              ))}
            </Select>
            <ul className="space-y-3">
              {attendanceSessions.map((session) => (
                <li
                  key={session.id}
                  className={`rounded-[var(--radius-md)] border px-4 py-3 text-sm transition ${
                    selectedSession === session.id
                      ? "border-[var(--color-brand)] bg-[rgba(37,99,235,0.08)]"
                      : "border-[rgba(148,163,184,0.2)] bg-white"
                  }`}
                >
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <div>
                      <p className="font-semibold text-[var(--color-foreground)]">
                        {session.id}
                      </p>
                      <p className="text-xs text-muted">{session.batch}</p>
                    </div>
                    <StatusPill tone="info">
                      {session.present}/{session.total} present
                    </StatusPill>
                  </div>
                  <p className="mt-2 text-xs text-muted">
                    {session.time} · {session.facilitator} · {session.location}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </Card>
        <Card title="Monthly view" subtitle="Missing marks auto-remind facilitators.">
          <AttendanceCalendar month="2025-03" data={attendanceCalendar} />
        </Card>
      </section>

      <Card
        title="Session mark-in"
        subtitle="Fast keyboard shortcuts · Works offline."
        actions={<Button variant="secondary">Import from scanner</Button>}
      >
        <div className="overflow-x-auto">
          <table className="min-w-full text-left text-sm">
            <thead>
              <tr className="text-xs uppercase tracking-wide text-muted">
                <th scope="col" className="px-3 py-2">
                  Student
                </th>
                <th scope="col" className="px-3 py-2">
                  Status
                </th>
                <th scope="col" className="px-3 py-2">
                  Notes
                </th>
                <th scope="col" className="px-3 py-2">
                  Notify guardians
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[rgba(148,163,184,0.2)]">
              {["Riya Sharma", "Arjun Patel", "Sara Kapoor"].map((student) => (
                <tr key={student}>
                  <td className="px-3 py-3 font-semibold text-[var(--color-foreground)]">
                    {student}
                  </td>
                  <td className="px-3 py-3">
                    <Select defaultValue="Present">
                      {statuses.map((status) => (
                        <option key={status}>{status}</option>
                      ))}
                    </Select>
                  </td>
                  <td className="px-3 py-3">
                    <input
                      type="text"
                      className="w-full rounded-lg border border-[var(--color-border)] px-3 py-2 text-sm"
                      placeholder="Optional note"
                    />
                  </td>
                  <td className="px-3 py-3">
                    <Checkbox label="Send SMS" />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-4 flex gap-3">
          <Button>Save session</Button>
          <Button variant="secondary">Submit & notify</Button>
        </div>
      </Card>
    </div>
  );
}
