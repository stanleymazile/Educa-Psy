// Traductions de l'ossature du site (navigation, en-tête, pied de page, boutons).
// Le contenu détaillé de chaque page (mission, programmes, valeurs...) reste en
// français dans src/data/content.js et les fichiers src/pages/*.jsx : une
// traduction complète en créole mériterait une relecture par un locuteur natif
// avant publication. Ce fichier pose la structure pour l'étendre facilement.

export const LANGS = { fr: "Français", kr: "Kreyòl" };

export const STRINGS = {
  fr: {
    nav: {
      accueil: "Accueil",
      apropos: "À propos",
      programmes: "Programmes",
      projets: "Projets",
      impliquer: "S'impliquer",
      contact: "Contact",
    },
    heroTag: "Organisation haïtienne · Grand-Goâve, Haïti",
    heroTitle: "Nous accompagnons les enfants et les jeunes d'Haïti",
    heroFormula: ["Psychologie", "Éducation", "Prévention", "Jeunesse", "Innovation", "Action communautaire"],
    heroDesc:
      "Educa-Psy est une organisation haïtienne à vocation sociale, éducative et psychologique qui œuvre pour promouvoir le bien-être des enfants et des jeunes, renforcer leur autonomie et contribuer au développement des communautés en Haïti.",
    ctaProgrammes: "Découvrir nos programmes",
    ctaImpliquer: "S'impliquer",
    ctaContact: "Nous contacter",
    footerTagline: "Organisation haïtienne pour l'éducation, la psychologie et le développement communautaire.",
    footerNav: "Navigation",
    footerZone: "Zone d'intervention",
    footerSuivez: "Suivez-nous",
    langNote: "Le contenu détaillé de chaque page est en français ; la traduction complète en créole est à compléter.",
  },
  kr: {
    nav: {
      accueil: "Akèy",
      apropos: "Ki nou ye",
      programmes: "Pwogram",
      projets: "Pwojè",
      impliquer: "Patisipe",
      contact: "Kontakte",
    },
    heroTag: "Òganizasyon ayisyen · Grand-Goâve, Ayiti",
    heroTitle: "N ap akonpaye timoun ak jèn Ayiti yo",
    heroFormula: ["Sikoloji", "Edikasyon", "Prevansyon", "Jèn", "Inovasyon", "Aksyon kominotè"],
    heroDesc:
      "Educa-Psy se yon òganizasyon ayisyen ki gen yon vokasyon sosyal, edikatif ak sikolojik. Li travay pou ankouraje byennèt timoun ak jèn yo, ranfòse otonomi yo, epi kontribye nan devlopman kominote yo an Ayiti.",
    ctaProgrammes: "Dekouvri pwogram nou yo",
    ctaImpliquer: "Patisipe",
    ctaContact: "Kontakte nou",
    footerTagline: "Òganizasyon ayisyen pou edikasyon, sikoloji ak devlopman kominotè.",
    footerNav: "Navigasyon",
    footerZone: "Zòn entèvansyon",
    footerSuivez: "Swiv nou",
    langNote: "Kontni detaye chak paj la an fransè pou kounye a ; tradiksyon konplè an kreyòl ap vini.",
  },
};

