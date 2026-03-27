import { For, onMount, onCleanup } from "solid-js";

import Card from "./Card";
import type { CardGridProps } from "../types";
import styles from "../views/Home.module.css";

const CardGrid = ({ cards }: CardGridProps) => {
  let gridRef: HTMLDivElement | undefined;

  function setPowerOfTwoColumns() {
    if (!gridRef) return;
    const columnWidth = 350;
    let columns = Math.floor(gridRef.clientWidth / columnWidth);
    let powerOfTwoColumns = 1;
    while (powerOfTwoColumns * 2 <= columns) {
      powerOfTwoColumns *= 2;
    }
    if (powerOfTwoColumns > columns) {
      powerOfTwoColumns /= 2;
    }
    gridRef.style.gridTemplateColumns = `repeat(${powerOfTwoColumns}, 1fr)`;
  }

  onMount(() => {
    setPowerOfTwoColumns();
    window.addEventListener("resize", setPowerOfTwoColumns);
  });

  onCleanup(() => {
    window.removeEventListener("resize", setPowerOfTwoColumns);
  });

  return (
    <div ref={gridRef} class={styles.cards}>
      <For each={cards}>{(c) => <Card {...c} />}</For>
    </div>
  );
};

export default CardGrid;
