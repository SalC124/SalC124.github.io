import { For, onMount, onCleanup } from "solid-js";

import Card from "./Card";
import type { CardGridProps } from "../types";
import styles from "./CardGrid.module.css";

const radiusSpreadDur = 800;

const CardGrid = ({ cards }: CardGridProps) => {
  let gridRef: HTMLDivElement | undefined;

  function largestDivisorThatFits(
    count: number,
    containerWidth: number,
    minWidth: number,
  ): number {
    const maxColumns = Math.floor(containerWidth / minWidth);
    for (let n = maxColumns; n >= 1; n--) {
      if (count % n === 0) return n;
    }
    return 1;
  }

  function updateColumns() {
    if (!gridRef) return;
    const minColWidth = window.innerWidth <= 768 ? 160 : 350;
    const cols = largestDivisorThatFits(
      cards.length,
      gridRef.clientWidth,
      minColWidth,
    );
    gridRef.style.gridTemplateColumns = `repeat(${cols}, 1fr)`;
  }

  function updateMousePosition(e: MouseEvent) {
    const cardEls = gridRef!.querySelectorAll<HTMLElement>("[data-card]");
    cardEls.forEach((card) => {
      const rect = card.getBoundingClientRect();
      card.style.setProperty("--mouse-x", `${e.clientX - rect.left}px`);
      card.style.setProperty("--mouse-y", `${e.clientY - rect.top}px`);
    });
  }

  function animateRadius(card: HTMLElement, from: number, to: number) {
    const start = performance.now();
    function step(now: number) {
      const t = Math.min((now - start) / radiusSpreadDur, 1);
      const eased = 1 - Math.pow(1 - t, 4); // quartic ease-out
      const value = from + (to - from) * eased;
      card.style.setProperty("--radius", `${value}rem`);
      if (t < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }

  function onMouseEnter(e: MouseEvent) {
    const card = e.currentTarget as HTMLElement;
    const current = parseFloat(card.style.getPropertyValue("--radius") || "12");
    animateRadius(card, current, 32);
  }

  function onMouseLeave(e: MouseEvent) {
    const card = e.currentTarget as HTMLElement;
    const current = parseFloat(card.style.getPropertyValue("--radius") || "32");
    animateRadius(card, current, 12);
  }

  function addCardListeners() {
    const cardEls = gridRef!.querySelectorAll<HTMLElement>("[data-card]");
    cardEls.forEach((card) => {
      card.addEventListener("mouseenter", onMouseEnter);
      card.addEventListener("mouseleave", onMouseLeave);
    });
  }

  onMount(() => {
    updateColumns();
    window.addEventListener("resize", updateColumns);
    window.addEventListener("mousemove", updateMousePosition);

    addCardListeners();
  });

  onCleanup(() => {
    window.removeEventListener("resize", updateColumns);
    window.removeEventListener("mousemove", updateMousePosition);

    addCardListeners();
  });

  return (
    <div ref={gridRef} class={styles.grid}>
      <For each={cards}>{(c) => <Card {...c} />}</For>
    </div>
  );
};

export default CardGrid;
