import Content from "../components/Content";
import Sidebar from "../components/Sidebar";

import styles from "./Home.module.css";
const Home = () => {
  return (
    <div className={styles.container}>
      <Sidebar />
      <Content />
    </div>
  );
};

export default Home;
