import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { Link } from "react-scroll";
import {
  IoPerson,
  IoBuild,
  IoDocumentsOutline,
  IoBriefcase,
} from "react-icons/io5";
import { IoMdMenu } from "react-icons/io";

const RelativeNav = () => {
  const menuList = [
    { item: "Intro", icon: <IoPerson /> },
    { item: "Skills", icon: <IoBuild /> },
    { item: "Project", icon: <IoDocumentsOutline /> },
    { item: "Experience", icon: <IoBriefcase /> },
  ];

  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const mobileMenuRef = useRef();

  const toggleMobileMenu = () => {
    setShowMobileMenu(!showMobileMenu);
  };

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target)
      ) {
        setShowMobileMenu(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [mobileMenuRef]);

  return (
    <>
      {!showMobileMenu && (
        <MenuButton onClick={toggleMobileMenu}>
          <IoMdMenu />
        </MenuButton>
      )}
      {showMobileMenu && (
        <MobileMenu ref={mobileMenuRef}>
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
        </MobileMenu>
      )}
    </>
  );
};

export default RelativeNav;

const MenuButton = styled.button`
  position: fixed;
  right: 20px;
  top: 20px;
  width: 55px;
  height: 55px;
  border-radius: 50%;
  border: none;
  background-color: rgba(0, 0, 0, 0.8);
  color: #fff;
  font-size: 29px;
  z-index: 99999;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (min-width: 1400px) {
    display: none;
  }
`;

const MobileMenu = styled.div`
  width: 90%;
  position: fixed;
  background-color: rgba(0, 0, 0, 0.8);
  border-radius: 50px;
  padding: 1.5rem;
  top: ${({ showMobileMenu }) => (showMobileMenu ? "95px" : "20px")};
  right: 20px;
  z-index: 99998;
  @media (min-width: 1400px) {
    display: none;
  }
`;

const MenuList = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 2rem;
  align-items: center;
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
