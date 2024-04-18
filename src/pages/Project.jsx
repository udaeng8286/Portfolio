import React from "react";
import styled from "styled-components";
import projectData from "../datas/project.json";

const Project = () => {
  return (
    <Container id="Project">
      <Title>Project</Title>
      {projectData.map((project, index) => (
        <ProjectContainer key={index}>
          {Array.isArray(project.img) ? (
            <DoubleProjectImgs>
              {project.img.map((img, imgIndex) => (
                <ProjectImg2 key={imgIndex} src={img} />
              ))}
            </DoubleProjectImgs>
          ) : (
            <ProjectImg src={project.img} />
          )}
          <Content>{project.title}</Content>
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
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 3rem;
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
  transition: filter 0.3s;
  &:hover {
    filter: grayscale(50%) blur(4px);
  }
`;

const ProjectImg2 = styled.img`
  width: 48%;
  border-radius: 20px;
  transition: filter 0.5s;

  &:hover {
    filter: grayscale(50%) blur(2px);
  }
`;

const Content = styled.div`
  font-size: 24px;
  margin-top: 1rem;
`;
