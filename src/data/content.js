import {
  Baby, BookOpen, Brain, Briefcase, Building2, Calculator, Film, GraduationCap,
  Globe, Handshake, Heart, Home, Leaf, Lightbulb, Megaphone, MessageCircle, Palette,
  School, Scale, Shield, Smartphone, Target, TrendingUp, Trophy, UserCheck, Users,
} from "lucide-react";

export const VALEURS = [
  { title: "Bien-être", desc: "Promouvoir le bien-être psychologique, social et éducatif.", Icon: Heart },
  { title: "Éducation", desc: "Considérer l'éducation comme un moyen essentiel de développement et d'autonomisation.", Icon: BookOpen },
  { title: "Égalité", desc: "Promouvoir l'égalité des chances entre les filles et les garçons et lutter contre les discriminations.", Icon: Scale },
  { title: "Protection", desc: "Contribuer à la protection des enfants et des personnes vulnérables.", Icon: Shield },
  { title: "Respect", desc: "Respecter la dignité, les droits et la diversité de chaque personne.", Icon: UserCheck },
  { title: "Solidarité", desc: "Encourager l'entraide et la responsabilité collective.", Icon: Handshake },
  { title: "Innovation", desc: "Utiliser de nouvelles approches, notamment numériques, pour répondre aux besoins des communautés.", Icon: Lightbulb },
  { title: "Participation", desc: "Encourager les enfants, les jeunes et les communautés à participer activement aux solutions qui les concernent.", Icon: MessageCircle },
];

export const DOMAINES = [
  "Psychologie et bien-être", "Soutien psychosocial", "Éducation", "Protection de l'enfant",
  "Prévention des violences", "Sensibilisation et plaidoyer", "Formation", "Mentorat des jeunes",
  "Autonomisation des femmes et des jeunes", "Jeux éducatifs et jeux d'esprit", "Sport",
  "Éducation numérique", "Éducation financière", "Éducation environnementale", "Cinéma et éducation",
  "Consulting", "Développement communautaire", "Innovation sociale et numérique",
];

