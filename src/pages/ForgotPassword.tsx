import { useState } from "react";
import { Link } from "react-router-dom";
import { BrutalistButton, BrutalistInput, BrutalistBlock, BrutalistCard } from "@/components/ui/brutalist-card";
import { ArrowLeft, Check } from "lucide-react";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Reset password for:", email);
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-8">
      <div className="w-full max-w-md">
        <Link to="/login" className="inline-flex items-center gap-2 mb-8 hover:opacity-70 transition-opacity">
          <ArrowLeft className="h-5 w-5" />
          <span className="font-bold">Back to Login</span>
        </Link>

        {!submitted ? (
          <>
            <BrutalistBlock className="inline-block mb-8">
              <h1 className="text-3xl font-bold">RESET PASSWORD</h1>
            </BrutalistBlock>

            <p className="mb-8 opacity-70">
              Enter your email address and we'll send you instructions to reset your password.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-bold uppercase tracking-wider mb-2">
                  Email
                </label>
                <BrutalistInput
                  type="email"
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <BrutalistButton type="submit" size="lg" className="w-full">
                Send Reset Link
              </BrutalistButton>
            </form>
          </>
        ) : (
          <BrutalistCard variant="inverted" className="text-center">
            <div className="w-16 h-16 mx-auto mb-6 border-2 border-background flex items-center justify-center">
              <Check className="h-8 w-8" />
            </div>
            <h2 className="text-2xl font-bold mb-4">CHECK YOUR EMAIL</h2>
            <p className="opacity-80 mb-6">
              We've sent password reset instructions to <strong>{email}</strong>
            </p>
            <Link to="/login">
              <BrutalistButton variant="secondary">
                Return to Login
              </BrutalistButton>
            </Link>
          </BrutalistCard>
        )}
      </div>
    </div>
  );
}
