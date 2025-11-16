export const adminStatCards = [
  {
    id: "students",
    label: "Total Learners",
    value: "1,240",
    trend: "+4.2%",
    trendTone: "success" as const,
    trendA11y: "Up 4.2% versus last month",
  },
  {
    id: "attendance",
    label: "Attendance (30 days)",
    value: "95.8%",
    trend: "+1.1%",
    trendTone: "success" as const,
    trendA11y: "Up 1.1% versus last month",
  },
  {
    id: "marks",
    label: "Assessments Processed",
    value: "318",
    trend: "2 missed",
    trendTone: "warning" as const,
    trendA11y: "2 assessments pending validation",
  },
  {
    id: "communications",
    label: "Messages Delivered",
    value: "864",
    trend: "99.3% sent",
    trendTone: "success" as const,
    trendA11y: "99.3 percent of messages delivered",
  },
];

export const performanceLine = [
  { month: "Jan", value: 68 },
  { month: "Feb", value: 72 },
  { month: "Mar", value: 75 },
  { month: "Apr", value: 78 },
  { month: "May", value: 80 },
  { month: "Jun", value: 83 },
  { month: "Jul", value: 87 },
  { month: "Aug", value: 86 },
  { month: "Sep", value: 88 },
  { month: "Oct", value: 90 },
];

export const engagementBar = [
  { label: "Announcements", value: 80 },
  { label: "Assignments", value: 62 },
  { label: "Parent Replies", value: 54 },
  { label: "Acknowledgments", value: 72 },
];

export const studentRoster = [
  {
    id: "STU-0921",
    name: "Riya Sharma",
    grade: "Grade 10 - Batch B",
    attendance: 97,
    average: 88,
    guardian: "Anita Sharma",
    alerts: "✔",
  },
  {
    id: "STU-0834",
    name: "Arjun Patel",
    grade: "Grade 11 - Batch A",
    attendance: 92,
    average: 81,
    guardian: "Raj Patel",
    alerts: "✅",
  },
  {
    id: "STU-0770",
    name: "Sara Kapoor",
    grade: "Grade 9 - Batch C",
    attendance: 96,
    average: 93,
    guardian: "Manoj Kapoor",
    alerts: "⚠ Late fee",
  },
  {
    id: "STU-1022",
    name: "David Chen",
    grade: "Grade 12 - Batch A",
    attendance: 89,
    average: 86,
    guardian: "Wei Chen",
    alerts: "—",
  },
  {
    id: "STU-1056",
    name: "Lina Fernandes",
    grade: "Grade 10 - Batch A",
    attendance: 98,
    average: 91,
    guardian: "Ana Fernandes",
    alerts: "✔",
  },
];

export const teacherSchedule = [
  { time: "08:00", subject: "Physics", batch: "Grade 11 · Batch A", room: "Lab 03" },
  { time: "10:00", subject: "STEM Club", batch: "Grade 9 · Enrichment", room: "Innovation Hub" },
  { time: "12:00", subject: "Lunch & Duty", batch: "Campus", room: "Cafeteria" },
  { time: "13:30", subject: "Mentorship", batch: "Grade 12 · Scholar Track", room: "Room 401" },
];

export const marksTemplateColumns = [
  { key: "studentId", label: "Student ID", example: "STU-0921" },
  { key: "studentName", label: "Name", example: "Riya Sharma" },
  { key: "component", label: "Assessment Component", example: "Term 2 Physics" },
  { key: "score", label: "Score", example: "88" },
  { key: "max", label: "Max Score", example: "100" },
];

export const marksValidationResults = {
  validCount: 26,
  warnings: [
    {
      student: "Arjun Patel",
      issue: "Score exceeds max value, adjusted to 50",
      status: "Auto resolved",
    },
    {
      student: "Sara Kapoor",
      issue: "Missing guardian acknowledgement",
      status: "Requires follow-up",
    },
  ],
  errors: [
    {
      student: "David Chen",
      issue: "Student ID not found in batch roster",
      status: "Needs review",
    },
  ],
};

export const attendanceSessions = [
  {
    id: "MATH-202",
    time: "09:00 - 10:15",
    facilitator: "Ms. Priya Nair",
    batch: "Grade 10 · Batch B",
    location: "Room 205",
    present: 28,
    total: 30,
  },
  {
    id: "ENG-105",
    time: "10:30 - 11:45",
    facilitator: "Mr. Rahul Jain",
    batch: "Grade 10 · Batch A",
    location: "Room 208",
    present: 27,
    total: 29,
  },
  {
    id: "CHEM-LAB",
    time: "12:15 - 13:30",
    facilitator: "Dr. Fatima Syed",
    batch: "Grade 11 · Batch C",
    location: "Lab 04",
    present: 25,
    total: 28,
  },
];

export const attendanceCalendar: Array<{
  date: string;
  status: "present" | "late" | "excused" | "absent";
}> = [
  { date: "2025-03-01", status: "present" },
  { date: "2025-03-02", status: "present" },
  { date: "2025-03-03", status: "excused" },
  { date: "2025-03-04", status: "present" },
  { date: "2025-03-05", status: "present" },
  { date: "2025-03-06", status: "late" },
  { date: "2025-03-07", status: "present" },
  { date: "2025-03-08", status: "present" },
  { date: "2025-03-09", status: "present" },
  { date: "2025-03-10", status: "present" },
];

