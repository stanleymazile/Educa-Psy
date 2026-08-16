// Images fournies par l'organisation, à placer dans public/images/ :
// - Logo.png   → logo officiel (utilisé dans Nav et Footer)
// - Droit.webp → thème droits de l'enfant / protection
// - Ecole.webp → thème école / milieu scolaire
// - Odd.webp   → thème développement durable (ODD)
//
// Ces 3 images sont réutilisées en rotation à travers le site (voir stockImage).

export const LOGO_SRC = "/images/Logo.png";

export const STOCK_IMAGES = [
  { src: "/images/Droit.webp", alt: "Droits et protection de l'enfance" },
  { src: "/images/Ecole.webp", alt: "Éducation en milieu scolaire" },
  { src: "/images/Odd.webp", alt: "Développement durable et communautaire" },
];

/** Retourne une image de la rotation à partir d'un index (cyclique). */
export function stockImage(index) {
  return STOCK_IMAGES[((index % STOCK_IMAGES.length) + STOCK_IMAGES.length) % STOCK_IMAGES.length];
}

