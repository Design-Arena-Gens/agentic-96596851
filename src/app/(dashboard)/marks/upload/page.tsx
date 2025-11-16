"use client";

import { useState } from "react";
import { TopBar } from "@/components/layout/top-bar";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { marksTemplateColumns, marksValidationResults } from "@/data/mock-data";
import { StatusPill } from "@/components/ui/status-pill";

const steps = [
  { id: 1, title: "Download template", helper: "Aligned to grading schema" },
  { id: 2, title: "Validate scores", helper: "Auto resolve common issues" },
  { id: 3, title: "Confirm & publish", helper: "Notify students and guardians" },
];

export default function MarksUploadPage() {
  const [activeStep, setActiveStep] = useState(1);

  return (
    <div className="space-y-6">
      <TopBar
        title="Marks upload flow"
        subtitle="Streamlined, error-resistant workflow from template to publication."
        actions={<Button>View assessment policies</Button>}
      />

      <Card title="Progress tracker" subtitle="Three guided steps. Safe to exit and resume.">
        <div className="grid gap-4 md:grid-cols-3">
          {steps.map((step) => (
            <button
              key={step.id}
              type="button"
              onClick={() => setActiveStep(step.id)}
              className={`rounded-[var(--radius-md)] border px-4 py-3 text-left transition ${
                activeStep === step.id
                  ? "border-[var(--color-brand)] bg-[rgba(37,99,235,0.1)]"
                  : "border-[rgba(148,163,184,0.2)] bg-white hover:border-[var(--color-brand)]"
              }`}
            >
              <div className="flex items-center justify-between text-sm font-semibold">
                <span>
                  {step.id}. {step.title}
                </span>
                {activeStep > step.id ? (
                  <Badge tone="success">Done</Badge>
                ) : (
                  <Badge tone="info">Step {step.id}</Badge>
                )}
              </div>
              <p className="mt-2 text-xs text-muted">{step.helper}</p>
            </button>
          ))}
        </div>
      </Card>

      {activeStep === 1 && (
        <Card
          title="Download ready-to-fill template"
          subtitle="Columns match your selected assessment and batch."
          actions={<Button>Download CSV</Button>}
        >
          <div className="overflow-x-auto">
            <table className="min-w-full text-left text-sm">
              <thead>
                <tr className="text-xs uppercase tracking-wide text-muted">
                  <th scope="col" className="px-3 py-2">
                    Column
                  </th>
                  <th scope="col" className="px-3 py-2">
                    Description
                  </th>
                  <th scope="col" className="px-3 py-2">
                    Example
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[rgba(148,163,184,0.2)]">
                {marksTemplateColumns.map((column) => (
                  <tr key={column.key}>
                    <td className="px-3 py-3 font-semibold text-[var(--color-foreground)]">
                      {column.label}
                    </td>
                    <td className="px-3 py-3 text-sm text-muted">{column.key}</td>
                    <td className="px-3 py-3 text-sm text-muted">{column.example}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-4 flex gap-2">
            <Button onClick={() => setActiveStep(2)}>Continue to validation</Button>
            <Button variant="secondary">Send to teacher</Button>
          </div>
        </Card>
      )}

      {activeStep === 2 && (
        <Card
          title="Validation results"
          subtitle="Automatic checks ensure data integrity before publishing."
          actions={<Button>Re-upload data</Button>}
        >
          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-[var(--radius-md)] bg-[rgba(22,163,74,0.12)] p-4 text-sm text-[var(--color-success)]">
              <p className="text-sm font-semibold text-[var(--color-success)]">
                {marksValidationResults.validCount} rows valid
              </p>
              <p>Ready to publish without manual review.</p>
            </div>
            <div className="rounded-[var(--radius-md)] bg-[rgba(245,158,11,0.12)] p-4">
              <p className="text-sm font-semibold text-[var(--color-warning)]">
                {marksValidationResults.warnings.length} warnings auto-resolved
              </p>
            </div>
            <div className="rounded-[var(--radius-md)] bg-[rgba(220,38,38,0.12)] p-4">
              <p className="text-sm font-semibold text-[var(--color-danger)]">
                {marksValidationResults.errors.length} errors requiring review
              </p>
            </div>
          </div>
          <section className="mt-4 grid gap-4 md:grid-cols-2">
            <div>
              <h3 className="text-sm font-semibold">Warnings</h3>
              <ul className="mt-2 space-y-3">
                {marksValidationResults.warnings.map((warning) => (
                  <li key={warning.student} className="rounded-[var(--radius-md)] border border-[rgba(245,158,11,0.4)] bg-[rgba(245,158,11,0.08)] px-4 py-3">
                    <p className="text-sm font-semibold">{warning.student}</p>
                    <p className="text-xs text-muted">{warning.issue}</p>
                    <StatusPill tone="info" className="mt-2">
                      {warning.status}
                    </StatusPill>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold">Errors</h3>
              <ul className="mt-2 space-y-3">
                {marksValidationResults.errors.map((error) => (
                  <li key={error.student} className="rounded-[var(--radius-md)] border border-[rgba(220,38,38,0.4)] bg-[rgba(220,38,38,0.08)] px-4 py-3">
                    <p className="text-sm font-semibold">{error.student}</p>
                    <p className="text-xs text-muted">{error.issue}</p>
                    <StatusPill tone="danger" className="mt-2">
                      {error.status}
                    </StatusPill>
                  </li>
                ))}
              </ul>
            </div>
          </section>
          <div className="mt-6 flex gap-3">
            <Button onClick={() => setActiveStep(3)}>Confirm and publish</Button>
            <Button variant="secondary">Download validation report</Button>
          </div>
        </Card>
      )}

      {activeStep === 3 && (
        <Card
          title="Confirm publication"
          subtitle="Inform students and guardians instantly with contextual messaging."
        >
          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-[var(--radius-md)] border border-[rgba(148,163,184,0.2)] bg-[rgba(37,99,235,0.05)] p-4">
              <h3 className="text-sm font-semibold">Recipients</h3>
              <ul className="mt-2 space-y-2 text-sm text-muted">
                <li>32 students in Grade 11 · Physics Advanced</li>
                <li>32 guardians (auto-translated notices available)</li>
              </ul>
            </div>
            <div className="rounded-[var(--radius-md)] border border-[rgba(148,163,184,0.2)] bg-white p-4">
              <h3 className="text-sm font-semibold">Announcement preview</h3>
              <p className="mt-2 text-sm text-muted">
                “Term 2 Physics scores are now live. Review detailed feedback and schedule support sessions directly from your dashboard.”
              </p>
            </div>
          </div>
          <div className="mt-6 space-y-3">
            <p className="text-sm font-semibold">Delivery readiness</p>
            <Progress value={98} tone="success" />
            <p className="text-xs text-muted">
              All checks passed. Publication forecast: <strong>11:05 AM</strong> · Average guardians notified within 2 minutes.
            </p>
          </div>
          <div className="mt-6 flex gap-3">
            <Button>Publish now</Button>
            <Button variant="secondary">Schedule release</Button>
          </div>
        </Card>
      )}
    </div>
  );
}
