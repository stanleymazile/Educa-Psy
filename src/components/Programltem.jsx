import { CheckCircle, ChevronDown } from "lucide-react";

export default function ProgramItem({ program, isOpen, onToggle }) {
  const { title, Icon, intro, bullets, note, accent } = program;
  const isGreen = accent === "green";
  const panelId = `programme-${title.replace(/\s+/g, "-").toLowerCase()}`;

  return (
    <div className="rounded-2xl border border-navy/10 bg-white overflow-hidden">
      <button
        onClick={onToggle}
        className="w-full flex items-center gap-4 p-5 text-left"
        aria-expanded={isOpen}
        aria-controls={panelId}
      >
        <div className={`w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 ${isGreen ? "bg-green-soft" : "bg-gold-soft"}`}>
          <Icon className={`w-5 h-5 ${isGreen ? "text-green" : "text-gold-deep"}`} />
        </div>
        <h3 className="font-semibold text-navy flex-1">{title}</h3>
        <ChevronDown
          className={`w-5 h-5 flex-shrink-0 text-ink-soft transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
        />
      </button>

      {isOpen && (
        <div id={panelId} className="px-5 pb-5">
          <p className="text-sm leading-relaxed mb-4 text-ink-soft">{intro}</p>

          {bullets.length > 0 && (
            <ul className="grid sm:grid-cols-2 gap-2 mb-3">
              {bullets.map((b) => (
                <li key={b} className="flex items-start gap-2 text-sm text-ink">
                  <CheckCircle className={`w-4 h-4 flex-shrink-0 mt-0.5 ${isGreen ? "text-green" : "text-gold-deep"}`} />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          )}

          {note && <p className="text-sm italic border-t border-navy/10 pt-3 mt-3 text-ink-soft">{note}</p>}
        </div>
      )}
    </div>
  );
}