export const knowledgeSpace = [
  {
    id: "folder-curriculum",
    name: "Curriculum Maps",
    updated: "2 hours ago",
    items: 18,
    owner: "Academics Team",
  },
  {
    id: "folder-resources",
    name: "Learning Resources",
    updated: "Yesterday",
    items: 42,
    owner: "Library Admin",
  },
  {
    id: "folder-parent",
    name: "Parent Guides",
    updated: "3 days ago",
    items: 12,
    owner: "Community Office",
  },
];

export const notificationsFeed = [
  {
    id: "notif-1",
    title: "Term 2 assessments published",
    body: "Parents have been notified and student dashboards are updated with the latest performance summary.",
    time: "12 minutes ago",
    audience: "Parents · Grade 10",
    status: "Delivered",
  },
  {
    id: "notif-2",
    title: "STEM bootcamp registration closes tonight",
    body: "Final reminder for students to confirm participation in the regional STEM experience.",
    time: "1 hour ago",
    audience: "Students · Grades 9-12",
    status: "In progress",
  },
  {
    id: "notif-3",
    title: "Attendance alert: Arjun Patel",
    body: "Family has acknowledged yesterday's absence and shared a doctor's note.",
    time: "Yesterday",
    audience: "Parent · Patel Family",
    status: "Acknowledged",
  },
];

export const inboxMessages = [
  {
    id: "inbox-1",
    sender: "Anita Sharma",
    role: "Parent",
    subject: "Appreciation for the robotics showcase",
    received: "Today · 08:45",
    summary: "Thanking the team for the STEM night and requesting photos.",
  },
  {
    id: "inbox-2",
    sender: "Rahul Jain",
    role: "Teacher",
    subject: "Need projector maintenance",
    received: "Yesterday · 16:22",
    summary: "Projector in Room 208 flickers during presentations.",
  },
];

export const acknowledgmentsQueue = [
  {
    id: "ack-1",
    student: "Riya Sharma",
    parent: "Anita Sharma",
    item: "Term 2 Mathematics Score",
    status: "Awaiting confirmation",
    sent: "Today · 09:12",
  },
  {
    id: "ack-2",
    student: "David Chen",
    parent: "Wei Chen",
    item: "Attendance alert - 04 Mar",
    status: "Acknowledged",
    sent: "Yesterday · 13:48",
  },
];

export const relationshipMap = [
  {
    student: "Riya Sharma",
    id: "STU-0921",
    guardians: ["Anita Sharma", "Vikram Sharma"],
    cohorts: ["Grade 10 Batch B", "Robotics Club"],
    counselor: "Leena D'Souza",
  },
  {
    student: "Arjun Patel",
    id: "STU-0834",
    guardians: ["Raj Patel"],
    cohorts: ["Grade 11 Batch A", "Cricket Team"],
    counselor: "Joseph Singh",
  },
];

export const parentDashboardMetrics = [
  {
    label: "Attendance",
    value: "96%",
    helper: "3 excused absences · Last 30 days",
    tone: "success",
  },
  {
    label: "Academic Progress",
    value: "88%",
    helper: "Consistent · Last 4 assessments",
    tone: "brand",
  },
  {
    label: "Engagement",
    value: "12",
    helper: "New resources viewed this month",
    tone: "brand",
  },
];

export const studentTimeline = [
  { time: "Today", event: "Physics quiz score released · 18/20" },
  { time: "Yesterday", event: "Attendance marked present in Chemistry lab" },
  { time: "Mon, 10 Mar", event: "Robotics club prototype review uploaded" },
];

export const studentProfiles = [
  {
    id: "STU-0921",
    name: "Riya Sharma",
    cohort: "Grade 10 · Batch B",
    advisor: "Ms. Priya Nair",
    attendance: 97,
    mastery: 88,
    guardians: [
      { name: "Anita Sharma", relationship: "Mother", contact: "anita.sharma@example.com" },
      { name: "Vikram Sharma", relationship: "Father", contact: "vikram.sharma@example.com" },
    ],
    interventions: [
      { date: "Feb 14", summary: "STEM enrichment plan updated", status: "On track" },
      { date: "Jan 22", summary: "Math peer tutoring scheduled", status: "Completed" },
    ],
    materials: [
      { name: "Robotics prototype checklist", type: "PDF", updated: "3 days ago" },
      { name: "Physics lab journal", type: "Notebook", updated: "Yesterday" },
    ],
  },
];

export const courseCatalog = [
  {
    id: "COURSE-ENG10",
    name: "English Literature",
    coordinator: "Kavita Rao",
    batches: 3,
    learners: 96,
    compliance: "100% scope coverage",
  },
  {
    id: "COURSE-PHY11",
    name: "Physics Advanced",
    coordinator: "Rahul Jain",
    batches: 2,
    learners: 64,
    compliance: "95% labs completed",
  },
  {
    id: "COURSE-CS09",
    name: "Foundations of Computing",
    coordinator: "Ashwin Mehta",
    batches: 4,
    learners: 128,
    compliance: "Curriculum audit scheduled",
  },
];
