import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background: url("https://raw.githubusercontent.com/jieun419/jieun_portfolio/main/src/assets/images/front_bg.jpg")
    center/cover no-repeat;
`;

const TitleBox = styled.div`
  padding-top: 100px;
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

const LinkBox = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 200px;
  margin-top: 100px;
`;

const Contact = () => {
  return (
    <Container>
      <TitleBox>
        <h2>front-end</h2>
        <p>봐주셔서 감사합니다 :)</p>
      </TitleBox>
      <Text>
        프론트엔드 개발자로 성장하기 위해 낯선 기술에도 적극적으로 도전하고,
        <br />
        항상 사용자의 관점에서 생각하며 사용하기 좋은 서비스를 만들고 싶습니다.
      </Text>
      <LinkBox>
        <li>Github</li>
        <li>email</li>
      </LinkBox>
    </Container>
  );
};

export default Contact;
