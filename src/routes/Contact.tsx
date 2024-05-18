import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy, faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  /* margin-top: 180px; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 100px;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 100px;
`;

const Text = styled.p``;

const Box = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
  .fa-copy {
    cursor: pointer;
    transition: all 0.3s;
    &:hover {
      font-size: 23px;
    }
  }
`;

const Communication = styled.p`
  font-size: 20px;
  margin-top: 15px;
  transition: all 0.3s;
`;

const BottomBox = styled.div``;

const Contact = () => {
  const onClickCopy = (text: string) => {
    alert(`${text}를 클립보드에 복사했습니다.`);
    navigator.clipboard.writeText(text);
  };

  return (
    <div>
      <Container>
        <Title>Let’s Keep in Touch!</Title>
        <Text>
          Looking for a front-end developer with competence? <br /> Feel free to
          contact me if you have any suggestions for contracts and
          collaborations!
        </Text>
        <BottomBox>
          <Box>
            <FontAwesomeIcon icon={faPhone} />
            <Communication>010-3939-9974</Communication>
            <FontAwesomeIcon
              icon={faCopy}
              onClick={() => onClickCopy("010-3939-9974")}
            />
          </Box>
          <Box>
            <FontAwesomeIcon icon={faEnvelope} />
            <Communication>jbinyim12@naver.com</Communication>
            <FontAwesomeIcon
              icon={faCopy}
              onClick={() => onClickCopy("jbinyim12@naver.com")}
            />
          </Box>
        </BottomBox>
      </Container>
    </div>
  );
};

export default Contact;
