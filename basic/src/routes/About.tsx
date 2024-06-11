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
          <Answer text="친구와 함께 하던 게임의 기존 전적 검색 사이트가 운영을 종료하자 불편을 크게 느꼈습니다. 이로 인해 우리가 직접 만들어보자는 생각이 떠올라서 전적을 검색하기 위한 사이트를 만들어 보기로 하였습니다. 처음에는 웹에 관련하여 아무것도 몰랐기 때문에 많은 어려움을 겪었지만 주변 지인의 도움과 다양한 자료조사를 통해 사이트를 운영하게 되었습니다. 이때 저는 다양한 기능들을 내가 원하는 데로 구현하는 것을 보고 본격적으로 웹에 관심을 가지게 되었습니다. 학원을 통해 웹에 대한 기본적인 지식을 학습하면서 기능을 간단하게 구현해 보고 그것을 사용해 본 주변 지인들의 긍정적인 반응을 보고 흥미와 자신감을 느껴서 더욱 열심히 배울 수 있었습니다. 프론트엔드 개발자로서 사용자가 원활한 서비스를 경험하고, 안정적으로 데이터를 출력할 수 있도록 하는 것이 제 역할이라고 생각합니다. 또한, 프론트엔드 개발은 끊임없이 발전하고 변화하는 분야이며, 새로운 기술과 도구들이 등장하고 있습니다. 이러한 환경에서 저도 새로운 도전과 지속적인 성장을 이루어내는 것이 프론트엔드 개발자로서의 목표입니다." />
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
          <Answer text="빠른 적응력으로 맡은 일에 대해서 책임을 지고 끝까지 최선을 다하여 주위 사람들로부터 신뢰를 받는 편입니다. 패스트푸드점에서 아르바이트를 할 때 결근 없이 15개월 동안 일하여 아르바이트생 중에서 가장 빠르게 이달의 크루를 받았고 어린 나이에 불구하고 팀리더를 맡게 되었습니다. 하지만 완벽하게 일 처리를 하고자 하는 욕심에 긴박하게 마무리 하는 경우도 있었습니다. 이러한 단점은 타인과의 마찰 및 원활한 일 처리에 방해물이 될 수 있습니다. 이러한 문제점을 인지하고 시간을 정해 계획을 세워 늦어지지 않게 노력했습니다. 이를 통해 부족한 부분을 개선하러 노력하였고 입사 후 주어진 일에 대한 체계적인 계획과 우선순위를 정하여 업무의 효율성을 증대시키도록 하겠습니다." />
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
          <Answer text="프론트엔드 개발 분야에서 필요한 지식과 기술을 습득하기 위해 꾸준히 학습했습니다. 관련된 도서, 학원 수업, 온라인 강의 등을 활용하여 전문적인 지식을 쌓았으며, 필요한 기술을 익혔습니다. 직무와 관련된 경험을 쌓기 위해 실무와 비슷한 프로젝트를 만들어 보았습니다. 이를 통해 많은 것을 배우는 것도 좋지만 내가 알고 있는 기술이라도 확실하게 내 것으로 만들자는 생각으로 CRUD 및 웹 표준 중심으로 완벽하게 습득하고 더욱 다양한 기능을 추가하여 반복적으로 학습해 갔습니다. 또 다른 분들이 만든 프로젝트를 보며 분석하고 질문하고 따라 하며 학습하는 경험도 해보았습니다. 이러한 학습을 하다 보니 연습할 때 모르는 부분이 있으면 질문하여 해결하는 방법도 좋지만 혼자서 웹서핑으로 해결해 보려는 능력이 필요하다는 생각이 들어 연습을 해보았습니다. 원활한 업무 수행을 위해 커뮤니케이션 및 협업 능력이 필요하다고 생각합니다. 저는 학교생활 중에 다양한 그룹 활동을 하며 주로 주도하는 역할을 가지며 많은 사람들을 만나보면서 의견을 듣고 조율하는 경험을 많이 해보았습니다. 이러한 노력을 통해 희망하는 직무에 필요한 역량을 갖추기 위해 노력했으며 자신감을 가지고 업무에 임할 수 있도록 노력하겠습니다." />
        )}
      </QABox>
    </Container>
  );
};

export default About;
