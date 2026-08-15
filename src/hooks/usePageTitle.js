import { useEffect } from "react";

export function usePageTitle(title) {
  useEffect(() => {
    document.title = title ? `${title} — Educa-Psy` : "Educa-Psy";
  }, [title]);
}

