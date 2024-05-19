import React from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faX } from "@fortawesome/free-solid-svg-icons";

const Heading = styled.div`
  width: 100%;
  height: 80px;
  background: #fff;
  border-bottom: 1px solid #000;
  position: fixed;
  z-index: 10;
  top: 0;
  left: 0;
  @media ${(props) => props.theme.tablet} {
    padding: 30px;
  }
`;

const Head = styled.div`
  max-width: 1280px;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
`;

const Logo = styled.div`
  width: 80px;
  height: 80px;
  cursor: pointer;
  background: url("https://yimjbin-26a95.web.app/img/logo/bLogo.png")
    center/cover no-repeat;
`;

const Menu = styled.ul`
  display: flex;
  gap: 100px;
  margin-top: 15px;
  @media ${(props) => props.theme.tablet} {
    display: none;
  }
`;

const MenuList = styled.li`
  font-size: 20px;
`;

const Bar = styled.div`
  display: none;
  .fa-bars {
    font-size: 22px;
    cursor: pointer;
  }
  @media ${(props) => props.theme.tablet} {
    display: block;
  }
`;

const MenuToggleBox = styled.div`
  background: #fff;
  position: fixed;
  top: 0;
  right: 0;
  width: 350px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  gap: 50px;
  border-left: 1px solid #000;
  display: none;
`;

const GoToBack = styled.div`
  text-align: right;
  margin: 50px 50px 0 0;
  .fa-x {
    font-size: 24px;
    cursor: pointer;
  }
`;

const MenuToggle = styled.ul``;

const MenuToggleList = styled.li``;

const Header = () => {
  const navigate = useNavigate();
  const onClickHome = () => {
    navigate("/");
  };

  const onClickToggle = () => {};

  return (
    <Heading>
      <Head>
        <Logo onClick={onClickHome} />
        <Menu>
          <MenuList>
            <Link to={"/about"}>About me</Link>
          </MenuList>
          <MenuList>
            <Link to={"/project"}>Project</Link>
          </MenuList>
          <MenuList>
            <Link to={"/example"}>Example</Link>
          </MenuList>
          <MenuList>
            <Link to={"/contact"}>Contact</Link>
          </MenuList>
        </Menu>
        <Bar>
          <FontAwesomeIcon icon={faBars} onClick={onClickToggle} />
        </Bar>
        <MenuToggleBox>
          <GoToBack>
            <FontAwesomeIcon icon={faX} />
          </GoToBack>
          <MenuToggle>
            <MenuToggleList>
              <Link to={"/about"}>About me</Link>
            </MenuToggleList>
            <MenuToggleList>
              <Link to={"/project"}>Project</Link>
            </MenuToggleList>
            <MenuToggleList>
              <Link to={"/example"}>Example</Link>
            </MenuToggleList>
            <MenuToggleList>
              <Link to={"/contact"}>Contact</Link>
            </MenuToggleList>
          </MenuToggle>
        </MenuToggleBox>
      </Head>
    </Heading>
  );
};

export default Header;
