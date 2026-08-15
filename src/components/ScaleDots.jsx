export default function ScaleDots({ scale }) {
  return (
    <div className="flex items-center gap-1 justify-center" aria-hidden="true">
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i} className={`w-1.5 h-1.5 rounded-full bg-gold ${i < scale ? "opacity-100" : "opacity-20"}`} />
      ))}
    </div>
  );
}

