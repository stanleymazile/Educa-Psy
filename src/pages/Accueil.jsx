import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight, Heart, Quote } from "lucide-react";
import { usePageTitle } from "../hooks/usePageTitle.js";
import { useLanguage } from "../context/LanguageContext.jsx";
import Reveal from "../components/Reveal.jsx";
import MediaCard from "../components/MediaCard.jsx";
import { slugify } from "../utils/slugify.js";
import { stockImage } from "../utils/images.js";
import { PROGRAMMES, BENEFICIAIRES, ORG_FACTS } from "../data/content.js";

export default function Accueil() {
  usePageTitle("Accueil");
  const { t } = useLanguage();

  const teaserIdx = [0, 3, 4, 5, 11, 16];
  const stats = [
    { n: ORG_FACTS.foundedYear, label: "Fondée à Grand-Goâve" },
    { n: ORG_FACTS.departments, label: "Départements couverts" },
    { n: PROGRAMMES.length, label: "Programmes" },
    { n: BENEFICIAIRES.length, label: "Groupes de bénéficiaires" },
  ];

  return (
    <div>
      {/* HERO — texte concret à gauche, image à droite : simple à lire, moderne à voir */}
      <section className="px-4 sm:px-6 lg:px-8 pt-16 pb-16 sm:pt-20 sm:pb-20 bg-navy overflow-hidden">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          <div>
            <span className="font-mono inline-block text-xs uppercase tracking-widest px-3 py-1.5 rounded-full border border-gold/35 text-gold mb-8">
              {t.heroTag}
            </span>

            <h1 className="font-display text-4xl sm:text-5xl leading-[1.08] text-white font-medium">
              {t.heroTitle}
            </h1>

            <div className="flex flex-wrap gap-2 mt-6">
              {t.heroFormula.map((word) => (
                <span key={word} className="font-mono text-xs uppercase tracking-widest px-3 py-1.5 rounded-full border border-gold/30 text-gold">
                  {word}
                </span>
              ))}
            </div>

            <p className="text-lg leading-relaxed mt-7 max-w-xl text-white/75">{t.heroDesc}</p>

            <div className="flex flex-wrap gap-4 mt-9">
              <Link
                to="/programmes"
                className="inline-flex items-center gap-2 font-semibold px-6 py-3 rounded-full bg-gold text-navy transition-transform hover:scale-105"
              >
                {t.ctaProgrammes} <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/simpliquer"
                className="inline-flex items-center gap-2 font-semibold px-6 py-3 rounded-full border border-white/30 text-white transition-transform hover:scale-105"
              >
                {t.ctaImpliquer}
              </Link>
            </div>
          </div>

          <Reveal delay={100}>
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-2xl overflow-hidden aspect-[3/4] translate-y-6">
                <img src={stockImage(1).src} alt={stockImage(1).alt} loading="lazy" className="w-full h-full object-cover" />
              </div>
              <div className="rounded-2xl overflow-hidden aspect-[3/4]">
                <img src={stockImage(0).src} alt={stockImage(0).alt} loading="lazy" className="w-full h-full object-cover" />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* STATS */}
      <section className="border-b border-navy/10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 grid grid-cols-2 sm:grid-cols-4">
          {stats.map((s, i) => (
            <div key={s.label} className={`text-center px-2 py-2 ${i > 0 ? "border-l border-navy/10" : ""}`}>
              <div className="font-mono text-3xl sm:text-4xl font-semibold text-navy">{String(s.n).padStart(2, "0")}</div>
              <div className="text-xs sm:text-sm mt-1.5 text-ink-soft">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* MISSION */}
      <Reveal>
        <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <span className="font-mono text-xs uppercase tracking-widest text-gold-deep">Notre mission</span>
            <p className="font-display text-2xl sm:text-4xl leading-snug mt-6 text-navy">
              Promouvoir le bien-être psychologique, l'éducation et l'autonomisation des enfants et des jeunes en
              Haïti — tout en contribuant à la prévention des problèmes sociaux et au renforcement des communautés.
            </p>
          </div>
        </section>
      </Reveal>

      {/* PROGRAMMES — aperçu en images, titres cliquables vers le détail */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <SectionHeaderWithLink count={PROGRAMMES.length} />
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {teaserIdx.map((idx, i) => {
              const p = PROGRAMMES[idx];
              return (
                <Reveal key={p.title} delay={i * 60}>
                  <MediaCard
                    image={stockImage(i)}
                    title={p.title}
                    desc={p.intro}
                    to={`/programmes#programme-${slugify(p.title)}`}
                  />
                </Reveal>
              );
            })}
          </div>
          <div className="text-center mt-10">
            <Link to="/programmes" className="inline-flex items-center gap-2 font-semibold text-navy hover:opacity-70 transition-opacity">
              Voir tous les programmes <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* BÉNÉFICIAIRES — aperçu, titre lié vers Projets */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="max-w-2xl mx-auto text-center mb-10">
            <Link to="/projets" className="group inline-flex items-center gap-2 hover:opacity-75 transition-opacity">
              <h2 className="font-display text-3xl sm:text-4xl font-medium text-navy">Qui nous accompagnons</h2>
              <ArrowUpRight className="w-5 h-5 text-navy/40 flex-shrink-0" />
            </Link>
          </div>
        </Reveal>
        <div className="max-w-4xl mx-auto flex flex-wrap justify-center gap-3">
          {BENEFICIAIRES.map((b, i) => (
            <Reveal key={b.title} delay={i * 30}>
              <Link
                to="/projets"
                className="inline-flex items-center gap-2 text-sm font-medium px-4 py-2.5 rounded-full border border-navy/10 bg-white text-navy hover:border-gold hover:-translate-y-0.5 transition-all"
              >
                <b.Icon className="w-4 h-4 text-gold-deep" />
                {b.title}
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* MESSAGE */}
      <Reveal>
        <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-navy">
          <div className="max-w-3xl mx-auto text-center">
            <Quote className="w-9 h-9 mx-auto mb-6 text-gold" />
            <p className="font-display text-xl sm:text-3xl leading-relaxed text-white">
              Chaque enfant et chaque jeune possède un potentiel qui mérite d'être accompagné, protégé et développé.
              Notre ambition est de faire de la psychologie et de l'éducation des outils accessibles au service des
              personnes et des communautés.
            </p>
            <span className="font-mono text-xs uppercase tracking-widest mt-6 inline-block text-white/50">— Notre message</span>
          </div>
        </section>
      </Reveal>

      {/* CTA */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <Reveal>
          <div className="max-w-4xl mx-auto rounded-3xl p-10 sm:p-14 text-center bg-gold-soft">
            <h2 className="font-display text-2xl sm:text-3xl mb-3 text-navy">Devenez bénévole, mentor ou partenaire</h2>
            <p className="mb-8 max-w-xl mx-auto text-ink-soft">
              Rejoignez-nous pour construire, ensemble, un avenir meilleur pour les enfants et les jeunes d'Haïti.
              Votre don finance directement nos programmes psychosociaux, éducatifs et communautaires.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/simpliquer" className="font-semibold px-6 py-3 rounded-full text-white bg-navy transition-transform hover:scale-105">
                S'impliquer
              </Link>
              <Link
                to="/contact"
                className="font-semibold px-6 py-3 rounded-full border border-navy text-navy transition-transform hover:scale-105"
              >
                Nous contacter
              </Link>
              <a
                href={ORG_FACTS.donateUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-semibold px-6 py-3 rounded-full border border-navy text-navy transition-transform hover:scale-105"
              >
                Faire un don <Heart className="w-4 h-4 fill-navy" />
              </a>
            </div>
          </div>
        </Reveal>
      </section>
    </div>
  );
}

function SectionHeaderWithLink({ count }) {
  return (
    <div className="max-w-2xl mx-auto text-center mb-12">
      <span className="font-mono block text-xs uppercase tracking-widest mb-3 text-gold-deep">Nos programmes</span>
      <Link to="/programmes" className="group inline-flex items-center gap-2 hover:opacity-75 transition-opacity">
        <h2 className="font-display text-3xl sm:text-4xl font-medium text-navy">Une approche intégrée, en {count} programmes</h2>
        <ArrowUpRight className="w-5 h-5 text-navy/40 flex-shrink-0" />
      </Link>
      <p className="text-lg mt-4 text-ink-soft">Chaque titre ci-dessous mène directement au détail du programme.</p>
    </div>
  );
}

