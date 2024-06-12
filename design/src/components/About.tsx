import React from "react";
import styled from "styled-components";
import Interview from "../components/Interview";
import Skill from "./Skill";

const Container = styled.div`
  width: 100%;
  height: 100%;
  color: #fff;
  margin-bottom: 250px;
  h1 {
    font-size: 60px;
  }
`;

const Contents = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  margin: 70px 0 80px;
`;

const Img = styled.img`
  height: 420px;
`;

const HashTag = styled.div`
  display: flex;
  gap: 20px;
  p {
    font-size: 12px;
  }
`;

const About = () => {
  return (
    <Container>
      <h1>About me</h1>
      <Contents>
        <Img
          src="https://jbinyim12.cafe24.com/web/upload/captcha/trainJb-removebg-preview.png"
          alt=""
        />
        <HashTag>
          <p>#임정빈</p>
          <p>#99.12.14</p>
          <p>#프론트엔드 개발자</p>
        </HashTag>
      </Contents>
      <Interview />
      <Skill />
    </Container>
  );
};

export default About;
