import React from "react";
import styled from "styled-components";
import SkillCard from "./SkillCard";

const Container = styled.div`
  max-width: 1070px;
  margin: 90px auto 0;
`;

const Title = styled.div`
  font-size: 30px;
  margin-bottom: 45px;
  font-weight: bold;
`;

const SubTitle = styled.h4`
  font-size: 25px;
  font-weight: 600;
  margin-bottom: 20px;
`;

const Skill = () => {
  return (
    <Container>
      <Title>Skill & Tools</Title>
      <SubTitle>Common</SubTitle>
      <SkillCard skillName="common" />
      <SubTitle>FrontEnd</SubTitle>
      <SkillCard skillName="frontend" />
      <SubTitle>Tool</SubTitle>
      <SkillCard skillName="tool" />
      <SubTitle>ETC</SubTitle>
      <p>사용 경험만 있는 기술</p>
      <SkillCard skillName="etc" />
    </Container>
  );
};

export default Skill;
