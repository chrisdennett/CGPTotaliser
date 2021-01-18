import React from "react";
import styles from "./prizePanel.module.css";
import PrizeProgressIcon from "./PrizeProgressIcon";

export default function PrizePanel({ data }) {
  return (
    <div className={styles.currentLevelPanel}>
      {data.map((level) => (
        <PrizeProgressIcon key={level.levelNumber} data={level} />
      ))}
    </div>
  );
}
