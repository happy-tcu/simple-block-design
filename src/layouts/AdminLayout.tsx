import { Link, Outlet, useLocation } from "react-router-dom";
import { BrutalistBlock } from "@/components/ui/brutalist-card";
import { LayoutDashboard, Users, Activity, BarChart3, GraduationCap, Building2, BookOpen, Download, Menu, X, LogOut } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

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
    <div className="min-h-screen flex">
      {/* Sidebar */}
      <aside className={cn(
        "fixed inset-y-0 left-0 z-50 w-64 bg-foreground text-background border-r-2 border-foreground transform transition-transform lg:relative lg:translate-x-0",
        sidebarOpen ? "translate-x-0" : "-translate-x-full"
      )}>
        <div className="flex flex-col h-full">
          <div className="p-4 border-b-2 border-background flex items-center justify-between">
            <Link to="/">
              <div className="bg-background text-foreground px-3 py-1 text-lg font-bold">BAKAME</div>
            </Link>
            <button onClick={() => setSidebarOpen(false)} className="lg:hidden p-2">
              <X className="h-5 w-5" />
            </button>
          </div>
          
          <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setSidebarOpen(false)}
                  className={cn(
                    "flex items-center gap-3 px-4 py-3 font-bold uppercase text-sm tracking-wider border-2 transition-all",
                    isActive
                      ? "bg-background text-foreground border-background"
                      : "bg-foreground text-background border-background hover:bg-background/10"
                  )}
                >
                  <item.icon className="h-5 w-5" />
                  {item.title}
                </Link>
              );
            })}
          </nav>

          <div className="p-4 border-t-2 border-background">
            <Link to="/login" className="flex items-center gap-3 px-4 py-3 font-bold uppercase text-sm tracking-wider border-2 border-background hover:bg-background/10">
              <LogOut className="h-5 w-5" />
              Logout
            </Link>
          </div>
        </div>
      </aside>

      {/* Overlay */}
      {sidebarOpen && (
        <div className="fixed inset-0 bg-foreground/50 z-40 lg:hidden" onClick={() => setSidebarOpen(false)} />
      )}

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-h-screen">
        <header className="border-b-2 border-foreground p-4 flex items-center gap-4 lg:hidden">
          <button onClick={() => setSidebarOpen(true)} className="p-2 border-2 border-foreground">
            <Menu className="h-5 w-5" />
          </button>
          <span className="font-bold">Admin Dashboard</span>
        </header>
        <main className="flex-1 p-4 md:p-8 overflow-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
