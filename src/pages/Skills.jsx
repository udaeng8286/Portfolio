import React from "react";
import styled from "styled-components";
import DonutChart from "../components/DonutChart";
import skillData from "../datas/skills.json";

const Skills = () => {
  return (
    <Container id="Skills">
      <Title>Skills</Title>
      <SkillsContainer>
        {skillData.map((item, index) => (
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
