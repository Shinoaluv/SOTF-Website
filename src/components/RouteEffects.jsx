import { useEffect } from "react";
import { useLocation } from "react-router-dom";
const titles = {
  "/": "Hear today. Protect tomorrow.",
  "/about": "About us",
  "/programs": "Our work",
  "/impact": "Our impact",
  "/get-involved": "Get involved",
  "/donate": "Donate",
  "/contact": "Contact",
};
export default function RouteEffects() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    document.title = `${titles[pathname] || "Page not found"} | Sound of the Future`;
    const frame = requestAnimationFrame(() => {
      const target = hash
        ? document.getElementById(decodeURIComponent(hash.slice(1)))
        : document.getElementById("main-content");
      if (hash && target) target.scrollIntoView({ behavior: "instant" });
      else window.scrollTo({ top: 0, behavior: "instant" });
      if (target) {
        target.setAttribute("tabindex", "-1");
        target.focus({ preventScroll: true });
      }
    });
    return () => cancelAnimationFrame(frame);
  }, [pathname, hash]);
  return null;
}
