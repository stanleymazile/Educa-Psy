import { Fragment } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, CheckCircle, ChevronRight, MapPin, Sprout } from "lucide-react";
import { usePageTitle } from "../hooks/usePageTitle.js";
import Reveal from "../components/Reveal.jsx";
import PageHero from "../components/PageHero.jsx";
import SectionHeader from "../components/SectionHeader.jsx";
import IconCard from "../components/IconCard.jsx";
import ScaleDots from "../components/ScaleDots.jsx";
import { STOCK_IMAGES } from "../utils/images.js";
import { BENEFICIAIRES, IMPACT, ORG_FACTS } from "../data/content.js";

const RENAISSANCE_BULLETS = [
  "Accès à la terre", "Production agricole", "Distribution de semences", "Accès aux outils",
  "Formation", "Accompagnement", "Éducation financière", "Microcrédit", "Entrepreneuriat",
  "Utilisation des technologies",
];

// Les 3 images fournies correspondent chacune à un thème réel du terrain.
const GALERIE = [
  { ...STOCK_IMAGES[1], caption: "Éducation en milieu scolaire", to: "/programmes#programme-intervention-psychologique-dans-les-ecoles" },
  { ...STOCK_IMAGES[0], caption: "Droits et protection de l'enfance", to: "/programmes#programme-genre-et-droits-de-l-enfant" },
  { ...STOCK_IMAGES[2], caption: "Développement durable — Renaissance Agricole", to: "/programmes#programme-programme-environnemental" },
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
          <div className="max-w-4xl mx-auto rounded-3xl border border-navy/10 bg-white overflow-hidden">
            <div className="aspect-[21/9] overflow-hidden">
              <img src={STOCK_IMAGES[2].src} alt={STOCK_IMAGES[2].alt} loading="lazy" className="w-full h-full object-cover" />
            </div>
            <div className="p-8 sm:p-10">
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
                Une approche agri-tech a également été envisagée afin d'intégrer les outils numériques, la
                formation et le mentorat.
              </p>
            </div>
          </div>
        </Reveal>
      </section>

      {/* Galerie — 3 thèmes réels du terrain, chaque légende renvoie au programme complet */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <Reveal>
          <div className="max-w-5xl mx-auto">
            <p className="font-mono text-xs uppercase tracking-widest text-gold-deep text-center mb-6">Sur le terrain</p>
            <div className="grid sm:grid-cols-3 gap-4">
              {GALERIE.map((g) => (
                <Link key={g.caption} to={g.to} className="group block rounded-2xl overflow-hidden border border-navy/10">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img src={g.src} alt={g.alt} loading="lazy" className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
                  </div>
                  <div className="p-4 flex items-center justify-between gap-2">
                    <span className="text-sm font-medium text-navy">{g.caption}</span>
                    <ArrowUpRight className="w-4 h-4 text-navy/40 flex-shrink-0" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </Reveal>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="max-w-3xl mx-auto text-center">
            <MapPin className="w-7 h-7 mx-auto mb-4 text-gold-deep" />
            <h2 className="font-display text-2xl mb-3 text-navy">Zone d'intervention</h2>
            <p className="text-ink-soft mb-6">
              Notre siège se trouve à <strong className="text-navy">{ORG_FACTS.address}</strong>, dans la région
              des Palmes. Educa-Psy couvre {ORG_FACTS.departments} départements d'Haïti :{" "}
              <strong className="text-navy">{ORG_FACTS.departmentsList.join(", ")}</strong> — l'essentiel des
              programmes actifs se concentre aujourd'hui dans l'Ouest, avec des interventions ponctuelles ailleurs.
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
          <SectionHeader eyebrow="À qui nous nous adressons" title="Nos bénéficiaires" to="/simpliquer" />
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

