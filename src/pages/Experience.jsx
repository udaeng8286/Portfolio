import styled from "styled-components";

const Experience = () => {
  const experiences = [
    {
      subTitle: "넥스트스토리 인턴",
      year: "2020.07 ~ 2020.08 / 2021.01 ~ 2021.02",
      contents: [
        "- 여름, 여행 관련 자료 조사 및 카드 뉴스 제작",
        "- 겨울, 여행 관련 자료 조사 및 게임 스토리, 캐릭터, UI 디자인 및 제작",
      ],
    },
    {
      subTitle: "넥스트스토리 인턴",
      year: "2020.07 ~ 2020.08 / 2021.01 ~ 2021.02",
      contents: [
        "- 여름, 여행 관련 자료 조사 및 카드 뉴스 제작",
        "- 겨울, 여행 관련 자료 조사 및 게임 스토리, 캐릭터, UI 디자인 및 제작",
      ],
    },
    {
      subTitle: "넥스트스토리 인턴",
      year: "2020.07 ~ 2020.08 / 2021.01 ~ 2021.02",
      contents: [
        "- 여름, 여행 관련 자료 조사 및 카드 뉴스 제작",
        "- 겨울, 여행 관련 자료 조사 및 게임 스토리, 캐릭터, UI 디자인 및 제작",
      ],
    },
  ];

  return (
    <Container id="Experience">
      <Title>Experience</Title>
      {experiences.map((exp, index) => (
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
  background-color: plum;
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
  padding: 1rem;
`;
const SubTitle = styled.div`
  font-size: 28px;
  font-weight: bold;
`;
const Year = styled.div``;
const Content = styled.div``;
