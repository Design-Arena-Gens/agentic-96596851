import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";

export function LoginCard() {
  return (
    <div className="mx-auto grid w-full max-w-5xl grid-cols-1 overflow-hidden rounded-[var(--radius-lg)] border border-[rgba(148,163,184,0.25)] bg-white shadow-[var(--shadow-card)] md:grid-cols-[1.1fr,0.9fr]">
      <section className="flex flex-col justify-between gap-10 bg-[rgba(37,99,235,0.07)] p-10">
        <div className="space-y-6">
          <p className="text-sm font-semibold text-[var(--color-brand)] uppercase tracking-wide">
            NimbusLearn Hub
          </p>
          <h1 className="text-3xl font-semibold leading-tight">
            Welcome back. Continue orchestrating powerful learning experiences.
          </h1>
          <p className="text-sm text-muted">
            Secure access with role-aware workflows for administrators, teachers, students, and families.
          </p>
        </div>
        <dl className="grid grid-cols-2 gap-6 text-sm">
          <div>
            <dt className="font-semibold text-[var(--color-foreground)]">
              Response SLA
            </dt>
            <dd className="text-muted">Under 4 minutes · Status green</dd>
          </div>
          <div>
            <dt className="font-semibold text-[var(--color-foreground)]">
              Platform uptime
            </dt>
            <dd className="text-muted">99.98% · Last 90 days</dd>
          </div>
        </dl>
      </section>
      <section className="flex flex-col gap-8 p-10">
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold">Log in</h2>
          <p className="text-sm text-muted">
            Single Sign-On available · WCAG 2.1 AA compliant experience.
          </p>
        </div>
        <form className="space-y-4">
          <div>
            <label htmlFor="email" className="text-sm font-medium">
              Work email
            </label>
            <Input
              id="email"
              name="email"
              type="email"
              required
              autoComplete="email"
              placeholder="you@school.edu"
              className="mt-2"
            />
          </div>
          <div>
            <label htmlFor="password" className="text-sm font-medium">
              Password
            </label>
            <Input
              id="password"
              name="password"
              type="password"
              required
              autoComplete="current-password"
              placeholder="••••••••"
              className="mt-2"
            />
            <div className="mt-2 text-right text-sm">
              <Link
                href="/forgot-password"
                className="text-[var(--color-brand)] hover:underline"
              >
                Forgot password?
              </Link>
            </div>
          </div>
          <Checkbox
            label="Keep me signed in for 14 days"
            helperText="Avoid on shared devices."
            defaultChecked
          />
          <Button type="submit" className="w-full py-3">
            Continue to workspace
          </Button>
        </form>
        <div className="space-y-3">
          <p className="text-center text-sm text-muted">or continue with</p>
          <div className="grid gap-3 md:grid-cols-2">
            <Button variant="secondary" className="w-full">
              Sign in with Google
            </Button>
            <Button variant="secondary" className="w-full">
              Sign in with Microsoft
            </Button>
          </div>
          <Link
            href="/sso"
            className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-transparent px-4 py-2 text-sm font-medium text-[var(--color-brand)] transition hover:bg-[rgba(37,99,235,0.08)]"
          >
            Use district SSO portal
          </Link>
        </div>
        <p className="text-center text-xs text-muted">
          By accessing the platform you agree to our{" "}
          <Link href="#" className="text-[var(--color-brand)] hover:underline">
            Acceptable Use Policy
          </Link>{" "}
          and{" "}
          <Link href="#" className="text-[var(--color-brand)] hover:underline">
            Accessibility Statement
          </Link>
          .
        </p>
      </section>
    </div>
  );
}
