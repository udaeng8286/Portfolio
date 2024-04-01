import React from "react";
import styled from "styled-components";
import DonutChart from "../components/DonutChart";

const Skills = () => {
  const skillsList = [
    {
      skill: "HTML",
      value: 90,
      logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-plain-wordmark.svg",
    },
    {
      skill: "CSS",
      value: 90,
      logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-plain-wordmark.svg",
    },
    {
      skill: "JavaScript",
      value: 85,
      logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg",
    },
    {
      skill: "React",
      value: 80,
      logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg",
    },
    {
      skill: "TypeScript",
      value: 70,
      logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-plain.svg",
    },
    {
      skill: "Styled-Components",
      value: 90,
      logo: "https://raw.githubusercontent.com/styled-components/brand/master/styled-components.png",
    },
    {
      skill: "Axios",
      value: 80,
      logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/axios/axios-plain-wordmark.svg",
    },
    {
      skill: "Redux",
      value: 30,
      logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg",
    },
  ];

  return (
    <Container id="Skills">
      <Title>Skills</Title>
      <SkillsContainer>
        {skillsList.map((item, index) => (
          <SkillChart key={index}>
            <DonutChart value={item.value} />
            <SkillLogo src={item.logo} alt={item.skill} />
            {/* <SkillName>{item.skill}</SkillName> */}
          </SkillChart>
        ))}
      </SkillsContainer>
    </Container>
  );
};

export default Skills;

const Container = styled.div`
  width: 100%;
  height: 100vh;
`;

const SkillsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
`;

const SkillChart = styled.div`
  width: 160px;
  height: 160px;
  position: relative;
`;

const Title = styled.div`
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const SkillName = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 16px;
  font-weight: bold;
  text-align: center;
`;

const SkillLogo = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 48px;
  height: 48px;
`;
