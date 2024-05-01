import React, { useEffect, useState } from "react";
import styled from "styled-components";

const DonutChart = ({ value, animate }) => {
  const [dashOffset, setDashOffset] = useState(0);
  const radius = 80; // 반지름 값 조정

  useEffect(() => {
    if (animate) {
      const circumference = 2 * Math.PI * radius;
      const progress = value / 100;
      const filledLength = circumference * progress;
      const emptyLength = circumference - filledLength;
      setDashOffset(circumference - filledLength); // 시작점 변경
    }
  }, [value, animate, radius]);

  return (
    <Svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <g transform={`rotate(-90, 100, 100)`}>
        <circle
          cx="100"
          cy="100"
          r={radius}
          fill="rgba(0, 0, 0, 0.3)"
          stroke="none"
          strokeWidth="16"
        />
        <Circle
          cx="100"
          cy="100"
          r={radius}
          fill="none"
          stroke="#F3B95F"
          strokeWidth="16"
          strokeDasharray={`calc(2 * 3.14159 * ${radius}) calc(2 * 3.14159 * ${radius})`}
          strokeDashoffset={dashOffset}
          strokeLinecap="round"
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

const Circle = styled.circle`
  transition: stroke-dashoffset 1s ease-in-out;
`;
