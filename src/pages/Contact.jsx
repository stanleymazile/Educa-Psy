import { useState } from "react";
import { useLocation } from "react-router-dom";
import { CheckCircle, ExternalLink, Facebook, Linkedin, Mail, MapPin, MessageCircle, Phone, Send, Youtube } from "lucide-react";
import { usePageTitle } from "../hooks/usePageTitle.js";
import Reveal from "../components/Reveal.jsx";
import PageHero from "../components/PageHero.jsx";
import { ORG_FACTS } from "../data/content.js";

// TODO (avant publication) : crée un formulaire gratuit sur https://formspree.io
// et remplace la valeur ci-dessous par ton propre endpoint (ex. "https://formspree.io/f/abcd1234").
const FORM_ENDPOINT = "https://formspree.io/f/REMPLACER_PAR_TON_ID";
const FORM_CONFIGURED = !FORM_ENDPOINT.includes("REMPLACER_PAR_TON_ID");

const SUJETS = ["Bénévolat", "Devenir mentor", "Partenariat", "Programme scolaire", "Autre"];

export default function Contact() {
  usePageTitle("Contact");
  const location = useLocation();
  const preselectedSujet = location.state?.sujet;

  const [form, setForm] = useState({
    nom: "",
    email: "",
    sujet: SUJETS.includes(preselectedSujet) ? preselectedSujet : "Bénévolat",
    message: "",
  });
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error

  async function handleSubmit(e) {
    e.preventDefault();

    if (!FORM_CONFIGURED) {
      setStatus("error");
      return;
    }

    setStatus("sending");
    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new FormData(e.target),
      });
      setStatus(res.ok ? "sent" : "error");
    } catch {
      setStatus("error");
    }
  }

  return (
    <div>
      <PageHero
        eyebrow="Contact"
        title="Parlons-en"
        desc="Découvrez nos programmes, devenez bénévole, mentor ou partenaire — nous serions ravis de vous entendre."
      />

      <section className="pt-12 px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-sm text-ink-soft">
              Notre présence numérique est pensée pour vous permettre de découvrir l'organisation, suivre nos
              activités, lire nos ressources, participer à nos projets, devenir bénévole, devenir mentor, devenir
              partenaire ou simplement nous soutenir.
            </p>
          </div>
        </Reveal>
      </section>

      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto grid lg:grid-cols-5 gap-8">
          <Reveal className="lg:col-span-3">
            <div className="rounded-3xl border border-navy/10 bg-white p-8 h-full">
              {status === "sent" ? (
                <div className="text-center py-14">
                  <CheckCircle className="w-11 h-11 mx-auto mb-4 text-green" />
                  <h3 className="font-display text-xl mb-2 text-navy">Merci pour votre message !</h3>
                  <p className="text-ink-soft">Nous reviendrons vers vous très rapidement.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate>
                  <div className="grid sm:grid-cols-2 gap-5 mb-5">
                    <div>
                      <label htmlFor="nom" className="block text-sm font-medium mb-1.5 text-navy">
                        Nom complet
                      </label>
                      <input
                        id="nom"
                        name="nom"
                        required
                        value={form.nom}
                        onChange={(e) => setForm({ ...form, nom: e.target.value })}
                        className="w-full border border-[#D8D5CC] rounded-xl px-4 py-2.5"
                        placeholder="Votre nom"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-1.5 text-navy">
                        Email
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className="w-full border border-[#D8D5CC] rounded-xl px-4 py-2.5"
                        placeholder="vous@exemple.com"
                      />
                    </div>
                  </div>

                  <div className="mb-5">
                    <label htmlFor="sujet" className="block text-sm font-medium mb-1.5 text-navy">
                      Sujet
                    </label>
                    <select
                      id="sujet"
                      name="sujet"
                      value={form.sujet}
                      onChange={(e) => setForm({ ...form, sujet: e.target.value })}
                      className="w-full border border-[#D8D5CC] rounded-xl px-4 py-2.5"
                    >
                      {SUJETS.map((s) => (
                        <option key={s} value={s}>
                          {s}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="mb-6">
                    <label htmlFor="message" className="block text-sm font-medium mb-1.5 text-navy">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="w-full border border-[#D8D5CC] rounded-xl px-4 py-2.5"
                      placeholder="Votre message..."
                    />
                  </div>

                  {status === "error" && (
                    <p className="text-sm mb-4 text-ink-soft">
                      {FORM_CONFIGURED
                        ? "Un problème est survenu lors de l'envoi. "
                        : "Le formulaire n'est pas encore configuré. "}
                      Écrivez-nous directement à{" "}
                      <a href={`mailto:${ORG_FACTS.email}`} className="underline text-navy">
                        {ORG_FACTS.email}
                      </a>{" "}
                      en attendant.
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="inline-flex items-center gap-2 font-semibold px-6 py-3 rounded-full text-white bg-navy transition-transform hover:scale-105 disabled:opacity-60 disabled:hover:scale-100"
                  >
                    {status === "sending" ? "Envoi..." : "Envoyer"} <Send className="w-4 h-4" />
                  </button>

                  <p className="text-xs mt-4 text-ink-soft">
                    Vous préférez nous écrire directement ?{" "}
                    <a href={`mailto:${ORG_FACTS.email}`} className="underline">
                      {ORG_FACTS.email}
                    </a>
                  </p>
                </form>
              )}
            </div>
          </Reveal>

          <Reveal className="lg:col-span-2" delay={100}>
            <div className="space-y-6">
              <div className="rounded-3xl p-8 bg-navy space-y-4">
                <h3 className="font-display text-lg text-white mb-2">Nous trouver</h3>
                <div className="flex items-start gap-3 text-sm text-white/70">
                  <MapPin className="w-5 h-5 flex-shrink-0 text-gold" />
                  <span>{ORG_FACTS.address}</span>
                </div>
                <a href={`tel:${ORG_FACTS.phoneHref}`} className="flex items-center gap-3 text-sm text-white/70 hover:opacity-70 transition-opacity">
                  <Phone className="w-5 h-5 flex-shrink-0 text-gold" />
                  <span>{ORG_FACTS.phoneDisplay}</span>
                </a>
                <a href={`mailto:${ORG_FACTS.email}`} className="flex items-center gap-3 text-sm text-white/70 hover:opacity-70 transition-opacity">
                  <Mail className="w-5 h-5 flex-shrink-0 text-gold" />
                  <span>{ORG_FACTS.email}</span>
                </a>
              </div>

              <div className="rounded-3xl p-8 border border-gold/30 bg-gold-soft">
                <h3 className="font-display text-lg mb-4 text-navy">Suivez-nous</h3>
                <div className="flex gap-3">
                  <a href={ORG_FACTS.social.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="w-10 h-10 rounded-full flex items-center justify-center bg-white text-navy hover:opacity-70 transition-opacity">
                    <Facebook className="w-4 h-4" />
                  </a>
                  <a href={ORG_FACTS.social.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="w-10 h-10 rounded-full flex items-center justify-center bg-white text-navy hover:opacity-70 transition-opacity">
                    <Linkedin className="w-4 h-4" />
                  </a>
                  <a href={ORG_FACTS.social.youtube} target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="w-10 h-10 rounded-full flex items-center justify-center bg-white text-navy hover:opacity-70 transition-opacity">
                    <Youtube className="w-4 h-4" />
                  </a>
                  <a href={ORG_FACTS.social.whatsapp} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="w-10 h-10 rounded-full flex items-center justify-center bg-white text-navy hover:opacity-70 transition-opacity">
                    <MessageCircle className="w-4 h-4" />
                  </a>
                </div>
              </div>

              <div className="rounded-3xl p-8 border border-navy/10 bg-white">
                <h3 className="font-display text-lg mb-2 text-navy">Partenariat institutionnel</h3>
                <p className="text-sm text-ink-soft mb-4">Bailleur, école ou organisation ? Un formulaire dédié va plus vite.</p>
                <a
                  href={ORG_FACTS.partnershipFormUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-navy hover:opacity-70 transition-opacity"
                >
                  Remplir le formulaire <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}

