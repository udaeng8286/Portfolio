import React, { useEffect } from "react";
import styled from "styled-components";
import experienceData from "../datas/experiences.json";
import awardData from "../datas/awards.json";
import AOS from "aos";
import "aos/dist/aos.css";

const Experience = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);

  return (
    <Container id="Experience" data-aos="fade-left" data-aos-duration="1000">
      <Title>Experience</Title>
      {experienceData.map((exp, index) => (
        <ContentSection key={index}>
          <ContentWrapper>
            <SubTitle>{exp.subTitle}</SubTitle>
            <Year>{exp.year}</Year>
            {exp.contents.map((content, idx) => (
              <Content key={idx}>{content}</Content>
            ))}
          </ContentWrapper>
        </ContentSection>
      ))}
      <Title>Awards</Title>
      {awardData.map((exp, index) => (
        <ContentSection key={index}>
          <ContentWrapper>
            <SubTitle>{exp.subTitle}</SubTitle>
            <Year>{exp.year}</Year>
            {exp.contents.map((content, idx) => (
              <Content key={idx}>{content}</Content>
            ))}
          </ContentWrapper>
        </ContentSection>
      ))}
    </Container>
  );
};
export default Experience;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 3rem 0;
`;

const ContentSection = styled.div`
  position: relative;
  width: 100%;
  border-left: 2px solid;
  &::before {
    content: "";
    position: absolute;
    height: 15px;
    width: 15px;
    background-color: #f3b95f;
    border-radius: 50%;
    transform: translate(-50%, -50%);
  }
`;

const Title = styled.div`
  font-size: 36px;
  font-weight: bold;
  margin: 2rem 0;
  &::first-letter {
    color: #f3b95f;
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
  padding: 0 1.5rem;
  margin-bottom: 3rem;
`;
const SubTitle = styled.div`
  font-size: 26px;
  font-weight: bold;
`;
const Year = styled.div``;
const Content = styled.div``;
