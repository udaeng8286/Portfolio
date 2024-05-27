import React, { useEffect, useState } from "react";
import styled from "styled-components";

const DonutChart = ({ value, animate }) => {
  const [dashOffset, setDashOffset] = useState(0);
  const radius = 80;

  useEffect(() => {
    if (animate) {
      const circumference = 2 * Math.PI * radius;
      const progress = value / 100;
      const filledLength = circumference * progress;
      setDashOffset(circumference - filledLength);
    }
  }, [value, animate, radius]);

  return (
    <Svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <g transform="rotate(-90, 100, 100)">
        <BackgroundCircle cx="100" cy="100" r={radius} />
        <ProgressCircle
          cx="100"
          cy="100"
          r={radius}
          strokeDasharray={2 * Math.PI * radius}
          strokeDashoffset={dashOffset}
        />
      </g>
    </Svg>
  );
};

export default DonutChart;

const Svg = styled.svg`
  width: 160px;
  height: 160px;
`;

const BackgroundCircle = styled.circle`
  fill: rgba(0, 0, 0, 0.4);
  stroke: none;
  stroke-width: 16;
`;

const ProgressCircle = styled.circle`
  fill: none;
  stroke: #f3b95f;
  stroke-width: 16;
  stroke-linecap: round;
  transition: stroke-dashoffset 1s ease-in-out;
`;
