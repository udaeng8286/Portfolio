import React, { useEffect } from "react";
import styled from "styled-components";
import projectData from "../datas/project.json";
import { BsGithub } from "react-icons/bs";
import { FaLink } from "react-icons/fa6";
import AOS from "aos";
import "aos/dist/aos.css";

const Project = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);

  return (
    <Container id="Project" data-aos="fade-up" data-aos-duration="1000">
      <Title>Project</Title>
      {projectData.map((project, index) => (
        <ProjectContainer
          key={index}
          data-aos="fade-right"
          data-aos-duration="1000"
        >
          {Array.isArray(project.img) ? (
            <DoubleProjectImgs>
              {project.img.map((img, imgIndex) => (
                <ProjectImg2 key={imgIndex} src={img} />
              ))}
            </DoubleProjectImgs>
          ) : (
            <ProjectImg src={project.img} />
          )}
          <ContentContainer>
            <TopContent>
              <ProjectTitle>{project.title}</ProjectTitle>
              <Date>
                {project.start}~{project.end}
              </Date>
            </TopContent>
            <Content>
              <div>{project.content}</div>
            </Content>
            <div> {project.member}</div>
            <TechContiner>
              {project.techs.map((tech, index) => (
                <Tech key={index}>{tech}</Tech>
              ))}
            </TechContiner>
            <WorkContainer>
              <div> 맡은 역할</div>
              {project.works.map((work, index) => (
                <Work key={index}>{work}</Work>
              ))}
            </WorkContainer>
            <LinkContainer>
              <a href={project.git} target="_blank" rel="noopener noreferrer">
                <BsGithub size={24} />
              </a>
              <a href={project.demo} target="_blank" rel="noopener noreferrer">
                <FaLink size={24} />
              </a>
            </LinkContainer>
          </ContentContainer>
        </ProjectContainer>
      ))}
    </Container>
  );
};

export default Project;

const Container = styled.div`
  width: 100%;
`;

const Title = styled.div`
  font-size: 36px;
  font-weight: bold;
  margin-bottom: 3rem;
  &::first-letter {
    color: #f3b95f;
  }
`;

const ProjectContainer = styled.div`
  width: 100%;
  margin-bottom: 3rem;
`;

const DoubleProjectImgs = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const ProjectImg = styled.img`
  max-width: 100%;
  height: 100%;
  border-radius: 20px;
`;

const ProjectImg2 = styled.img`
  width: 48%;
  border-radius: 20px;
  transition: filter 0.5s;
`;

const ContentContainer = styled.div`
  font-size: 20px;
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const TopContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: end;
  margin-bottom: 1rem;
`;

const ProjectTitle = styled.div`
  font-size: 28px;
  font-weight: bold;
`;
const Date = styled.div`
  display: flex;
`;
const Content = styled.div``;

const TechContiner = styled.div`
  display: flex;
  gap: 0.5rem;
`;
const Tech = styled.div`
  display: flex;
  justify-content: center;
  background-color: rgba(255, 255, 255, 0.3);
  width: auto;
  border-radius: 20px;
  padding: 0.1remdiz 1rem;
`;

const WorkContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
`;

const Work = styled.div`
  font-size: 18px;
`;

const LinkContainer = styled.div`
  display: flex;
  justify-content: end;
  gap: 1rem;
`;
