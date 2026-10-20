import type { ExperienceEntry } from '../types';

export const experience: ExperienceEntry[] = [
  {
    id: 'sfectoria',
    role: {
      en: 'Bachelor Internship — Full-Stack Developer',
      it: 'Stage Triennale — Full-Stack Developer',
      fr: 'Stage de Licence — Développeur Full-Stack',
    },
    org: 'SFectoria',
    period: 'Feb 14, 2024 – Jun 12, 2024',
    location: 'Remote',
    technologies: ['Angular', 'Java', 'Spring Boot', 'REST APIs', 'WebSocket'],
    points: [
      {
        en: 'Developed and launched an interactive e-learning platform, integrating multimedia courses and a real-time chatroom for student collaboration.',
        it: 'Sviluppato e lanciato una piattaforma e-learning interattiva, con corsi multimediali e chatroom in tempo reale per la collaborazione tra studenti.',
        fr: 'Développement et lancement d’une plateforme d’e-learning interactive, intégrant cours multimédias et chatroom en direct pour la collaboration étudiante.',
      },
      {
        en: 'Built front-end and back-end features end-to-end, working directly with a dynamic team to deploy production modules.',
        it: 'Realizzato funzionalità front-end e back-end end-to-end, collaborando direttamente con un team dinamico per distribuire moduli in produzione.',
        fr: 'Conception de fonctionnalités front-end et back-end de bout en bout, en collaboration directe avec une équipe dynamique pour le déploiement en production.',
      },
    ],
  },
  {
    id: 'masterclass',
    role: {
      en: 'Summer Internship — Web Developer',
      it: 'Stage Estivo — Web Developer',
      fr: 'Stage d’Été — Développeur Web',
    },
    org: 'Master Class',
    period: 'Jun 6, 2023 – Aug 14, 2023',
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
