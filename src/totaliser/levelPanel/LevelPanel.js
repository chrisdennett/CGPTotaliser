import React from "react";
import styles from "./levelPanel.module.css";
import ProgressBandSvg from "./ProgressBandSvg";

export default function LevelPanel({ levelData }) {
  const { bandData, levelNumber } = levelData;
  const bands = [];
  for (let l = 0; l < bandData.length; l++) {
    bands.push(<ProgressBandSvg key={l} {...bandData[l]} />);
  }

  return (
    <div className={styles.levelPanel}>
      <h1 className={styles.levelHeader}>
        Level <span className={styles.levelNumber}>{levelNumber}</span>
      </h1>
      {bands}
    </div>
  );
}
