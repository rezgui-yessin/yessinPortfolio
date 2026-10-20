import type { LearningItem } from '../types';

export const learningItems: LearningItem[] = [
  {
    name: 'Kubernetes',
    icon: 'kubernetes',
    detail: {
      en: 'Working through container orchestration concepts beyond what Docker Compose covers — not used in a real deployment yet.',
      it: 'Sto approfondendo l\u2019orchestrazione dei container oltre a Docker Compose — non ancora usato in un deploy reale.',
      fr: 'J\u2019explore l\u2019orchestration de conteneurs au-delà de Docker Compose — pas encore utilisé en déploiement réel.',
    },
  },
  {
    name: 'Cloud platforms (AWS / Azure)',
    icon: 'cloud',
    detail: {
      en: 'Getting hands-on with core services on AWS and Azure to understand deployment beyond a single VM or PaaS.',
      it: 'Mi sto esercitando con i servizi principali di AWS e Azure per capire il deploy oltre una singola VM o PaaS.',
      fr: 'Je me familiarise avec les services de base d\u2019AWS et Azure pour comprendre le déploiement au-delà d\u2019une simple VM ou PaaS.',
    },
  },
  {
    name: 'Microservices at scale',
    icon: 'java',
    detail: {
      en: 'My e-commerce store is a modular monolith today; studying how the same domains would split into services with an API gateway and messaging.',
      it: 'Il mio e-commerce oggi è un monolite modulare; sto studiando come suddividere gli stessi domini in servizi con un API gateway e messaggistica.',
      fr: 'Mon store e-commerce est aujourd’hui un monolithe modulaire ; j’étudie comment ces domaines se diviseraient en services avec une passerelle API et de la messagerie.',
    },
  },
];