export const PROGRAMMES = [
  {
    title: "Psychologie et soutien psychosocial",
    Icon: Brain,
    intro: "Des activités visant à contribuer au bien-être psychologique des enfants, des jeunes et des personnes vulnérables.",
    bullets: ["Écoute et orientation", "Soutien psychosocial", "Prévention des difficultés psychologiques", "Sensibilisation à la santé mentale", "Accompagnement des écoles", "Soutien aux personnes confrontées à des situations difficiles"],
    note: "Une attention particulière est accordée aux personnes déplacées, aux victimes de catastrophes et aux populations vulnérables.",
  },
  {
    title: "Intervention psychologique dans les écoles",
    Icon: School,
    intro: "L'école est un espace important d'intervention : contribuer au bien-être des élèves et créer un environnement scolaire plus favorable à leur développement.",
    bullets: ["Santé mentale", "Prévention", "Gestion des émotions", "Comportements", "Relations interpersonnelles", "Difficultés rencontrées en milieu scolaire"],
    note: "S'adresse aux élèves, aux enseignants, aux parents et aux responsables scolaires.",
  },
  {
    title: "Éducation",
    Icon: BookOpen,
    intro: "Educa-Psy considère l'éducation comme un levier majeur de transformation sociale.",
    bullets: ["Éducation générale", "Développement personnel", "Compétences sociales", "Éducation à la citoyenneté", "Éducation numérique", "Éducation financière", "Éducation environnementale", "Activités éducatives et récréatives", "Formation et orientation"],
  },
  {
    title: "Mat Educa-Psy Club — Jeux d'esprit et de société",
    Icon: Target,
    intro: "Un projet basé sur l'utilisation des échecs et des jeux de société comme outils éducatifs.",
    bullets: ["Concentration", "Patience", "Mémoire", "Logique", "Résolution de problèmes", "Stratégie", "Prise de décision", "Respect des règles", "Coopération", "Compétences sociales"],
    note: "Le projet vise à développer des clubs dans les établissements scolaires.",
  },
  {
    title: "Mentorat des jeunes",
    Icon: UserCheck,
    intro: "Permettre aux jeunes de bénéficier d'un accompagnement et de conseils afin de mieux développer leur potentiel.",
    bullets: ["Orientation personnelle", "Orientation professionnelle", "Confiance en soi", "Développement des compétences", "Construction de projets", "Entrepreneuriat", "Autonomisation", "Découverte d'opportunités"],
  },
  {
    title: "Autonomisation des femmes et des jeunes",
    Icon: TrendingUp,
    intro: "Contribuer à l'autonomisation économique et sociale des femmes et des jeunes.",
    bullets: ["Formation", "Développement de compétences", "Mentorat", "Entrepreneuriat", "Agriculture", "Accompagnement de projets", "Éducation financière", "Accès aux opportunités"],
    note: "Une attention particulière est accordée aux femmes et aux personnes vulnérables dans les communautés affectées par les déplacements.",
  },
  {
    title: "Sensibilisation et plaidoyer",
    Icon: Megaphone,
    intro: "Des activités de sensibilisation organisées dans les écoles et les communautés.",
    bullets: ["Droits de l'enfant", "Genre et égalité", "Prévention des violences", "Harcèlement", "Protection de l'enfant", "Santé mentale", "Citoyenneté", "Prévention des grossesses précoces"],
  },
  {
    title: "Genre et droits de l'enfant",
    Icon: Scale,
    intro: "Une campagne de sensibilisation menée dans des écoles autour du thème « Genre et droits de l'enfant ».",
    bullets: ["Droit à l'éducation", "Protection de la vie privée", "Protection contre les violences", "Harcèlement et agressions physiques", "Violences verbales et psychologiques", "Stéréotypes liés au genre", "Égalité entre filles et garçons"],
  },
  {
    title: "Prévention des grossesses précoces",
    Icon: Baby,
    intro: "Sensibiliser et informer les jeunes afin de réduire les facteurs pouvant favoriser les grossesses précoces chez les adolescentes, dans une approche d'éducation, de prévention, d'autonomisation et de sensibilisation.",
    bullets: [],
  },
  {
    title: "Formation",
    Icon: GraduationCap,
    intro: "Des formations destinées aux écoles, entreprises, ONG, associations, organisations communautaires et professionnels.",
    bullets: ["Gestion du stress", "Gestion des conflits", "Communication", "Psychologie", "Développement personnel", "Prévention", "Compétences sociales", "Gestion des équipes"],
  },
  {
    title: "Programme sportif",
    Icon: Trophy,
    intro: "Le sport comme outil de développement personnel, de socialisation, d'éducation, de bien-être, de coopération, de discipline et de développement communautaire.",
    bullets: [],
  },
  {
    title: "Programme environnemental",
    Icon: Leaf,
    intro: "Intégrer l'environnement dans l'approche éducative d'Educa-Psy.",
    bullets: ["Protection de l'environnement", "Gestion des déchets", "Recyclage", "Sensibilisation écologique", "Propreté des communautés", "Éducation environnementale"],
    accent: "green",
  },
  {
    title: "Éducation numérique",
    Icon: Smartphone,
    intro: "Contribuer à l'accès des jeunes aux compétences numériques.",
    bullets: ["Initiation aux outils numériques", "Formation informatique", "Culture numérique", "Utilisation responsable d'Internet", "Création de projets numériques", "Sensibilisation aux nouvelles technologies"],
    note: "Educa-Psy travaille également au développement d'une application mobile destinée aux jeunes.",
  },
  {
    title: "Éducation financière",
    Icon: Calculator,
    intro: "Développer chez les jeunes des connaissances et compétences liées à la gestion financière.",
    bullets: ["Gestion de l'argent", "Épargne", "Budget", "Consommation responsable", "Entrepreneuriat", "Gestion d'un petit projet", "Planification financière"],
  },
  {
    title: "Programme cinématographique",
    Icon: Film,
    intro: "Le cinéma comme outil éducatif, culturel, psychosocial, de sensibilisation et de réflexion, à travers des projections accompagnées de discussions et d'activités éducatives.",
    bullets: [],
  },
  {
    title: "Consulting",
    Icon: Briefcase,
    intro: "Accompagner les écoles, entreprises, ONG, associations, organisations communautaires et projets sociaux.",
    bullets: ["Formation", "Accompagnement", "Conception de projets", "Gestion des conflits", "Bien-être au travail", "Développement organisationnel"],
  },
  {
    title: "Arts & médias",
    Icon: Palette,
    intro: "Un partenariat avec AJART Haïti qui allie l'expertise psycho-éducative d'Educa-Psy et le rayonnement artistique d'AJART pour redonner aux jeunes l'espoir qu'ils méritent, particulièrement à Carrefour-Feuilles.",
    bullets: ["Éducation de qualité", "Empowerment des jeunes", "Protection de l'enfance", "Droits humains", "Développement durable", "Expression artistique et médiatique"],
    note: "Partenariat stratégique actif avec AJART Haïti, dans le département de l'Ouest.",
  },
];

