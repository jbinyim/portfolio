import React from "react";
import styled from "styled-components";
import { skillLogo } from "../db";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 30px;
  @media ${(props) => props.theme.m} {
    justify-content: center;
    gap: 5px;
  }
`;

const SkillBox = styled.div`
  min-width: 100px;
  text-align: center;
  border-radius: 5px;
  background: ${(props) => props.theme.boxColor};
  position: relative;
  &:hover {
    .ddd {
      display: block;
      @media ${(props) => props.theme.mobile} {
        display: none;
      }
    }
  }
`;

const HoverBox = styled.div<{ $colors: string }>`
  display: none;
  width: 240px;
  height: auto;
  position: absolute;
  bottom: 150px;
  left: 0;
  z-index: 1;
  background: ${(props) => props.$colors};
  border-radius: 5px;
  padding: 8px 6px;
  @media ${(props) => props.theme.m} {
    left: 50%;
    transform: translateX(-50%);
  }
`;

const HoverTitle = styled.p`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const HoverText = styled(HoverTitle)`
  font-weight: 400;
`;

const Text = styled.p`
  font-size: 16px;
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
  desc: string;
  colors: string;
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
            <HoverBox className="ddd" $colors={item.colors}>
              <HoverTitle>{item.name}</HoverTitle>
              <HoverText>{item.desc}</HoverText>
            </HoverBox>
            <Text>{item.name}</Text>
            <ImgBox>
              <Img
                src={item.img}
                alt="logoImg"
                loading="lazy"
                decoding="async"
              />
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
    case "backend":
      return renderSkills(skillLogo.backend);
    default:
      return <div>Loadinig...</div>;
  }
};

export default SkillCard;
