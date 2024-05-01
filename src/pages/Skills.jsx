import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import DonutChart from "../components/DonutChart";
import skillData from "../datas/skills.json";

const Skills = () => {
  const [animate, setAnimate] = useState(false);
  const skillsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setAnimate(true);
        }
      });
    });

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => {
      if (skillsRef.current) {
        observer.unobserve(skillsRef.current);
      }
    };
  }, []);

  return (
    <Container id="Skills" ref={skillsRef}>
      <Title>Skills</Title>
      <SkillsContainer>
        {skillData.map((item, index) => (
          <SkillChart key={index}>
            <DonutChart value={item.value} animate={animate} />
            <SkillLogo src={item.logo} alt={item.skill} />
          </SkillChart>
        ))}
      </SkillsContainer>
    </Container>
  );
};

export default Skills;

const Container = styled.div`
  width: 100%;
  padding: 9rem 0;
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

const SkillLogo = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 48px;
  height: 48px;
`;
