import CardGrid from "../components/CardGrid";
import styles from "./Home.module.css";
import { cards } from "../data/cards";

const Home = () => {
  return (
    <>
      <div class={styles.header}>
        <h1>
          <a href="https://BCAr.fun/">BCAr.fun</a>
          {" Link Bank, "}
          <em>but better</em>
        </h1>
      </div>
      <CardGrid cards={cards} />
      <div class={styles.footer}>
        <p>
          Based on <a href="http://bcar.fun/">BCAr.fun</a>
          {" by "}
          <a href="http://aidanglickman.com/">Aidan Glickman</a>
        </p>

        <p>
          <em>
            Made Better by Sal (
            <a href="https://github.com/SalC124">https://github.com/SalC124</a>)
          </em>
        </p>
      </div>
    </>
  );
};

export default Home;
