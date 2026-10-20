import type { EducationEntry } from '../types';

export const education: EducationEntry[] = [
  {
    id: 'urbino-msc',
    degree: {
      en: 'MSc, Computer Science and Digital Innovation',
      it: 'Laurea Magistrale in Informatica e Innovazione Digitale',
      fr: 'Master, Informatique et Innovation Numérique',
    },
    org: 'Università degli Studi di Urbino Carlo Bo',
    location: 'Pesaro / Urbino, Italy',
    period: '2024 – 2026 (final year)',
    detail: {
      en: 'Coursework spans software engineering, distributed systems, cybersecurity and applied AI — the master\u2019s degree that moved me from general CS into building production-style systems.',
      it: 'Il percorso comprende ingegneria del software, sistemi distribuiti, cybersecurity e AI applicata — il percorso che mi ha portato da un\u2019informatica generale alla costruzione di sistemi in stile production.',
      fr: 'Le cursus couvre le génie logiciel, les systèmes distribués, la cybersécurité et l\u2019IA appliquée — le master qui m\u2019a fait passer d\u2019une informatique générale à la construction de systèmes proches de la production.',
    },
    topics: ['Software Engineering', 'Distributed Systems', 'Cybersecurity', 'Applied AI'],
  },
  {
    id: 'tunis-bachelor',
    degree: {
      en: 'Bachelor\u2019s Degree, Computer Science',
      it: 'Laurea Triennale in Informatica',
      fr: 'Licence, Informatique',
    },
    org: 'Faculté des Sciences de Tunis',
    location: 'Tunis, Tunisia',
    period: '2021 – 2024',
    detail: {
      en: 'Foundations in algorithms, data structures and software development, alongside part-time work in retail management.',
      it: 'Basi di algoritmi, strutture dati e sviluppo software, insieme a un lavoro part-time nella gestione retail.',
      fr: 'Fondamentaux en algorithmique, structures de données et développement logiciel, en parallèle d\u2019un travail à temps partiel en gestion de commerce.',
    },
    topics: ['Algorithms', 'Data Structures', 'Software Development'],
  },
];
