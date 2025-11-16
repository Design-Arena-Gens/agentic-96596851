"use client";

import { useState } from "react";
import { TopBar } from "@/components/layout/top-bar";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { teacherSchedule, knowledgeSpace } from "@/data/mock-data";
import { StatusPill } from "@/components/ui/status-pill";

const assessmentTemplates = [
  {
    name: "Physics · Term 2",
    submissions: "24 / 32 submitted",
    due: "Due Friday · 5 PM",
    status: "Active",
  },
  {
    name: "Robotics Capstone rubric",
    submissions: "12 / 12 submitted",
    due: "Closed 3 days ago",
    status: "Completed",
  },
];

export default function TeacherDashboardPage() {
  const [includeGuardians, setIncludeGuardians] = useState(true);

  return (
    <div className="space-y-6">
      <TopBar
        title="Teacher Workspace"
        subtitle="Manage schedules, attendance, resources, and family communications."
        actions={<Button>Publish quick update</Button>}
      />

      <section className="grid gap-4 lg:grid-cols-[1.1fr,0.9fr]">
        <Card title="Today's schedule" subtitle="Auto-synced with district SIS">
          <ul className="space-y-4">
            {teacherSchedule.map((item) => (
              <li
                key={item.subject}
                className="flex flex-wrap items-center justify-between gap-3 rounded-[var(--radius-md)] border border-[rgba(148,163,184,0.2)] bg-[rgba(37,99,235,0.05)] px-4 py-3"
              >
                <div>
                  <p className="text-sm font-semibold text-[var(--color-foreground)]">
                    {item.subject}
                  </p>
                  <p className="text-xs text-muted">{item.batch}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium">{item.time}</p>
                  <p className="text-xs text-muted">{item.room}</p>
                </div>
              </li>
            ))}
          </ul>
        </Card>
        <Card
          title="Quick actions"
          subtitle="Accelerate routine workflows."
          className="space-y-4"
        >
          <div className="space-y-3 rounded-[var(--radius-md)] bg-[rgba(22,163,74,0.12)] p-4">
            <p className="text-sm font-semibold text-[var(--color-success)]">
              Attendance streak: 3 days with 100% submissions
            </p>
            <Button variant="secondary" className="w-full">
              Launch attendance for next session
            </Button>
          </div>
          <Button className="w-full bg-[var(--color-attention)] hover:bg-[#7c2ae6]">
            Start marks entry
          </Button>
          <Button variant="secondary" className="w-full">
            Upload new learning material
          </Button>
        </Card>
      </section>

      <section className="grid gap-4 xl:grid-cols-[1fr,1fr]">
        <Card title="Assessment progress" subtitle="Status across teaching groups">
          <ul className="space-y-4">
            {assessmentTemplates.map((item) => (
              <li key={item.name} className="rounded-[var(--radius-md)] border border-[rgba(148,163,184,0.2)] px-4 py-3">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div>
                    <p className="text-sm font-semibold">{item.name}</p>
                    <p className="text-xs text-muted">{item.submissions}</p>
                  </div>
                  <StatusPill tone={item.status === "Active" ? "info" : "success"}>
                    {item.status}
                  </StatusPill>
                </div>
                <p className="mt-2 text-xs text-muted">{item.due}</p>
              </li>
            ))}
          </ul>
        </Card>
        <Card title="Compose announcement" subtitle="Share updates to students and families">
          <form className="space-y-4">
            <div>
              <label htmlFor="announcement-title" className="text-sm font-medium">
                Title
              </label>
              <Input id="announcement-title" placeholder="Upcoming lab safety briefing" className="mt-2" />
            </div>
            <div>
              <label htmlFor="announcement-body" className="text-sm font-medium">
                Message
              </label>
              <Textarea
                id="announcement-body"
                rows={4}
                placeholder="Share the purpose, attachments, and key instructions..."
                className="mt-2"
              />
            </div>
            <Checkbox
              label="Send to guardians alongside learners"
              checked={includeGuardians}
              onChange={(event) => setIncludeGuardians(event.target.checked)}
            />
            <div className="flex gap-3">
              <Button type="submit">Send now</Button>
              <Button type="button" variant="secondary">
                Schedule
              </Button>
            </div>
          </form>
        </Card>
      </section>

      <Card title="Knowledge space · recent uploads" subtitle="Everything shared with your groups remains accessible.">
        <div className="grid gap-4 md:grid-cols-3">
          {knowledgeSpace.map((folder) => (
            <article
              key={folder.id}
              className="rounded-[var(--radius-md)] border border-[rgba(148,163,184,0.2)] bg-[rgba(37,99,235,0.04)] p-4"
            >
              <p className="text-sm font-semibold text-[var(--color-foreground)]">
                {folder.name}
              </p>
              <p className="mt-1 text-xs text-muted">{folder.items} items</p>
              <p className="mt-2 text-xs text-muted">Updated {folder.updated}</p>
              <Button variant="ghost" className="mt-4 px-0 text-[var(--color-brand)]">
                Open folder
              </Button>
            </article>
          ))}
        </div>
      </Card>
    </div>
  );
}
