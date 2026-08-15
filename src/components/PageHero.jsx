export default function PageHero({ eyebrow, title, desc }) {
  return (
    <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-navy">
      <div className="max-w-3xl mx-auto text-center">
        {eyebrow && <span className="font-mono text-xs uppercase tracking-widest text-gold">{eyebrow}</span>}
        <h1 className="font-display text-3xl sm:text-5xl font-medium text-white mt-4 mb-4">{title}</h1>
        {desc && <p className="text-lg max-w-2xl mx-auto text-white/75">{desc}</p>}
      </div>
    </section>
  );
}

