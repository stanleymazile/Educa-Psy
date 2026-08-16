import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

/**
 * En-tête de section. Si `to` est fourni, le titre devient un lien "en savoir
 * plus" vers une page dédiée (répond à l'exigence : tous les titres mènent à
 * plus d'informations).
 */
export default function SectionHeader({ eyebrow, title, desc, light = false, to }) {
  const titleClass = `font-display text-3xl sm:text-4xl font-medium ${light ? "text-white" : "text-navy"}`;

  return (
    <div className="max-w-2xl mx-auto text-center mb-12">
      {eyebrow && (
        <span className={`font-mono block text-xs uppercase tracking-widest mb-3 ${light ? "text-gold" : "text-gold-deep"}`}>
          {eyebrow}
        </span>
      )}
      {to ? (
        <Link to={to} className="group inline-flex items-center gap-2 hover:opacity-75 transition-opacity">
          <h2 className={titleClass}>{title}</h2>
          <ArrowUpRight className={`w-5 h-5 flex-shrink-0 ${light ? "text-white/60" : "text-navy/40"}`} />
        </Link>
      ) : (
        <h2 className={titleClass}>{title}</h2>
      )}
      {desc && <p className={`text-lg mt-4 ${light ? "text-white/75" : "text-ink-soft"}`}>{desc}</p>}
    </div>
  );
}
