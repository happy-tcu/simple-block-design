import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BrutalistButton, BrutalistInput, BrutalistBlock, BrutalistCard } from "@/components/ui/brutalist-card";
import { ArrowLeft } from "lucide-react";

export default function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock login - would connect to backend
    console.log("Login:", formData);
    navigate("/teacher");
  };

  return (
    <div className="min-h-screen flex">
      {/* Left Panel - Form */}
      <div className="flex-1 flex flex-col justify-center p-8 md:p-16">
        <Link to="/" className="inline-flex items-center gap-2 mb-8 hover:opacity-70 transition-opacity">
          <ArrowLeft className="h-5 w-5" />
          <span className="font-bold">Back to Home</span>
        </Link>

        <BrutalistBlock className="inline-block mb-8">
          <h1 className="text-3xl md:text-4xl font-bold">LOGIN</h1>
        </BrutalistBlock>

        <form onSubmit={handleSubmit} className="space-y-6 max-w-md">
          <div>
            <label className="block text-sm font-bold uppercase tracking-wider mb-2">
              Email
            </label>
            <BrutalistInput
              type="email"
              placeholder="your@email.com"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
            />
          </div>

          <div>
            <label className="block text-sm font-bold uppercase tracking-wider mb-2">
              Password
            </label>
            <BrutalistInput
              type="password"
              placeholder="••••••••"
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              required
            />
          </div>

          <div className="flex items-center justify-between">
            <Link to="/forgot-password" className="text-sm underline hover:opacity-70">
              Forgot password?
            </Link>
          </div>

          <BrutalistButton type="submit" size="lg" className="w-full">
            Sign In
          </BrutalistButton>

          <p className="text-center text-sm">
            Don't have an account?{" "}
            <Link to="/register" className="font-bold underline hover:opacity-70">
              Register
            </Link>
          </p>
        </form>
      </div>

      {/* Right Panel - Decorative */}
      <div className="hidden lg:flex flex-1 bg-foreground text-background flex-col justify-center p-16">
        <div className="max-w-md">
          <div className="text-6xl mb-6">🎓</div>
          <h2 className="text-4xl font-bold mb-4">WELCOME BACK</h2>
          <p className="text-lg opacity-80">
            Access your dashboard to track student progress, manage classrooms, and view learning analytics.
          </p>

          <div className="mt-12 space-y-4">
            <BrutalistCard variant="inverted" className="border-background">
              <div className="flex items-center gap-3">
                <span className="text-2xl">👩‍🏫</span>
                <div>
                  <div className="font-bold">Teacher Dashboard</div>
                  <div className="text-sm opacity-70">Manage classrooms & students</div>
                </div>
              </div>
            </BrutalistCard>
            <BrutalistCard variant="inverted" className="border-background">
              <div className="flex items-center gap-3">
                <span className="text-2xl">⚙️</span>
                <div>
                  <div className="font-bold">Admin Dashboard</div>
                  <div className="text-sm opacity-70">System-wide analytics & management</div>
                </div>
              </div>
            </BrutalistCard>
          </div>
        </div>
      </div>
    </div>
  );
}
