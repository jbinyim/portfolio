import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background: url("https://raw.githubusercontent.com/jieun419/jieun_portfolio/main/src/assets/images/front_bg.jpg")
    center/cover no-repeat;
  padding: 40px;
  position: relative;
`;

const HeaderBox = styled.div`
  display: flex;
  gap: 20px;
`;

const BtnBox = styled.div`
  padding: 5px;
  text-align: center;
  border-bottom: 4px solid #000;
  transition: all 0.3s;
  &:hover {
    color: #fff;
    background: #000;
  }
`;
const TitleBox = styled.div`
  text-align: center;
  position: relative;
  h2 {
    font-size: 130px;
    text-transform: uppercase;
    color: #fff;
  }
  p {
    width: 100%;
    font-size: 48px;
    letter-spacing: -1px;
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
  }
`;

const Text = styled.p`
  margin-top: 40px;
  text-align: center;
  font-size: 20px;
`;

const Img = styled.img`
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  height: 550px;
`;

const Introduce = () => {
  return (
    <Container>
      <HeaderBox>
        <BtnBox>
          <Link to={`https://yjb-portfolio.firebaseapp.com/`}>Home</Link>
        </BtnBox>
        <BtnBox>
          <Link to={`https://github.com/jbinyim`} target="_blank">
            Github
          </Link>
        </BtnBox>
      </HeaderBox>
      <TitleBox>
        <h2>front-end</h2>
        <p>
          프론트엔드 개발자 <b>임정빈</b>입니다.
        </p>
      </TitleBox>
      <Text>
        최신 웹 기술을 빠르게 배우며 사용자 친화적인 웹사이트를 만드는 꿈을
        키우는 중 입니다.
      </Text>
      <Img
        src="https://jbinyim12.cafe24.com/web/upload/captcha/me-removebg-preview.png"
        alt="인물사진"
      />
    </Container>
  );
};

export default Introduce;
