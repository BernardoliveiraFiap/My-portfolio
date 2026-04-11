import { sections } from "../../data/sections";
import { handleSectionLink, type ScrollAlign } from "../../utils/scrollToSection";
import useI18n from "../../hooks/useI18n";
import ebLogo from "../../assets/eb.png";
import "../../css/Header.css";
import { useEffect, useRef, useState } from "react";

const getSectionBlock = (id: string): ScrollAlign =>
  id === "top" || id === "projects" ? "start" : "center";

const Header = () => {
  const { t } = useI18n();
  const [isHiddenOnScroll, setIsHiddenOnScroll] = useState(false);
  const lastScrollYRef = useRef(0);
  const hiddenRef = useRef(false);
  const touchStartYRef = useRef<number | null>(null);
  const headerRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    let ticking = false;
    const minScrollToHide = 96;
    const shouldHideOnScroll = () => window.innerWidth <= 900;

    const setHeaderHidden = (nextValue: boolean) => {
      if (hiddenRef.current === nextValue) return;
      hiddenRef.current = nextValue;
      setIsHiddenOnScroll(nextValue);
    };

    const onScroll = () => {
      if (ticking) return;
      ticking = true;

      window.requestAnimationFrame(() => {
        const currentY = window.scrollY;
        const lastY = lastScrollYRef.current;
        const delta = currentY - lastY;

        if (!shouldHideOnScroll()) {
          setHeaderHidden(false);
          lastScrollYRef.current = currentY;
          ticking = false;
          return;
        }

        if (currentY <= minScrollToHide) {
          setHeaderHidden(false);
        } else if (delta > 0) {
          setHeaderHidden(true);
        } else if (delta < 0) {
          setHeaderHidden(false);
        }

        lastScrollYRef.current = currentY;
        ticking = false;
      });
    };

    const onWheel = (event: WheelEvent) => {
      if (!shouldHideOnScroll()) {
        setHeaderHidden(false);
        return;
      }

      if (window.scrollY <= minScrollToHide) {
        setHeaderHidden(false);
        return;
      }

      if (event.deltaY < 0) setHeaderHidden(false);
      if (event.deltaY > 0) setHeaderHidden(true);
    };

    const onTouchStart = (event: TouchEvent) => {
      touchStartYRef.current = event.touches[0]?.clientY ?? null;
    };

    const onTouchMove = (event: TouchEvent) => {
      if (!shouldHideOnScroll()) {
        setHeaderHidden(false);
        return;
      }

      const previousY = touchStartYRef.current;
      const currentTouchY = event.touches[0]?.clientY;
      if (previousY === null || currentTouchY === undefined) return;

      if (window.scrollY <= minScrollToHide) {
        setHeaderHidden(false);
      } else if (currentTouchY > previousY) {
        setHeaderHidden(false);
      } else if (currentTouchY < previousY) {
        setHeaderHidden(true);
      }

      touchStartYRef.current = currentTouchY;
    };

    const onResize = () => {
      if (!shouldHideOnScroll()) {
        setHeaderHidden(false);
      }
    };

    lastScrollYRef.current = window.scrollY;
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("wheel", onWheel, { passive: true });
    window.addEventListener("touchstart", onTouchStart, { passive: true });
    window.addEventListener("touchmove", onTouchMove, { passive: true });
    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  useEffect(() => {
    const updateHeaderOffset = () => {
      const height = headerRef.current?.offsetHeight ?? 0;
      document.documentElement.style.setProperty("--site-header-offset", `${height}px`);
    };

    updateHeaderOffset();
    window.addEventListener("resize", updateHeaderOffset);

    return () => {
      window.removeEventListener("resize", updateHeaderOffset);
    };
  }, []);

  return (
    <header
      ref={headerRef}
      className={`site-header${isHiddenOnScroll ? " site-header--hidden" : ""}`}
    >
      <div className="site-header__content">
        <a
          className="site-header__brand"
          href="#top"
          onClick={(event) => handleSectionLink(event, "top", "start")}
        >
          <img className="site-header__brand-logo" src={ebLogo} alt={t("header.logoAlt")} />
          <span className="site-header__brand-text">
            {t("header.brandFirst")}{" "}
            <span className="site-header__brand-accent">
              {t("header.brandLast")}
            </span>
          </span>
        </a>
        <nav className="site-header__nav" aria-label={t("header.navLabel")}>
          {sections.map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              onClick={(event) =>
                handleSectionLink(
                  event,
                  section.id,
                  getSectionBlock(section.id)
                )
              }
            >
              {t(section.labelKey)}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
