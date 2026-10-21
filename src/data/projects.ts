import type { Project } from '../types';

export const projects: Project[] = [
  {
    id: 'hotel-management-system',
    kind: 'technical',
    origins: ['technical'],
    title: 'Hotel Management System',
    tagline: {
      en: 'Online platform to manage room bookings, availability, payments, and admin dashboard for managers. Modern UI with scalable REST APIs.',
      it: 'Piattaforma online per gestire prenotazioni camere, disponibilità, pagamenti e dashboard admin per manager. UI moderna con API REST scalabili.',
      fr: 'Plateforme en ligne pour gérer les réservations de chambres, disponibilités, paiements et tableau de bord gestionnaire. Interface moderne avec API REST évolutives.',
    },
    summary: {
      en: 'A comprehensive hotel management platform designed to streamline room reservations, track live room availability, process guest payments, and offer hotel managers a centralized administration dashboard with scalable REST APIs.',
      it: 'Una piattaforma completa di gestione alberghiera progettata per semplificare le prenotazioni delle camere, monitorare le disponibilità in tempo reale, gestire i pagamenti e fornire ai manager una dashboard centralizzata con API REST scalabili.',
      fr: 'Une plateforme complète de gestion hôtelière conçue pour simplifier la réservation de chambres, suivre les disponibilités en direct, traiter la facturation et fournir aux gestionnaires un tableau de bord centralisé avec des API REST évolutives.',
    },
    problem: {
      en: 'Hotels face fragmented booking sources, manual room status tracking, double bookings, and cumbersome payment reconciliation that lead to operational delays and errors.',
      it: 'Gli hotel affrontano fonti di prenotazione frammentate, tracciamento manuale delle camere, rischio di doppie prenotazioni e complessa riconciliazione dei pagamenti con conseguenti ritardi operativi ed errori.',
      fr: 'Les hôtels sont confrontés à des canaux de réservation disparates, au suivi manuel des statuts de chambres, aux surréservations et à une gestion fastidieuse des paiements entraînant des retards et des erreurs opérationnelles.',
    },
    approach: {
      en: 'Built a reactive Angular frontend featuring interactive calendar grids and dynamic booking flows, coupled with a Spring Boot REST backend implementing transactional room allocation, payment records, and secure relational database persistence.',
      it: 'Costruito un frontend reattivo in Angular con calendario interattivo e flussi di prenotazione dinamici, collegato a un backend Spring Boot REST che implementa allocazione transazionale delle camere, registrazione pagamenti e persistenza sicura.',
      fr: 'Développement d’un frontend Angular réactif intégrant calendrier dynamique et parcours de réservation, connecté à un backend REST Spring Boot garantissant l’attribution transactionnelle des chambres, l’historique des paiements et la persistance des données.',
    },
    technologies: ['Angular', 'Spring Boot', 'REST APIs', 'PostgreSQL', 'Docker', 'JWT'],
    features: [
      {
        en: 'Real-time room availability lookup, calendar scheduling, and reservation lifecycle management',
        it: 'Consultazione disponibilità in tempo reale, pianificazione a calendario e gestione del ciclo di vita delle prenotazioni',
        fr: 'Recherche de disponibilité en direct, planification par calendrier et gestion du cycle de vie des réservations',
      },
      {
        en: 'Integrated booking payments processing with invoice and receipt generation',
        it: 'Elaborazione pagamenti delle prenotazioni integrata con emissione di fatture e ricevute',
        fr: 'Traitement intégré des paiements de réservation avec génération de factures et reçus',
      },
      {
        en: 'Comprehensive admin dashboard with occupancy statistics, revenue metrics, and guest logs',
        it: 'Dashboard amministrativa completa con statistiche di occupazione, metriche di fatturato e registri ospiti',
        fr: 'Tableau de bord d’administration complet avec taux d’occupation, revenus et registre des clients',
      },
      {
        en: 'Role-based access control separating receptionists, staff, and management privileges',
        it: 'Controllo degli accessi basato sui ruoli per reception, staff e privilegi dirigenziali',
        fr: 'Contrôle d’accès basé sur les rôles distinguant la réception, le personnel et la direction',
      },
      {
        en: 'Room catalog management with category tiers, pricing rules, and amenities configuration',
        it: 'Gestione catalogo camere con fasce di prezzo, tariffe stagionali e servizi inclusi',
        fr: 'Gestion du catalogue de chambres avec catégories, règles tarifaires et équipements inclus',
      },
    ],
    status: {
      en: 'Complete — modern UI with scalable REST APIs.',
      it: 'Completato — interfaccia moderna con API REST scalabili.',
      fr: 'Terminé — interface moderne avec API REST évolutives.',
    },
    github: 'https://github.com/rezgui-yassine',
    image: '/projects/hotel-management.svg',
    architecture: ['Angular (Client UI)', 'Spring Boot (REST APIs)', 'Spring Security (JWT)', 'PostgreSQL (Database)', 'Docker Container'],
  },
  {
    id: 'medical-appointment-scheduling',
    kind: 'technical',
    origins: ['technical'],
    title: 'Medical Appointment Scheduling System',
    tagline: {
      en: 'Application for clinics to manage patient appointments, doctor schedules, and notifications. Secure role-based login for doctors, patients, and administrators.',
      it: 'Applicazione per cliniche per gestire appuntamenti pazienti, orari medici e notifiche. Login sicuro basato sui ruoli per medici, pazienti e amministratori.',
      fr: 'Application pour cliniques gérant les rendez-vous des patients, plannings médicaux et notifications. Connexion sécurisée par rôles pour praticiens, patients et administrateurs.',
    },
    summary: {
      en: 'A dedicated clinical scheduling application designed to organize patient appointments, coordinate doctor timetables, send automatic reminder alerts, and maintain secure role-based portals for patients, doctors, and clinic administrators.',
      it: 'Un’applicazione di pianificazione clinica creata per organizzare gli appuntamenti dei pazienti, coordinare gli orari dei medici, inviare promemoria automatici e fornire portali sicuri basati sui ruoli per pazienti, medici e amministratori.',
      fr: 'Une application médicale conçue pour les cabinets et cliniques afin d’organiser les rendez-vous des patients, coordonner les plannings des praticiens, envoyer des alertes automatiques et proposer des espaces sécurisés par rôles pour patients, médecins et administrateurs.',
    },
    problem: {
      en: 'Clinics suffer from phone congestion, double-booked consultation slots, patient no-shows, and lack of strict role segregation when accessing sensitive schedule records.',
      it: 'Le cliniche soffrono di congestione telefonica, sovrapposizione di visite, assenze ingiustificate dei pazienti e assenza di una rigida separazione dei ruoli nell’accesso ai dati degli appuntamenti.',
      fr: 'Les cliniques souffrent d’un encombrement téléphonique, de chevauchements de consultations, de rendez-vous manqués et d’un manque de cloisonnement des accès aux données de rendez-vous.',
    },
    approach: {
      en: 'Implemented strict role-based access control (RBAC) across user roles. Developed a reactive Angular calendar interface backed with Spring Boot concurrency handling using optimistic locking to prevent double bookings.',
      it: 'Implementato un rigoroso controllo di accesso basato sui ruoli (RBAC). Sviluppata un’interfaccia calendario reattiva in Angular supportata da gestione della concorrenza Spring Boot con locking ottimistico.',
      fr: 'Mise en œuvre d’un contrôle d’accès rigoureux (RBAC). Développement d’un calendrier réactif en Angular adossé à une gestion de concurrence sous Spring Boot avec verrouillage optimiste.',
    },
    technologies: ['Angular', 'Spring Boot', 'Spring Security', 'PostgreSQL', 'Docker', 'REST APIs', 'TypeScript'],
    features: [
      {
        en: 'Secure role-based login separating doctors, patients, and clinic administrators',
        it: 'Accesso sicuro basato sui ruoli per medici, pazienti e amministratori della clinica',
        fr: 'Connexion sécurisée par rôles distinguant médecins, patients et administrateurs de la clinique',
      },
      {
        en: 'Interactive slot selection with real-time schedule conflict prevention',
        it: 'Selezione interattiva degli slot con prevenzione dei conflitti di orario in tempo reale',
        fr: 'Sélection interactive des créneaux avec prévention en temps réel des conflits d’horaires',
      },
      {
        en: 'Doctor timetable management with weekly consult shifts, break intervals, and time-off tracking',
        it: 'Gestione orari medici con turni settimanali, intervalli di pausa e monitoraggio ferie',
        fr: 'Gestion des plannings praticiens avec créneaux hebdomadaires, pauses et congés',
      },
      {
        en: 'Automated notification and alert dispatching for confirmations, updates, and cancellations',
        it: 'Invio automatico di notifiche e avvisi per conferme, modifiche e cancellazioni',
        fr: 'Envoi automatique de notifications et rappels pour les confirmations, reports et annulations',
      },
      {
        en: 'Administrative dashboard for clinic department overview, physician rosters, and appointment metrics',
        it: 'Dashboard amministrativa per panoramica reparti clinici, elenchi medici e statistiche visite',
        fr: 'Tableau de bord d’administration pour la supervision des services, des praticiens et des indicateurs de consultation',
      },
    ],
    status: {
      en: 'Complete — secure role-based login for doctors, patients, and administrators.',
      it: 'Completato — login sicuro basato sui ruoli per medici, pazienti e amministratori.',
      fr: 'Terminé — connexion sécurisée par rôles pour médecins, patients et administrateurs.',
    },
    github: 'https://github.com/rezgui-yassine',
    image: '/projects/medical-scheduling.svg',
    architecture: ['Angular (Multi-Role Portal)', 'Spring Boot (Core REST APIs)', 'Spring Security (RBAC & JWT)', 'PostgreSQL', 'Docker'],
  },
  {
    id: 'food-delivery-app',
    kind: 'technical',
    origins: ['technical'],
    title: 'Food Delivery Application',
    tagline: {
      en: 'Platform to browse restaurants, place orders, track deliveries, and manage user profiles. Admin dashboard for restaurant owners to manage menus and orders.',
      it: 'Piattaforma per sfogliare ristoranti, effettuare ordini, tracciare consegne e gestire profili utente. Dashboard admin per proprietari di ristoranti per gestire menu e ordini.',
      fr: 'Plateforme pour découvrir les restaurants, commander, suivre les livraisons et gérer les profils utilisateurs. Tableau de bord admin pour restaurateurs pour gérer menus et commandes.',
    },
    summary: {
      en: 'A dynamic online food ordering and delivery ecosystem connecting consumers with local restaurants. Features dish customization, live order state progression, and an administrative console for restaurant owners to update menus and dispatch deliveries.',
      it: 'Un ecosistema dinamico per l’ordinazione e consegna di cibo a domicilio che mette in contatto utenti e ristoranti locali. Include personalizzazione dei piatti, monitoraggio degli stati d’ordine e console di gestione per i proprietari dei ristoranti.',
      fr: 'Un écosystème dynamique de commande et de livraison de repas reliant clients et restaurants locaux. Comprend la personnalisation des plats, le suivi en direct des étapes de livraison et une console de gestion pour les restaurateurs.',
    },
    problem: {
      en: 'Local restaurants require an accessible digital ordering portal with direct menu management and live order dispatching without being dependent on costly third-party aggregators.',
      it: 'I ristoranti locali necessitano di un portale di ordinazione digitale accessibile con gestione diretta dei menu e degli ordini, senza dipendere da costose piattaforme di intermediazione.',
      fr: 'Les restaurants locaux ont besoin d’un portail de commande en ligne accessible avec gestion directe des menus et expédition des commandes sans dépendre de commissions tierces excessives.',
    },
    approach: {
      en: 'Built an Angular single-page application providing smooth shopping cart interactions and responsive delivery timelines, backed by Spring Boot REST services managing catalog hierarchies, order status machines, and MySQL persistence.',
      it: 'Creata un’applicazione single-page in Angular che offre interazioni fluide con il carrello e timeline di consegna responsive, supportata da servizi REST Spring Boot per gerarchie di catalogo, stati ordine e persistenza MySQL.',
      fr: 'Création d’une application monopage Angular offrant un parcours panier fluide et un suivi de livraison réactif, soutenue par des services REST Spring Boot gérant catalogues, machines à états de commande et base MySQL.',
    },
    technologies: ['Angular', 'Spring Boot', 'MySQL', 'REST APIs', 'Docker', 'JWT', 'TypeScript'],
    features: [
      {
        en: 'Restaurant catalog browsing with category filtering, search, and dish customization',
        it: 'Navigazione catalogo ristoranti con filtri di categoria, ricerca e personalizzazione pietanze',
        fr: 'Exploration des restaurants avec filtres par catégorie, recherche et options sur les plats',
      },
      {
        en: 'Interactive cart with item additions, special preparation notes, and real-time total computation',
        it: 'Carrello interattivo con aggiunta opzioni, note di preparazione e calcolo immediato del totale',
        fr: 'Panier interactif avec ajouts d’ingrédients, consignes spéciales et calcul du total en temps réel',
      },
      {
        en: 'Live delivery tracking from kitchen acceptance through courier pickup to final delivery',
        it: 'Tracciamento della consegna in diretta dall’accettazione in cucina al ritiro e recapito finale',
        fr: 'Suivi de livraison en direct depuis la validation en cuisine jusqu’à la remise au client',
      },
      {
        en: 'Admin dashboard for restaurant owners to manage dishes, update pricing, and monitor active orders',
        it: 'Dashboard admin per ristoratori per gestire piatti, aggiornare prezzi e monitorare ordini attivi',
        fr: 'Tableau de bord admin pour restaurateurs pour gérer les cartes, modifier les prix et superviser les commandes',
      },
      {
        en: 'User profile management with saved addresses, past order archives, and rapid reordering',
        it: 'Gestione profilo utente con indirizzi preferiti, storico ordini ed effettuazione rapida di nuovi ordini',
        fr: 'Espace profil avec adresses enregistrées, historique des commandes passées et renouvellement rapide',
      },
    ],
    status: {
      en: 'Complete — admin dashboard for restaurant owners to manage menus and orders.',
      it: 'Completato — dashboard admin per proprietari di ristoranti per gestire menu e ordini.',
      fr: 'Terminé — tableau de bord admin pour restaurateurs pour gérer menus et commandes.',
    },
    github: 'https://github.com/rezgui-yassine',
    image: '/projects/food-delivery.svg',
    architecture: ['Angular (Customer & Owner Portal)', 'Spring Boot (Catalog & Order APIs)', 'Spring Security (JWT)', 'MySQL (Database)', 'Docker Container'],
  },
  {
    id: 'ecommerce-store',
    kind: 'technical',
    origins: ['technical'],
    title: 'Full-Stack E-commerce Store',
    tagline: {
      en: 'Complete online store with shopping cart, order management, admin dashboard, and role-based authentication. Responsive design and scalable backend.',
      it: 'Negozio online completo con carrello, gestione ordini, dashboard admin e autenticazione basata sui ruoli. Design responsive e backend scalabile.',
      fr: 'Boutique en ligne complète avec panier, gestion des commandes, tableau de bord admin et authentification par rôles. Design responsive et backend évolutif.',
    },
    summary: {
      en: 'A production-grade full-stack e-commerce store built end-to-end with Angular and Spring Boot. Features a responsive customer storefront, persistent shopping cart, checkout processing, and an admin dashboard with role-based authentication.',
      it: 'Uno store e-commerce full-stack di livello enterprise realizzato end-to-end con Angular e Spring Boot. Include una vetrina responsive per i clienti, carrello persistente, checkout e una dashboard amministrativa con autenticazione basata sui ruoli.',
      fr: 'Une boutique e-commerce full-stack de qualité production développée de bout en bout avec Angular et Spring Boot. Comprend une vitrine client réactive, un panier persistant, un processus de commande et un tableau de bord admin avec authentification par rôles.',
    },
    problem: {
      en: 'Standard tutorial e-commerce projects fake authentication and lack proper authorization boundaries, leaving inventory, pricing, and administrative endpoints unprotected.',
      it: 'I comuni progetti e-commerce da tutorial simulano l’autenticazione e trascurano l’autorizzazione, lasciando magazzino, prezzi ed endpoint amministrativi senza adeguate protezioni.',
      fr: 'Les projets e-commerce basiques simulent l’authentification et ignorent la gestion fine des autorisations, laissant les stocks, prix et routes d’administration vulnérables.',
    },
    approach: {
      en: 'Leveraged Keycloak and JWT for enterprise-grade authentication that synchronizes with role-aware Angular route guards and Spring Security filters. Backed with PostgreSQL, transactional cart operations, Docker Compose for local parity, and GitHub Actions CI.',
      it: 'Utilizzato Keycloak e JWT per un’autenticazione enterprise sincronizzata con route guard reattivi in Angular e filtri Spring Security. Supportato da PostgreSQL, transazioni carrello, Docker Compose e CI con GitHub Actions.',
      fr: 'Utilisation de Keycloak et JWT pour une authentification d’entreprise synchronisée avec les route guards Angular et les filtres Spring Security. Soutenu par PostgreSQL, des opérations panier transactionnelles, Docker Compose et CI GitHub Actions.',
    },
    technologies: ['Angular', 'Spring Boot', 'Keycloak', 'PostgreSQL', 'Docker', 'GitHub Actions', 'REST APIs'],
    features: [
      {
        en: 'Product catalog with search, categorization, stock tracking, and price filtering',
        it: 'Catalogo prodotti con ricerca, categorizzazione, monitoraggio scorte e filtri di prezzo',
        fr: 'Catalogue de produits avec recherche, catégorisation, suivi des stocks et filtres de prix',
      },
      {
        en: 'Interactive shopping cart with item updates, local persistence, and checkout summary',
        it: 'Carrello interattivo con aggiornamento articoli, persistenza locale e riepilogo checkout',
        fr: 'Panier interactif avec mise à jour des articles, persistance locale et récapitulatif de commande',
      },
      {
        en: 'Comprehensive admin dashboard for product CRUD, inventory management, and sales monitoring',
        it: 'Dashboard amministrativa completa per CRUD prodotti, gestione inventario e monitoraggio vendite',
        fr: 'Tableau de bord administrateur complet pour le CRUD produits, la gestion d’inventaire et les ventes',
      },
      {
        en: 'Role-based access control with secure token authentication via Keycloak and Spring Security',
        it: 'Controllo degli accessi basato sui ruoli con autenticazione sicura tramite Keycloak e Spring Security',
        fr: 'Contrôle d’accès basé sur les rôles avec authentification sécurisée par jetons via Keycloak et Spring Security',
      },
      {
        en: 'Exportable product data (CSV), automated database schema migrations, and Dockerized deployment',
        it: 'Esportazione dati prodotti (CSV), migrazioni automatiche dello schema database e deploy containerizzato Docker',
        fr: 'Export des données produits (CSV), migrations de schéma de base de données automatiques et déploiement Docker',
      },
    ],
    status: {
      en: 'Complete — responsive design and scalable backend with role-based authentication.',
      it: 'Completato — design responsive e backend scalabile con autenticazione basata sui ruoli.',
      fr: 'Terminé — design responsive et backend évolutif avec authentification basée sur les rôles.',
    },
    github: 'https://github.com/rezgui-yassine',
    image: '/projects/ecommerce-store.svg',
    architecture: ['Angular 18 (Client Storefront & Admin)', 'Keycloak (Identity & Roles)', 'Spring Boot (API & Business Logic)', 'PostgreSQL (Data)', 'Docker / GitHub Actions'],
  },
  {
    id: 'employee-management-system',
    kind: 'internship',
    origins: ['technical', 'internship'],
    company: 'Master Class',
    title: 'Employee Management System',
    tagline: {
      en: 'Platform for managing human resources, full CRUD, reporting, and real-time notifications. Intuitive interface with advanced Angular components.',
      it: 'Piattaforma per la gestione delle risorse umane, CRUD completo, reportistica e notifiche in tempo reale. Interfaccia intuitiva con componenti avanzati Angular.',
      fr: 'Plateforme de gestion des ressources humaines, CRUD complet, reporting et notifications en temps réel. Interface intuitive avec des composants Angular avancés.',
    },
    summary: {
      en: 'Developed during the Summer Internship at Master Class and featured among technical projects, this robust human resources platform enables companies to efficiently manage personnel, departments, contracts, and attendance records. Angular was used for the front-end and Spring Boot for the back-end, providing a modern interface and scalable architecture.',
      it: 'Sviluppata durante lo stage estivo presso Master Class e parte dei progetti tecnici, questa piattaforma per la gestione delle risorse umane consente alle aziende di gestire in modo efficiente personale, reparti, contratti e presenze. Angular è stato utilizzato per il front-end e Spring Boot per il back-end, garantendo un’interfaccia moderna e architettura scalabile.',
      fr: 'Développée durant le stage d’été chez Master Class et figurant parmi les projets techniques, cette plateforme robuste permet aux entreprises de gérer efficacement leurs ressources humaines. Angular a été utilisé pour le front-end et Spring Boot pour le back-end, offrant une interface moderne et une architecture évolutive.',
    },
    problem: {
      en: 'Organizations face employee record fragmentation, tracking errors across scattered files, slow onboarding, and lack of automated alerts for contract renewals and probation milestones.',
      it: 'Le organizzazioni affrontano frammentazione dei dati dei dipendenti, errori di tracciamento su file sparsi, onboarding lento e assenza di avvisi automatici per scadenze contrattuali.',
      fr: 'Les organisations font face à la dispersion des données RH, aux erreurs de saisie sur fichiers multiples, à la lenteur d’intégration et à l’absence d’alertes automatisées pour le renouvellement des contrats.',
    },
    approach: {
      en: 'Built an enterprise web application with Angular’s component architecture for data tables with reactive filters and sorting, coupled with a Spring Boot REST backend utilizing Spring Data JPA for consistent transactions, data validation, and MySQL persistence.',
      it: 'Realizzata un’applicazione web enterprise basata sui componenti Angular per tabelle dati con filtri e ordinamento reattivi, collegata a un backend Spring Boot REST con Spring Data JPA per transazioni coerenti e persistenza MySQL.',
      fr: 'Conception d’une application web professionnelle basée sur l’architecture à composants d’Angular pour des tableaux de données réactifs, reliée à un backend REST Spring Boot avec Spring Data JPA assurant cohérence transactionnelle et persistance MySQL.',
    },
    technologies: ['Angular', 'Spring Boot', 'MySQL', 'REST APIs', 'Docker', 'TypeScript'],
    features: [
      {
        en: 'Complete employee directory with full CRUD operations, live search, and multi-field filtering',
        it: 'Rubrica completa dipendenti con operazioni CRUD, ricerca istantanea e filtri multicampo',
        fr: 'Annuaire complet des employés avec opérations CRUD, recherche instantanée et filtres multicritères',
      },
      {
        en: 'Department hierarchy organization with manager assignments and headcount tracking',
        it: 'Organizzazione gerarchica di reparti con assegnazione manager e monitoraggio organico',
        fr: 'Organisation hiérarchique des départements avec affectation des responsables et suivi des effectifs',
      },
      {
        en: 'Contract management with start/end date tracking, salary grades, and renewal alerts',
        it: 'Gestione contratti con date di decorrenza e scadenza, fasce retributive e avvisi di rinnovo',
        fr: 'Gestion des contrats avec suivi des échéances, échelons de rémunération et alertes de renouvellement',
      },
      {
        en: 'Real-time alert notifications for contract milestones, probations, and administrative tasks',
        it: 'Notifiche in tempo reale per scadenze contrattuali, periodi di prova e compiti amministrativi',
        fr: 'Notifications en temps réel pour les jalons contractuels, périodes d’essai et tâches administratives',
      },
      {
        en: 'Advanced Angular data grids with pagination, multi-column sorting, and exportable reports',
        it: 'Griglie dati Angular avanzate con paginazione, ordinamento a più colonne e report esportabili',
        fr: 'Tableaux de données Angular avancés avec pagination, tri multicolonne et rapports exportables',
      },
    ],
    status: {
      en: 'Complete — intuitive interface with advanced Angular components.',
      it: 'Completato — interfaccia intuitiva con componenti avanzati Angular.',
      fr: 'Terminé — interface intuitive avec des composants Angular avancés.',
    },
    github: 'https://github.com/rezgui-yassine',
    image: '/projects/employee-management.svg',
    architecture: ['Angular (Enterprise HR Portal)', 'Spring Boot (RESTful Services)', 'Spring Data JPA', 'MySQL (Database)', 'Docker Container'],
  },
  {
    id: 'elearning-platform',
    kind: 'internship',
    origins: ['internship'],
    company: 'SFectoria',
    title: 'Interactive E-Learning Platform',
    tagline: {
      en: 'Development and launch of an interactive e-learning platform, integrating multimedia courses and a real-time chatroom to facilitate student communication and collaborative learning.',
      it: 'Sviluppo e lancio di una piattaforma e-learning interattiva, che integra corsi multimediali e una chatroom in tempo reale per facilitare la comunicazione e l’apprendimento collaborativo.',
      fr: 'Développement et lancement d’une plateforme d’e-learning interactive, intégrant des cours multimédias et un salon de discussion en temps réel pour faciliter la communication et l’apprentissage collaboratif.',
    },
    summary: {
      en: 'Built and launched during the Bachelor Internship at SFectoria, this interactive e-learning platform facilitates collaborative education by integrating multimedia course delivery with a real-time chatroom for seamless student-to-student and student-to-instructor communication.',
      it: 'Sviluppata e lanciata durante lo stage di laurea presso SFectoria, questa piattaforma e-learning interattiva facilita la formazione collaborativa integrando corsi multimediali con una chatroom in tempo reale per la comunicazione tra studenti e docenti.',
      fr: 'Développée et lancée lors du stage de licence chez SFectoria, cette plateforme d’e-learning interactive favorise l’apprentissage collaboratif en intégrant des cours multimédias et un espace de discussion en direct entre étudiants et enseignants.',
    },
    problem: {
      en: 'Traditional learning platforms often lack real-time engagement and instant communication channels, making remote courses feel disconnected and slowing down student collaboration and question resolution.',
      it: 'Le piattaforme di apprendimento tradizionali spesso mancano di interattività in tempo reale e canali di comunicazione istantanea, rendendo i corsi online isolati e rallentando la collaborazione tra studenti.',
      fr: 'Les plateformes d’apprentissage traditionnelles manquent souvent d’interactivité et de communication instantanée, isolant les apprenants à distance et ralentissant les échanges et l’entraide.',
    },
    approach: {
      en: 'Developed an Angular frontend featuring responsive course viewer modules and an integrated live chat component, backed by a Spring Boot REST API for course enrollments and WebSocket protocols for instant bidirectional messaging.',
      it: 'Sviluppato un frontend Angular con moduli interattivi per la visualizzazione dei corsi e una chat live integrata, supportata da API REST Spring Boot per le iscrizioni e protocollo WebSocket per la messaggistica bidirezionale istantanea.',
      fr: 'Développement d’une interface Angular avec modules de cours interactifs et composant de messagerie en direct, couplée à une API REST Spring Boot pour les inscriptions et au protocole WebSocket pour les échanges bidirectionnels en temps réel.',
    },
    technologies: ['Angular', 'Spring Boot', 'Java', 'WebSocket', 'PostgreSQL', 'Docker', 'REST APIs'],
    features: [
      {
        en: 'Interactive multimedia course viewer with video lesson streaming and progress completion tracking',
        it: 'Visualizzatore multimediale interattivo dei corsi con streaming video e monitoraggio del completamento',
        fr: 'Lecteur multimédia interactif de cours avec streaming vidéo et suivi de progression d’apprentissage',
      },
      {
        en: 'Real-time collaborative chatroom allowing students and instructors to exchange instant messages and questions',
        it: 'Chatroom collaborativa in tempo reale per lo scambio immediato di messaggi e domande tra studenti e docenti',
        fr: 'Salon de discussion collaboratif en temps réel permettant aux étudiants et enseignants d’échanger instantanément',
      },
      {
        en: 'Student portal with active enrollments, course catalogs, announcements, and downloadable resources',
        it: 'Portale studenti con corsi attivi, catalogo lezioni, annunci e risorse scaricabili',
        fr: 'Portail apprenant avec inscriptions en cours, catalogue, annonces et ressources téléchargeables',
      },
      {
        en: 'Instructor tools for publishing course chapters, uploading multimedia content, and moderating discussions',
        it: 'Strumenti per docenti per pubblicare capitoli, caricare contenuti multimediali e moderare le discussioni',
        fr: 'Outils formateurs pour publier des chapitres, téléverser des contenus multimédias et animer les échanges',
      },
      {
        en: 'Modular Angular UI with reactive forms, WebSocket status indicators, and secure Spring Boot services',
        it: 'Interfaccia modulare in Angular con form reattivi, indicatori di stato WebSocket e servizi Spring Boot protetti',
        fr: 'Interface Angular modulaire avec formulaires réactifs, indicateurs d’état WebSocket et services Spring Boot sécurisés',
      },
    ],
    status: {
      en: 'Launched — developed and launched during the Bachelor Internship at SFectoria.',
      it: 'Lanciato — sviluppato e lanciato durante lo stage di laurea presso SFectoria.',
      fr: 'Déployé — développé et lancé lors du stage de licence chez SFectoria.',
    },
    github: 'https://github.com/rezgui-yassine',
    image: '/projects/elearning-platform.svg',
    architecture: ['Angular (Interactive Learner Portal)', 'Spring Boot (Course & Auth APIs)', 'WebSocket (Real-Time Chat)', 'PostgreSQL (Data)', 'Docker Container'],
  },
];
