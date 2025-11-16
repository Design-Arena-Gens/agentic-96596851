"use client";

import { useState } from "react";
import { TopBar } from "@/components/layout/top-bar";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";

const rolePermissions = [
  {
    role: "Administrator",
    description: "Full platform visibility with compliance controls.",
    permissions: ["Manage users", "Edit curriculum", "Publish communications", "View analytics"],
  },
  {
    role: "Teacher",
    description: "Classroom management, attendance, and resource sharing.",
    permissions: ["Mark attendance", "Upload materials", "Send announcements", "View student profiles"],
  },
  {
    role: "Parent",
    description: "Family engagement portal with acknowledgment workflows.",
    permissions: ["View child assessments", "Acknowledge marks", "Message faculty"],
  },
  {
    role: "Student",
    description: "Learn, submit, and collaborate with full accessibility.",
    permissions: ["View coursework", "Submit assessments", "Access resources"],
  },
];

const securitySettings = [
  { label: "Multi-factor authentication", description: "Enforce MFA for all staff accounts." },
  { label: "Session timeout", description: "Auto log out after 45 minutes of inactivity." },
  { label: "Guardian verification", description: "Verify contact details every 90 days." },
];

export default function SettingsPage() {
  const [selectedRole, setSelectedRole] = useState(rolePermissions[0].role);

  const activeRole = rolePermissions.find((role) => role.role === selectedRole) ?? rolePermissions[0];

  return (
    <div className="space-y-6">
      <TopBar
        title="Settings & Role-based access"
        subtitle="Configure platform security, accessibility, and responsibilities."
        actions={<Button>Export audit log</Button>}
      />

      <section className="grid gap-4 xl:grid-cols-[1fr,1fr]">
        <Card title="Roles" subtitle="Each role inherits accessibility compliant defaults.">
          <div className="grid gap-3 md:grid-cols-2">
            {rolePermissions.map((role) => (
              <button
                key={role.role}
                type="button"
                onClick={() => setSelectedRole(role.role)}
                className={`rounded-[var(--radius-md)] border px-4 py-3 text-left transition ${
                  selectedRole === role.role
                    ? "border-[var(--color-brand)] bg-[rgba(37,99,235,0.08)]"
                    : "border-[rgba(148,163,184,0.2)] bg-white hover:border-[var(--color-brand)]"
                }`}
              >
                <p className="text-sm font-semibold">{role.role}</p>
                <p className="mt-1 text-xs text-muted">{role.description}</p>
              </button>
            ))}
          </div>
        </Card>
        <Card title="Security posture" subtitle="Aligned with FERPA and SOC2 controls.">
          <ul className="space-y-3">
            {securitySettings.map((setting) => (
              <li key={setting.label} className="rounded-[var(--radius-md)] border border-[rgba(148,163,184,0.2)] bg-white px-4 py-3">
                <div className="flex items-center justify-between gap-3">
                  <p className="text-sm font-semibold">{setting.label}</p>
                  <Badge tone="success">Enabled</Badge>
                </div>
                <p className="mt-1 text-xs text-muted">{setting.description}</p>
              </li>
            ))}
          </ul>
          <div className="mt-4 flex gap-3">
            <Button variant="secondary">Edit policies</Button>
            <Button>View audit log</Button>
          </div>
        </Card>
      </section>

      <Card title={`${activeRole.role} permissions`} subtitle="Adjust capabilities with immediate effect.">
        <div className="grid gap-4 md:grid-cols-2">
          {activeRole.permissions.map((permission) => (
            <Checkbox
              key={permission}
              label={permission}
              defaultChecked
              helperText="Included in default policy."
            />
          ))}
        </div>
        <div className="mt-4 flex gap-3">
          <Button variant="secondary">Save draft</Button>
          <Button>Publish changes</Button>
        </div>
      </Card>
    </div>
  );
}
