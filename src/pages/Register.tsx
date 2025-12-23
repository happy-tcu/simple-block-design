import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BrutalistButton, BrutalistInput, BrutalistBlock, BrutalistBadge } from "@/components/ui/brutalist-card";
import { ArrowLeft } from "lucide-react";

type Role = "teacher" | "admin";

export default function Register() {
  const navigate = useNavigate();
  const [role, setRole] = useState<Role>("teacher");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    organization: "",
    password: "",
    confirmPassword: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock registration - would connect to backend
    console.log("Register:", { role, ...formData });
    navigate("/login");
  };

  return (
    <div className="min-h-screen flex">
      {/* Left Panel - Decorative */}
      <div className="hidden lg:flex flex-1 bg-foreground text-background flex-col justify-center p-16">
        <div className="max-w-md">
          <div className="text-6xl mb-6">🚀</div>
          <h2 className="text-4xl font-bold mb-4">JOIN BAKAME</h2>
          <p className="text-lg opacity-80 mb-8">
            Create an account to access powerful tools for managing education delivery.
          </p>

          <div className="space-y-6">
            <div className="border-2 border-background p-6">
              <h3 className="font-bold mb-3">TEACHERS CAN:</h3>
              <ul className="space-y-2 text-sm opacity-80">
                <li>✓ Create and manage classrooms</li>
                <li>✓ Enroll up to 30 students per class</li>
                <li>✓ Track individual progress</li>
                <li>✓ View performance analytics</li>
              </ul>
            </div>

            <div className="border-2 border-background p-6">
              <h3 className="font-bold mb-3">ADMINS CAN:</h3>
              <ul className="space-y-2 text-sm opacity-80">
                <li>✓ Manage all users and roles</li>
                <li>✓ View system-wide analytics</li>
                <li>✓ Configure organizations</li>
                <li>✓ Export data and reports</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Right Panel - Form */}
      <div className="flex-1 flex flex-col justify-center p-8 md:p-16 overflow-y-auto">
        <Link to="/" className="inline-flex items-center gap-2 mb-8 hover:opacity-70 transition-opacity">
          <ArrowLeft className="h-5 w-5" />
          <span className="font-bold">Back to Home</span>
        </Link>

        <BrutalistBlock className="inline-block mb-8">
          <h1 className="text-3xl md:text-4xl font-bold">REGISTER</h1>
        </BrutalistBlock>

        {/* Role Selector */}
        <div className="flex gap-4 mb-8">
          <button
            type="button"
            onClick={() => setRole("teacher")}
            className={`flex-1 p-4 border-2 border-foreground font-bold uppercase tracking-wider transition-all ${
              role === "teacher"
                ? "bg-foreground text-background"
                : "bg-background text-foreground hover:bg-secondary"
            }`}
          >
            👩‍🏫 Teacher
          </button>
          <button
            type="button"
            onClick={() => setRole("admin")}
            className={`flex-1 p-4 border-2 border-foreground font-bold uppercase tracking-wider transition-all ${
              role === "admin"
                ? "bg-foreground text-background"
                : "bg-background text-foreground hover:bg-secondary"
            }`}
          >
            ⚙️ Admin
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5 max-w-md">
          <div>
            <label className="block text-sm font-bold uppercase tracking-wider mb-2">
              Full Name
            </label>
            <BrutalistInput
              type="text"
              placeholder="Jean Baptiste"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
            />
          </div>

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
              Phone Number
            </label>
            <BrutalistInput
              type="tel"
              placeholder="+250 788 000 000"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              required
            />
          </div>

          {role === "teacher" && (
            <div>
              <label className="block text-sm font-bold uppercase tracking-wider mb-2">
                Organization / School <BrutalistBadge className="ml-2">Optional</BrutalistBadge>
              </label>
              <BrutalistInput
                type="text"
                placeholder="Kigali Primary School"
                value={formData.organization}
                onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
              />
            </div>
          )}

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

          <div>
            <label className="block text-sm font-bold uppercase tracking-wider mb-2">
              Confirm Password
            </label>
            <BrutalistInput
              type="password"
              placeholder="••••••••"
              value={formData.confirmPassword}
              onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
              required
            />
          </div>

          <BrutalistButton type="submit" size="lg" className="w-full">
            Create Account
          </BrutalistButton>

          <p className="text-center text-sm">
            Already have an account?{" "}
            <Link to="/login" className="font-bold underline hover:opacity-70">
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
