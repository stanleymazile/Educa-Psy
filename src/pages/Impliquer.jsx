import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle, GraduationCap, Handshake, Heart, School, Smartphone, UserCheck, Users } from "lucide-react";
import { usePageTitle } from "../hooks/usePageTitle.js";
import Reveal from "../components/Reveal.jsx";
import PageHero from "../components/PageHero.jsx";
import { ORG_FACTS } from "../data/content.js";

const POUR_JEUNES = [
  "Mieux connaître leurs droits", "Développer leur confiance", "Gérer leurs émotions",
  "Développer leurs compétences", "Accéder à l'information", "Bénéficier du mentorat",
  "Développer des projets", "Découvrir les opportunités", "Participer à la vie communautaire",
  "Devenir acteurs du changement",
];

const POUR_ECOLES = [
  "Soutien psychologique", "Sensibilisation", "Prévention", "Jeux éducatifs", "Clubs d'échecs",
  "Formations", "Activités sportives", "Éducation aux droits de l'enfant", "Éducation au genre",
  "Gestion des émotions", "Prévention des violences", "Accompagnement des élèves",
];

const PARCOURS = [
  {
    key: "benevole",
    Icon: Heart,
    title: "Devenir bénévole",
    desc: "Les bénévoles contribuent dans l'éducation, la psychologie, la sensibilisation, les activités avec les enfants et les jeunes, la communication, le numérique et les événements.",
    cta: "Je m'engage",
    sujet: "Bénévolat",
    dark: true,
  },
  {
    key: "mentor",
    Icon: UserCheck,
    title: "Devenir mentor",
    desc: "Les mentors accompagnent les jeunes dans leurs études, leur orientation, leur développement personnel, leur entrepreneuriat et leurs projets communautaires.",
    cta: "Je deviens mentor",
    sujet: "Devenir mentor",
    dark: false,
  },
  {
    key: "ecole",
    Icon: School,
    title: "Vous dirigez une école ?",
    desc: "Soutien psychologique, prévention, clubs d'échecs, formations : discutons d'un partenariat adapté à votre établissement.",
    cta: "Proposer un partenariat",
    sujet: "Programme scolaire",
    dark: false,
    accentGreen: true,
  },
  {
    key: "partenaire",
    Icon: Handshake,
    title: "Institution, bailleur ou partenaire ?",
    desc: "Vous représentez une organisation, un bailleur ou une institution ? Proposez un partenariat via notre formulaire dédié.",
    cta: "Remplir le formulaire",
    href: ORG_FACTS.partnershipFormUrl,
    dark: false,
  },
];

export default function Impliquer() {
  usePageTitle("S'impliquer");

  return (
    <div>
      <PageHero eyebrow="Rejoignez-nous" title="S'impliquer avec Educa-Psy" desc="Jeunes, écoles, bénévoles, mentors : chacun a une place dans notre mission." />

      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-12">
          <Reveal>
            <h2 className="font-display text-2xl mb-4 flex items-center gap-2 text-navy">
              <GraduationCap className="w-6 h-6 text-gold" /> Educa-Psy et les jeunes
            </h2>
            <p className="mb-4 text-ink-soft">Les jeunes occupent une place centrale dans notre vision. Nous souhaitons leur permettre de :</p>
            <ul className="space-y-2">
              {POUR_JEUNES.map((v) => (
                <li key={v} className="flex items-start gap-2 text-sm text-ink-soft">
                  <CheckCircle className="w-4 h-4 flex-shrink-0 mt-0.5 text-gold-deep" />
                  <span>{v}</span>
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="font-display text-2xl mb-4 flex items-center gap-2 text-navy">
              <School className="w-6 h-6 text-gold" /> Educa-Psy et les écoles
            </h2>
            <p className="mb-4 text-ink-soft">L'école est un partenaire stratégique. Nous travaillons avec les établissements scolaires pour développer :</p>
            <ul className="space-y-2">
              {POUR_ECOLES.map((v) => (
                <li key={v} className="flex items-start gap-2 text-sm text-ink-soft">
                  <CheckCircle className="w-4 h-4 flex-shrink-0 mt-0.5 text-gold-deep" />
                  <span>{v}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <Reveal>
          <div className="max-w-3xl mx-auto text-center">
            <Smartphone className="w-7 h-7 mx-auto mb-4 text-gold" />
            <h2 className="font-display text-2xl mb-3 text-navy">Educa-Psy et le numérique</h2>
            <p className="mb-4 text-ink-soft">
              Nous développons une forte présence numérique : site web institutionnel, application mobile, contenus
              éducatifs, campagnes sur les réseaux sociaux, outils de sensibilisation et ressources numériques pour
              les jeunes.
            </p>
            <p className="text-sm italic text-ink-soft">
              L'application mobile Educa-Psy est envisagée comme un outil destiné aux jeunes autour de
              l'information, de l'éducation et du bien-être psychologique.
            </p>
          </div>
        </Reveal>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="max-w-3xl mx-auto text-center">
            <Users className="w-7 h-7 mx-auto mb-4 text-gold" />
            <h2 className="font-display text-2xl mb-3 text-navy">Notre équipe</h2>
            <p className="text-ink-soft">
              Educa-Psy a été fondée par <strong className="text-navy">Stanley Mazile</strong>, psychologue et
              consultant. L'organisation s'appuie sur une équipe pluridisciplinaire de professionnels,
              collaborateurs et bénévoles engagés en psychologie, éducation, travail social, communication,
              développement communautaire, numérique et formation.
            </p>
          </div>
        </Reveal>
      </section>

      {/* 4 parcours d'engagement, y compris "école" et "partenaire institutionnel" bien visibles */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-5xl mx-auto grid sm:grid-cols-2 gap-8">
          {PARCOURS.map((p, i) => {
            const btnClass = `inline-flex items-center gap-2 font-semibold px-5 py-2.5 rounded-full text-sm w-fit transition-transform hover:scale-105 ${
              p.dark ? "bg-gold text-navy" : p.accentGreen ? "bg-green text-white" : "bg-navy text-white"
            }`;
            return (
              <Reveal key={p.key} delay={i * 80}>
                <div
                  className={`rounded-3xl p-8 h-full flex flex-col ${
                    p.dark ? "bg-navy" : p.accentGreen ? "bg-green-soft border border-green/20" : "bg-gold-soft border border-gold/30"
                  }`}
                >
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 ${
                      p.dark ? "bg-gold/15" : "bg-white"
                    }`}
                  >
                    <p.Icon className={`w-6 h-6 ${p.dark ? "text-gold" : p.accentGreen ? "text-green" : "text-gold-deep"}`} />
                  </div>
                  <h3 className={`font-display text-xl mb-3 ${p.dark ? "text-white" : "text-navy"}`}>{p.title}</h3>
                  <p className={`text-sm mb-6 leading-relaxed flex-1 ${p.dark ? "text-white/70" : "text-ink-soft"}`}>{p.desc}</p>
                  {p.href ? (
                    <a href={p.href} target="_blank" rel="noopener noreferrer" className={btnClass}>
                      {p.cta} <ArrowRight className="w-4 h-4" />
                    </a>
                  ) : (
                    <Link to="/contact" state={{ sujet: p.sujet }} className={btnClass}>
                      {p.cta} <ArrowRight className="w-4 h-4" />
                    </Link>
                  )}
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>
    </div>
  );
}

