export type Role = 'student' | 'admin' | 'management' | null;

export enum IssueStatus {
  SUBMITTED = 'Submitted',
  IN_PROGRESS = 'In Progress',
  RESOLVED = 'Resolved',
  REJECTED = 'Rejected'
}

export enum IssuePriority {
  LOW = 'Low',
  MEDIUM = 'Medium',
  HIGH = 'High',
  CRITICAL = 'Critical'
}

export enum IssueCategory {
  ACADEMIC = 'Academic',
  FACILITIES = 'Facilities',
  ADMINISTRATIVE = 'Administrative',
  IT_SUPPORT = 'IT Support',
  OTHER = 'Other'
}

export enum Sentiment {
  POSITIVE = 'Positive',
  NEUTRAL = 'Neutral',
  NEGATIVE = 'Negative'
}

export interface Comment {
  id: string;
  issueId: string;
  author: string;
  authorRole: 'student' | 'admin';
  text: string;
  createdAt: string;
}

export interface Attachment {
  id: string;
  name: string;
  size: string;
  type: string;
  url: string; // mock data-uri or placeholder
}

export interface Issue {
  id: string;
  title: string;
  description: string;
  category: IssueCategory;
  rating: number; // 1-5
  status: IssueStatus;
  priority: IssuePriority;
  sentiment: Sentiment;
  submittedBy: string; // Student Name
  submittedAt: string; // ISO Date
  updatedAt: string; // ISO Date
  comments: Comment[];
  attachments: Attachment[];
}

export interface Stats {
  total: number;
  resolved: number;
  inProgress: number;
  pending: number;
}

export type ColorTheme = 'slate' | 'gray' | 'red' | 'orange' | 'amber' | 'yellow' | 'lime' | 'green' | 'emerald' | 'teal' | 'cyan' | 'sky' | 'blue' | 'indigo' | 'violet' | 'purple' | 'fuchsia' | 'pink' | 'rose';

export interface BadgeSettings {
  status: Record<IssueStatus, ColorTheme>;
  priority: Record<IssuePriority, ColorTheme>;
}

export type ToastType = 'success' | 'error' | 'info' | 'warning';

export interface Toast {
  id: string;
  message: string;
  type: ToastType;
  duration?: number;
}