import { useState } from "react";
import { usePageTitle } from "../hooks/usePageTitle.js";
import Reveal from "../components/Reveal.jsx";
import PageHero from "../components/PageHero.jsx";
import SectionHeader from "../components/SectionHeader.jsx";
import ProgramItem from "../components/ProgramItem.jsx";
import { DOMAINES, PROGRAMMES, AXES } from "../data/content.js";

export default function Programmes() {
  usePageTitle("Programmes");
  const [openIdx, setOpenIdx] = useState(0);

  return (
    <div>
      <PageHero
        eyebrow="Ce que nous faisons"
        title="Nos programmes"
        desc="Une approche intégrée combinant psychologie, éducation, prévention et innovation."
      />

      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="max-w-4xl mx-auto text-center">
            <span className="font-mono text-xs uppercase tracking-widest text-gold-deep">{DOMAINES.length} domaines d'intervention</span>
            <h2 className="font-display text-2xl sm:text-3xl mt-3 mb-8 text-navy">Ce qui structure notre action</h2>
            <div className="flex flex-wrap justify-center gap-2.5">
              {DOMAINES.map((d) => (
                <span key={d} className="text-sm font-medium px-4 py-2 rounded-full border border-navy/10 bg-white text-navy">
                  {d}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </section>

      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <Reveal>
            <SectionHeader eyebrow="En détail" title="Nos 17 programmes" desc="Sélectionnez un programme pour en découvrir le détail." />
          </Reveal>
          <div className="space-y-3">
            {PROGRAMMES.map((p, idx) => (
              <ProgramItem key={p.title} program={p} isOpen={openIdx === idx} onToggle={() => setOpenIdx(openIdx === idx ? -1 : idx)} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-navy">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <SectionHeader
              eyebrow="Vision à long terme"
              title="Nos axes stratégiques"
              desc="Six axes structurent le développement d'Educa-Psy pour les prochaines années."
              light
            />
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {AXES.map((a, i) => (
              <Reveal key={a.num} delay={i * 60}>
                <div className="rounded-2xl p-6 h-full bg-navy-light">
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-11 h-11 rounded-xl flex items-center justify-center bg-gold/15">
                      <a.Icon className="w-5 h-5 text-gold" />
                    </div>
                    <span className="font-mono text-sm text-white/35">AXE {a.num}</span>
                  </div>
                  <h3 className="font-semibold text-white mb-2">{a.title}</h3>
                  <p className="text-sm leading-relaxed text-white/70">{a.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
