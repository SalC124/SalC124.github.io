import { For, onMount, onCleanup } from "solid-js";

import Card from "./Card";
import type { CardGridProps } from "../types";
import styles from "./CardGrid.module.css";

const CardGrid = ({ cards }: CardGridProps) => {
  let gridRef: HTMLDivElement | undefined;

  function largestDivisorThatFits(
    count: number,
    containerWidth: number,
    minColWidth: number,
  ): number {
    const maxColumns = Math.floor(containerWidth / minColWidth);
    for (let n = maxColumns; n >= 1; n--) {
      if (count % n === 0) return n;
    }
    return 1;
  }

  function updateColumns() {
    if (!gridRef) return;
    const cols = largestDivisorThatFits(cards.length, gridRef.clientWidth, 350);
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
    <div ref={gridRef} class={styles.grid}>
      <For each={cards}>{(c) => <Card {...c} />}</For>
    </div>
  );
};

export default CardGrid;
