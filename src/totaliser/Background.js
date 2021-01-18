import React from "react";
// import { useWindowSize } from "../hooks/useWindowSize";
import Sun from "./Sun";
import styles from "./totaliser.module.css";
import Waves1 from "./Waves1";
import Waves2 from "./Waves2";
import Waves3 from "./Waves3";
import Island from "./Island";

export default function Background() {
  // const { width: bgWidth, height: bgHeight } = useWindowSize();

  // const vw = 346.6;
  // const vh = 235.5;

  // if (!bgWidth) return null;

  return (
    <div className={styles.background}>
      <Sun className={styles.sun} />

      <Waves3 className={styles.waves3} />
      <Waves2 className={styles.waves2} />
      <Island className={styles.island1} />
      <Waves1 className={styles.waves1} />
    </div>
  );
}
