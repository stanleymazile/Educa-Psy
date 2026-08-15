import { Fragment } from "react";
import { CheckCircle, ChevronRight, MapPin, Sprout } from "lucide-react";
import { usePageTitle } from "../hooks/usePageTitle.js";
import Reveal from "../components/Reveal.jsx";
import PageHero from "../components/PageHero.jsx";
import SectionHeader from "../components/SectionHeader.jsx";
import IconCard from "../components/IconCard.jsx";
import ScaleDots from "../components/ScaleDots.jsx";
import ImagePlaceholder from "../components/ImagePlaceholder.jsx";
import { BENEFICIAIRES, IMPACT, ORG_FACTS } from "../data/content.js";

const RENAISSANCE_BULLETS = [
  "Accès à la terre", "Production agricole", "Distribution de semences", "Accès aux outils",
  "Formation", "Accompagnement", "Éducation financière", "Microcrédit", "Entrepreneuriat",
  "Utilisation des technologies",
];

const GALERIE = [
  "Séance de soutien psychosocial",
  "Club d'échecs Mat Educa-Psy",
  "Projet Renaissance Agricole",
];

export default function Projets() {
  usePageTitle("Projets");

  return (
    <div>
      <PageHero
        eyebrow="Sur le terrain"
        title="Nos projets & notre impact"
        desc="Des initiatives concrètes pour transformer durablement les communautés haïtiennes."
      />

      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="max-w-4xl mx-auto rounded-3xl border border-navy/10 bg-white p-8 sm:p-10">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 bg-green-soft">
                <Sprout className="w-6 h-6 text-green" />
              </div>
              <div>
                <span className="font-mono text-xs uppercase tracking-widest text-green">Projet phare</span>
                <h2 className="font-display text-2xl text-navy">Renaissance Agricole</h2>
              </div>
            </div>
            <p className="leading-relaxed mb-6 text-ink-soft">
              Un projet visant à contribuer à l'autonomisation économique des femmes, notamment des femmes
              déplacées vers la région des Palmes.
            </p>
            <div className="grid sm:grid-cols-2 gap-2 mb-6">
              {RENAISSANCE_BULLETS.map((b) => (
                <div key={b} className="flex items-start gap-2 text-sm text-ink">
                  <CheckCircle className="w-4 h-4 flex-shrink-0 mt-0.5 text-green" />
                  <span>{b}</span>
                </div>
              ))}
            </div>
            <p className="text-sm italic border-t border-navy/10 pt-4 text-ink-soft">
              Une approche agri-tech a également été envisagée afin d'intégrer les outils numériques, la formation
              et le mentorat.
            </p>
          </div>
        </Reveal>
      </section>

      {/* Galerie — emplacements réservés, pas de photos génériques */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <Reveal>
          <div className="max-w-5xl mx-auto">
            <p className="font-mono text-xs uppercase tracking-widest text-gold-deep text-center mb-6">Sur le terrain</p>
            <div className="grid sm:grid-cols-3 gap-4">
              {GALERIE.map((label) => (
                <ImagePlaceholder key={label} label={label} />
              ))}
            </div>
          </div>
        </Reveal>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="max-w-3xl mx-auto text-center">
            <MapPin className="w-7 h-7 mx-auto mb-4 text-gold" />
            <h2 className="font-display text-2xl mb-3 text-navy">Zone d'intervention</h2>
            <p className="text-ink-soft mb-6">
              Notre siège se trouve à <strong className="text-navy">{ORG_FACTS.address}</strong>, dans la région
              des Palmes. Educa-Psy agit dans {ORG_FACTS.departments} départements d'Haïti :{" "}
              <strong className="text-navy">{ORG_FACTS.departmentsList.join(", ")}</strong>.
            </p>
          </div>
          <div className="max-w-2xl mx-auto rounded-2xl overflow-hidden border border-navy/10">
            <iframe
              title="Localisation d'Educa-Psy — Grand-Goâve, Haïti"
              src={ORG_FACTS.mapsEmbedSrc}
              width="100%"
              height="280"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <div className="text-center mt-4">
            <a href={ORG_FACTS.mapsUrl} target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-navy hover:opacity-70 transition-opacity underline">
              Ouvrir dans Google Maps
            </a>
          </div>
        </Reveal>
      </section>

      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <Reveal>
          <SectionHeader eyebrow="À qui nous nous adressons" title="Nos bénéficiaires" />
        </Reveal>
        <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {BENEFICIAIRES.map((b, i) => (
            <Reveal key={b.title} delay={i * 40}>
              <IconCard item={b} />
            </Reveal>
          ))}
        </div>
      </section>

      <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-navy">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <SectionHeader eyebrow="Notre impact" title="Un impact qui rayonne, de la personne à la société" light />
          </Reveal>
          <div className="flex flex-col sm:flex-row items-stretch justify-center gap-4">
            {IMPACT.map((item, i) => (
              <Fragment key={item.title}>
                <Reveal delay={i * 80} className="flex-1">
                  <div className="rounded-2xl p-6 text-center h-full bg-white/6 border border-white/10">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4 bg-gold/15">
                      <item.Icon className="w-6 h-6 text-gold" />
                    </div>
                    <h3 className="font-semibold text-white mb-2">{item.title}</h3>
                    <p className="text-sm leading-relaxed mb-4 text-white/70">{item.desc}</p>
                    <ScaleDots scale={item.scale} />
                  </div>
                </Reveal>
                {i < IMPACT.length - 1 && (
                  <div className="hidden sm:flex items-center justify-center">
                    <ChevronRight className="w-5 h-5 text-white/30" />
                  </div>
                )}
              </Fragment>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

