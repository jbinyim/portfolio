import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Container = styled.div`
  max-width: 980px;
  height: 645px;
  margin: 0 auto;
  display: flex;
  gap: 100px;
  border: 1px solid ${(props) => props.theme.textBgColor};
  @media ${(props) => props.theme.tablet} {
    max-width: 475px;
    height: 745px;
    flex-direction: column;
    gap: 15px;
  }
`;

const ImgBox = styled.div`
  width: 100%;
  max-width: 475px;
  height: 100%;
  background: ${(props) => props.theme.textBgColor};
  display: flex;
  align-items: center;
  justify-content: center;
  @media ${(props) => props.theme.tablet} {
    height: 350px;
  }
`;

const Img = styled.img`
  max-width: 300px;
  height: 420px;
  object-fit: cover;
  @media ${(props) => props.theme.tablet} {
    height: 100%;
  }
`;

const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media ${(props) => props.theme.tablet} {
    padding: 0 10px;
  }
`;

const SubHeading = styled.h3`
  font-size: 20px;
  margin-bottom: 55px;
  text-transform: uppercase;
  @media ${(props) => props.theme.tablet} {
    font-size: 18px;
    margin-bottom: 40px;
  }
  @media ${(props) => props.theme.mobile} {
    margin-bottom: 25px;
  }
`;

const MainHeading = styled.h1`
  font-size: 42px;
  letter-spacing: -5px;
  font-weight: bold;
  margin-bottom: 85px;
  @media ${(props) => props.theme.tablet} {
    font-size: 36px;
    margin-bottom: 50px;
  }
`;

const OneLine = styled.p`
  max-width: 350px;
  font-size: 16px;
  margin-bottom: 90px;
  @media ${(props) => props.theme.tablet} {
    margin-bottom: 40px;
  }
`;

const BtnBox = styled.div`
  max-width: 195px;
  height: 45px;
  background: #000;
  color: #fff;
  border-radius: 3px;
  border: 1px solid transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  transition: all 0.3s;
  &:hover {
    background: #fff;
    color: #000;
    border: 1px solid #000;
    gap: 20px;
  }
`;

const AboutHome = () => {
  return (
    <Container>
      <ImgBox>
        <Img src="https://yimjbin-26a95.web.app/img/me.jpg" alt="profile" />
      </ImgBox>
      <TextBox>
        <SubHeading>a story about myself</SubHeading>
        <MainHeading>
          프론트엔드 개발자를 <br /> 꿈꾸고 있는
          <br /> 임정빈입니다.
        </MainHeading>
        <OneLine>
          최신 웹 기술을 빠르게 배우며 사용자 친화적인 웹사이트를 만드는 꿈을
          키우는 중 입니다.
        </OneLine>
        <BtnBox>
          <Link to={"/about"}>Read Now</Link>
          <FontAwesomeIcon icon={faArrowRight} />
        </BtnBox>
      </TextBox>
    </Container>
  );
};

export default AboutHome;
