import styled from "styled-components";
import profileImg from "../../public/assets/profile.png";

const ProfileCard = () => {
  return (
    <Container>
      <Name>Yu Jeong</Name>
      <Role>Front-end Development</Role>
      <ProfileImg src={profileImg} alt="profile Image" />
      <Email>udaenglvup@gmail.com</Email>
    </Container>
  );
};
export default ProfileCard;

const Container = styled.div`
  padding: 2rem;
  width: 320px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 20px;
  border: 2px solid #cecece;
  box-shadow: 2px 2px 12px 4px rgba(0, 0, 0, 0.5);
`;

const Name = styled.text`
  font-size: 40px;
`;

const Role = styled.text`
  font-size: 20px;
`;

const ProfileImg = styled.img`
  width: 100%;
  border-radius: 20px;
`;

const Email = styled.text`
  font-size: 20px;
`;
