import styled from "styled-components";
import { Link } from "react-scroll";

const Nav = () => {
  const menuItems = ["Intro", "Skills", "Project", "Experience"];

  return (
    <Container>
      <MenuList>
        {menuItems.map((item) => (
          <MenuItem key={item} to={item} smooth={true} duration={500}>
            {item}
          </MenuItem>
        ))}
      </MenuList>
    </Container>
  );
};

export default Nav;

const Container = styled.div`
  width: 268px;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  position: fixed;
  top: 0;
  right: 0;

  @media (max-width: 1400px) {
    display: none;
  }
`;

const MenuList = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
`;

const MenuItem = styled(Link)`
  cursor: pointer;
  color: #929292;
  text-decoration: none;
  transition: color 0.3s ease;

  &:hover {
    color: #ffffff;
  }
`;
