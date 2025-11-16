import { SSOCard } from "@/components/auth/sso-card";

export default function SSOPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-white to-[rgba(37,99,235,0.12)] py-20">
      <div className="mx-auto w-full max-w-5xl px-6">
        <SSOCard />
      </div>
    </div>
  );
}
