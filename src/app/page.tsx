import { LoginCard } from "@/components/auth/login-card";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-[rgba(15,23,42,0.04)] via-white to-[rgba(37,99,235,0.08)]">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(37,99,235,0.12),_transparent_45%)]" />
      <div className="mx-auto flex min-h-screen w-full max-w-6xl flex-col justify-center gap-10 px-6 py-16">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-brand)]">
            Unified Academic Operations
          </p>
          <h1 className="mt-3 max-w-xl text-4xl font-semibold leading-snug">
            NimbusLearn Hub
          </h1>
        </div>
        <LoginCard />
      </div>
    </div>
  );
}
