import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { usePageTitle } from "../hooks/usePageTitle.js";

export default function NotFound() {
  usePageTitle("Page introuvable");

  return (
    <div className="py-24 px-4 sm:px-6 lg:px-8 text-center">
      <span className="font-mono text-xs uppercase tracking-widest text-gold-deep">Erreur 404</span>
      <h1 className="font-display text-3xl sm:text-4xl mt-4 mb-4 text-navy">Cette page n'existe pas</h1>
      <p className="text-ink-soft mb-8 max-w-md mx-auto">
        La page que vous cherchez a peut-être été déplacée ou n'existe plus.
      </p>
      <Link to="/" className="inline-flex items-center gap-2 font-semibold px-6 py-3 rounded-full bg-gold text-navy transition-transform hover:scale-105">
        Retour à l'accueil <ArrowRight className="w-4 h-4" />
      </Link>
    </div>
  );
}

