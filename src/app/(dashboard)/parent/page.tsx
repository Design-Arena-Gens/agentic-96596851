"use client";

import { TopBar } from "@/components/layout/top-bar";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { parentDashboardMetrics, notificationsFeed, acknowledgmentsQueue } from "@/data/mock-data";
import { AttendanceCalendar } from "@/components/attendance/calendar";
import { attendanceCalendar } from "@/data/mock-data";
import { StatusPill } from "@/components/ui/status-pill";

const supportContacts = [
  { role: "Homeroom Advisor", name: "Ms. Priya Nair", response: "Replies in under 2 hours" },
  { role: "Counselor", name: "Leena D'Souza", response: "Available Mon-Fri · 8 AM – 4 PM" },
];

export default function ParentDashboardPage() {
  return (
    <div className="space-y-6">
      <TopBar
        title="Parent Overview"
        subtitle="Stay aligned with your child's progress, attendance, and communications."
        actions={<Button>Download academic summary</Button>}
      />

      <section className="grid gap-4 md:grid-cols-3">
        {parentDashboardMetrics.map((metric) => (
          <Card key={metric.label} className="gradient-card">
            <p className="text-xs uppercase tracking-wide text-muted">{metric.label}</p>
            <p className="mt-3 text-3xl font-semibold">{metric.value}</p>
            <p className="mt-1 text-sm text-muted">{metric.helper}</p>
          </Card>
        ))}
      </section>

      <section className="grid gap-4 xl:grid-cols-[1fr,1fr]">
        <Card
          title="Attendance tracker"
          subtitle="You will be notified instantly for absences and late arrivals."
        >
          <AttendanceCalendar month="2025-03" data={attendanceCalendar} />
        </Card>
        <Card title="Marks acknowledgments" subtitle="Review and confirm assessment updates promptly.">
          <ul className="space-y-4">
            {acknowledgmentsQueue.map((item) => (
              <li
                key={item.id}
                className="rounded-[var(--radius-md)] border border-[rgba(148,163,184,0.2)] bg-[rgba(37,99,235,0.05)] px-4 py-3"
              >
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div>
                    <p className="text-sm font-semibold text-[var(--color-foreground)]">
                      {item.item}
                    </p>
                    <p className="text-xs text-muted">
                      {item.student} · Sent {item.sent}
                    </p>
                  </div>
                  <StatusPill tone={item.status.includes("Awaiting") ? "warning" : "success"}>
                    {item.status}
                  </StatusPill>
                </div>
                <div className="mt-3 flex gap-2">
                  <Button size="sm">View details</Button>
                  <Button variant="secondary" size="sm">
                    Send message
                  </Button>
                </div>
              </li>
            ))}
          </ul>
        </Card>
      </section>

      <section className="grid gap-4 xl:grid-cols-[1.2fr,0.8fr]">
        <Card title="Recent communications" subtitle="Every message is accessible and timestamped.">
          <ul className="space-y-4">
            {notificationsFeed.map((message) => (
              <li key={message.id} className="rounded-[var(--radius-md)] border border-[rgba(148,163,184,0.2)] bg-white px-4 py-3">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div>
                    <p className="text-sm font-semibold">{message.title}</p>
                    <p className="text-xs text-muted">{message.audience}</p>
                  </div>
                  <Badge tone="info">{message.status}</Badge>
                </div>
                <p className="mt-2 text-sm text-muted">{message.body}</p>
                <p className="mt-1 text-xs text-muted">{message.time}</p>
              </li>
            ))}
          </ul>
        </Card>
        <Card title="Support network" subtitle="Your go-to contacts for quick assistance.">
          <ul className="space-y-4">
            {supportContacts.map((contact) => (
              <li key={contact.role} className="rounded-[var(--radius-md)] border border-[rgba(148,163,184,0.2)] bg-[rgba(37,99,235,0.05)] px-4 py-3">
                <p className="text-sm font-semibold">{contact.role}</p>
                <p className="text-sm">{contact.name}</p>
                <p className="text-xs text-muted">{contact.response}</p>
                <Button variant="ghost" className="mt-3 px-0 text-[var(--color-brand)]">
                  Send message
                </Button>
              </li>
            ))}
          </ul>
        </Card>
      </section>
    </div>
  );
}
