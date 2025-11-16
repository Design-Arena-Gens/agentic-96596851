import Link from "next/link";
import { Button } from "@/components/ui/button";

const providers = [
  {
    name: "Apex District OneLogin",
    description: "Multi-factor required · 12K active users",
    status: "Operational",
  },
  {
    name: "EduKey SAML",
    description: "Parent & guardian gateway",
    status: "Operational",
  },
  {
    name: "Canvas OAuth",
    description: "Students · Learning management",
    status: "Minor incident · auto retry",
  },
];

export function SSOCard() {
  return (
    <div className="mx-auto flex w-full max-w-4xl flex-col gap-6 rounded-[var(--radius-lg)] border border-[rgba(148,163,184,0.25)] bg-white p-10 shadow-[var(--shadow-card)]">
      <div className="space-y-2">
        <h1 className="text-3xl font-semibold">District SSO Portal</h1>
        <p className="text-sm text-muted">
          Select your organization to continue. Platform availability meets WCAG 2.1 AA requirements with continuous uptime monitoring.
        </p>
      </div>
      <ul className="space-y-4">
        {providers.map((provider) => (
          <li
            key={provider.name}
            className="flex flex-wrap items-center justify-between gap-3 rounded-lg border border-[rgba(148,163,184,0.25)] bg-[rgba(37,99,235,0.04)] px-4 py-3"
          >
            <div>
              <p className="text-sm font-semibold text-[var(--color-foreground)]">
                {provider.name}
              </p>
              <p className="text-xs text-muted">{provider.description}</p>
            </div>
            <Button>{provider.status === "Operational" ? "Continue" : "Retry"}</Button>
          </li>
        ))}
      </ul>
      <div className="flex flex-wrap items-center justify-between gap-2 text-sm text-muted">
        <span>Need help integrating your SSO? Our team can assist within 24 hours.</span>
        <Link href="/" className="text-[var(--color-brand)] hover:underline">
          Back to email login
        </Link>
      </div>
    </div>
  );
}
