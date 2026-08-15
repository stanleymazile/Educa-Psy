import { Link } from "react-router-dom";
import { ArrowRight, Heart, Quote } from "lucide-react";
import { usePageTitle } from "../hooks/usePageTitle.js";
import { useLanguage } from "../context/LanguageContext.jsx";
import Reveal from "../components/Reveal.jsx";
import { PROGRAMMES, BENEFICIAIRES, ORG_FACTS } from "../data/content.js";

export default function Accueil() {
  usePageTitle("Accueil");
  const { t } = useLanguage();

  const teaser = [0, 3, 4, 5, 11, 16].map((i) => PROGRAMMES[i]);
  const stats = [
    { n: ORG_FACTS.foundedYear, label: "Fondée à Grand-Goâve" },
    { n: ORG_FACTS.departments, label: "Départements couverts" },
    { n: PROGRAMMES.length, label: "Programmes" },
    { n: BENEFICIAIRES.length, label: "Groupes de bénéficiaires" },
  ];

  return (
    <div>
      {/* HERO — un h1 concret d'abord, la formule Educa-Psy en soutien */}
      <section className="px-4 sm:px-6 lg:px-8 pt-20 pb-20 sm:pt-28 sm:pb-28 bg-navy">
        <div className="max-w-5xl mx-auto">
          <span className="font-mono inline-block text-xs uppercase tracking-widest px-3 py-1.5 rounded-full border border-gold/35 text-gold mb-8">
            {t.heroTag}
          </span>

          <h1 className="font-display text-4xl sm:text-6xl leading-[1.05] text-white font-medium max-w-3xl">
            {t.heroTitle}
          </h1>

          <div className="flex flex-wrap gap-2 mt-7">
            {t.heroFormula.map((word) => (
              <span key={word} className="font-mono text-xs uppercase tracking-widest px-3 py-1.5 rounded-full border border-gold/30 text-gold">
                {word}
              </span>
            ))}
          </div>

          <p className="text-lg leading-relaxed mt-8 max-w-2xl text-white/75">{t.heroDesc}</p>

          <div className="flex flex-wrap gap-4 mt-10">
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

      {/* PROGRAMMES — aperçu */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <div className="max-w-2xl mx-auto text-center mb-12">
              <span className="font-mono block text-xs uppercase tracking-widest mb-3 text-gold-deep">Nos programmes</span>
              <h2 className="font-display text-3xl sm:text-4xl font-medium text-navy">Une approche intégrée, en 17 programmes</h2>
              <p className="text-lg mt-4 text-ink-soft">Un aperçu — retrouvez le détail complet de nos programmes.</p>
            </div>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {teaser.map((p, i) => {
              const isGreen = p.accent === "green";
              return (
                <Reveal key={p.title} delay={i * 60}>
                  <div className="rounded-2xl border border-navy/10 p-6 h-full transition-all duration-200 hover:-translate-y-1 hover:shadow-lg">
                    <div className={`w-11 h-11 rounded-xl flex items-center justify-center mb-4 ${isGreen ? "bg-green-soft" : "bg-gold-soft"}`}>
                      <p.Icon className={`w-5 h-5 ${isGreen ? "text-green" : "text-gold-deep"}`} />
                    </div>
                    <h3 className="font-semibold mb-2 text-navy">{p.title}</h3>
                    <p className="text-sm leading-relaxed text-ink-soft">{p.intro}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
          <div className="text-center mt-10">
            <Link to="/programmes" className="inline-flex items-center gap-2 font-semibold text-navy hover:opacity-70 transition-opacity">
              Voir les 17 programmes <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
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

