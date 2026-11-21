import { useEffect, useRef } from "react";

export default function useHomepageMotion() {
  const rootRef = useRef(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return undefined;

    const cleanups = [];
    const addTilt = (element, maximum, xName, yName) => {
      const move = (event) => {
        const rect = element.getBoundingClientRect();
        if (!rect.width || !rect.height) return;
        const x = (event.clientX - rect.left) / rect.width - 0.5;
        const y = (event.clientY - rect.top) / rect.height - 0.5;
        element.style.setProperty(xName, (x * maximum) + "deg");
        element.style.setProperty(yName, (-y * maximum) + "deg");
      };
      const reset = () => {
        element.style.setProperty(xName, "0deg");
        element.style.setProperty(yName, "0deg");
      };
      element.addEventListener("pointermove", move, { passive: true });
      element.addEventListener("pointerleave", reset, { passive: true });
      cleanups.push(() => {
        element.removeEventListener("pointermove", move);
        element.removeEventListener("pointerleave", reset);
      });
    };

    if (window.matchMedia("(pointer:fine)").matches) {
      root.querySelectorAll(".ls-hero-visual").forEach((node) =>
        addTilt(node, 16, "--ls-ry", "--ls-rx")
      );
      root.querySelectorAll(".ls-card").forEach((node) =>
        addTilt(node, 5, "--ls-card-ry", "--ls-card-rx")
      );
    }

    if ("IntersectionObserver" in window) {
      const targets = root.querySelectorAll(
        ":scope > section:not(.ls-hero):not(.ls-stats), :scope > .ls-light > section"
      );

      if (targets.length) {
        root.classList.add("ls-motion-ready");
        const observer = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-visible");
              observer.unobserve(entry.target);
            }
          });
        }, { threshold: 0.12, rootMargin: "0px 0px -24px 0px" });

        targets.forEach((node) => {
          node.classList.add("ls-reveal");
          observer.observe(node);
        });

        cleanups.push(() => {
          observer.disconnect();
          targets.forEach((node) => node.classList.remove("ls-reveal", "is-visible"));
          root.classList.remove("ls-motion-ready");
        });
      }
    }

    return () => cleanups.forEach((cleanup) => cleanup());
  }, []);

  return rootRef;
}
