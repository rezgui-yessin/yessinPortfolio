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

export interface JourneyEntry {
  id: string;
  year: string;
  kind: 'education' | 'work' | 'milestone';
  title: LocalizedText;
  org: string;
  detail: LocalizedText;
  tags: string[];
}

export type ProjectKind = 'flagship' | 'academic' | 'personal';

export interface Project {
  id: string;
  kind: ProjectKind;
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
