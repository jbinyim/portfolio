import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 100%;
  padding: 5px 2px;
  border: 1px solid ${(props) => props.theme.boxColor};
  background: ${(props) => props.theme.boxColor};
  border-radius: 10px;
`;

const SkillBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  padding: 5px;
`;

const TitleBox = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  margin-bottom: 10px;
`;

const Img = styled.span<{ $skillLogo: string }>`
  display: inline-block;
  background: url(${(props) => props.$skillLogo}) center/cover no-repeat;
  width: 30px;
  height: 30px;
`;

const Title = styled.h2`
  margin-top: 5px;
  font-size: 20px;
  font-weight: bold;
`;

const Text = styled.p`
  font-size: 16px;
  line-height: 1.4rem;
  @media (max-width: 800px) {
    font-size: 14px;
  }
  @media (max-width: 650px) {
    font-size: 13px;
  }
`;

interface SkillLogoParam {
  skillLogo: string;
  chLogo?: string;
  title?: string;
  text: string;
}

const SkillCard = ({ skillLogo, chLogo, title, text }: SkillLogoParam) => {
  return (
    <Container>
      <SkillBox>
        <TitleBox>
          <Img $skillLogo={skillLogo} />
          {chLogo ? <Img $skillLogo={chLogo} /> : ""}
          <Title>{title}</Title>
        </TitleBox>
        <Text>{text}</Text>
      </SkillBox>
    </Container>
  );
};

export default SkillCard;
