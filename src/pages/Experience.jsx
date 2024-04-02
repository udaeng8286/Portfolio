import styled from "styled-components";
import experienceData from "../datas/experiences.json";
import awardData from "../datas/awards.json";

const Experience = () => {
  return (
    <Container id="Experience">
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
  padding: 9rem 0;
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
    background-color: #f5d729;
    border-radius: 50%;
    transform: translate(-50%, -50%);
  }
`;

const Title = styled.div`
  font-size: 32px;
  font-weight: bold;
  margin: 2rem 0;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
  padding: 0 1.5rem;
  margin-bottom: 2rem;
`;
const SubTitle = styled.div`
  font-size: 26px;
  font-weight: bold;
`;
const Year = styled.div``;
const Content = styled.div``;
