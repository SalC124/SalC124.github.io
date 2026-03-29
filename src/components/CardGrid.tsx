import { For, onMount, onCleanup } from "solid-js";

import Card from "./Card";
import type { CardGridProps } from "../types";
import styles from "./CardGrid.module.css";

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

  onMount(() => {
    updateColumns();
    window.addEventListener("resize", updateColumns);
  });

  onCleanup(() => {
    window.removeEventListener("resize", updateColumns);
  });

  return (
    <div
      ref={gridRef}
      class={styles.grid}
      onMouseMove={(e) => {
        const cards = gridRef!.querySelectorAll<HTMLElement>("[data-card]");
        cards.forEach((card) => {
          const rect = card.getBoundingClientRect();
          card.style.setProperty("--mouse-x", `${e.clientX - rect.left}px`);
          card.style.setProperty("--mouse-y", `${e.clientY - rect.top}px`);
        });
      }}
    >
      <For each={cards}>{(c) => <Card {...c} />}</For>
    </div>
  );
};

export default CardGrid;
