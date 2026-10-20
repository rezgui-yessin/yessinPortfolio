import type { JourneyEntry } from '../types';

export const journey: JourneyEntry[] = [
  {
    id: 'tunis-bachelor',
    year: '2021 – 2024',
    kind: 'study',
    title: {
      en: "Bachelor's Degree in Computer Science",
      it: 'Laurea Triennale in Informatica',
      fr: 'Licence en Informatique',
    },
    org: 'Faculté des Sciences de Tunis (FST)',
    detail: {
      en: 'Specialized in Software Engineering. Comprehensive grounding in algorithms, data structures, object-oriented programming, database management, and full-stack software architecture.',
      it: 'Specializzazione in Ingegneria del Software. Basi approfondite di algoritmi, strutture dati, programmazione ad oggetti, gestione database e architetture software full-stack.',
      fr: 'Spécialisation en Génie Logiciel. Solides bases en algorithmique, structures de données, programmation orientée objet, bases de données et conception logicielle full-stack.',
    },
    tags: ['CS Fundamentals', 'Algorithms', 'Data Structures', 'OOP', 'FST'],
  },
  {
    id: 'masterclass',
    year: 'June 2023 – August 2023',
    kind: 'work',
    title: {
      en: 'Web Developer — Summer Internship',
      it: 'Web Developer — Stage Estivo',
      fr: 'Développeur Web — Stage d’Été',
    },
    org: 'Master Class',
    detail: {
      en: 'Developed an enterprise Employee Management System (ERP). Engineered reactive frontend modules with Angular and resilient REST APIs with Spring Boot and MySQL for HR daily workflows.',
      it: 'Sviluppo di un sistema ERP di gestione del personale. Progettazione di moduli frontend reattivi con Angular e API REST scalabili con Spring Boot e MySQL per le operazioni HR quotidiane.',
      fr: 'Développement d’un système ERP de gestion des employés. Réalisation de modules frontend réactifs avec Angular et d’API REST évolutives avec Spring Boot et MySQL pour la gestion RH quotidienne.',
    },
    tags: ['Angular', 'Spring Boot', 'MySQL', 'REST API', 'Internship'],
  },
  {
    id: 'sfectoria',
    year: 'February 2024 – June 2024',
    kind: 'work',
    title: {
      en: 'Full-Stack Developer Intern — Graduation Project (PFE)',
      it: 'Full-Stack Developer Intern — Tirocinio di Laurea (PFE)',
      fr: 'Développeur Full-Stack — Projet de Fin d’Études (PFE)',
    },
    org: 'SFectoria',
    detail: {
      en: 'End-to-end engineering of an interactive e-learning platform. Integrated multimedia courses, course management, student progress tracking, and real-time collaboration with WebSockets, Angular, and Spring Boot.',
      it: 'Sviluppo end-to-end di una piattaforma e-learning interattiva. Integrazione di corsi multimediali, monitoraggio progressi e chatroom collaborativa in tempo reale con WebSocket, Angular e Spring Boot.',
      fr: 'Conception et développement complets d’une plateforme d’e-learning interactive. Intégration de cours multimédias, suivi des étudiants et salon de discussion collaboratif en temps réel avec WebSockets, Angular et Spring Boot.',
    },
    tags: ['Angular', 'Java', 'Spring Boot', 'WebSocket', 'Graduation Project'],
  },
  {
    id: 'urbino-msc',
    year: 'October 2024 – Present',
    kind: 'study',
    title: {
      en: 'Master’s in Computer Science & Digital Innovation',
      it: 'Laurea Magistrale in Informatica e Innovazione Digitale',
      fr: 'Master en Informatique et Innovation Numérique',
    },
    org: 'Università degli Studi di Urbino Carlo Bo',
    detail: {
      en: 'Advanced graduate studies in distributed systems, high-performance software engineering, cybersecurity, enterprise cloud architecture, and applied artificial intelligence in Italy.',
      it: 'Studi universitari avanzati su sistemi distribuiti, ingegneria del software ad alte prestazioni, sicurezza informatica, architetture cloud aziendali e intelligenza artificiale applicata in Italia.',
      fr: 'Études supérieures approfondies en systèmes distribués, génie logiciel haute performance, cybersécurité, architectures cloud d’entreprise et intelligence artificielle appliquée en Italie.',
    },
    tags: ['MSc', 'Distributed Systems', 'Software Engineering', 'Italy'],
  },
];
