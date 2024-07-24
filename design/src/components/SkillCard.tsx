import React from "react";
import styled from "styled-components";
import { skillLogo } from "../db";

const Container = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 15px;
`;

const SkillBox = styled.div`
  min-width: 100px;
  text-align: center;
  /* border: 1px solid #fff; */
  border-radius: 5px;
  background: ${(props) => props.theme.boxColor};
`;

const Text = styled.p`
  font-size: 16px;
  /* border-bottom: 1px solid #fff; */
  padding: 8px 5px;
`;

const ImgBox = styled.div`
  padding: 10px 5px;
`;

const Img = styled.img`
  width: 72px;
  height: 72px;
`;

interface SkillI {
  name: string;
  img: string;
}

interface SkillCardI {
  skillName: string;
}

const SkillCard = ({ skillName }: SkillCardI) => {
  const renderSkills = (skills: SkillI[]) => {
    return (
      <Container>
        {skills.map((item, idx) => (
          <SkillBox key={idx}>
            <Text>{item.name}</Text>
            <ImgBox>
              <Img src={item.img} alt="logoImg" />
            </ImgBox>
          </SkillBox>
        ))}
      </Container>
    );
  };

  switch (skillName) {
    case "common":
      return renderSkills(skillLogo.common);
    case "frontend":
      return renderSkills(skillLogo.frontend);
    case "tool":
      return renderSkills(skillLogo.tool);
    case "etc":
      return renderSkills(skillLogo.etc);
    default:
      return <div>5</div>;
  }
};

export default SkillCard;
