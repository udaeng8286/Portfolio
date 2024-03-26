import styled from "styled-components";

const Nav = () => {
  const menuList = [
    { text: "My Intro", link: "/intro" },
    { text: "Skills", link: "/skills" },
    { text: "Project", link: "/project" },
    { text: "Experience", link: "/experience" },
  ];

  return (
    <Container>
      <MenuList>
        {menuList.map((menuItem) => (
          <MenuItem key={menuItem.text}>{menuItem.text}</MenuItem>
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
`;

const MenuList = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
`;

const MenuItem = styled.div`
  cursor: pointer;
  color: #cbcbcb;
`;
