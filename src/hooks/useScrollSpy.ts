import { useEffect, useState } from "react";

export function useScrollSpy(sectionIds: string[], options?: IntersectionObserverInit) {
  const [activeId, setActiveId] = useState<string>(sectionIds[0] || "");

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) setActiveId(id);
          });
        },
        { root: null, rootMargin: "0px", threshold: 0.6, ...(options || {}) }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, [sectionIds, options]);

  return activeId;
}
