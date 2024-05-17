import styled from "styled-components";
import profileImg from "../../public/assets/profile.png";
import { SiTistory } from "react-icons/si";
import { BsGithub } from "react-icons/bs";
import { MdMail } from "react-icons/md";
const ProfileCard = () => {
  const handleGithubClick = () => {
    window.open("https://github.com/udaeng8286", "_blank");
  };

  const handleTistoryClick = () => {
    window.open("https://growdaeng.tistory.com/", "_blank");
  };

  const handleMailClick = () => {
    window.open("mailto:udaenglvup@gmail.com?subject=송유정님에게 문의");
  };

  return (
    <Container>
      <Name>Yu Jeong</Name>
      <Role>Front-end Development</Role>
      <ProfileImg src={profileImg} alt="profile Image" />
      <Email>udaenglvup@gmail.com</Email>
      <ButtonSection>
        <IconWrapper onClick={handleGithubClick}>
          <BsGithub size={24} />
        </IconWrapper>
        <IconWrapper onClick={handleTistoryClick}>
          <SiTistory size={16} />
        </IconWrapper>
        <IconWrapper onClick={handleMailClick}>
          <MdMail size={24} />
        </IconWrapper>
      </ButtonSection>
    </Container>
  );
};
export default ProfileCard;

const Container = styled.div`
  position: fixed;
  left: 0;
  margin-left: 2rem;
  padding: 2rem;
  width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 20px;
  border: 2px solid #cecece;
  box-shadow: 2px 2px 12px 4px rgba(0, 0, 0, 0.5);
  gap: 0.5rem;

  @media (max-width: 840px) {
    width: 100%;
    margin-left: 0;
    position: relative;
  }

  @media (max-width: 480px) {
    width: 100%;
    padding: 1rem;
  }
`;

const Name = styled.text`
  font-size: 40px;

  @media (max-width: 480px) {
    font-size: 28px;
  }
`;

const Role = styled.text``;

const ProfileImg = styled.img`
  width: 100%;
  border-radius: 20px;

  @media (max-width: 840px) {
    width: 60%;
  }

  @media (max-width: 480px) {
    width: 50%;
    max-width: 182px;
  }
`;

const Email = styled.text``;

const ButtonSection = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  @media (max-width: 480px) {
    max-width: 182px;
  }

  @media (max-width: 840px) {
    width: 60%;
  }
`;

const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 52px;
  height: 52px;
  border-radius: 50%;
  background-color: transparent;
  border: 2px solid white;
  margin-top: 1rem;
  &:hover {
    background-color: #ffffff80;
  }
  @media (max-width: 480px) {
    width: 40px;
    height: 40px;
  }
`;
