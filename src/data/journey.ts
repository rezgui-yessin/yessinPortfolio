import type { JourneyEntry } from '../types';

export const journey: JourneyEntry[] = [
  {
    id: 'retail',
    year: '2019',
    kind: 'work',
    title: {
      en: 'Retail management & customer service',
      it: 'Gestione retail e customer service',
      fr: 'Gestion retail et service client',
    },
    org: 'Zara Tunisia / Kiabi',
    detail: {
      en: 'Years before software — Section Manager and customer-facing roles in Tunisia. Where I first learned that systems fail at handoffs, not just in the logic.',
      it: 'Anni prima del software — ruoli come Section Manager e a contatto con i clienti in Tunisia. Dove ho imparato per la prima volta che i sistemi falliscono nei passaggi, non solo nella logica.',
      fr: 'Des années avant le logiciel — postes de responsable de rayon et en contact avec la clientèle en Tunisie. Là où j\u2019ai appris que les systèmes échouent aux transmissions, pas seulement dans la logique.',
    },
    tags: ['Retail', 'Customer Service'],
  },
  {
    id: 'tunis-bachelor',
    year: '2021 – 2024',
    kind: 'education',
    title: {
      en: 'Bachelor\u2019s in Computer Science',
      it: 'Laurea Triennale in Informatica',
      fr: 'Licence en Informatique',
    },
    org: 'Faculté des Sciences de Tunis',
    detail: {
      en: 'Algorithms, data structures and the fundamentals of software engineering.',
      it: 'Algoritmi, strutture dati e le basi dell\u2019ingegneria del software.',
      fr: 'Algorithmique, structures de données et fondamentaux du génie logiciel.',
    },
    tags: ['CS Fundamentals'],
  },
  {
    id: 'masterclass',
    year: '2023',
    kind: 'work',
    title: {
      en: 'Web Developer — Summer Internship',
      it: 'Web Developer — Stage estivo',
      fr: 'Développeur Web — Stage d\u2019été',
    },
    org: 'MasterClass',
    detail: {
      en: 'Built ERP screens with Angular and Spring Boot — first exposure to software running real daily operations.',
      it: 'Sviluppato schermate ERP con Angular e Spring Boot — prima esperienza con software che gestisce operazioni quotidiane reali.',
      fr: 'Développement d\u2019écrans ERP avec Angular et Spring Boot — première expérience avec un logiciel gérant de vraies opérations quotidiennes.',
    },
    tags: ['Angular', 'Spring Boot'],
  },
  {
    id: 'sfectoria',
    year: '2024',
    kind: 'work',
    title: {
      en: 'Full-Stack Developer Intern',
      it: 'Full-Stack Developer Intern',
      fr: 'Développeur Full-Stack (Stage)',
    },
    org: 'sfectoria',
    detail: {
      en: 'Owned features end-to-end on an e-learning platform, from UI to API.',
      it: 'Gestione end-to-end di funzionalità su una piattaforma e-learning, dall\u2019interfaccia alle API.',
      fr: 'Fonctionnalités gérées de bout en bout sur une plateforme d\u2019e-learning, de l\u2019interface aux API.',
    },
    tags: ['Angular', 'Java', 'Spring Boot'],
  },
  {
    id: 'urbino-msc',
    year: '2024',
    kind: 'education',
    title: {
      en: 'MSc, Computer Science & Digital Innovation',
      it: 'Magistrale in Informatica e Innovazione Digitale',
      fr: 'Master, Informatique et Innovation Numérique',
    },
    org: 'Università degli Studi di Urbino Carlo Bo',
    detail: {
      en: 'Moved to Italy to study software engineering, distributed systems, cybersecurity and applied AI.',
      it: 'Trasferimento in Italia per studiare ingegneria del software, sistemi distribuiti, cybersecurity e AI applicata.',
      fr: 'Déménagement en Italie pour étudier le génie logiciel, les systèmes distribués, la cybersécurité et l\u2019IA appliquée.',
    },
    tags: ['MSc'],
  },
  {
    id: 'shopsphere',
    year: '2025 – Present',
    kind: 'milestone',
    title: {
      en: 'Building ShopSphere',
      it: 'Sviluppo di ShopSphere',
      fr: 'Développement de ShopSphere',
    },
    org: 'Independent / Thesis-track',
    detail: {
      en: 'Designing and building a full-stack e-commerce admin platform end-to-end — Angular, Spring Boot, Keycloak, PostgreSQL, Docker, GitHub Actions.',
      it: 'Progettazione e sviluppo end-to-end di una piattaforma admin e-commerce full-stack — Angular, Spring Boot, Keycloak, PostgreSQL, Docker, GitHub Actions.',
      fr: 'Conception et développement de bout en bout d\u2019une plateforme d\u2019administration e-commerce full-stack — Angular, Spring Boot, Keycloak, PostgreSQL, Docker, GitHub Actions.',
    },
    tags: ['Angular', 'Spring Boot', 'Keycloak', 'Docker'],
  },
  {
    id: 'job-search',
    year: '2026',
    kind: 'milestone',
    title: {
      en: 'Final year — open to Junior roles',
      it: 'Ultimo anno — disponibile per ruoli Junior',
      fr: 'Dernière année — ouvert aux postes Junior',
    },
    org: 'Europe-wide search',
    detail: {
      en: 'Finishing the MSc while looking for a Junior Full-Stack or Frontend role where Angular and Spring Boot are a fit.',
      it: 'Concludo la magistrale mentre cerco un ruolo Junior Full-Stack o Frontend dove Angular e Spring Boot siano adatti.',
      fr: 'Fin du master tout en recherchant un poste Junior Full-Stack ou Frontend où Angular et Spring Boot sont pertinents.',
    },
    tags: ['Job Search'],
  },
];
