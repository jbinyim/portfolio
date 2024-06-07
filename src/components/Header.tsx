import React, { useState } from "react";
import styled from "styled-components";
import { Link, useNavigate, useMatch } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { motion, useAnimation } from "framer-motion";

const Heading = styled.div`
  width: 100%;
  height: 80px;
  background: #fff;
  border-bottom: 1px solid #000;
  position: fixed;
  z-index: 9999;
  top: 0;
  left: 0;
  padding: 0 10px;
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
  width: 60px;
  height: 60px;
  cursor: pointer;
  background: url("https://jbinyim12.cafe24.com/web/upload/captcha/logo.png")
    center/cover no-repeat;
  @media ${(props) => props.theme.tablet} {
    width: 45px;
    height: 45px;
  }
`;

const Menu = styled.ul`
  display: flex;
  gap: 100px;
  margin: 0;
  padding: 0;
  @media ${(props) => props.theme.tablet} {
    display: none;
  }
`;

const MenuList = styled.li`
  font-size: 20px;
  position: relative;
  transition: all 0.3s;
  &:hover {
    letter-spacing: 2px;
  }
`;

const Stroke = styled(motion.span)`
  position: absolute;
  bottom: -5px;
  left: 0;
  width: 100%;
  height: 2px;
  background: #000;
`;

const Bar = styled.div`
  display: none;
  z-index: 11;
  .fa-bars {
    font-size: 22px;
    cursor: pointer;
  }
  @media ${(props) => props.theme.tablet} {
    display: block;
  }
`;

const MenuToggleBox = styled(motion.div)`
  background: #fff;
  position: fixed;
  top: 0;
  right: 0;
  transform-origin: right center;
  width: 350px;
  height: 100vh;
  box-shadow: inset 5px 5px 10px rgba(0, 0, 0, 0.1);
`;

const MenuToggle = styled.ul`
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  gap: 50px;
`;

const MenuToggleList = styled.li`
  font-size: 24px;
`;

const Header = () => {
  const [toggle, setToggle] = useState(false);
  const toggleAnimation = useAnimation();
  const navigate = useNavigate();
  const about = useMatch("/about");
  const project = useMatch("/project");
  const example = useMatch("/example");
  const contact = useMatch("/contact");
  const onClickHome = () => {
    navigate("/");
    window.scrollTo(0, 0);
  };

  const onClickToggle = () => {
    if (toggle) {
      toggleAnimation.start({
        scaleX: 0,
      });
    } else {
      toggleAnimation.start({
        scaleX: 1,
      });
    }
    setToggle((current) => !current);
  };

  return (
    <Heading>
      <Head>
        <Logo onClick={onClickHome} />
        <Menu>
          <MenuList>
            <Link to="/about">About me</Link>
            {about && <Stroke layoutId="stroke" />}
          </MenuList>
          <MenuList>
            <Link to="/project">Project</Link>
            {project && <Stroke layoutId="stroke" />}
          </MenuList>
          <MenuList>
            <Link to="/example">Example</Link>
            {example && <Stroke layoutId="stroke" />}
          </MenuList>
          <MenuList>
            <Link to="/contact">Contact</Link>
            {contact && <Stroke layoutId="stroke" />}
          </MenuList>
        </Menu>
        <Bar>
          <FontAwesomeIcon icon={faBars} onClick={onClickToggle} />
        </Bar>

        <MenuToggleBox
          animate={toggleAnimation}
          initial={{ scaleX: 0 }}
          transition={{ type: "linear" }}
        >
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
