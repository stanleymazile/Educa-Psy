import { Link } from "react-router-dom";
import { Sparkles, Target, CheckCircle, Quote } from "lucide-react";
import { usePageTitle } from "../hooks/usePageTitle.js";
import Reveal from "../components/Reveal.jsx";
import PageHero from "../components/PageHero.jsx";
import SectionHeader from "../components/SectionHeader.jsx";
import IconCard from "../components/IconCard.jsx";
import MediaCard from "../components/MediaCard.jsx";
import { stockImage } from "../utils/images.js";
import { VALEURS, APPROCHE, PARTENAIRES, ORG_FACTS } from "../data/content.js";

const VISION = [
  "Chaque enfant peut accéder à une éducation de qualité",
  "Les jeunes peuvent développer pleinement leur potentiel",
  "La santé et le bien-être psychologique sont mieux compris et valorisés",
  "Les enfants et les jeunes sont protégés contre les violences",
  "Les filles et les garçons bénéficient des mêmes opportunités",
  "Les jeunes participent activement au développement de leur communauté",
  "Les personnes vulnérables bénéficient d'un accompagnement adapté",
  "Les communautés disposent de davantage de ressources pour faire face aux difficultés sociales",
];

// Liens "en savoir plus" pour chaque partenaire : externe si vérifié, sinon
// vers la page interne la plus pertinente (pas de lien inventé).
const PARTENAIRE_LINKS = {
  "AUF — Agence Universitaire de la Francophonie": { href: "https://www.auf.org" },
  "AJART Haïti": { to: "/programmes#programme-arts-medias" },
};

