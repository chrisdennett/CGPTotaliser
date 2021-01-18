import React from "react";
import styles from "./background.module.css";
// import { useWindowSize } from "../hooks/useWindowSize";
import Sun from "./Sun";
import Waves1 from "./Waves1";
import Waves2 from "./Waves2";
import Waves3 from "./Waves3";
import Island from "./Island";
import HorizonClouds from "./HorizonClouds";

export default function Background() {
  // const { width: bgWidth, height: bgHeight } = useWindowSize();

  // const vw = 346.6;
  // const vh = 235.5;

  // if (!bgWidth) return null;

  return (
    <div className={styles.background}>
      <Sun className={styles.sun} />

      <HorizonClouds
        className={styles.horizonClouds}
        preserveAspectRatio="none"
      />

      <Waves3 className={styles.waves3} preserveAspectRatio="none" />

      <Island className={styles.island3} />
      <Island className={styles.island2} />

      <Waves2 className={styles.waves2} preserveAspectRatio="none" />

      <Island className={styles.island1} flip />

      <Waves1 className={styles.waves1} preserveAspectRatio="none" />
    </div>
  );
}
