import { Link, Outlet, useLocation } from "react-router-dom";
import { LayoutDashboard, Users, Activity, BarChart3, GraduationCap, Building2, BookOpen, Download, Menu, X, LogOut } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const navItems = [
  { title: "Overview", path: "/admin", icon: LayoutDashboard },
  { title: "Users", path: "/admin/users", icon: Users },
  { title: "Sessions", path: "/admin/sessions", icon: Activity },
  { title: "Analytics", path: "/admin/analytics", icon: BarChart3 },
  { title: "Teachers", path: "/admin/teachers", icon: GraduationCap },
  { title: "Organizations", path: "/admin/organizations", icon: Building2 },
  { title: "Curriculum", path: "/admin/curriculum", icon: BookOpen },
  { title: "Export", path: "/admin/export", icon: Download },
];

export default function AdminLayout() {
  const location = useLocation();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen flex bg-muted/30">
      {/* Sidebar */}
      <aside className={cn(
        "fixed inset-y-0 left-0 z-50 w-64 bg-primary text-primary-foreground transform transition-transform lg:relative lg:translate-x-0 shadow-lg",
        sidebarOpen ? "translate-x-0" : "-translate-x-full"
      )}>
        <div className="flex flex-col h-full">
          <div className="p-6 border-b border-primary-foreground/20 flex items-center justify-between">
            <Link to="/" className="text-xl font-bold">
              BAKAME
            </Link>
            <button onClick={() => setSidebarOpen(false)} className="lg:hidden p-2 rounded-lg hover:bg-primary-foreground/10">
              <X className="h-5 w-5" />
            </button>
          </div>
          
          <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setSidebarOpen(false)}
                  className={cn(
                    "flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all",
                    isActive
                      ? "bg-primary-foreground text-primary shadow-md"
                      : "text-primary-foreground/70 hover:bg-primary-foreground/10 hover:text-primary-foreground"
                  )}
                >
                  <item.icon className="h-5 w-5" />
                  {item.title}
                </Link>
              );
            })}
          </nav>

          <div className="p-4 border-t border-primary-foreground/20">
            <Link to="/login">
              <Button variant="ghost" className="w-full justify-start gap-3 text-primary-foreground/70 hover:text-primary-foreground hover:bg-primary-foreground/10">
                <LogOut className="h-5 w-5" />
                Logout
              </Button>
            </Link>
          </div>
        </div>
      </aside>

      {/* Overlay */}
      {sidebarOpen && (
        <div className="fixed inset-0 bg-foreground/20 backdrop-blur-sm z-40 lg:hidden" onClick={() => setSidebarOpen(false)} />
      )}

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-h-screen">
        <header className="bg-card border-b border-border p-4 flex items-center gap-4 lg:hidden shadow-sm">
          <button onClick={() => setSidebarOpen(true)} className="p-2 rounded-lg hover:bg-muted">
            <Menu className="h-5 w-5" />
          </button>
          <span className="font-semibold text-foreground">Admin Dashboard</span>
        </header>
        <main className="flex-1 p-4 md:p-8 overflow-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