export default function APropos() {
  usePageTitle("À propos");

  return (
    <div>
      <PageHero
        eyebrow="À propos"
        title="Qui sommes-nous ?"
        desc="Psychologie, éducation et développement communautaire au service de la jeunesse haïtienne."
      />

      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto grid lg:grid-cols-5 gap-10 items-start">
          <Reveal className="lg:col-span-3">
            <div className="space-y-5 leading-relaxed text-ink">
              <p>
                Educa-Psy est une organisation haïtienne à vocation sociale, éducative et psychologique qui œuvre
                pour promouvoir le bien-être des enfants et des jeunes, renforcer leur autonomie et contribuer au
                développement des communautés en Haïti.
              </p>
              <p>
                Educa-Psy intervient à travers une approche intégrée combinant psychologie, éducation, prévention,
                sensibilisation, formation, accompagnement psychosocial et développement communautaire.
              </p>
              <p>Educa-Psy cherche notamment à intervenir dans les écoles, les communautés et auprès des populations vulnérables.</p>
              <p>
                Fondée en {ORG_FACTS.foundedYear} à {ORG_FACTS.foundedPlace} par{" "}
                <strong className="text-navy">{ORG_FACTS.founder}</strong>, psychologue et consultant, avec le
                soutien de l'Agence Universitaire de la Francophonie (programme RéSACE), Educa-Psy agit aujourd'hui
                dans {ORG_FACTS.departments} départements d'Haïti : {ORG_FACTS.departmentsList.join(", ")} — avec,
                à ce jour, l'essentiel de ses activités concentré dans l'Ouest, autour de Grand-Goâve.
              </p>
            </div>
          </Reveal>
          <Reveal className="lg:col-span-2" delay={100}>
            <div className="rounded-2xl overflow-hidden aspect-[4/5]">
              <img src={stockImage(2).src} alt={stockImage(2).alt} loading="lazy" className="w-full h-full object-cover" />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-t border-navy/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 grid grid-cols-3">
          {[
            { n: ORG_FACTS.foundedYear, label: "Fondée en" },
            { n: ORG_FACTS.departments, label: "Départements couverts" },
            { n: PARTENAIRES.length, label: "Partenaires stratégiques" },
          ].map((s, i) => (
            <div key={s.label} className={`text-center px-2 ${i > 0 ? "border-l border-navy/10" : ""}`}>
              <div className="font-mono text-2xl sm:text-3xl font-semibold text-navy">{s.n}</div>
              <div className="text-xs sm:text-sm mt-1 text-ink-soft">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-12">
          <Reveal>
            <h2 className="font-display text-2xl mb-4 flex items-center gap-2 text-navy">
              <Target className="w-6 h-6 text-gold-deep" /> Notre mission
            </h2>
            <p className="leading-relaxed text-ink-soft">
              La mission d'Educa-Psy est de promouvoir le bien-être psychologique, l'éducation et l'autonomisation
              des enfants et des jeunes en Haïti, tout en contribuant à la prévention des problèmes sociaux et au
              renforcement des communautés. Educa-Psy utilise la psychologie et l'éducation comme des outils de
              transformation individuelle et sociale.
            </p>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="font-display text-2xl mb-4 flex items-center gap-2 text-navy">
              <Sparkles className="w-6 h-6 text-gold-deep" /> Notre vision
            </h2>
            <p className="mb-4 text-ink-soft">Educa-Psy aspire à une société haïtienne dans laquelle :</p>
            <ul className="space-y-2">
              {VISION.map((v) => (
                <li key={v} className="flex items-start gap-2 text-sm text-ink-soft">
                  <CheckCircle className="w-4 h-4 flex-shrink-0 mt-0.5 text-gold-deep" />
                  <span>{v}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeader eyebrow="Nos valeurs" title="Ce qui guide chacune de nos actions" />
        </Reveal>
        <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {VALEURS.map((v, i) => (
            <Reveal key={v.title} delay={i * 50}>
              <IconCard item={v} />
            </Reveal>
          ))}
        </div>
      </section>

      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <Reveal>
          <SectionHeader eyebrow="Notre approche" title="Comment nous travaillons" to="/programmes" />
        </Reveal>
        <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {APPROCHE.map((a, i) => (
            <Reveal key={a.title} delay={i * 50}>
              <IconCard item={a} />
            </Reveal>
          ))}
        </div>
      </section>

      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeader eyebrow="Confirmés et publics" title="Nos partenaires" desc="Les collaborations ci-dessous sont déjà officielles et annoncées." />
        </Reveal>
        <div className="max-w-3xl mx-auto grid sm:grid-cols-2 gap-6">
          {PARTENAIRES.map((p, i) => (
            <Reveal key={p.name} delay={i * 80}>
              <MediaCard
                image={stockImage(i)}
                title={p.name}
                desc={p.desc}
                to={PARTENAIRE_LINKS[p.name]?.to}
                href={PARTENAIRE_LINKS[p.name]?.href}
              />
            </Reveal>
          ))}
        </div>
      </section>

      {/* Emplacement honnête pour témoignages — pas de citation inventée */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <Reveal>
          <div className="max-w-3xl mx-auto rounded-3xl border-2 border-dashed border-navy/15 p-10 text-center">
            <Quote className="w-8 h-8 mx-auto mb-4 text-navy/30" />
            <p className="font-mono text-xs uppercase tracking-widest text-ink-soft mb-2">Témoignages</p>
            <p className="text-ink-soft max-w-lg mx-auto">
              Espace réservé pour les témoignages de bénéficiaires, de partenaires ou d'écoles — à ajouter au fur et
              à mesure qu'ils sont recueillis.
            </p>
          </div>
        </Reveal>
      </section>

      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="max-w-3xl mx-auto rounded-3xl p-8 sm:p-10 bg-gold-soft">
            <h2 className="font-display text-xl mb-4 text-navy">En résumé</h2>
            <p className="leading-relaxed text-ink">
              Educa-Psy est une organisation haïtienne qui œuvre dans les domaines de la psychologie, de
              l'éducation et du développement communautaire. Sa mission est de promouvoir le bien-être, l'éducation
              et l'autonomisation des enfants et des jeunes en Haïti. À travers ses programmes de soutien
              psychosocial, d'intervention scolaire, d'éducation, de mentorat, de jeux d'esprit, de sensibilisation,
              de formation, de sport, d'éducation numérique, d'environnement, d'éducation financière, de cinéma,
              d'arts &amp; médias et de consulting, Educa-Psy cherche à apporter des réponses adaptées aux besoins
              des communautés. L'organisation accorde une attention particulière aux enfants, aux adolescents, aux
              jeunes, aux femmes, aux écoles et aux personnes vulnérables.
            </p>
            <Link to="/programmes" className="inline-flex items-center gap-1.5 text-sm font-semibold text-navy mt-4 hover:opacity-70 transition-opacity">
              Voir le détail des programmes →
            </Link>
          </div>
        </Reveal>
      </section>
    </div>
  );
}

