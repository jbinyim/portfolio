import React from "react";
import styled from "styled-components";

const Container = styled.div`
  max-width: 300px;
  height: 100%;
  box-shadow: 2px 2px 1px #d9d9d9;
  border: 1px solid #d9d9d9;
  border-radius: 10px;
  margin: 0 auto;
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
  font-size: 15px;
  letter-spacing: -1px;
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
