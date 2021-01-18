import React from "react";
import Background from "./background/Background";
import LevelPanel from "./levelPanel/LevelPanel";
import PrizePanel from "./prizePanel/PrizePanel";
import styles from "./totaliser.module.css";

export default function Totaliser() {
  const target = 7500;
  const completed = 875;

  const levelData = getLevelData(target, completed);
  const firstUncompletedLevel = levelData.find(
    (l) => l.levelProgress < l.levelMaxScore
  );
  const currLevelIndex = firstUncompletedLevel.levelIndex;

  const allowAnimation = true;

  return (
    <div className={styles.page}>
      <Background allowAnimation={allowAnimation} />

      <div className={styles.content}>
        <PrizePanel data={levelData} target={target} />
        <LevelPanel levelData={levelData[currLevelIndex]} />
      </div>
    </div>
  );
}

const colours = [
  "#5d4fc0",
  "#6975d8",
  "#457fdf",
  "#00a0bd",
  "#00a679",
  "#52ac2f",
  "#f7db3b",
  "#f29e3e",
  "#ff6e5d",
  "#e75047"
];

function getLevelData(target, completed) {
  const bandMax = 75;
  const bandsPerLevel = 10;
  const totalBands = Math.ceil(target / bandMax);
  const totalLevels = Math.ceil(totalBands / bandsPerLevel);
  const levelMaxScore = bandsPerLevel * bandMax;

  let resourcesAllocated = 0;
  const levelData = [];

  for (let l = 0; l < totalLevels; l++) {
    // assume levelComplete: true, then amend in loop
    const level = {
      levelNumber: l + 1,
      levelMaxScore,
      levelProgress: 0,
      levelComplete: true,
      levelIndex: l
    };
    const prevLevelMax = l * bandsPerLevel * bandMax;
    level.bandData = [];

    for (let b = 0; b < bandsPerLevel; b++) {
      const colourIndex = b % colours.length;
      const bandColour = colours[colourIndex];

      // bands target goes up by bandMax each time from previous level max
      let bandTarget = prevLevelMax + (b + 1) * bandMax;

      // the score that hasn't been allocated to a level yet
      const scoreRemaining = completed - resourcesAllocated;

      // the progress
      const bandProgress = scoreRemaining > bandMax ? bandMax : scoreRemaining;
      const bandComplete = bandProgress >= bandMax;
      if (!bandComplete) level.levelComplete = false;
      level.levelProgress += bandProgress;

      level.bandData.push({
        bandMax,
        bandProgress,
        bandTarget,
        bandColour,
        bandComplete
      });

      resourcesAllocated += bandProgress;
    }

    levelData.push(level);
  }

  return levelData;
}
