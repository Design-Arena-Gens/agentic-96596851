import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function ForgotCard() {
  return (
    <div className="mx-auto flex w-full max-w-3xl flex-col gap-6 rounded-[var(--radius-lg)] border border-[rgba(148,163,184,0.25)] bg-white p-10 shadow-[var(--shadow-card)]">
      <div className="space-y-2">
        <h1 className="text-3xl font-semibold">Reset your password</h1>
        <p className="text-sm text-muted">
          We will send a secure reset link to your registered email. Links expire in 15 minutes.
        </p>
      </div>
      <form className="space-y-4">
        <div>
          <label htmlFor="reset-email" className="text-sm font-medium">
            School email
          </label>
          <Input
            id="reset-email"
            type="email"
            required
            autoComplete="email"
            placeholder="name@district.edu"
            className="mt-2"
          />
        </div>
        <Button type="submit" className="w-full py-3">
          Send reset link
        </Button>
      </form>
      <div className="space-y-2 rounded-lg bg-[rgba(37,99,235,0.06)] p-4 text-sm text-muted">
        <p className="font-semibold text-[var(--color-foreground)]">
          Secure reset best practices
        </p>
        <ul className="list-inside list-disc space-y-1">
          <li>Reset links are valid for one use only.</li>
          <li>Contact support if you no longer have access to your inbox.</li>
          <li>Keep MFA device nearby to verify your identity.</li>
        </ul>
      </div>
      <div className="text-center text-sm text-muted">
        Remembered your password?{" "}
        <Link href="/" className="text-[var(--color-brand)] hover:underline">
          Return to login
        </Link>
      </div>
    </div>
  );
}
