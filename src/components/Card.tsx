import type { CardProps } from "../types";
import styles from "../views/Home.module.css";

const Link = (card: CardProps) => {
  return (
    <a class={styles.a} href={card.link}>
      <div class={styles.custcard}>
        <div class={styles["card-header"]}>{card.name}</div>
        {/*works like styles.card-header, but allows for the hyphen in the class name */}
        <div class={styles["card-main"]}>
          <i class={`${card.icon} ${styles.i}`}></i>
        </div>
      </div>
    </a>
  );
};

export default Link;
