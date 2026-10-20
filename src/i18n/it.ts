import type { Dictionary } from './en';

export const it: Dictionary = {
  nav: {
    home: 'Home',
    about: 'Chi sono',
    skills: 'Competenze',
    journey: 'Percorso',
    projects: 'Progetti',
    learning: 'In apprendimento',
    contact: 'Contatti',
    resume: 'CV',
  },
  hero: {
    eyebrow: 'Full-Stack Engineer, Pesaro / Remoto',
    title1: 'Costruisco i sistemi',
    title2: 'dietro l\u2019interfaccia.',
    subtitle:
      'Studente magistrale al secondo anno, costruisco applicazioni full-stack in stile production — Angular in front-end, Spring Boot e Keycloak sotto, il tutto containerizzato con Docker e CI/CD.',
    cta1: 'Guarda i progetti',
    cta2: 'Contattami',
    cta3: 'Scarica il CV',
    diagramLabel: 'Il sistema che costruisco davvero',
  },
  about: {
    eyebrow: 'Chi sono',
    title: 'Dal negozio alla server room',
    p1: 'Sono Yessin — studente magistrale al secondo anno in Informatica e Innovazione Digitale all\u2019Università degli Studi di Urbino Carlo Bo, a Pesaro. Prima dell\u2019informatica ho lavorato per anni nel retail e nel customer service in Tunisia, ed è lì che ho davvero imparato dove i sistemi si rompono: non nel codice, ma nei passaggi tra le persone.',
    p2: 'Questo istinto si vede in come lavoro oggi — mi interessa meno che un framework sia di moda e più che il flusso di autenticazione, il modello dati e la pipeline di deploy reggano quando qualcun altro li tocca.',
    cardsTitle: 'Su cosa mi concentro',
    cards: [
      {
        title: 'Full-stack delivery',
        desc: 'Front-end Angular collegati ad API Spring Boot, con un\u2019autenticazione vera — non una schermata di login finta.',
      },
      {
        title: 'Identità e accessi',
        desc: 'Autenticazione basata su Keycloak e interfacce sensibili ai ruoli, perché la maggior parte degli strumenti admin vive o muore sui permessi.',
      },
      {
        title: 'Pronto per il deploy',
        desc: 'Docker Compose per la parità in locale, GitHub Actions per CI/CD — l\u2019infrastruttura noiosa fatta bene.',
      },
      {
        title: 'Multilingue per background',
        desc: 'Arabo, italiano, francese e inglese — utile per i team europei e per parlare con utenti reali.',
      },
    ],
  },
  skills: {
    eyebrow: 'Competenze',
    title: 'Cosa uso davvero',
    subtitle:
      'Senza gonfiare la lista. Questo è lo stack con cui ho lavorato, filtrabile per area — più una sezione a parte più in basso per ciò che sto imparando ora.',
    filters: {
      all: 'Tutto',
      languages: 'Linguaggi',
      frontend: 'Frontend',
      backend: 'Backend',
      data: 'Dati',
      devops: 'DevOps',
      security: 'Sicurezza & Identità',
      tools: 'Strumenti',
    },
    statusLabel: {
      core: 'Principale',
      working: 'Conoscenza operativa',
      learning: 'In apprendimento',
    },
  },
  journey: {
    eyebrow: 'Percorso',
    title: 'Formazione ed esperienza, in ordine',
    subtitle: 'Una linea diretta da un\u2019aula in Tunisia a pannelli admin Angular in stile enterprise.',
  },
  experience: { title: 'Esperienza' },
  education: { title: 'Formazione' },
  projects: {
    eyebrow: 'Progetti',
    title: 'Cose che ho davvero costruito',
    subtitle:
      'Un progetto principale a cui lavoro attivamente, più lavori accademici e personali che mostrano varietà. Niente qui è promessa vuota.',
    filters: {
      all: 'Tutti',
      flagship: 'Principale',
      academic: 'Accademico',
      personal: 'Personale',
    },
    viewDetails: 'Vedi dettagli',
    backToProjects: 'Torna ai progetti',
    technologies: 'Tecnologie',
    features: 'Funzionalità',
    problem: 'Il problema',
    approach: 'L\u2019approccio',
    status: 'Stato',
    links: 'Link',
    noRepo: 'Link al repository in arrivo',
  },
  learning: {
    eyebrow: 'Sto imparando',
    title: 'Cosa imparerò dopo — e onestamente, non ancora in produzione',
    subtitle:
      'Preferisco dirti cosa non so ancora piuttosto che gonfiare una lista di competenze. Questo è attivo, non aspirazionale.',
  },
  contact: {
    eyebrow: 'Contatti',
    title: 'Parliamo di un ruolo junior',
    subtitle:
      'Sto cercando ruoli da Junior Full-Stack o Frontend Developer in Europa. Se il tuo team lavora con Angular, Spring Boot, o è aperto a qualcuno che le impara, scrivimi.',
    email: 'Email',
    linkedin: 'LinkedIn',
    github: 'GitHub',
    location: 'Con base a Pesaro, Italia — disponibile per remoto e trasferimento',
  },
  footer: {
    tagline: 'Full-Stack Engineer — Angular · Spring Boot · Keycloak · Docker',
    rights: 'Realizzato da Yessin Rezgui.',
    backToTop: 'Torna su',
  },
  theme: { dark: 'Scuro', light: 'Chiaro' },
  common: {
    inProgress: 'In corso',
    complete: 'Completato',
    academicProject: 'Progetto accademico',
    personalProject: 'Progetto personale',
    flagshipProject: 'Progetto principale',
  },
};
