import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Pages
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ForgotPassword from "./pages/ForgotPassword";
import NotFound from "./pages/NotFound";

// Teacher Pages
import TeacherOverview from "./pages/teacher/Overview";
import TeacherClassrooms from "./pages/teacher/Classrooms";
import TeacherStudents from "./pages/teacher/Students";
import TeacherPerformance from "./pages/teacher/Performance";
import TeacherCommunity from "./pages/teacher/Community";

// Admin Pages
import AdminOverview from "./pages/admin/Overview";
import AdminUsers from "./pages/admin/Users";
import AdminSessions from "./pages/admin/Sessions";
import AdminAnalytics from "./pages/admin/Analytics";
import AdminTeachers from "./pages/admin/Teachers";
import AdminOrganizations from "./pages/admin/Organizations";
import AdminCurriculum from "./pages/admin/Curriculum";
import AdminExport from "./pages/admin/Export";

// Layouts
import TeacherLayout from "./layouts/TeacherLayout";
import AdminLayout from "./layouts/AdminLayout";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />

          {/* Teacher Dashboard */}
          <Route path="/teacher" element={<TeacherLayout />}>
            <Route index element={<TeacherOverview />} />
            <Route path="classrooms" element={<TeacherClassrooms />} />
            <Route path="students" element={<TeacherStudents />} />
            <Route path="performance" element={<TeacherPerformance />} />
            <Route path="community" element={<TeacherCommunity />} />
          </Route>

          {/* Admin Dashboard */}
          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<AdminOverview />} />
            <Route path="users" element={<AdminUsers />} />
            <Route path="sessions" element={<AdminSessions />} />
            <Route path="analytics" element={<AdminAnalytics />} />
            <Route path="teachers" element={<AdminTeachers />} />
            <Route path="organizations" element={<AdminOrganizations />} />
            <Route path="curriculum" element={<AdminCurriculum />} />
            <Route path="export" element={<AdminExport />} />
          </Route>

          {/* 404 */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
