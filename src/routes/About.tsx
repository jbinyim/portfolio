import { faGithub } from "@fortawesome/free-brands-svg-icons";
import {
  faCalendar,
  faEnvelope,
  faLocationPin,
  faPhone,
  faChevronDown,
  faChevronUp,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import styled from "styled-components";
import Question from "../components/Question";
import Answer from "../components/Answer";

const Container = styled.div`
  width: 100%;
  height: 100%;
  margin: 80px auto 300px;
  display: flex;
  flex-direction: column;
  @media ${(props) => props.theme.tablet} {
    gap: 500px;
  }
  @media ${(props) => props.theme.mobile} {
    gap: 150px;
  }
`;

const AboutBox = styled.div`
  width: 100%;
  height: 800px;
  display: flex;
  margin-bottom: 150px;
  @media ${(props) => props.theme.tablet} {
    flex-direction: column;
    height: 750px;
  }
`;

const TextBox = styled.div`
  width: 50%;
  display: flex;
  justify-content: right;
  background: ${(props) => props.theme.textBgColor};
  @media ${(props) => props.theme.tablet} {
    width: 100%;
  }
`;

const Text = styled.div`
  width: 645px;
  width: 645px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: #fff;
  h3 {
    font-size: 18px;
    margin-bottom: 50px;
  }
  h1 {
    font-size: 80px;
    font-weight: bold;
    margin-bottom: 70px;
  }
  p {
    font-size: 18px;
  }
  ul {
    padding: 0;
    li {
      margin-bottom: 15px;
      font-size: 16px;
      .svg-inline--fa {
        margin-right: 50px;
        font-size: 18px;
      }
    }
  }
  @media ${(props) => props.theme.tablet} {
    max-width: 500px;
    margin: 73px auto 0;
    h1 {
      font-size: 60px;
    }
  }
  @media ${(props) => props.theme.mobile} {
    padding: 15px;
    margin-top: 30px;
    h1 {
      font-size: 40px;
    }
  }
`;

const ImgBox = styled.div`
  width: 50%;
  background: ${(props) => props.theme.imgBgColor};
  display: flex;
  align-items: center;
  div {
    width: 645px;
    text-align: right;
  }
  @media ${(props) => props.theme.tablet} {
    width: 100%;
    div {
      text-align: center;
      margin: 0 auto;
      padding: 50px 0;
    }
  }
`;

const Img = styled.img`
  max-width: 430px;
  height: 600px;
  object-fit: cover;
  @media ${(props) => props.theme.tablet} {
    height: 550px;
  }
  @media ${(props) => props.theme.mobile} {
    width: 250px;
    height: 300px;
  }
`;

const QABox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px;
  h1 {
    font-size: 80px;
    padding-bottom: 15px;
    border-bottom: 1px solid #000;
  }
  @media ${(props) => props.theme.mobile} {
    h1 {
      font-size: 40px;
    }
    p {
      font-size: 18px;
    }
  }
`;

const QuestionBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 350px;
  padding: 5px;
  cursor: pointer;
  border-radius: 10px;
  transition: all 0.3s;
  .fa-chevron-down {
    font-size: 25px;
  }
  .fa-chevron-up {
    font-size: 25px;
  }
  &:hover {
    background: ${(props) => props.theme.imgBgColor};
  }
`;

const About = () => {
  const [toggle1, setToggle1] = useState(true);
  const [toggle2, setToggle2] = useState(true);
  const [toggle3, setToggle3] = useState(true);

  const onClickToggle = () => {
    setToggle1((current) => !current);
  };
  const onClickToggle2 = () => {
    setToggle2((current) => !current);
  };
  const onClickToggle3 = () => {
    setToggle3((current) => !current);
  };

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
        <ImgBox>
          <div>
            <Img src="https://yimjbin-26a95.web.app/img/me.jpg" alt="profile" />
          </div>
        </ImgBox>
      </AboutBox>
      <QABox>
        <h1>Q & A</h1>
        <QuestionBox onClick={onClickToggle}>
          <Question text="직무 지원동기" />
          {toggle1 ? (
            <FontAwesomeIcon icon={faChevronDown} />
          ) : (
            <FontAwesomeIcon icon={faChevronUp} />
          )}
        </QuestionBox>
        {toggle1 ? (
          ""
        ) : (
          <Answer text="어떤 학문이든 끝이 없으며 배운 것을 통해 새로운 부분도 습득해야 하는데, 이 말에 가장 부합하는 직업이 개발자라고 생각합니다. 저는 예전부터 새로운 지식을 얻는 일을 가치 있게 여겼습니다. 또한, 가지고 있는 지식을 목적에 맞게 효율적으로 사용하는 것을 좋아합니다. 이러한 저의 특성은 개발자에 적합하다고 판단했으며 해당 직무를 선택하는 계기가 되었습니다. 웹 프로그래밍을 공부하기로 한 후, 국비 지원으로 ~과정 수업을 6개월간 웹 개발 기본기를 다졌고, 여러 가지 프로그램을 다룰 수 있는 역량을 쌓았습니다. 성실하게 수업에 참석했고, 습득한 지식으로 기본적인 웹의 구성과 자바를 통한 코딩, 포트폴리오를 통해 실무의 간접적인 경험 등 다양한 개발자로서의 역량을 키울 수 있었습니다. 모르거나 어려운 부분은 강사님께 여쭤보거나 스스로 인터넷, 책 등을 참고하며 공부하였고, 부족한 점을 보완하기 위해 꾸준히 노력했습니다. 결국 프로젝트를 진행할수록 처음과 달라진 성장한 저를 볼 수 있었으며 저에게 적성이라고 확신하게 되었습니다. 개발자로서 꾸준히 일을 배우고 분야 공부를 하여 몸담은 회사를 위해 이바지하는 개발자가 되겠습니다." />
        )}
        <QuestionBox onClick={onClickToggle2}>
          <Question text="성격 소개" />
          {toggle2 ? (
            <FontAwesomeIcon icon={faChevronDown} />
          ) : (
            <FontAwesomeIcon icon={faChevronUp} />
          )}
        </QuestionBox>
        {toggle2 ? (
          ""
        ) : (
          <Answer text="어떤 학문이든 끝이 없으며 배운 것을 통해 새로운 부분도 습득해야 하는데, 이 말에 가장 부합하는 직업이 개발자라고 생각합니다. 저는 예전부터 새로운 지식을 얻는 일을 가치 있게 여겼습니다. 또한, 가지고 있는 지식을 목적에 맞게 효율적으로 사용하는 것을 좋아합니다. 이러한 저의 특성은 개발자에 적합하다고 판단했으며 해당 직무를 선택하는 계기가 되었습니다. 웹 프로그래밍을 공부하기로 한 후, 국비 지원으로 ~과정 수업을 6개월간 웹 개발 기본기를 다졌고, 여러 가지 프로그램을 다룰 수 있는 역량을 쌓았습니다. 성실하게 수업에 참석했고, 습득한 지식으로 기본적인 웹의 구성과 자바를 통한 코딩, 포트폴리오를 통해 실무의 간접적인 경험 등 다양한 개발자로서의 역량을 키울 수 있었습니다. 모르거나 어려운 부분은 강사님께 여쭤보거나 스스로 인터넷, 책 등을 참고하며 공부하였고, 부족한 점을 보완하기 위해 꾸준히 노력했습니다. 결국 프로젝트를 진행할수록 처음과 달라진 성장한 저를 볼 수 있었으며 저에게 적성이라고 확신하게 되었습니다. 개발자로서 꾸준히 일을 배우고 분야 공부를 하여 몸담은 회사를 위해 이바지하는 개발자가 되겠습니다." />
        )}
        <QuestionBox onClick={onClickToggle3}>
          <Question text="입사 후 포부" />
          {toggle3 ? (
            <FontAwesomeIcon icon={faChevronDown} />
          ) : (
            <FontAwesomeIcon icon={faChevronUp} />
          )}
        </QuestionBox>
        {toggle3 ? (
          ""
        ) : (
          <Answer text="어떤 학문이든 끝이 없으며 배운 것을 통해 새로운 부분도 습득해야 하는데, 이 말에 가장 부합하는 직업이 개발자라고 생각합니다. 저는 예전부터 새로운 지식을 얻는 일을 가치 있게 여겼습니다. 또한, 가지고 있는 지식을 목적에 맞게 효율적으로 사용하는 것을 좋아합니다. 이러한 저의 특성은 개발자에 적합하다고 판단했으며 해당 직무를 선택하는 계기가 되었습니다. 웹 프로그래밍을 공부하기로 한 후, 국비 지원으로 ~과정 수업을 6개월간 웹 개발 기본기를 다졌고, 여러 가지 프로그램을 다룰 수 있는 역량을 쌓았습니다. 성실하게 수업에 참석했고, 습득한 지식으로 기본적인 웹의 구성과 자바를 통한 코딩, 포트폴리오를 통해 실무의 간접적인 경험 등 다양한 개발자로서의 역량을 키울 수 있었습니다. 모르거나 어려운 부분은 강사님께 여쭤보거나 스스로 인터넷, 책 등을 참고하며 공부하였고, 부족한 점을 보완하기 위해 꾸준히 노력했습니다. 결국 프로젝트를 진행할수록 처음과 달라진 성장한 저를 볼 수 있었으며 저에게 적성이라고 확신하게 되었습니다. 개발자로서 꾸준히 일을 배우고 분야 공부를 하여 몸담은 회사를 위해 이바지하는 개발자가 되겠습니다." />
        )}
      </QABox>
    </Container>
  );
};

export default About;
