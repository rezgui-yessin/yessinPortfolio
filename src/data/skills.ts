import type { Skill } from '../types';

export const skills: Skill[] = [
  // Languages
  { name: 'Java', category: 'languages', icon: 'java', status: 'core' },
  { name: 'TypeScript', category: 'languages', icon: 'typescript', status: 'core' },
  { name: 'JavaScript', category: 'languages', icon: 'javascript', status: 'core' },
  { name: 'HTML5', category: 'languages', icon: 'html5', status: 'core' },
  { name: 'CSS3', category: 'languages', icon: 'css3', status: 'core' },
  { name: 'Python', category: 'languages', icon: 'python', status: 'working' },

  // Frontend
  { name: 'Angular', category: 'frontend', icon: 'angular', status: 'core' },
  { name: 'RxJS & Signals', category: 'frontend', icon: 'angular', status: 'core' },

  // Backend
  { name: 'Spring Boot', category: 'backend', icon: 'springboot', status: 'core' },
  { name: 'Spring Security', category: 'backend', icon: 'springsecurity', status: 'working' },
  { name: 'REST APIs', category: 'backend', icon: 'api', status: 'core' },

  // Data
  { name: 'PostgreSQL', category: 'data', icon: 'postgresql', status: 'core' },
  { name: 'MySQL', category: 'data', icon: 'mysql', status: 'working' },
  { name: 'MongoDB', category: 'data', icon: 'mongodb', status: 'working' },

  // DevOps
  { name: 'Docker', category: 'devops', icon: 'docker', status: 'core' },
  { name: 'Docker Compose', category: 'devops', icon: 'docker', status: 'core' },
  { name: 'GitHub Actions (CI/CD)', category: 'devops', icon: 'githubactions', status: 'core' },
  { name: 'Git', category: 'devops', icon: 'git', status: 'core' },

  // Security & identity
  { name: 'Keycloak', category: 'security', icon: 'keycloak', status: 'core' },
  { name: 'OAuth2 / JWT', category: 'security', icon: 'jwt', status: 'working' },

  // Tools & Methodologies
  { name: 'GitHub', category: 'tools', icon: 'github', status: 'core' },
  { name: 'Postman', category: 'tools', icon: 'postman', status: 'core' },
  { name: 'IntelliJ IDEA', category: 'tools', icon: 'intellij', status: 'core' },
  { name: 'Linux', category: 'tools', icon: 'linux', status: 'working' },
  { name: 'Scrum', category: 'tools', icon: 'scrum', status: 'core' },
  { name: 'Agile', category: 'tools', icon: 'agile', status: 'core' },
];
