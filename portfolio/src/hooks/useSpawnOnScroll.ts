import { useEffect } from "react";

const useSpawnOnScroll = () => {
  useEffect(() => {
    const rightSpawnTextClasses = new Set([
      "skills__title",
      "skills__subtitle",
      "projects__title",
      "projects__subtitle",
      "projects__eyebrow",
      "projects__name",
      "projects__description",
      "certifications__title",
      "certifications__subtitle",
      "contact__title",
      "contact__subtitle",
      "contact__label",
      "contact__value",
      "contact__card-action",
      "site-footer__title",
      "site-footer__text",
      "site-footer__to-top",
      "site-footer__bottom",
    ]);

    const autoSelectors = [
      ".hero__headline",
      ".hero__subtitle",
      ".hero__image-wrap",
      ".skills__content",
      ".skills__title",
      ".skills__subtitle",
      ".skills__card",
      ".projects__header",
      ".projects__card",
      ".projects__title",
      ".projects__subtitle",
      ".projects__name",
      ".projects__description",
      ".certifications__title",
      ".certifications__subtitle",
      ".certifications__card",
      ".contact__header",
      ".contact__title",
      ".contact__subtitle",
      ".contact__card",
      ".contact__label",
      ".contact__value",
      ".contact__card-action",
      ".site-footer__title",
      ".site-footer__text",
      ".site-footer__to-top",
      ".site-footer__bottom",
    ].join(", ");

    const sectionGroups = Array.from(document.querySelectorAll<HTMLElement>("section, footer"));

    sectionGroups.forEach((section) => {
      const targets = Array.from(section.querySelectorAll<HTMLElement>(autoSelectors));

      targets.forEach((target, index) => {
        if (target.closest(".hero__language-float")) {
          return;
        }

        if (!target.dataset.spawn) {
          target.dataset.spawn = "true";
        }

        if (!target.dataset.spawnDirection) {
          const hasHeroClass = Array.from(target.classList).some((className) =>
            className.startsWith("hero__")
          );
          const shouldSpawnFromRight =
            !hasHeroClass &&
            Array.from(target.classList).some((className) => rightSpawnTextClasses.has(className));

          target.dataset.spawnDirection = shouldSpawnFromRight ? "right" : "left";
        }

        if (!target.dataset.spawnDelay) {
          const delay = Math.min(index * 70, 260);
          target.dataset.spawnDelay = `${delay}`;
        }
      });
    });

    const elements = Array.from(document.querySelectorAll<HTMLElement>("[data-spawn]"));

    if (!elements.length) {
      return;
    }

    elements.forEach((element) => {
      element.classList.add("spawn-item");

      const delayValue = element.dataset.spawnDelay;

      if (delayValue) {
        element.style.setProperty("--spawn-delay", `${delayValue}ms`);
      }
    });

    const animationTimeouts: number[] = [];

    const clearAnimationTimeouts = () => {
      animationTimeouts.forEach((timeoutId) => window.clearTimeout(timeoutId));
      animationTimeouts.length = 0;
    };

    const sectionItemsMap = new Map<HTMLElement, HTMLElement[]>();

    sectionGroups.forEach((section) => {
      const sectionItems = Array.from(
        section.querySelectorAll<HTMLElement>("[data-spawn]")
      );

      if (sectionItems.length) {
        sectionItemsMap.set(section, sectionItems);
      }
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const section = entry.target as HTMLElement;
          const sectionItems = sectionItemsMap.get(section);

          if (!sectionItems?.length) {
            return;
          }

          if (entry.isIntersecting) {
            sectionItems.forEach((item) => item.classList.add("is-spawn-visible"));
          } else {
            sectionItems.forEach((item) =>
              item.classList.remove("is-spawn-visible")
            );
          }
        });
      },
      {
        threshold: 0.2,
        rootMargin: "0px 0px -8% 0px",
      }
    );

    sectionItemsMap.forEach((_, section) => observer.observe(section));

    const replaySectionSpawn = (sectionId?: string) => {
      const id = sectionId ?? window.location.hash.slice(1);

      if (!id) {
        return;
      }

      const section = document.getElementById(id);

      if (!section) {
        return;
      }

      clearAnimationTimeouts();

      const sectionItems = Array.from(section.querySelectorAll<HTMLElement>("[data-spawn]"));

      sectionItems.forEach((item) => {
        item.classList.remove("is-spawn-visible");
      });

      const timeoutId = window.setTimeout(() => {
        sectionItems.forEach((item) => item.classList.add("is-spawn-visible"));
      }, 180);

      animationTimeouts.push(timeoutId);
    };

    const handleSectionNavigate = (event: Event) => {
      const customEvent = event as CustomEvent<{ id?: string }>;
      replaySectionSpawn(customEvent.detail?.id);
    };

    const handleHashChange = () => {
      replaySectionSpawn();
    };

    window.addEventListener("hashchange", handleHashChange);
    window.addEventListener("section:navigate", handleSectionNavigate as EventListener);

    return () => {
      observer.disconnect();
      clearAnimationTimeouts();
      window.removeEventListener("hashchange", handleHashChange);
      window.removeEventListener("section:navigate", handleSectionNavigate as EventListener);
    };
  }, []);
};

export default useSpawnOnScroll;
