import styled from "styled-components";
import { Link } from "react-scroll";

const Nav = () => {
  const menuList = [
    { item: "Introduce" },
    { item: "Skills" },
    { item: "Project" },
    { item: "Experience" },
  ];

  return (
    <Container>
      <MenuList>
        {menuList.map((menuItem) => (
          <MenuItem
            key={menuItem.item}
            to={menuItem.item}
            smooth={true}
            duration={500}
          >
            {menuItem.item}
          </MenuItem>
        ))}
      </MenuList>
    </Container>
  );
};
export default Nav;

const Container = styled.div`
  width: 240px;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;

  @media (max-width: 1366px) {
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
  &.active {
    color: #ffffff;
  }
`;
