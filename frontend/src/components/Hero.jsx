import styles from "./Hero.module.css";
import FetchDetails from "./FetchDetails.jsx";
const Hero = () => {
  return (
    <div className={styles.container}>
      <FetchDetails />
    </div>
  );
};

export default Hero;
