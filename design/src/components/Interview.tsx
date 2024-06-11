import React from "react";
import styled from "styled-components";
import InterviewBox from "./InterviewBox";

const Container = styled.div`
  max-width: 1070px;
  height: 100%;
  margin: 0 auto;
  color: #fff;
  h2 {
    font-size: 30px;
  }
`;

const Interview = () => {
  return (
    <Container>
      <h2>Interview</h2>
      <InterviewBox
        q="프론트엔드로 지원한 이유?"
        a="직무 지원동기 친구와 함께 하던 게임의 기존 전적 검색 사이트가 운영을
        종료하자 불편을 크게 느꼈습니다. 이로 인해 우리가 직접 만들어보자는
        생각이 떠올라서 전적을 검색하기 위한 사이트를 만들어 보기로 하였습니다.
        처음에는 웹에 관련하여 아무것도 몰랐기 때문에 많은 어려움을 겪었지만
        주변 지인의 도움과 다양한 자료조사를 통해 사이트를 운영하게 되었습니다.
        이때 저는 다양한 기능들을 내가 원하는 데로 구현하는 것을 보고 본격적으로
        웹에 관심을 가지게 되었습니다. 학원을 통해 웹에 대한 기본적인 지식을
        학습하면서 기능을 간단하게 구현해 보고 그것을 사용해 본 주변 지인들의
        긍정적인 반응을 보고 흥미와 자신감을 느껴서 더욱 열심히 배울 수
        있었습니다. 프론트엔드 개발자로서 사용자가 원활한 서비스를 경험하고,
        안정적으로 데이터를 출력할 수 있도록 하는 것이 제 역할이라고 생각합니다.
        또한, 프론트엔드 개발은 끊임없이 발전하고 변화하는 분야이며, 새로운
        기술과 도구들이 등장하고 있습니다. 이러한 환경에서 저도 새로운 도전과
        지속적인 성장을 이루어내는 것이 프론트엔드 개발자로서의 목표입니다."
      />
      <InterviewBox
        q="일에 있어 가장 중요하게 생각하는 것이 있다면?"
        a="빠른 적응력으로 맡은 일에 대해서 책임을 지고 끝까지 최선을 다하여 주위 사람들로부터 신뢰를 받는 편입니다. 패스트푸드점에서 아르바이트를 할 때 결근 없이 15개월 동안 일하여 아르바이트생 중에서 가장 빠르게 이달의 크루를 받았고 어린 나이에 불구하고 팀리더를 맡게 되었습니다. 하지만 완벽하게 일 처리를 하고자 하는 욕심에 긴박하게 마무리 하는 경우도 있었습니다. 이러한 단점은 타인과의 마찰 및 원활한 일 처리에 방해물이 될 수 있습니다. 이러한 문제점을 인지하고 시간을 정해 계획을 세워 늦어지지 않게 노력했습니다. 이를 통해 부족한 부분을 개선하러 노력하였고 입사 후 주어진 일에 대한 체계적인 계획과 우선순위를 정하여 업무의 효율성을 증대시키도록 하겠습니다."
      />
      <InterviewBox
        q="자기계발을 위해 어떤 것들을 해왔는지?"
        a="프론트엔드 개발 분야에서 필요한 지식과 기술을 습득하기 위해 꾸준히 학습했습니다. 관련된 도서, 학원 수업, 온라인 강의 등을 활용하여 전문적인 지식을 쌓았으며, 필요한 기술을 익혔습니다. 직무와 관련된 경험을 쌓기 위해 실무와 비슷한 프로젝트를 만들어 보았습니다. 이를 통해 많은 것을 배우는 것도 좋지만 내가 알고 있는 기술이라도 확실하게 내 것으로 만들자는 생각으로 CRUD 및 웹 표준 중심으로 완벽하게 습득하고 더욱 다양한 기능을 추가하여 반복적으로 학습해 갔습니다. 또 다른 분들이 만든 프로젝트를 보며 분석하고 질문하고 따라 하며 학습하는 경험도 해보았습니다. 이러한 학습을 하다 보니 연습할 때 모르는 부분이 있으면 질문하여 해결하는 방법도 좋지만 혼자서 웹서핑으로 해결해 보려는 능력이 필요하다는 생각이 들어 연습을 해보았습니다. 원활한 업무 수행을 위해 커뮤니케이션 및 협업 능력이 필요하다고 생각합니다. 저는 학교생활 중에 다양한 그룹 활동을 하며 주로 주도하는 역할을 가지며 많은 사람들을 만나보면서 의견을 듣고 조율하는 경험을 많이 해보았습니다. 이러한 노력을 통해 희망하는 직무에 필요한 역량을 갖추기 위해 노력했으며 자신감을 가지고 업무에 임할 수 있도록 노력하겠습니다."
      />
    </Container>
  );
};

export default Interview;
