export default function IconCard({ item }) {
  const { title, desc, Icon } = item;
  return (
    <div className="group rounded-2xl border border-navy/10 bg-white p-6 transition-all duration-200 hover:-translate-y-1 hover:shadow-lg">
      <div className="w-11 h-11 rounded-xl bg-gold-soft flex items-center justify-center mb-4">
        <Icon className="w-5 h-5 text-gold-deep" />
      </div>
      <h3 className="font-semibold text-navy mb-2">{title}</h3>
      <p className="text-sm leading-relaxed text-ink-soft">{desc}</p>
    </div>
  );
}
