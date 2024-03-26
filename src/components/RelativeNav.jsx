import styled from "styled-components";
import { Link } from "react-scroll";
import {
  IoPerson,
  IoBuild,
  IoDocumentsOutline,
  IoBriefcase,
} from "react-icons/io5";

const RelativeNav = () => {
  const menuList = [
    { item: "Introduce", icon: <IoPerson /> },
    { item: "Skills", icon: <IoBuild /> },
    { item: "Project", icon: <IoDocumentsOutline /> },
    { item: "Experience", icon: <IoBriefcase /> },
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
            <Icons>{menuItem.icon}</Icons>
            <Items> {menuItem.item}</Items>
          </MenuItem>
        ))}
      </MenuList>
    </Container>
  );
};
export default RelativeNav;

const Container = styled.div`
  width: 90%;

  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  border-radius: 50px;
  padding: 2rem;
  @media (min-width: 840px) {
    display: none;
  }

  @media (max-width: 480px) {
    width: 100%;
    height: 36px;
  }
`;

const MenuList = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 2rem;
  align-items: center;
  @media (max-width: 480px) {
    justify-content: space-around;
  }
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

const Icons = styled.div`
  display: none;
  @media (max-width: 480px) {
    display: block;
  }
`;

const Items = styled.div`
  display: block;
  @media (max-width: 480px) {
    display: none;
  }
`;
