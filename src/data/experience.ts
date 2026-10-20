import type { ExperienceEntry } from '../types';

export const experience: ExperienceEntry[] = [
  {
    id: 'sfectoria',
    role: {
      en: 'Full-Stack Developer Intern',
      it: 'Full-Stack Developer Intern',
      fr: 'Développeur Full-Stack (Stage)',
    },
    org: 'sfectoria',
    period: '2024',
    location: 'Remote',
    technologies: ['Angular', 'Java', 'Spring Boot'],
    points: [
      {
        en: 'Built front-end and back-end features for an e-learning platform used by real students and instructors.',
        it: 'Sviluppato funzionalità front-end e back-end per una piattaforma e-learning usata da studenti e docenti reali.',
        fr: 'Développé des fonctionnalités front-end et back-end pour une plateforme d\u2019e-learning utilisée par de vrais étudiants et formateurs.',
      },
      {
        en: 'Worked directly with a small team, which meant owning features end-to-end rather than a single layer.',
        it: 'Lavorato a stretto contatto con un piccolo team, il che ha significato gestire le funzionalità end-to-end e non un solo livello.',
        fr: 'Travaillé directement avec une petite équipe, ce qui impliquait de porter des fonctionnalités de bout en bout plutôt qu\u2019une seule couche.',
      },
    ],
  },
  {
    id: 'masterclass',
    role: {
      en: 'Web Developer — Summer Internship',
      it: 'Web Developer — Stage estivo',
      fr: 'Développeur Web — Stage d\u2019été',
    },
    org: 'MasterClass',
    period: '2023',
    location: 'Tunisia',
    technologies: ['Angular', 'Java', 'Spring Boot'],
    points: [
      {
        en: 'Contributed to an internal ERP application, building admin-facing screens over business data.',
        it: 'Contribuito a un\u2019applicazione ERP interna, sviluppando schermate amministrative su dati aziendali.',
        fr: 'Contribué à une application ERP interne, en développant des écrans d\u2019administration sur des données métier.',
      },
      {
        en: 'First real exposure to building software that has to survive contact with actual daily operations, not just a demo.',
        it: 'Prima vera esperienza nel costruire software che deve reggere l\u2019uso quotidiano reale, non solo una demo.',
        fr: 'Première vraie expérience de construction d\u2019un logiciel devant résister à l\u2019usage quotidien réel, pas seulement à une démo.',
      },
    ],
  },
];
