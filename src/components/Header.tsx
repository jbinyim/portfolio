import React from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";

const Heading = styled.div`
  width: 100%;
  height: 80px;
  background: #fff;
  border-bottom: 1px solid #000;
  position: fixed;
  z-index: 10;
  top: 0;
  left: 0;
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
`;

const MenuList = styled.li`
  font-size: 20px;
`;

const Header = () => {
  const navigate = useNavigate();
  const onClickHome = () => {
    navigate("/");
  };
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
      </Head>
    </Heading>
  );
};

export default Header;
