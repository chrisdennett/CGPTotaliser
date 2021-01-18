import React from "react";
import styles from "./prizePanel.module.css";
import PrizeProgressIcon from "./PrizeProgressIcon";

export default function PrizePanel({ data, target }) {
  return (
    <div className={styles.prizePanel}>
      <div className={styles.prizeHeader}>
        <h1>ClassBox</h1>
        <h2>{target}</h2>
      </div>

      {data.map((level) => (
        <div key={level.levelNumber} className={styles.prizeIconHolder}>
          <PrizeProgressIcon data={level} />
        </div>
      ))}
    </div>
  );
}
