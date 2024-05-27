import styled from "styled-components";
import profileImg from "../../public/assets/profile.png";
import { SiTistory } from "react-icons/si";
import { BsGithub } from "react-icons/bs";
import { MdMail } from "react-icons/md";

const ProfileCard = () => {
  const handleClick = (url) => {
    window.open(url, "_blank");
  };

  return (
    <Container>
      <Name>Yu Jeong</Name>
      <Role>Front-end Development</Role>
      <ProfileImg src={profileImg} alt="Profile Image" />
      <Email>udaenglvup@gmail.com</Email>
      <ButtonSection>
        <IconWrapper
          onClick={() => handleClick("https://github.com/udaeng8286")}
        >
          <BsGithub size={24} />
        </IconWrapper>
        <IconWrapper
          onClick={() => handleClick("https://growdaeng.tistory.com/")}
        >
          <SiTistory size={16} />
        </IconWrapper>
        <IconWrapper
          onClick={() =>
            handleClick("mailto:udaenglvup@gmail.com?subject=송유정님에게 문의")
          }
        >
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

  @media (max-width: 1400px) {
    width: 100%;
    margin-left: 0;
    position: relative;
  }

  @media (max-width: 480px) {
    width: 100%;
    padding: 3rem;
  }
`;

const Name = styled.div`
  font-size: 40px;

  @media (max-width: 480px) {
    font-size: 28px;
  }
`;

const Role = styled.div`
  font-size: 20px;

  @media (max-width: 480px) {
    font-size: 16px;
  }
`;

const ProfileImg = styled.img`
  width: 100%;
  border-radius: 20px;

  @media (max-width: 1400px) {
    width: 60%;
  }

  @media (max-width: 480px) {
    width: 100%;
    max-width: 182px;
  }
`;

const Email = styled.div`
  font-size: 20px;

  @media (max-width: 480px) {
    font-size: 16px;
  }
`;

const ButtonSection = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 1rem;

  @media (max-width: 1400px) {
    width: 60%;
  }

  @media (max-width: 480px) {
    width: 100%;
    margin-top: 0.2rem;
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

  &:hover {
    background-color: #ffffff80;
  }

  @media (max-width: 480px) {
    width: 40px;
    height: 40px;
  }
`;
