import React from "react";
import styles from "./totaliser.module.css";
import ProgressBandSvg from "./ProgressBandSvg";

export default function LevelPanel({ levelData }) {
  const { bandData, levelNumber } = levelData;
  const bands = [];
  for (let l = 0; l < bandData.length; l++) {
    bands.push(<ProgressBandSvg key={l} {...bandData[l]} />);
  }

  return (
    <div className={styles.currentLevelPanel}>
      <h1 className={styles.levelHeader}>LevelPanel: {levelNumber}</h1>
      {bands}
    </div>
  );
}