// Faits vérifiés sur le site officiel actuel (educa-psy-haiti.web.app), à conserver
// à jour ici : ce fichier est la source unique pour les statistiques affichées.
export const ORG_FACTS = {
  foundedYear: "2022",
  foundedPlace: "Grand-Goâve, Haïti",
  departments: 3,
  departmentsList: ["Sud", "Ouest", "Artibonite"],
  founder: "Stanley Mazile",
  founderTitle: "Psychologue et consultant · Fondateur",
  email: "educapsyhaiti@gmail.com",
  phoneDisplay: "(+509) 3685-9685",
  phoneHref: "+50936859685",
  address: "28, Fauché, Grand-Goâve, Haïti",
  mapsUrl: "https://maps.app.goo.gl/272tYULj5hqyakUE6",
  mapsEmbedSrc:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.272!2d-72.723!3d18.459!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTjCsDI3JzMyLjQiTiA3MsKwNDMnMjIuOCJX!5e0!3m2!1sfr!2sht!4v1710000000000!5m2!1sfr!2sht",
  donateUrl: "https://gofund.me/28558424a",
  partnershipFormUrl: "https://forms.gle/partenaireEduca",
  social: {
    facebook: "https://facebook.com/educapsy",
    linkedin: "https://linkedin.com/company/educa-psy",
    youtube: "https://youtube.com/@educapsy",
    whatsapp: "https://wa.me/50936859685",
  },
};

export const PARTENAIRES = [
  {
    name: "AUF — Agence Universitaire de la Francophonie",
    desc: "Soutien fondateur via le programme RéSACE (AUF Caraïbes, 2022).",
    Icon: GraduationCap,
  },
  {
    name: "AJART Haïti",
    desc: "Partenariat arts & médias au service des jeunes, notamment à Carrefour-Feuilles.",
    Icon: Palette,
  },
];

export const BENEFICIAIRES = [
  { title: "Enfants", desc: "Éducation, protection, jeux éducatifs et développement psychosocial.", Icon: Baby },
  { title: "Adolescents", desc: "Prévention, éducation, santé mentale et développement personnel.", Icon: Users },
  { title: "Jeunes", desc: "Mentorat, formation, autonomisation et entrepreneuriat.", Icon: GraduationCap },
  { title: "Femmes", desc: "Autonomisation sociale et économique.", Icon: Heart },
  { title: "Écoles", desc: "Programmes éducatifs, psychologiques et de sensibilisation.", Icon: School },
  { title: "Enseignants", desc: "Formation et accompagnement.", Icon: BookOpen },
  { title: "Parents", desc: "Sensibilisation et éducation.", Icon: Home },
  { title: "Personnes vulnérables", desc: "Notamment les personnes déplacées et affectées par des catastrophes.", Icon: Shield },
  { title: "Organisations", desc: "Formations, consulting et accompagnement.", Icon: Building2 },
];

export const APPROCHE = [
  { title: "Prévenir plutôt que seulement intervenir", desc: "Agir avant que certaines difficultés ne deviennent plus importantes.", Icon: Target },
  { title: "Agir dans les écoles", desc: "Les écoles sont des espaces privilégiés de prévention, d'éducation et de développement.", Icon: School },
  { title: "Donner une place importante aux jeunes", desc: "Les jeunes sont des acteurs du changement, pas seulement des bénéficiaires.", Icon: Users },
  { title: "Combiner psychologie et éducation", desc: "Deux domaines complémentaires pour favoriser le développement des personnes.", Icon: Brain },
  { title: "Utiliser l'innovation", desc: "Les technologies et nouvelles méthodes pour améliorer notre impact.", Icon: Lightbulb },
  { title: "Travailler avec les communautés", desc: "Des solutions adaptées aux réalités locales, développées avec les communautés.", Icon: Handshake },
];

export const IMPACT = [
  { title: "Individuel", desc: "Connaissances, compétences, confiance et bien-être.", Icon: UserCheck, scale: 1 },
  { title: "Familial", desc: "Connaissances des parents et qualité des relations.", Icon: Home, scale: 2 },
  { title: "Scolaire", desc: "Environnements éducatifs plus favorables.", Icon: School, scale: 3 },
  { title: "Communautaire", desc: "Solidarité, prévention et participation.", Icon: Users, scale: 4 },
  { title: "Social", desc: "Protection, égalité et autonomisation.", Icon: Globe, scale: 5 },
];

export const AXES = [
  { num: "1", title: "Psychologie et bien-être", desc: "Soutien psychologique, santé mentale et accompagnement psychosocial.", Icon: Brain },
  { num: "2", title: "Éducation et développement des compétences", desc: "Éducation, formation, numérique, finance, environnement et compétences sociales.", Icon: BookOpen },
  { num: "3", title: "Protection et prévention", desc: "Droits de l'enfant, genre, violences, harcèlement et prévention des grossesses précoces.", Icon: Shield },
  { num: "4", title: "Jeunesse et autonomisation", desc: "Mentorat, entrepreneuriat, leadership et développement des jeunes.", Icon: TrendingUp },
  { num: "5", title: "Innovation et numérique", desc: "Application mobile, outils numériques, contenus éducatifs et innovation sociale.", Icon: Smartphone },
  { num: "6", title: "Développement communautaire", desc: "Projets locaux, soutien aux personnes vulnérables, agriculture, environnement et initiatives communautaires.", Icon: Handshake },
];

