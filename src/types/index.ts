export type Lang = 'en' | 'it' | 'fr';

export type LocalizedText = {
  en: string;
  it: string;
  fr: string;
};

export type SkillStatus = 'core' | 'working' | 'learning';

export interface Skill {
  name: string;
  category: SkillCategory;
  icon: string; // react-icons key, resolved in a map
  status: SkillStatus;
  note?: LocalizedText;
}

export type SkillCategory =
  | 'languages'
  | 'frontend'
  | 'backend'
  | 'data'
  | 'devops'
  | 'security'
  | 'tools';

export type JourneyKind = 'study' | 'work';

export interface JourneyEntry {
  id: string;
  year: string;
  kind: JourneyKind;
  title: LocalizedText;
  org: string;
  detail: LocalizedText;
  tags: string[];
}

export type ProjectKind = 'technical' | 'internship';

export interface Project {
  id: string;
  kind: ProjectKind;
  origins?: ('technical' | 'internship')[];
  title: string;
  tagline: LocalizedText;
  summary: LocalizedText;
  problem?: LocalizedText;
  approach?: LocalizedText;
  technologies: string[];
  features: LocalizedText[];
  status: LocalizedText;
  github?: string;
  demo?: string;
  architecture?: string[];
  company?: string;
}

export interface ExperienceEntry {
  id: string;
  role: LocalizedText;
  org: string;
  period: string;
  location: string;
  technologies: string[];
  points: LocalizedText[];
}

export interface EducationEntry {
  id: string;
  degree: LocalizedText;
  org: string;
  location: string;
  period: string;
  detail: LocalizedText;
  topics: string[];
}

export interface LearningItem {
  name: string;
  icon: string;
  detail: LocalizedText;
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  instructor?: string;
  date: string;
  detail: LocalizedText;
  skills: string[];
  icon: string;
  image?: string;
  pdfUrl?: string;
  credentialUrl?: string;
}
