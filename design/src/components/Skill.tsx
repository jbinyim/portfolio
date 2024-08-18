import React from "react";
import styled from "styled-components";
import SkillCard from "./SkillCard";

const Container = styled.div`
  max-width: 1070px;
  margin: 180px auto 0;
`;

const Title = styled.div`
  font-size: 30px;
  margin-bottom: 45px;
  font-weight: bold;
`;

const SubTitle = styled.li`
  font-size: 25px;
  font-weight: 600;
  margin-bottom: 20px;
  list-style: square;
`;

const Waring = styled.span`
  font-size: 14px;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.6);
`;

const Skill = () => {
  return (
    <Container>
      <Title>Skill & Tools</Title>
      <SubTitle>Common</SubTitle>
      <SkillCard skillName="common" />
      <SubTitle>FrontEnd</SubTitle>
      <SkillCard skillName="frontend" />
      <SubTitle>BackEnd</SubTitle>
      <SkillCard skillName="backend" />
      <SubTitle>Tool</SubTitle>
      <SkillCard skillName="tool" />
      <SubTitle>
        ETC <Waring>(사용 경험만 있는 기술)</Waring>
      </SubTitle>
      <Waring></Waring>
      <SkillCard skillName="etc" />
    </Container>
  );
};

export default Skill;
