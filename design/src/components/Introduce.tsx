import React, { useEffect } from "react";
import styled, { keyframes } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesDown } from "@fortawesome/free-solid-svg-icons";
import gsap from "gsap";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background: url("https://raw.githubusercontent.com/jieun419/jieun_portfolio/main/src/assets/images/front_bg.jpg")
    center/cover no-repeat;
  padding: 40px;
  position: relative;
`;

const TitleBox = styled.div`
  text-align: center;
  position: relative;
  .frontendText {
    font-size: 130px;
    text-transform: uppercase;
    color: #fff;
  }
  .myName {
    width: 100%;
    font-size: 48px;
    letter-spacing: -1px;
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
  }
  @media ${(props) => props.theme.m} {
    .frontendText {
      margin-top: 50px;
      font-size: 100px;
    }
    .myName {
      font-size: 30px;
    }
  }
  @media ${(props) => props.theme.s} {
    .frontendText {
      font-size: 50px;
    }
    .myName {
      font-size: 20px;
    }
  }
  @media ${(props) => props.theme.xs} {
    .frontendText {
      font-size: 40px;
    }
    .myName {
      font-size: 18px;
    }
  }
`;

const Text = styled.p`
  margin-top: 40px;
  text-align: center;
  font-size: 20px;
  @media ${(props) => props.theme.m} {
    font-size: 16px;
  }
  @media ${(props) => props.theme.s} {
    font-size: 13px;
  }
`;

const Img = styled.img`
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  height: 550px;
  @media ${(props) => props.theme.xl} {
    height: 300px;
  }
  @media ${(props) => props.theme.l} {
    height: 450px;
  }
  @media ${(props) => props.theme.s} {
    height: 350px;
  }
`;

const updown = keyframes`
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-15px);
  }
  100%{
    transform: translateY(0);
  }
`;

const IconBox = styled.span`
  position: absolute;
  bottom: 30px;
  left: calc(50% - 8px);
  right: 50%;
  color: #fff;
  font-size: 30px;
  animation: ${updown} 1.5s infinite linear;
`;

const Introduce = () => {
  useEffect(() => {
    const tl = gsap.timeline();
    gsap.from(".frontendText", {
      opacity: 0,
      duration: 1,
      delay: 1,
    });

    // .myName과 .frontendText의 y 값이 함께 움직이도록 처리
    tl.from([".myName", ".frontendText"], {
      y: 150,
      duration: 1,
      delay: 1.5, // .frontendText의 opacity가 먼저 나온 후 1.5초 지연
      zIndex: 10,
    })
      .from(".descMe", { opacity: 0 })
      .from(".imgMe", { opacity: 0 });
  }, []);
  return (
    <Container>
      <TitleBox>
        <h2 className="frontendText">front-end</h2>
        <p className="myName">
          프론트엔드 개발자 <b>임정빈</b>입니다.
        </p>
      </TitleBox>
      <Text className="descMe">
        최신 웹 기술을 빠르게 배우며 사용자 친화적인 웹사이트를 만드는 꿈을
        키우는 중 입니다.
      </Text>
      <Img
        className="imgMe"
        src="https://jbinyim12.cafe24.com/web/upload/captcha/me-removebg-preview.png"
        alt="인물사진"
      />
      <IconBox>
        <FontAwesomeIcon icon={faAnglesDown} />
      </IconBox>
    </Container>
  );
};

export default Introduce;
