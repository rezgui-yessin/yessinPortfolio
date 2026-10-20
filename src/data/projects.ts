import type { Project } from '../types';

export const projects: Project[] = [
  {
    id: 'shopsphere',
    kind: 'flagship',
    title: 'ShopSphere',
    tagline: {
      en: 'A full-stack e-commerce admin platform, built end-to-end',
      it: 'Una piattaforma admin e-commerce full-stack, costruita end-to-end',
      fr: 'Une plateforme d\u2019administration e-commerce full-stack, construite de bout en bout',
    },
    summary: {
      en: 'ShopSphere is my main project right now: an admin platform for running an e-commerce store — products, orders, roles and dashboards — with a proper identity layer instead of a hard-coded login. It\u2019s the project I use to prove I can own a system beyond the tutorial stage.',
      it: 'ShopSphere è il mio progetto principale attuale: una piattaforma admin per gestire un e-commerce — prodotti, ordini, ruoli e dashboard — con un vero livello di identità invece di un login hard-coded. È il progetto con cui dimostro di saper gestire un sistema oltre lo stadio da tutorial.',
      fr: 'ShopSphere est mon projet principal actuel : une plateforme d\u2019administration pour gérer un e-commerce — produits, commandes, rôles et tableaux de bord — avec une vraie couche d\u2019identité plutôt qu\u2019un login codé en dur. C\u2019est le projet qui prouve que je peux porter un système au-delà du stade tutoriel.',
    },
    problem: {
      en: 'Most student e-commerce projects fake authentication and skip authorization entirely, which means they can\u2019t actually model who is allowed to do what — the part that matters most in a real admin tool.',
      it: 'La maggior parte dei progetti e-commerce da studente finge l\u2019autenticazione e salta del tutto l\u2019autorizzazione, quindi non riesce a modellare davvero chi può fare cosa — la parte più importante in uno strumento admin reale.',
      fr: 'La plupart des projets e-commerce étudiants simulent l\u2019authentification et sautent complètement l\u2019autorisation, donc ils ne modélisent jamais vraiment qui a le droit de faire quoi — la partie la plus importante dans un vrai outil admin.',
    },
    approach: {
      en: 'Keycloak handles identity and issues roles that the Angular shell reads to render a role-aware UI, while Spring Boot enforces the same roles server-side so the frontend can\u2019t be trusted alone. Everything runs in Docker for local parity, with GitHub Actions running the build on every push.',
      it: 'Keycloak gestisce l\u2019identità ed emette i ruoli che la shell Angular legge per mostrare un\u2019interfaccia sensibile ai ruoli, mentre Spring Boot applica gli stessi ruoli lato server, così il frontend da solo non basta. Tutto gira in Docker per la parità in locale, con GitHub Actions che esegue la build a ogni push.',
      fr: 'Keycloak gère l\u2019identité et émet les rôles que la coquille Angular lit pour afficher une interface sensible aux rôles, tandis que Spring Boot applique les mêmes rôles côté serveur afin que le frontend seul ne suffise pas. Tout tourne dans Docker pour la parité en local, avec GitHub Actions exécutant le build à chaque push.',
    },
    technologies: ['Angular', 'Spring Boot', 'Keycloak', 'PostgreSQL', 'Docker', 'GitHub Actions'],
    features: [
      {
        en: 'Signal-based Angular auth service backed by Keycloak, with role-aware routing and UI',
        it: 'Servizio di autenticazione Angular basato su signal e Keycloak, con routing e UI sensibili ai ruoli',
        fr: 'Service d\u2019authentification Angular basé sur les signals et Keycloak, avec routage et UI sensibles aux rôles',
      },
      {
        en: 'Dashboard shell with sidebar/topnav and stat cards',
        it: 'Shell della dashboard con sidebar/topnav e stat card',
        fr: 'Coquille de tableau de bord avec barre latérale/topnav et cartes de statistiques',
      },
      {
        en: 'Full Products module: CRUD, filtering, sorting, CSV export and pagination',
        it: 'Modulo Prodotti completo: CRUD, filtri, ordinamento, esportazione CSV e paginazione',
        fr: 'Module Produits complet : CRUD, filtrage, tri, export CSV et pagination',
      },
      {
        en: 'Orders module and Spring Boot backend — actively being built',
        it: 'Modulo Ordini e backend Spring Boot — attualmente in costruzione',
        fr: 'Module Commandes et backend Spring Boot — en cours de développement',
      },
    ],
    status: {
      en: 'In progress — frontend (auth, shell, dashboard, Products module) is built; Orders module and backend are the current focus.',
      it: 'In corso — il frontend (auth, shell, dashboard, modulo Prodotti) è costruito; modulo Ordini e backend sono il focus attuale.',
      fr: 'En cours — le frontend (auth, coquille, tableau de bord, module Produits) est construit ; le module Commandes et le backend sont le focus actuel.',
    },
    architecture: ['Angular 18 (Client)', 'Keycloak (Identity)', 'Spring Boot (API)', 'PostgreSQL (Data)', 'Docker / GitHub Actions'],
  },
  {
    id: 'security-study-tools',
    kind: 'academic',
    title: 'Cybersecurity Study Tools',
    tagline: {
      en: 'Interactive study material for a cryptography oral exam',
      it: 'Materiale di studio interattivo per un esame orale di crittografia',
      fr: 'Matériel d\u2019étude interactif pour un examen oral de cryptographie',
    },
    summary: {
      en: 'A small set of self-built study tools for a cybersecurity exam — an interactive HTML flashcard app covering symmetric cryptography, MACs, public-key cryptography and identification protocols like Schnorr, Sigma and Fiat-Shamir.',
      it: 'Un piccolo set di strumenti di studio autocostruiti per un esame di cybersecurity — un\u2019app di flashcard interattiva in HTML su crittografia simmetrica, MAC, crittografia a chiave pubblica e protocolli di identificazione come Schnorr, Sigma e Fiat-Shamir.',
      fr: 'Un petit ensemble d\u2019outils d\u2019étude que j\u2019ai construits pour un examen de cybersécurité — une application de flashcards interactive en HTML couvrant la cryptographie symétrique, les MAC, la cryptographie à clé publique et des protocoles d\u2019identification comme Schnorr, Sigma et Fiat-Shamir.',
    },
    technologies: ['HTML', 'CSS', 'JavaScript'],
    features: [
      {
        en: 'Interactive flashcard app for spaced review of exam topics',
        it: 'App di flashcard interattiva per la revisione a ripetizione dei temi d\u2019esame',
        fr: 'Application de flashcards interactive pour la révision espacée des sujets d\u2019examen',
      },
      {
        en: 'Structured Q&A notes covering identification protocols (Schnorr, Sigma, Fiat-Shamir, AKE)',
        it: 'Note strutturate a domande e risposte sui protocolli di identificazione (Schnorr, Sigma, Fiat-Shamir, AKE)',
        fr: 'Notes structurées en questions-réponses sur les protocoles d\u2019identification (Schnorr, Sigma, Fiat-Shamir, AKE)',
      },
    ],
    status: {
      en: 'Complete — used to prepare for and pass the exam.',
      it: 'Completato — usato per prepararsi e superare l\u2019esame.',
      fr: 'Terminé — utilisé pour préparer et réussir l\u2019examen.',
    },
  },
  {
    id: 'alpha-beta-visualizer',
    kind: 'personal',
    title: 'Alpha-Beta Pruning Visualizer',
    tagline: {
      en: 'An animated, step-by-step visualizer for game-tree search',
      it: 'Un visualizzatore animato e passo-passo per la ricerca su alberi di gioco',
      fr: 'Un visualiseur animé, étape par étape, pour la recherche dans les arbres de jeu',
    },
    summary: {
      en: 'A personal project built out of an interest in algorithm visualization: an animated tool that walks through minimax search with alpha-beta pruning, showing which branches get cut and why.',
      it: 'Un progetto personale nato da un interesse per la visualizzazione degli algoritmi: uno strumento animato che percorre la ricerca minimax con potatura alpha-beta, mostrando quali rami vengono tagliati e perché.',
      fr: 'Un projet personnel né d\u2019un intérêt pour la visualisation d\u2019algorithmes : un outil animé qui parcourt la recherche minimax avec élagage alpha-bêta, montrant quelles branches sont coupées et pourquoi.',
    },
    technologies: ['JavaScript', 'HTML5 Canvas', 'CSS'],
    features: [
      {
        en: 'Step-by-step animation of node exploration and pruning decisions',
        it: 'Animazione passo-passo dell\u2019esplorazione dei nodi e delle decisioni di potatura',
        fr: 'Animation étape par étape de l\u2019exploration des nœuds et des décisions d\u2019élagage',
      },
      {
        en: 'Built to make a textbook algorithm easier to actually understand, not just implement',
        it: 'Costruito per rendere un algoritmo da manuale più facile da capire davvero, non solo da implementare',
        fr: 'Construit pour rendre un algorithme de manuel plus facile à réellement comprendre, pas seulement à implémenter',
      },
    ],
    status: {
      en: 'Complete — a personal side project, not tied to coursework.',
      it: 'Completato — un progetto personale, non legato a un corso.',
      fr: 'Terminé — un projet personnel, non lié à un cours.',
    },
  },
];
