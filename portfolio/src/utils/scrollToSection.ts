import type { MouseEvent } from "react";

type ScrollTarget = HTMLElement | null;

const findTarget = (id: string): ScrollTarget => {
  if (!id) {
    return null;
  }

  return document.getElementById(id);
};

export type ScrollAlign = "start" | "center" | "end" | "nearest";

export const scrollToSection = (id: string, block: ScrollAlign = "start") => {
  const target = findTarget(id);

  if (!target) {
    return;
  }

  target.scrollIntoView({
    behavior: "smooth",
    block,
    inline: "nearest",
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
};
