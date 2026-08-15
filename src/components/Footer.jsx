import { Link } from "react-router-dom";
import { Facebook, Heart, Linkedin, MapPin, MessageCircle, Youtube } from "lucide-react";
import { useLanguage } from "../context/LanguageContext.jsx";
import { ORG_FACTS } from "../data/content.js";
import { ROUTES } from "./Nav.jsx";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-navy">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <span className="font-display text-lg font-medium text-white">
              Educa<span className="text-gold">-Psy</span>
            </span>
            <p className="text-sm mt-4 mb-5 leading-relaxed text-white/60">{t.footerTagline}</p>
            <a
              href={ORG_FACTS.donateUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold px-4 py-2 rounded-full bg-gold text-navy transition-transform hover:scale-105"
            >
              Faire un don <Heart className="w-4 h-4 fill-navy" />
            </a>
          </div>

          <div>
            <h4 className="font-mono text-xs uppercase tracking-widest text-white mb-4">{t.footerNav}</h4>
            <ul className="space-y-2 text-sm">
              {ROUTES.map((r) => (
                <li key={r.to}>
                  <Link to={r.to} className="text-white/65 hover:opacity-70 transition-opacity">
                    {t.nav[r.key]}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-mono text-xs uppercase tracking-widest text-white mb-4">{t.footerZone}</h4>
            <p className="text-sm flex items-start gap-2 text-white/65">
              <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5 text-gold" />
              <span>{ORG_FACTS.address}</span>
            </p>
          </div>

          <div>
            <h4 className="font-mono text-xs uppercase tracking-widest text-white mb-4">{t.footerSuivez}</h4>
            <div className="flex gap-3">
              <a
                href={ORG_FACTS.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-9 h-9 rounded-full flex items-center justify-center bg-white/10 text-white hover:opacity-70 transition-opacity"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href={ORG_FACTS.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-9 h-9 rounded-full flex items-center justify-center bg-white/10 text-white hover:opacity-70 transition-opacity"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={ORG_FACTS.social.youtube}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="w-9 h-9 rounded-full flex items-center justify-center bg-white/10 text-white hover:opacity-70 transition-opacity"
              >
                <Youtube className="w-4 h-4" />
              </a>
              <a
                href={ORG_FACTS.social.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="w-9 h-9 rounded-full flex items-center justify-center bg-white/10 text-white hover:opacity-70 transition-opacity"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 text-sm text-center border-t border-white/10 text-white/40">
          © {new Date().getFullYear()} Educa-Psy. Tous droits réservés.
        </div>
      </div>
    </footer>
  );
}

