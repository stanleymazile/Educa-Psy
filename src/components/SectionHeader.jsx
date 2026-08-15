export default function SectionHeader({ eyebrow, title, desc, light = false }) {
  return (
    <div className="max-w-2xl mx-auto text-center mb-12">
      {eyebrow && (
        <span className={`font-mono block text-xs uppercase tracking-widest mb-3 ${light ? "text-gold" : "text-gold-deep"}`}>
          {eyebrow}
        </span>
      )}
      <h2 className={`font-display text-3xl sm:text-4xl font-medium ${light ? "text-white" : "text-navy"}`}>{title}</h2>
      {desc && <p className={`text-lg mt-4 ${light ? "text-white/75" : "text-ink-soft"}`}>{desc}</p>}
    </div>
  );
}

