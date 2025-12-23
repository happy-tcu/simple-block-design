import {
  Student,
  Teacher,
  Classroom,
  LearningSession,
  Achievement,
  Organization,
  Analytics,
  LearningModule,
} from "@/types/bakame";

// Achievements with Kinyarwanda names
export const achievements: Achievement[] = [
  {
    id: "1",
    name_kinyarwanda: "Intangiriro",
    name_english: "Beginning",
    description: "Complete your first learning session",
    icon: "🌱",
    points_required: 0,
    level_required: 1,
  },
  {
    id: "2",
    name_kinyarwanda: "Umuhanga",
    name_english: "Scholar",
    description: "Complete 10 learning sessions",
    icon: "📚",
    points_required: 100,
    level_required: 3,
  },
  {
    id: "3",
    name_kinyarwanda: "Intwari",
    name_english: "Champion",
    description: "Achieve 90% accuracy in a session",
    icon: "🏆",
    points_required: 250,
    level_required: 5,
  },
  {
    id: "4",
    name_kinyarwanda: "Umunyamabanga",
    name_english: "Dedicated",
    description: "Maintain a 7-day learning streak",
    icon: "🔥",
    points_required: 500,
    level_required: 7,
  },
  {
    id: "5",
    name_kinyarwanda: "Umwami w'Ubumenyi",
    name_english: "Knowledge King",
    description: "Reach level 10",
    icon: "👑",
    points_required: 1000,
    level_required: 10,
  },
];

// Mock Students
export const mockStudents: Student[] = [
  {
    id: "s1",
    phone_number: "+250788000001",
    role: "student",
    preferred_language: "kinyarwanda",
    grade_level: "P4",
    current_level: 5,
    total_points: 450,
    streak_days: 7,
    created_at: "2024-01-15T10:00:00Z",
    updated_at: "2024-01-20T10:00:00Z",
  },
  {
    id: "s2",
    phone_number: "+250788000002",
    role: "student",
    preferred_language: "kinyarwanda",
    grade_level: "P4",
    current_level: 3,
    total_points: 280,
    streak_days: 3,
    created_at: "2024-01-16T10:00:00Z",
    updated_at: "2024-01-20T10:00:00Z",
  },
  {
    id: "s3",
    phone_number: "+250788000003",
    role: "student",
    preferred_language: "english",
    grade_level: "P5",
    current_level: 8,
    total_points: 920,
    streak_days: 14,
    created_at: "2024-01-10T10:00:00Z",
    updated_at: "2024-01-20T10:00:00Z",
  },
  {
    id: "s4",
    phone_number: "+250788000004",
    role: "student",
    preferred_language: "kinyarwanda",
    grade_level: "P3",
    current_level: 2,
    total_points: 120,
    streak_days: 1,
    created_at: "2024-01-18T10:00:00Z",
    updated_at: "2024-01-20T10:00:00Z",
  },
  {
    id: "s5",
    phone_number: "+250788000005",
    role: "student",
    preferred_language: "kinyarwanda",
    grade_level: "P4",
    current_level: 6,
    total_points: 580,
    streak_days: 5,
    created_at: "2024-01-12T10:00:00Z",
    updated_at: "2024-01-20T10:00:00Z",
  },
];

// Mock Classrooms
export const mockClassrooms: Classroom[] = [
  {
    id: "c1",
    name: "P4 Mathematics A",
    teacher_id: "t1",
    grade_level: "P4",
    subject: "mathematics",
    students: mockStudents.slice(0, 3),
    max_students: 30,
    created_at: "2024-01-10T10:00:00Z",
  },
  {
    id: "c2",
    name: "P4 English B",
    teacher_id: "t1",
    grade_level: "P4",
    subject: "english",
    students: mockStudents.slice(2, 5),
    max_students: 30,
    created_at: "2024-01-10T10:00:00Z",
  },
  {
    id: "c3",
    name: "P5 Reading",
    teacher_id: "t2",
    grade_level: "P5",
    subject: "reading",
    students: [mockStudents[2]],
    max_students: 30,
    created_at: "2024-01-11T10:00:00Z",
  },
];

