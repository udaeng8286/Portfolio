import styled from "styled-components";
import experienceData from "../datas/experiences.json";

const Experience = () => {
  return (
    <Container id="Experience">
      <Title>Experience</Title>
      {experienceData.map((exp, index) => (
        <ExperienceContainer key={index}>
          <ExperienceWrapper>
            <SubTitle>{exp.subTitle}</SubTitle>
            <Year>{exp.year}</Year>
            {exp.contents.map((content, idx) => (
              <Content key={idx}>{content}</Content>
            ))}
          </ExperienceWrapper>
        </ExperienceContainer>
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

const ExperienceContainer = styled.div`
  position: relative;
  width: 100%;
  border-left: 2px solid;
  background-color: gray;
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
  margin-bottom: 2rem;
`;

const ExperienceWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
  padding: 1.5rem;
`;
const SubTitle = styled.div`
  font-size: 26px;
  font-weight: bold;
`;
const Year = styled.div``;
const Content = styled.div``;
