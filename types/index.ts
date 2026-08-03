export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: 'AI/ML' | 'Backend' | 'Full Stack' | 'Computer Vision' | 'Systems';
  description: string;
  problem: string;
  solution: string;
  architecture: string[];
  features: string[];
  challenges: string[];
  techStack: string[];
  image: string;
  githubUrl: string;
  liveUrl?: string;
  featured: boolean;
  metrics?: { label: string; value: string }[];
}

export interface SkillCategory {
  title: string;
  iconName: string;
  skills: {
    name: string;
    level: 'Advanced' | 'Intermediate' | 'Proficient' | 'Learning';
    highlight?: boolean;
    icon?: string;
  }[];
}

export interface EducationItem {
  institution: string;
  degree: string;
  major: string;
  gpa: string;
  duration: string;
  location: string;
  coursework: string[];
  highlights: string[];
}

export interface ExperienceItem {
  role: string;
  company: string;
  type: string;
  duration: string;
  location: string;
  description: string;
  bullets: string[];
  skillsUsed: string[];
  disclaimer?: string;
}

export interface Certification {
  title: string;
  issuer: string;
  date: string;
  credentialId?: string;
  verifyUrl?: string;
  skills: string[];
  icon: string;
}

export interface TimelineItem {
  year: string;
  title: string;
  organization: string;
  category: 'Education' | 'Project' | 'Certification' | 'Learning';
  description: string;
  tags: string[];
}

export interface CurrentLearningItem {
  topic: string;
  description: string;
  focusAreas: string[];
  status: 'In Progress' | 'Exploring' | 'Deep Dive';
  icon: string;
}
