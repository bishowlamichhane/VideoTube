import Header from "./Header";
import styles from "./Content.module.css";
import Hero from "./Hero";

const Content = () => {
  return (
    <div className={styles.container}>
      <Header />
      <Hero />
    </div>
  );
};

export default Content;
