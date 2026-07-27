export type Project = {
  name: string;
  description: string;
  contribution: string;
  url: string;
  tags: string[];
};

export type StackGroup = {
  title: string;
  items: string[];
};

export const profile = {
  name: "Jérôme Villiseck",
  title: "Développeur full-stack · Responsable d'application",
  location: "Montpellier",
  address: "12 rue Andy Warhol, Port Marianne, Montpellier Sud",
  phoneDisplay: "06.50.37.33.88",
  phoneHref: "+33650373388",
  email: "jerome.pro@monemail.com",
  intro:
    "Je construis et fais vivre des services numériques utiles, de la conception à la production.",
} as const;

export const highlights = [
  { value: "6 ans", label: "d'expérience full-stack" },
  { value: "5", label: "services publics numériques" },
  { value: "3", label: "environnements : dev, test, prod" },
  { value: "2", label: "projets comme Scrum Master intégré" },
] as const;

export const projects: Project[] = [
  {
    name: "ITEM",
    description:
      "Outil professionnel de gestion et de traitement de lots d'exemplaires Sudoc.",
    contribution:
      "Contribution full-stack et responsabilité applicative au sein de l'équipe de développement de l'Abes.",
    url: "https://item.sudoc.fr",
    tags: ["Java", "Spring Boot", "Vue.js", "PostgreSQL"],
  },
  {
    name: "Périscope",
    description:
      "Visualisation des collections de publications en série des bibliothèques.",
    contribution:
      "Contribution au développement et aux évolutions du service au sein de l'équipe de l'Abes.",
    url: "https://periscope.sudoc.fr",
    tags: ["Full-stack", "API REST", "Vue.js"],
  },
  {
    name: "QualiMarc",
    description:
      "Diagnostic de la qualité des notices bibliographiques du catalogue Sudoc.",
    contribution:
      "Contribution au développement d'un service métier destiné aux professionnels des bibliothèques.",
    url: "https://qualimarc.sudoc.fr",
    tags: ["Java", "Vue.js", "Qualité des données"],
  },
  {
    name: "theses.fr",
    description:
      "Moteur national des thèses françaises, des sujets en préparation et des personnes liées à la recherche doctorale.",
    contribution:
      "Contribution aux projets de l'Abes dans un contexte métier et documentaire national.",
    url: "https://theses.fr",
    tags: ["Service public", "Données", "Recherche"],
  },
  {
    name: "Licences nationales",
    description:
      "Portail d'information et de services autour des corpus scientifiques acquis au niveau national.",
    contribution:
      "Contribution au développement du service avec les équipes techniques et fonctionnelles de l'Abes.",
    url: "https://www.licencesnationales.fr",
    tags: ["Full-stack", "Métadonnées", "Enseignement supérieur"],
  },
];

export const stackGroups: StackGroup[] = [
  {
    title: "Back-end",
    items: [
      "Java",
      "Spring Boot",
      "Spring Security",
      "Spring Data JPA",
      "Spring Batch",
      "Hibernate / JPA",
      "API REST",
      "JWT",
      "Maven",
    ],
  },
  {
    title: "Front-end",
    items: [
      "JavaScript ES6+",
      "Vue.js",
      "Vue Router",
      "Vuex",
      "TypeScript",
      "React",
      "HTML5",
      "CSS3",
      "SCSS",
      "Axios",
      "Vite",
      "Vuetify",
    ],
  },
  {
    title: "Données",
    items: ["PostgreSQL", "SQL", "JDBC", "PL/SQL"],
  },
  {
    title: "Tests & qualité",
    items: [
      "TDD",
      "Tests unitaires",
      "Tests d'intégration",
      "Tests fonctionnels",
      "Peer programming",
    ],
  },
  {
    title: "CI/CD & exploitation",
    items: [
      "GitHub Actions",
      "Jenkins",
      "Docker",
      "Docker Hub",
      "GitLab",
      "GitHub",
      "Linux",
      "Shell",
      "Apache Tomcat",
      "Logs & métriques",
    ],
  },
];

export const pillars = [
  {
    key: "DEV",
    title: "Construire",
    text: "Concevoir des fonctionnalités de bout en bout, les tester et les intégrer dans des architectures trois tiers.",
  },
  {
    key: "RUN",
    title: "Faire vivre",
    text: "Diagnostiquer les incidents, maintenir les données et les services, puis réduire durablement la dette technique.",
  },
  {
    key: "LEAD",
    title: "Faire avancer",
    text: "Préciser les besoins avec les responsables fonctionnels, faciliter les rituels agiles et partager les API publiques.",
  },
] as const;

export const timeline = [
  {
    period: "2019 — 2025",
    title: "Développeur full-stack · Abes",
    text: "Développement, maintenance et exploitation de services numériques nationaux à Montpellier.",
  },
  {
    period: "Deux projets d'un an",
    title: "Scrum Master intégré",
    text: "Animation des événements Scrum et adaptation itérative des projets avec les clients.",
  },
  {
    period: "2025 — 2026",
    title: "Licence informatique · Cnam",
    text: "Architecture des machines, apprentissage statistique supervisé et programmation avancée.",
  },
  {
    period: "Formation continue",
    title: "CI/CD, conteneurs et systèmes",
    text: "GitHub Actions avancé, Docker, Kafka, Scrum, Linux et Shell.",
  },
] as const;
