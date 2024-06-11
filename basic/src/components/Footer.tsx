import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faCircleUp } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Container = styled.div`
  width: 100%;
  height: 300px;
  margin-top: 100px;
  background: #000;
`;

const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
  color: #fff;
`;

const Logo = styled.span`
  width: 80px;
  height: 80px;
  background: url("https://yimjbin-26a95.web.app/img/logo/bLogo.png")
    center/cover no-repeat;
`;

const Box = styled.div`
  display: flex;
  .svg-inline--fa {
    margin: 0 15px;
    font-size: 24px;
    cursor: pointer;
  }
`;

const Info = styled.p`
  font-size: 12px;
  padding: 0 15px;
  border-right: 1px solid #fff;
  &:last-child {
    border: none;
  }
  @media ${(props) => props.theme.mobile} {
    font-size: 10px;
  }
`;

const Never = styled.p`
  text-align: center;
  font-size: 12px;
`;

const Footer = () => {
  const MoveUp = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Container>
      <TextBox>
        <Logo></Logo>
        <Box>
          <Info>010-3939-9974</Info>
          <Info>YIM JEONG BIN</Info>
          <Info>jbinyim12@naver.com</Info>
        </Box>
        <Box>
          <Link to={"https://github.com/jbinyim"} target="blank">
            <FontAwesomeIcon icon={faGithub} />
          </Link>

          <FontAwesomeIcon icon={faCircleUp} onClick={MoveUp} />

          <Link to={"https://www.instagram.com/jungban_gu/"} target="blank">
            <FontAwesomeIcon icon={faInstagram} />
          </Link>
        </Box>
        <Never>
          JB <br />
          ALL RIGHTS RESERVED
        </Never>
      </TextBox>
    </Container>
  );
};

export default Footer;
