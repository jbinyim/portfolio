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
  @media ${(props) => props.theme.mobile} {
    grid-template-columns: repeat(1, 1fr);
    border: none;
    gap: 20px;
  }
`;

const SkillHome = () => {
  return (
    <Container>
      <SkillCard skillLogo={skillLogo.html} title="Html" />
      <SkillCard
        skillLogo={skillLogo.css}
        chLogo={skillLogo.scss}
        title="Css / Scss"
      />
      <SkillCard skillLogo={skillLogo.js} title="JavaScript" />
      <SkillCard skillLogo={skillLogo.ts} title="TypeScript" />
      <SkillCard skillLogo={skillLogo.react} title="React" />
      <SkillCard skillLogo={skillLogo.git} title="Git" />
      <SkillCard skillLogo={skillLogo.firebase} title="Firebase" />
      <SkillCard skillLogo={skillLogo.figma} title="Figma" />
    </Container>
  );
};

export default SkillHome;
