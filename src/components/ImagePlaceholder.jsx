import { Image as ImageIcon } from "lucide-react";

/**
 * Emplacement visuel réservé pour une vraie photo d'activité. Volontairement pas
 * de photo générique/stock : remplace ce composant par une balise <img> une fois
 * que tu as de vraies photos de vos activités.
 */
export default function ImagePlaceholder({ label, className = "", aspect = "aspect-[4/3]" }) {
  return (
    <div
      className={`${aspect} rounded-2xl border-2 border-dashed border-navy/15 bg-navy/5 flex flex-col items-center justify-center gap-2 text-ink-soft p-4 ${className}`}
    >
      <ImageIcon className="w-7 h-7 opacity-40" />
      <span className="font-mono text-[11px] uppercase tracking-widest opacity-60 text-center">{label}</span>
    </div>
  );
}

