import { faGithub } from "@fortawesome/free-brands-svg-icons";
import {
  faCalendar,
  faEnvelope,
  faLocationPin,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100%;
  margin: 80px auto 0;
`;

const AboutBox = styled.div`
  width: 100%;
  height: 800px;
  display: flex;
`;

const TextBox = styled.div`
  width: 50%;
  display: flex;
  justify-content: right;
  background: ${(props) => props.theme.textBgColor};
`;

const Text = styled.div`
  border: 1px solid #f00;
  width: 645px;
`;

const ImgBox = styled.div`
  width: 50%;
  background: ${(props) => props.theme.imgBgColor};
`;

const About = () => {
  return (
    <Container>
      <AboutBox>
        <TextBox>
          <Text>
            <h3>SINCE 1999</h3>
            <h1>
              침착하게 <br /> 최선을 다하자
            </h1>
            <p>Detail</p>
            <ul>
              <li>
                <FontAwesomeIcon icon={faCalendar} />
                1999.12.14
              </li>
              <li>
                <FontAwesomeIcon icon={faPhone} />
                010-3939-9974
              </li>
              <li>
                <FontAwesomeIcon icon={faEnvelope} />
                jbinyim12@naver.com
              </li>
              <li>
                <FontAwesomeIcon icon={faLocationPin} />
                서울시 성동구 한림말길56
              </li>
              <li>
                <FontAwesomeIcon icon={faGithub} />
                https://github.com/jbinyim
              </li>
            </ul>
          </Text>
        </TextBox>
        <ImgBox></ImgBox>
      </AboutBox>
    </Container>
  );
};

export default About;
