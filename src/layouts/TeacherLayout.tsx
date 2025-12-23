import { Link, Outlet, useLocation } from "react-router-dom";
import { BrutalistBlock } from "@/components/ui/brutalist-card";
import { LayoutDashboard, Users, GraduationCap, BarChart3, UsersRound, Menu, X, LogOut } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

const navItems = [
  { title: "Overview", path: "/teacher", icon: LayoutDashboard },
  { title: "Classrooms", path: "/teacher/classrooms", icon: GraduationCap },
  { title: "Students", path: "/teacher/students", icon: Users },
  { title: "Performance", path: "/teacher/performance", icon: BarChart3 },
  { title: "Community", path: "/teacher/community", icon: UsersRound },
];

export default function TeacherLayout() {
  const location = useLocation();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen flex">
      {/* Sidebar */}
      <aside className={cn(
        "fixed inset-y-0 left-0 z-50 w-64 bg-background border-r-2 border-foreground transform transition-transform lg:relative lg:translate-x-0",
        sidebarOpen ? "translate-x-0" : "-translate-x-full"
      )}>
        <div className="flex flex-col h-full">
          <div className="p-4 border-b-2 border-foreground flex items-center justify-between">
            <Link to="/">
              <BrutalistBlock size="sm" className="text-lg font-bold">BAKAME</BrutalistBlock>
            </Link>
            <button onClick={() => setSidebarOpen(false)} className="lg:hidden p-2">
              <X className="h-5 w-5" />
            </button>
          </div>
          
          <nav className="flex-1 p-4 space-y-2">
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
                      ? "bg-foreground text-background border-foreground"
                      : "bg-background text-foreground border-foreground hover:bg-secondary"
                  )}
                >
                  <item.icon className="h-5 w-5" />
                  {item.title}
                </Link>
              );
            })}
          </nav>

          <div className="p-4 border-t-2 border-foreground">
            <Link to="/login" className="flex items-center gap-3 px-4 py-3 font-bold uppercase text-sm tracking-wider border-2 border-foreground hover:bg-secondary">
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
          <span className="font-bold">Teacher Dashboard</span>
        </header>
        <main className="flex-1 p-4 md:p-8 overflow-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
