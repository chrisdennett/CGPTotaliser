import React from "react";
import PrizeProgressIcon from "./PrizeProgressIcon";

export default function PrizePanel({ data }) {
  return (
    <div>
      {data.map((level) => (
        <PrizeProgressIcon key={level.levelNumber} data={level} />
      ))}
    </div>
  );
}
