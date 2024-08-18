import React, { useEffect } from "react";
import styled from "styled-components";
import InterviewBox from "./InterviewBox";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Container = styled.div`
  max-width: 1070px;
  height: 100%;
  margin: 0 auto;
  color: #fff;
`;

const Title = styled.h2`
  font-size: 30px;
`;

const Interview = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.from(".interviewBox", {
      y: 50,
    });
  }, []);
  return (
    <Container className="interviewBox">
      <Title>Interview</Title>
      <InterviewBox
        q="프론트엔드로 지원한 이유?"
        a={
          <>
            어릴 적 친구와 즐겼던 게임 전적 검색 사이트가 종료되면서,{" "}
            <span>
              ' 이런 사이트를 직접 만들어볼 수는 없을까? '라는 생각이
              들었습니다.
            </span>{" "}
            그래서 친구와 협력하여 게임 전적 검색 사이트를 만들기로
            결심했습니다. 처음에는 개발 지식이 부족했지만, 다른 플랫폼을 통해 웹
            페이지 제작을 익히며 기본기를 다졌습니다. 이후 프론트엔드 개발을
            전문적으로 배우기 위해 학원에 다니기로 결정했습니다.{" "}
            <span>
              다양한 프로젝트 경험을 통해 웹 애플리케이션 제작 실력을 쌓았고, 팀
              프로젝트를 통해 협업과 문제 해결 능력을 키웠습니다.
            </span>{" "}
            이러한 경험들은{" "}
            <span>
              프론트엔드 개발의 매력을 깨닫게 해주었고, 사용자 친화적인 웹
              애플리케이션을 만드는 열정을 키우게 되었습니다.
            </span>{" "}
            앞으로도 이러한 경험을 바탕으로 발전하며, 사용자들이 편리하게 정보를
            찾고 소통할 수 있는 플랫폼을 구축하는 데 기여하고 싶습니다.
          </>
        }
      />
      <InterviewBox
        q="일에 있어 가장 중요하게 생각하는 것이 있다면?"
        a={
          <>
            <span>
              빠른 적응력으로 맡은 일에 책임을 지고 최선을 다해 신뢰를 얻고
              있습니다.
            </span>{" "}
            프론트엔드 개발 프로젝트를 진행하며 다양한 기술을 신속하게 습득하고,
            팀원들과의 협업에서 주도적인 역할을 맡아왔습니다. 완벽한 결과물을
            추구하다 보니 긴박하게 마무리하는 경우도 있었고, 이는 원활한 협업에
            방해가 될 수 있음을 인지했습니다. 이를 개선하기 위해{" "}
            <span>
              체계적인 계획을 세우고 일정에 맞춰 진행하는 습관을 기르고
              있습니다.
            </span>{" "}
            앞으로도 이러한 노력을 통해 업무의 효율성을 높이겠습니다.
          </>
        }
      />
      <InterviewBox
        q="자기개발을 위해 어떤 것들을 해왔는지?"
        a={
          <>
            프론트엔드 개발 분야에서 필요한 지식과 기술을 습득하기 위해 꾸준히
            학습해왔습니다. 관련 도서, 학원 수업, 온라인 강의를 활용하여
            전문적인 지식을 쌓았고, 실무와 비슷한 프로젝트를 통해 경험을
            쌓았습니다.{" "}
            <span>
              CRUD 및 웹 표준 중심으로 기술을 완벽히 익히고, 다양한 기능을
              추가하여 반복적으로 학습했습니다.
            </span>{" "}
            또한, 다른 사람들의 프로젝트를 분석하고 질문하며 학습하는 과정도
            중요하게 생각했습니다. 이를 통해 모르는 부분은 스스로 웹서핑으로
            해결해보려는 능력도 키웠습니다. 원활한 업무 수행을 위해 커뮤니케이션
            및 협업 능력이 필요하다고 느꼈고,{" "}
            <span>
              학교생활 중 다양한 그룹 활동을 통해 의견을 조율하는 경험을 많이
              쌓았습니다.
            </span>{" "}
            이러한 노력을 통해 희망하는 직무에 필요한 역량을 갖추고, 자신감을
            가지고 업무에 임할 수 있도록 하겠습니다.
          </>
        }
      />
    </Container>
  );
};

export default Interview;
