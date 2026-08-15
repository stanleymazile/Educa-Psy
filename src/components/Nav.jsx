import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { ArrowRight, Menu, X } from "lucide-react";
import { useLanguage } from "../context/LanguageContext.jsx";

export const ROUTES = [
  { to: "/", key: "accueil" },
  { to: "/a-propos", key: "apropos" },
  { to: "/programmes", key: "programmes" },
  { to: "/projets", key: "projets" },
  { to: "/simpliquer", key: "impliquer" },
  { to: "/contact", key: "contact" },
];

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { lang, setLang, t } = useLanguage();

  const linkClass = ({ isActive }) =>
    `px-4 py-2 rounded-full text-sm font-medium transition-colors ${
      isActive ? "bg-navy text-white" : "text-ink-soft hover:bg-navy/5"
    }`;

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-paper/90 border-b border-navy/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2">
            <span className="font-display text-lg font-medium text-navy">
              Educa<span className="text-gold">-Psy</span>
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {ROUTES.map((r) => (
              <NavLink key={r.to} to={r.to} end={r.to === "/"} className={linkClass}>
                {t.nav[r.key]}
              </NavLink>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={() => setLang(lang === "fr" ? "kr" : "fr")}
              className="font-mono text-xs uppercase tracking-widest px-2.5 py-1.5 rounded-full border border-navy/15 text-ink-soft hover:border-gold hover:text-navy transition-colors"
              aria-label="Changer de langue / Chanje lang"
            >
              {lang === "fr" ? "KR" : "FR"}
            </button>
            <Link
              to="/contact"
              className="inline-flex items-center gap-1.5 font-semibold px-4 py-2 rounded-full text-sm bg-gold text-navy transition-transform hover:scale-105"
            >
              {t.ctaContact} <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <button className="md:hidden p-2" onClick={() => setMenuOpen((o) => !o)} aria-label="Ouvrir le menu">
            {menuOpen ? <X className="w-6 h-6 text-navy" /> : <Menu className="w-6 h-6 text-navy" />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden border-t border-navy/10 bg-paper">
          <div className="px-4 py-3 flex flex-col gap-1">
            {ROUTES.map((r) => (
              <NavLink key={r.to} to={r.to} end={r.to === "/"} onClick={() => setMenuOpen(false)} className={linkClass}>
                {t.nav[r.key]}
              </NavLink>
            ))}
            <button
              onClick={() => setLang(lang === "fr" ? "kr" : "fr")}
              className="mt-2 text-left font-mono text-xs uppercase tracking-widest px-4 py-2 text-ink-soft"
            >
              {lang === "fr" ? "Kreyòl (KR)" : "Français (FR)"}
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