// Mock Teachers
export const mockTeachers: Teacher[] = [
  {
    id: "t1",
    phone_number: "+250788100001",
    role: "teacher",
    preferred_language: "kinyarwanda",
    classrooms: mockClassrooms.slice(0, 2),
    created_at: "2024-01-05T10:00:00Z",
    updated_at: "2024-01-20T10:00:00Z",
  },
  {
    id: "t2",
    phone_number: "+250788100002",
    role: "teacher",
    preferred_language: "english",
    classrooms: [mockClassrooms[2]],
    created_at: "2024-01-06T10:00:00Z",
    updated_at: "2024-01-20T10:00:00Z",
  },
];

// Mock Sessions
export const mockSessions: LearningSession[] = [
  {
    id: "sess1",
    user_id: "s1",
    module: "mathematics",
    difficulty_level: 3,
    questions_asked: 10,
    correct_answers: 8,
    session_duration_seconds: 420,
    started_at: "2024-01-20T14:00:00Z",
    ended_at: "2024-01-20T14:07:00Z",
  },
  {
    id: "sess2",
    user_id: "s2",
    module: "english",
    difficulty_level: 2,
    questions_asked: 8,
    correct_answers: 6,
    session_duration_seconds: 360,
    started_at: "2024-01-20T15:00:00Z",
    ended_at: "2024-01-20T15:06:00Z",
  },
  {
    id: "sess3",
    user_id: "s3",
    module: "reading",
    difficulty_level: 4,
    questions_asked: 12,
    correct_answers: 11,
    session_duration_seconds: 540,
    started_at: "2024-01-20T16:00:00Z",
    ended_at: "2024-01-20T16:09:00Z",
  },
  {
    id: "sess4",
    user_id: "s1",
    module: "debate",
    difficulty_level: 3,
    questions_asked: 6,
    correct_answers: 5,
    session_duration_seconds: 480,
    started_at: "2024-01-19T14:00:00Z",
    ended_at: "2024-01-19T14:08:00Z",
  },
  {
    id: "sess5",
    user_id: "s4",
    module: "general",
    difficulty_level: 1,
    questions_asked: 10,
    correct_answers: 7,
    session_duration_seconds: 300,
    started_at: "2024-01-19T10:00:00Z",
    ended_at: "2024-01-19T10:05:00Z",
  },
];

// Mock Organizations
export const mockOrganizations: Organization[] = [
  {
    id: "org1",
    name: "Kigali Primary School Network",
    type: "school",
    teachers: mockTeachers,
    created_at: "2024-01-01T10:00:00Z",
  },
  {
    id: "org2",
    name: "Rwanda Education Initiative",
    type: "ngo",
    teachers: [],
    created_at: "2024-01-02T10:00:00Z",
  },
];

// Mock Analytics
export const mockAnalytics: Analytics = {
  total_sessions: 1247,
  unique_users: 342,
  average_accuracy: 78.5,
  average_session_duration: 420,
  module_breakdown: {
    mathematics: 450,
    english: 320,
    reading: 280,
    debate: 120,
    general: 77,
  },
  daily_active_users: [45, 52, 48, 61, 55, 42, 58, 67, 71, 63, 69, 74, 80, 85],
};

// Module descriptions
export const moduleDescriptions: Record<LearningModule, { title: string; description: string; icon: string }> = {
  mathematics: {
    title: "Imibare",
    description: "Master arithmetic, geometry, and problem-solving through voice-guided lessons",
    icon: "➕",
  },
  english: {
    title: "Icyongereza",
    description: "Build vocabulary, grammar, and conversation skills in English",
    icon: "🔤",
  },
  reading: {
    title: "Gusoma",
    description: "Develop reading comprehension with interactive stories and texts",
    icon: "📖",
  },
  debate: {
    title: "Impaka",
    description: "Practice critical thinking and argumentation skills",
    icon: "💬",
  },
  general: {
    title: "Ubumenyi Rusange",
    description: "Explore science, history, geography, and current events",
    icon: "🌍",
  },
};
