import React from "react";
import styles from "./totaliser.module.css";
import styled from "styled-components";
import ProgressBandSvg from "./ProgressBandSvg";

export default function LevelPanel({ levelData }) {
  const { bandData, levelNumber } = levelData;
  const bands = [];
  for (let l = 0; l < bandData.length; l++) {
    bands.push(<ProgressBandSvg key={l} {...bandData[l]} />);
  }

  return (
    <Container>
      <h1 className={styles.levelHeader}>LevelPanel: {levelNumber}</h1>
      {bands}
    </Container>
  );
}

const Container = styled.div`
  max-width: 600px;
  width: 100%;
`;
