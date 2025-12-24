import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, GraduationCap, Settings } from "lucide-react";

export default function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Login:", formData);
    navigate("/teacher");
  };

  return (
    <div className="min-h-screen flex">
      {/* Left Panel - Form */}
      <div className="flex-1 flex flex-col justify-center p-8 md:p-16 bg-muted/30">
        <div className="w-full max-w-md mx-auto">
          <Link to="/" className="inline-flex items-center gap-2 mb-8 text-muted-foreground hover:text-foreground transition-colors">
            <ArrowLeft className="h-4 w-4" />
            <span className="text-sm">Back to Home</span>
          </Link>

          <Card className="border-border shadow-lg">
            <CardHeader className="space-y-1">
              <CardTitle className="text-2xl">Welcome back</CardTitle>
              <CardDescription>
                Enter your credentials to access your dashboard
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
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
                  <div className="flex items-center justify-between">
                    <Label htmlFor="password">Password</Label>
                    <Link to="/forgot-password" className="text-sm text-primary hover:underline">
                      Forgot password?
                    </Link>
                  </div>
                  <Input
                    id="password"
                    type="password"
                    placeholder="••••••••"
                    value={formData.password}
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                    required
                  />
                </div>

                <Button type="submit" className="w-full">
                  Sign In
                </Button>

                <p className="text-center text-sm text-muted-foreground">
                  Don't have an account?{" "}
                  <Link to="/register" className="text-primary hover:underline font-medium">
                    Register
                  </Link>
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Right Panel - Decorative */}
      <div className="hidden lg:flex flex-1 bg-primary text-primary-foreground flex-col justify-center p-16">
        <div className="max-w-md">
          <h2 className="text-3xl font-bold mb-4">Welcome Back</h2>
          <p className="text-lg text-primary-foreground/80 mb-12">
            Access your dashboard to track student progress, manage classrooms, and view learning analytics.
          </p>

          <div className="space-y-4">
            <div className="bg-primary-foreground/10 backdrop-blur rounded-xl p-5 border border-primary-foreground/20">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-primary-foreground/20 rounded-lg flex items-center justify-center">
                  <GraduationCap className="h-5 w-5" />
                </div>
                <div>
                  <div className="font-semibold">Teacher Dashboard</div>
                  <div className="text-sm text-primary-foreground/70">Manage classrooms & students</div>
                </div>
              </div>
            </div>
            <div className="bg-primary-foreground/10 backdrop-blur rounded-xl p-5 border border-primary-foreground/20">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-primary-foreground/20 rounded-lg flex items-center justify-center">
                  <Settings className="h-5 w-5" />
                </div>
                <div>
                  <div className="font-semibold">Admin Dashboard</div>
                  <div className="text-sm text-primary-foreground/70">System-wide analytics & management</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
