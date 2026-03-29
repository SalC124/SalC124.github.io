import type { CardProps } from "../types";
import styles from "./Card.module.css";

const Link = (card: CardProps) => {
  return (
    <a class={styles.a} href={card.link}>
      <div class={styles.card} data-card>
        <div class={styles.header}>{card.name}</div>
        {/*works like styles.card-header, but allows for the hyphen in the class name */}
        <div class={styles.main}>
          <i class={`${card.icon} ${styles.icon}`}></i>
        </div>
      </div>
    </a>
  );
};

export default Link;
