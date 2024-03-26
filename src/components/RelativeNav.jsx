import styled from "styled-components";
import { Link } from "react-scroll";

const RelativeNav = () => {
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
export default RelativeNav;

const Container = styled.div`
  width: 80%;
  height: 60px;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  border-radius: 50px;

  @media (min-width: 1366px) {
    display: none;
  }
`;

const MenuList = styled.div`
  width: 100%;
  display: flex;
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
