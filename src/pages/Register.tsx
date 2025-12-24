import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Check } from "lucide-react";
import { cn } from "@/lib/utils";

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
    console.log("Register:", { role, ...formData });
    navigate("/login");
  };

  return (
    <div className="min-h-screen flex">
      {/* Left Panel - Decorative */}
      <div className="hidden lg:flex flex-1 bg-primary text-primary-foreground flex-col justify-center p-16">
        <div className="max-w-md">
          <h2 className="text-3xl font-bold mb-4">Join BAKAME</h2>
          <p className="text-lg text-primary-foreground/80 mb-12">
            Create an account to access powerful tools for managing education delivery.
          </p>

          <div className="space-y-6">
            <div className="bg-primary-foreground/10 backdrop-blur rounded-xl p-6 border border-primary-foreground/20">
              <h3 className="font-semibold mb-4">Teachers can:</h3>
              <ul className="space-y-3 text-sm text-primary-foreground/80">
                <li className="flex items-center gap-2"><Check className="h-4 w-4" /> Create and manage classrooms</li>
                <li className="flex items-center gap-2"><Check className="h-4 w-4" /> Enroll up to 30 students per class</li>
                <li className="flex items-center gap-2"><Check className="h-4 w-4" /> Track individual progress</li>
                <li className="flex items-center gap-2"><Check className="h-4 w-4" /> View performance analytics</li>
              </ul>
            </div>

            <div className="bg-primary-foreground/10 backdrop-blur rounded-xl p-6 border border-primary-foreground/20">
              <h3 className="font-semibold mb-4">Admins can:</h3>
              <ul className="space-y-3 text-sm text-primary-foreground/80">
                <li className="flex items-center gap-2"><Check className="h-4 w-4" /> Manage all users and roles</li>
                <li className="flex items-center gap-2"><Check className="h-4 w-4" /> View system-wide analytics</li>
                <li className="flex items-center gap-2"><Check className="h-4 w-4" /> Configure organizations</li>
                <li className="flex items-center gap-2"><Check className="h-4 w-4" /> Export data and reports</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Right Panel - Form */}
      <div className="flex-1 flex flex-col justify-center p-8 md:p-16 overflow-y-auto bg-muted/30">
        <div className="w-full max-w-md mx-auto">
          <Link to="/" className="inline-flex items-center gap-2 mb-8 text-muted-foreground hover:text-foreground transition-colors">
            <ArrowLeft className="h-4 w-4" />
            <span className="text-sm">Back to Home</span>
          </Link>

          <Card className="border-border shadow-lg">
            <CardHeader className="space-y-1">
              <CardTitle className="text-2xl">Create an account</CardTitle>
              <CardDescription>
                Choose your role and fill in your details
              </CardDescription>
            </CardHeader>
            <CardContent>
              {/* Role Selector */}
              <div className="grid grid-cols-2 gap-3 mb-6">
                <button
                  type="button"
                  onClick={() => setRole("teacher")}
                  className={cn(
                    "p-4 rounded-xl border-2 text-left transition-all",
                    role === "teacher"
                      ? "border-primary bg-primary/5"
                      : "border-border hover:border-primary/50"
                  )}
                >
                  <span className="text-2xl mb-2 block">👩‍🏫</span>
                  <span className="font-medium text-foreground">Teacher</span>
                </button>
                <button
                  type="button"
                  onClick={() => setRole("admin")}
                  className={cn(
                    "p-4 rounded-xl border-2 text-left transition-all",
                    role === "admin"
                      ? "border-primary bg-primary/5"
                      : "border-border hover:border-primary/50"
                  )}
                >
                  <span className="text-2xl mb-2 block">⚙️</span>
                  <span className="font-medium text-foreground">Admin</span>
                </button>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Jean Baptiste"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="+250 788 000 000"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    required
                  />
                </div>

                {role === "teacher" && (
                  <div className="space-y-2">
                    <Label htmlFor="organization" className="flex items-center gap-2">
                      Organization / School
                      <Badge variant="secondary" className="text-xs">Optional</Badge>
                    </Label>
                    <Input
                      id="organization"
                      type="text"
                      placeholder="Kigali Primary School"
                      value={formData.organization}
                      onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                    />
                  </div>
                )}

                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <Input
                    id="password"
                    type="password"
                    placeholder="••••••••"
                    value={formData.password}
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="confirmPassword">Confirm Password</Label>
                  <Input
                    id="confirmPassword"
                    type="password"
                    placeholder="••••••••"
                    value={formData.confirmPassword}
                    onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                    required
                  />
                </div>

                <Button type="submit" className="w-full">
                  Create Account
                </Button>

                <p className="text-center text-sm text-muted-foreground">
                  Already have an account?{" "}
                  <Link to="/login" className="text-primary hover:underline font-medium">
                    Login
                  </Link>
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
