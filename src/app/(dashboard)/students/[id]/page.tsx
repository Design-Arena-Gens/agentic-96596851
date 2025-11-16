import { notFound } from "next/navigation";
import { TopBar } from "@/components/layout/top-bar";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { StatusPill } from "@/components/ui/status-pill";
import { studentProfiles } from "@/data/mock-data";

interface ProfilePageProps {
  params: { id: string };
}

export default function StudentProfilePage({ params }: ProfilePageProps) {
  const profile = studentProfiles.find((student) => student.id.toLowerCase() === params.id.toLowerCase());

  if (!profile) {
    notFound();
  }

  return (
    <div className="space-y-6">
      <TopBar
        title={`${profile.name} · ${profile.id}`}
        subtitle={`${profile.cohort} · Advisor ${profile.advisor}`}
        actions={
          <div className="flex gap-2">
            <Button variant="secondary">Download portfolio</Button>
            <Button>Schedule conference</Button>
          </div>
        }
      />

      <section className="grid gap-4 xl:grid-cols-[1.2fr,0.8fr]">
        <Card title="Progress overview" subtitle="Live metrics sourced from SIS and LMS.">
          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-[var(--radius-md)] bg-[rgba(37,99,235,0.08)] p-4">
              <p className="text-sm uppercase tracking-wide text-muted">Attendance</p>
              <p className="mt-2 text-3xl font-semibold">{profile.attendance}%</p>
              <p className="text-xs text-muted">Last 30 days · Streak: 12 days</p>
            </div>
            <div className="rounded-[var(--radius-md)] bg-[rgba(22,163,74,0.12)] p-4">
              <p className="text-sm uppercase tracking-wide text-muted">Mastery</p>
              <p className="mt-2 text-3xl font-semibold">{profile.mastery}%</p>
              <p className="text-xs text-muted">Projected to exceed target by 5%</p>
            </div>
          </div>
        </Card>
        <Card title="Support network" subtitle="Guardians and assigned staff.">
          <ul className="space-y-3">
            {profile.guardians.map((guardian) => (
              <li key={guardian.contact} className="rounded-[var(--radius-md)] border border-[rgba(148,163,184,0.2)] bg-white px-4 py-3">
                <p className="text-sm font-semibold">{guardian.name}</p>
                <p className="text-xs text-muted">{guardian.relationship}</p>
                <p className="text-xs text-muted">{guardian.contact}</p>
                <Button variant="ghost" className="mt-2 px-0 text-[var(--color-brand)]">
                  Message guardian
                </Button>
              </li>
            ))}
            <li className="rounded-[var(--radius-md)] border border-dashed border-[rgba(148,163,184,0.4)] px-4 py-3">
              <Button variant="ghost" className="px-0 text-[var(--color-brand)]">
                Add another contact
              </Button>
            </li>
          </ul>
        </Card>
      </section>

      <section className="grid gap-4 xl:grid-cols-[0.9fr,1.1fr]">
        <Card title="Intervention timeline" subtitle="Track commitments and outcomes.">
          <ul className="space-y-3">
            {profile.interventions.map((item) => (
              <li key={item.summary} className="rounded-[var(--radius-md)] border border-[rgba(148,163,184,0.2)] bg-[rgba(37,99,235,0.05)] px-4 py-3">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <p className="text-sm font-semibold text-[var(--color-foreground)]">
                    {item.summary}
                  </p>
                  <Badge tone="info">{item.date}</Badge>
                </div>
                <StatusPill tone={item.status === "On track" ? "success" : "info"} className="mt-2">
                  {item.status}
                </StatusPill>
              </li>
            ))}
          </ul>
        </Card>
        <Card title="Learning materials" subtitle="Recent resources shared with the student.">
          <ul className="space-y-3">
            {profile.materials.map((material) => (
              <li key={material.name} className="flex flex-wrap items-center justify-between gap-3 rounded-[var(--radius-md)] border border-[rgba(148,163,184,0.2)] bg-white px-4 py-3">
                <div>
                  <p className="text-sm font-semibold">{material.name}</p>
                  <p className="text-xs text-muted">{material.type} · Updated {material.updated}</p>
                </div>
                <Button variant="secondary">Open</Button>
              </li>
            ))}
          </ul>
        </Card>
      </section>
    </div>
  );
}
