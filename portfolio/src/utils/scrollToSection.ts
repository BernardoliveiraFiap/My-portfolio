import type { MouseEvent } from "react";

type ScrollTarget = HTMLElement | null;

const findTarget = (id: string): ScrollTarget => {
  if (!id) {
    return null;
  }

  return document.getElementById(id);
};

export type ScrollAlign = "start" | "center" | "end" | "nearest";

const getHeaderOffset = () => {
  const header = document.querySelector<HTMLElement>(".site-header");
  return header ? header.offsetHeight : 0;
};

const clampScrollTop = (value: number) => {
  const maxScroll =
    document.documentElement.scrollHeight - window.innerHeight;

  if (maxScroll <= 0) {
    return 0;
  }

  return Math.min(Math.max(0, value), maxScroll);
};

export const scrollToSection = (id: string, block: ScrollAlign = "start") => {
  const target = findTarget(id);

  if (!target) {
    return;
  }

  if (block === "nearest") {
    target.scrollIntoView({
      behavior: "smooth",
      block,
      inline: "nearest",
    });
    return;
  }

  const headerOffset = getHeaderOffset();
  const rect = target.getBoundingClientRect();
  const absoluteTop = rect.top + window.scrollY;
  const elementHeight = target.offsetHeight;

  let desiredTop = absoluteTop;

  if (block === "start") {
    desiredTop = absoluteTop - headerOffset - 10;
  }

  if (block === "center") {
    const viewportCenter = window.innerHeight / 2;
    desiredTop =
      absoluteTop -
      viewportCenter +
      elementHeight / 2 -
      headerOffset / 2;
  }

  if (block === "end") {
    desiredTop =
      absoluteTop -
      window.innerHeight +
      elementHeight +
      headerOffset +
      12;
  }

  window.scrollTo({
    top: clampScrollTop(desiredTop),
    behavior: "smooth",
  });
};

export const handleSectionLink = (
  event: MouseEvent<HTMLAnchorElement>,
  id: string,
  block: ScrollAlign = "start"
) => {
  event.preventDefault();
  scrollToSection(id, block);
  window.history.replaceState(null, "", `#${id}`);
  window.dispatchEvent(new CustomEvent("section:navigate", { detail: { id } }));
};
