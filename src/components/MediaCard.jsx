import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

/**
 * Carte avec image, titre cliquable (lien interne `to` ou externe `href`) et description.
 * Le titre entier sert de lien "en savoir plus" — répond à l'exigence que chaque
 * titre mène à plus d'informations.
 */
export default function MediaCard({ image, title, desc, to, href }) {
  const content = (
    <div className="rounded-2xl border border-navy/10 bg-white overflow-hidden h-full flex flex-col">
      <div className="aspect-[16/10] overflow-hidden bg-paper">
        <img
          src={image.src}
          alt={image.alt}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="p-5 flex-1 flex flex-col">
        <h3 className="font-semibold text-navy flex items-start gap-1.5">
          <span className="flex-1">{title}</span>
          <ArrowUpRight className="w-4 h-4 opacity-40 flex-shrink-0 mt-0.5" />
        </h3>
        {desc && <p className="text-sm leading-relaxed text-ink-soft mt-2 flex-1">{desc}</p>}
      </div>
    </div>
  );

  const wrapperClass = "group block h-full rounded-2xl transition-all duration-200 hover:-translate-y-1 hover:shadow-lg";

  if (to) {
    return (
      <Link to={to} className={wrapperClass}>
        {content}
      </Link>
    );
  }
  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={wrapperClass}>
        {content}
      </a>
    );
  }
  return <div className="h-full">{content}</div>;
}

