import { ForgotCard } from "@/components/auth/forgot-card";

export default function ForgotPasswordPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-white to-[rgba(37,99,235,0.12)] py-20">
      <div className="mx-auto w-full max-w-4xl px-6">
        <ForgotCard />
      </div>
    </div>
  );
}
