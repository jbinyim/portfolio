import React from "react";
import styled from "styled-components";
import SkillCard from "./SkillCard";
import { skillLogo } from "../db";

const Container = styled.div`
  width: 100%;
  height: 100%;
  border: 1px solid ${(props) => props.theme.textBgColor};
  border-radius: 10px;
  padding: 10px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
  @media ${(props) => props.theme.tablet} {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: 800px) {
    grid-template-columns: repeat(2, 2fr);
  }
  @media ${(props) => props.theme.mobile} {
    grid-template-columns: repeat(1, 1fr);
    border: none;
    gap: 20px;
  }
`;

const SkillHome = () => {
  return (
    <Container>
      <SkillCard
        skillLogo={skillLogo.html}
        title="Html"
        text="웹 표준을 준수하고, 구조에 따라 적절한 시맨틱 태그를 사용하여 마크업 할 수 있습니다"
      />
      <SkillCard
        skillLogo={skillLogo.css}
        chLogo={skillLogo.scss}
        title="Css / Scss"
        text="구조에 따라 어울리는 레이아웃으로 flex, grid 등을 사용하여 배치하고 적용합니다. transition과 animation 속성을 사용하여 요소의 상태 변화에 부드러운 시각적 효과를 적용합니다. 미디어쿼리로 반응형 웹을 구현합니다."
      />
      <SkillCard
        skillLogo={skillLogo.js}
        title="JavaScript"
        text="조건문, 반복문, 함수 등 JavaScript의 기본적인 문법과 구조를 이해하고 사용할 수 있습니다. 요소를 추가, 삭제, 수정하는 것이 가능하고 동적으로 반응하도록 이벤트 리스너를 추가하고 처리할 수 있습니다. 웹 서버와 비동기적으로 통신하여 데이터를 주고받을 수 있습니다."
      />
      <SkillCard
        skillLogo={skillLogo.ts}
        title="TypeScript"
        text="기본 타입을 이해하고 인터페이스와 타입 별칭 그리고 제네릭을사용하여 코드의 가독성과 재사용성을 높일 수 있습니다. 유니언 타입, 인터섹션 타입, 타입 가드, 타입 단언 등 고급 타입 기능을 이해하고 적용할 수 있습니다."
      />
      <SkillCard
        skillLogo={skillLogo.react}
        title="React"
        text="컴포넌트를 사용하여 재사용 가능한 UI 조각을 만들고 이를 조합하여 복잡한 UI를 구성할 수 있습니다. props와 state를 이해하고, 이를 통해 데이터를 관리하고 UI를 동적으로 업데이트할 수 있습니다. 조건에 따라 다른 컴포넌트를 렌더링하는 기법과 배열을 이용하여 리스트를 렌더링하는 방법을 활용할 수 있습니다. React Router를 사용하여 클라이언트 사이드 라우팅을 구현할 수 있습니다."
      />
      <SkillCard
        skillLogo={skillLogo.git}
        title="Git"
        text="새로운 저장소를 생성하고, 기존 저장소를 복제(clone)하여 로컬 작업 공간에 가져올 수 있습니다. 작업한 내용을 로컬 저장소에 커밋하고, 변경사항을 원격 저장소에 푸시(push)할 수 있습니다. 다른 브랜치와 병합할 수 있습니다."
      />
      <SkillCard
        skillLogo={skillLogo.firebase}
        title="Firebase"
        text=" Firebase 콘솔을 사용하여 새로운 프로젝트를 생성하고 Firebase Hosting을 사용하여 웹 앱을 빠르고 쉽게 배포할 수 있습니다."
      />
      <SkillCard
        skillLogo={skillLogo.figma}
        title="Figma"
        text="기본적인 UI 요소를 디자인하고 화면 레이아웃을 구성할 수 있습니다. 다양한 해상도와 디바이스 크기에 맞는 프레임을 설정하고, 여러 페이지에 걸쳐 디자인을 구성할 수 있습니다. 디자인 요소 사이의 간격과 정렬을 자동으로 조정하여, 반응형 디자인을 더 쉽게 구현할 수 있습니다. 텍스트 스타일, 색상, 그리드 등을 정의하고 일관된 디자인 시스템을 유지할 수 있습니다."
      />
    </Container>
  );
};

export default SkillHome;
