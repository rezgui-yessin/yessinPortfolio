export const en = {
  nav: {
    home: 'Home',
    about: 'About',
    skills: 'Stack',
    certifications: 'Certifications',
    journey: 'Journey',
    projects: 'Projects',
    learning: 'Learning',
    contact: 'Contact',
    resume: 'Résumé',
  },
  hero: {
    eyebrow: 'Full-Stack & DevOps Engineer, Pesaro / Remote',
    title1: 'I build the systems',
    title2: 'behind the interface.',
    subtitle:
      'Final-year MSc student building production-style full-stack systems — Angular on the front, Spring Boot, Keycloak, and Kafka underneath, shipped with Docker and CI/CD.',
    cta1: 'See the work',
    cta2: 'Get in touch',
    cta3: 'Download résumé',
    diagramLabel: 'System I actually build',
  },
  about: {
    eyebrow: 'About',
    title: 'From the shop floor to the server room',
    p1: "I'm Yessin — a final-year MSc student in Computer Science and Digital Innovation at the University of Urbino Carlo Bo, based in Pesaro, Italy. Before software, I spent years in retail management and customer service in Tunisia, which is where I actually learned how systems fail: not in the code, but in the handoffs between people.",
    p2: 'That instinct shows up in how I build now — I care less about a framework being trendy and more about whether the auth flow, the data model, and the deploy pipeline hold up when someone other than me touches them.',
    cardsTitle: 'What I focus on',
    cards: [
      {
        title: 'Full-stack delivery',
        desc: 'Angular front ends wired to Spring Boot APIs, with a real auth story — not a mocked login screen.',
      },
      {
        title: 'Identity & access',
        desc: 'Keycloak-backed authentication and role-aware UIs, because most admin tools live or die on permissions.',
      },
      {
        title: 'Shippable by default',
        desc: 'Docker Compose for local parity, GitHub Actions for CI/CD — the boring plumbing done properly.',
      },
      {
        title: 'Multilingual by background',
        desc: 'Arabic, Italian, French and English — useful for European teams and for talking to actual users.',
      },
    ],
  },
  skills: {
    eyebrow: 'Stack',
    title: 'What I actually use',
    subtitle:
      "No padding. This is the stack I've shipped with, filterable by area — plus a separate section further down for what I'm currently learning.",
    filters: {
      all: 'All',
      languages: 'Languages',
      frontend: 'Frontend',
      backend: 'Backend',
      data: 'Data',
      devops: 'DevOps',
      security: 'Security & Identity',
      tools: 'Tools',
    },
    statusLabel: {
      core: 'Core',
      working: 'Working knowledge',
      learning: 'Learning',
    },
  },
  journey: {
    eyebrow: 'Journey',
    title: 'Education and experience, in order',
    subtitle: 'From core computer science in Tunis to enterprise-grade software and graduate studies in Italy.',
    filters: {
      all: 'All',
      study: 'Study',
      work: 'Work & Internship',
    },
  },
  experience: {
    title: 'Experience',
  },
  education: {
    title: 'Education',
  },
  projects: {
    eyebrow: 'Projects',
    title: 'Things I have actually built',
    subtitle:
      'Full-stack applications built with Angular and Spring Boot, featuring modern architectures, secure authentication, and scalable REST APIs.',
    filters: {
      all: 'All',
      technical: 'Technical Projects',
      internship: 'Internship Experience',
    },
    viewDetails: 'View details',
    backToProjects: 'Back to projects',
    technologies: 'Technologies',
    features: 'Features',
    problem: 'The problem',
    approach: 'The approach',
    status: 'Status',
    links: 'Links',
    noRepo: 'Repository link coming soon',
  },
  certifications: {
    eyebrow: 'Certifications',
    title: 'Verified credentials & training',
    subtitle:
      'Formal certifications completed with comprehensive hands-on practice in Docker, Spring Boot, Angular, and Java.',
    instructor: 'Instructor',
    verified: 'Verified Completion',
    viewPdf: 'View PDF',
    verify: 'Verify',
    preview: 'Preview',
    close: 'Close',
  },
  learning: {
    eyebrow: 'Currently learning',
    title: "What I'm learning next — and honestly, not shipping with yet",
    subtitle:
      "I'd rather tell you what I don't know yet than pad a skills list. These are active, not aspirational.",
  },
  contact: {
    eyebrow: 'Contact',
    title: "Let's talk about a junior role",
    subtitle:
      "I'm looking for Junior Full-Stack or Frontend Developer roles across Europe. If your team works in Angular, Spring Boot, or is open to someone who does, I'd like to hear from you.",
    email: 'Personal Email',
    academicEmail: 'Academic Email',
    phone: 'Phone & WhatsApp',
    linkedin: 'LinkedIn',
    github: 'GitHub',
    location: 'Based in Pesaro, Italy — open to remote and relocation',
    copy: 'Copy',
    copied: 'Copied!',
    formName: 'Name',
    formNamePlaceholder: 'Your name',
    formEmail: 'Email',
    formEmailPlaceholder: 'your.email@example.com',
    formMessage: 'Message',
    formMessagePlaceholder: 'Hi Yessin, let\u2019s connect regarding a full-stack / devops role...',
    send: 'Send Message',
    sending: 'Sending...',
    sentSuccess: 'Message sent! Thank you for reaching out.',
    sentError: 'Failed to send. Please reach out directly via email.',
    directLinks: 'Direct Channels',
  },
  cvModal: {
    title: 'Curriculum Vitae — Yessin Rezgui',
    download: 'Download PDF',
    close: 'Close',
  },
  footer: {
    tagline: 'Full-Stack & DevOps Engineer — Angular · Spring Boot · Keycloak · Kafka · Docker · CI/CD',
    rights: 'Built by Yessin Rezgui.',
    backToTop: 'Back to top',
  },
  theme: { dark: 'Dark', light: 'Light' },
  common: {
    inProgress: 'In progress',
    complete: 'Complete',
    technicalProject: 'Technical Project',
    internshipProject: 'Internship Experience',
  },
};

export type Dictionary = typeof en;
