import React, { useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background: url("https://raw.githubusercontent.com/jieun419/jieun_portfolio/main/src/assets/images/front_bg.jpg")
    center/cover no-repeat;
`;

const TitleBox = styled.div`
  padding-top: 20vh;
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
  media ${(props) => props.theme.m} {
    h2 {
      margin-top: 50px;
      font-size: 100px;
    }
    p {
      font-size: 30px;
    }
  }
  @media ${(props) => props.theme.s} {
    h2 {
      font-size: 50px;
    }
    p {
      font-size: 20px;
    }
  }
  @media ${(props) => props.theme.xs} {
    h2 {
      font-size: 40px;
    }
    p {
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

const HeaderBox = styled.div`
  margin-top: 100px;
  display: flex;
  justify-content: center;
  gap: 200px;
  @media ${(props) => props.theme.s} {
    gap: 100px;
  }
  @media ${(props) => props.theme.xs} {
    gap: 60px;
  }
`;

const BtnBox = styled.div`
  padding: 5px;
  text-align: center;
  border-bottom: 4px solid #000;
  transition: all 0.3s;
  cursor: pointer;
  &:hover {
    color: #fff;
    background: #000;
  }
`;

const Contact = () => {
  const onClickCopy = (text: string) => {
    alert(`${text}를 클립보드에 복사했습니다.`);
    navigator.clipboard.writeText(text);
  };

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.from(".contactBox", {
      y: -100,
      opacity: 0,
      duration: 0.5,
      scrollTrigger: {
        trigger: ".contactBox",
        start: "top top",
        end: "bottom center",
        scrub: 2,
      },
    });
  }, []);

  return (
    <Container>
      <div className="contactBox">
        <TitleBox>
          <h2>front-end</h2>
          <p>Yim Jeong Bin</p>
        </TitleBox>
        <Text>
          프론트엔드 개발자로 성장하기 위해 낯선 기술에도 적극적으로 도전하고,
          <br />
          항상 사용자의 관점에서 생각하며 사용하기 좋은 서비스를 만들고
          싶습니다.
        </Text>
        <HeaderBox>
          <BtnBox>
            <p onClick={() => onClickCopy("jbinyim12@naver.com")}>Email</p>
          </BtnBox>
          <BtnBox>
            <Link to={`https://github.com/jbinyim`} target="_blank">
              Github
            </Link>
          </BtnBox>
          <BtnBox>
            <Link to={`https://velog.io/@jbinyim12/posts`} target="_blank">
              Velog
            </Link>
          </BtnBox>
        </HeaderBox>
      </div>
    </Container>
  );
};

export default Contact;
