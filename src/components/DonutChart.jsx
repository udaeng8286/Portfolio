import React from "react";

const DonutChart = ({ value }) => {
  const radius = 64;
  const strokeWidth = 15;
  const circumference = 2 * Math.PI * radius;
  const progress = value / 100;
  const offset = circumference * (1 - progress);

  return (
    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <circle
        cx="100"
        cy="100"
        r={radius}
        fill="rgba(243, 243, 243, 0.5)"
        stroke=" none"
        strokeWidth={strokeWidth}
      />
      <circle
        cx="100"
        cy="100"
        r={radius}
        fill="none"
        stroke=" #e8c964"
        strokeWidth={strokeWidth}
        strokeDasharray={circumference}
        strokeDashoffset={offset}
        strokeLinecap="round"
        transform="rotate(-90 100 100)"
      />
    </svg>
  );
};

export default DonutChart;
