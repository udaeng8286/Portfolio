import React, { useEffect, useState } from "react";
import styled from "styled-components";

const DonutChart = ({ value }) => {
  const [dashArray, setDashArray] = useState("0 400");

  useEffect(() => {
    const circumference = 2 * Math.PI * 64;
    const progress = value / 100;
    const filledLength = circumference * progress;
    const emptyLength = circumference - filledLength;
    setDashArray(`${filledLength} ${emptyLength}`);
  }, [value]);

  return (
    <Svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <g transform="rotate(-90, 100, 100)">
        {" "}
        {/* 시계 방향으로 90도 회전 */}
        <circle
          cx="100"
          cy="100"
          r="64"
          fill="rgba(243, 243, 243, 0.5)"
          stroke="none"
          strokeWidth="15"
        />
        <Circle
          cx="100"
          cy="100"
          r="64"
          fill="none"
          stroke="#e8c964"
          strokeWidth="15"
          strokeDasharray={dashArray}
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
  transition: stroke-dasharray 1s ease-in-out;
`;
