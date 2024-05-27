import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import DonutChart from "../components/DonutChart";
import skillData from "../datas/skills.json";
import AOS from "aos";
import "aos/dist/aos.css";

const Skills = () => {
  const [animate, setAnimate] = useState(false);
  const skillsRef = useRef(null);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);

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
    <Container
      id="Skills"
      ref={skillsRef}
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      <Title>Skills</Title>
      <SkillsContainer>
        {skillData.map((item, index) => (
          <SkillChart key={index}>
            <DonutChart value={item.value} animate={animate} />{" "}
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
  padding: 10rem 0;
`;

const SkillsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 3rem;
  max-width: 880px;
  margin: 0 auto;
  @media (max-width: 480px) {
    gap: 1rem;
  }
`;

const SkillChart = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 160px;
  height: 160px;
  position: relative;
  @media (max-width: 480px) {
    width: 45%;
    height: auto;
  }
`;

const Title = styled.div`
  font-size: 36px;
  font-weight: bold;
  margin-bottom: 10px;
  &::first-letter {
    color: #f3b95f;
  }
`;

const SkillLogo = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 56px;
  height: 56px;
`;
