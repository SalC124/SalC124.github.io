import CardGrid from "../components/CardGrid";
import styles from "./Home.module.css";
import { cards } from "../data/cards";

const Home = () => {
  return (
    <>
      <div class={styles.container}>
        <div class={styles.header}>
          <h1>BCA Link Bank</h1>
        </div>
        <div class={styles.gridWrapper}>
          <CardGrid cards={cards} />
        </div>
        <div class={styles.footer}>
          <p>
            Based on <a href="http://bcar.fun/">BCAr.fun</a>
            {" by "}
            <a href="http://aidanglickman.com/">Aidan Glickman</a>
          </p>

          <p>
            <em>
              Made Better by Sal (
              <a href="https://github.com/SalC124">
                https://github.com/SalC124
              </a>
              )
            </em>
          </p>
        </div>
      </div>
    </>
  );
};

export default Home;
