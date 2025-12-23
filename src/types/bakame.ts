// BAKAME Platform Types - Based on System Documentation

export type UserRole = "student" | "teacher" | "admin" | "super_admin";
export type LearningModule = "mathematics" | "english" | "reading" | "debate" | "general";
export type DifficultyLevel = 1 | 2 | 3 | 4 | 5;
export type GradeLevel = "P1" | "P2" | "P3" | "P4" | "P5" | "P6" | "S1" | "S2" | "S3";

export interface User {
  id: string;
  phone_number: string;
  role: UserRole;
  preferred_language: "kinyarwanda" | "english" | "french";
  grade_level?: GradeLevel;
  created_at: string;
  updated_at: string;
}

export interface Student extends User {
  role: "student";
  current_level: number;
  total_points: number;
  streak_days: number;
  teacher_id?: string;
  classroom_id?: string;
}

export interface Teacher extends User {
  role: "teacher";
  organization_id?: string;
  classrooms: Classroom[];
}

export interface Classroom {
  id: string;
  name: string;
  teacher_id: string;
  grade_level: GradeLevel;
  subject: LearningModule;
  students: Student[];
  max_students: number;
  created_at: string;
}

export interface LearningSession {
  id: string;
  user_id: string;
  module: LearningModule;
  difficulty_level: DifficultyLevel;
  questions_asked: number;
  correct_answers: number;
  session_duration_seconds: number;
  started_at: string;
  ended_at?: string;
}

export interface Achievement {
  id: string;
  name_kinyarwanda: string;
  name_english: string;
  description: string;
  icon: string;
  points_required: number;
  level_required: number;
}

export interface LearningGroup {
  id: string;
  name: string;
  description: string;
  members: Student[];
  created_by: string;
  created_at: string;
}

export interface Organization {
  id: string;
  name: string;
  type: "school" | "ngo" | "government";
  teachers: Teacher[];
  created_at: string;
}

export interface CurriculumStandard {
  id: string;
  grade_level: GradeLevel;
  subject: LearningModule;
  topic: string;
  learning_objectives: string[];
}

export interface Analytics {
  total_sessions: number;
  unique_users: number;
  average_accuracy: number;
  average_session_duration: number;
  module_breakdown: Record<LearningModule, number>;
  daily_active_users: number[];
}
