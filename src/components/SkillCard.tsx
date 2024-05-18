import React from "react";
import styled from "styled-components";

const Container = styled.div`
  max-width: 300px;
  height: 190px;
  box-shadow: 2px 2px 1px #d9d9d9;
  border: 1px solid #d9d9d9;
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
`;

interface SkillLogoParam {
  skillLogo?: string;
  chLogo?: string;
  title?: string;
}

const SkillCard = ({ skillLogo = "", chLogo = "", title }: SkillLogoParam) => {
  return (
    <Container>
      <SkillBox>
        <TitleBox>
          <Img $skillLogo={skillLogo} />
          {chLogo ? <Img $skillLogo={chLogo} /> : ""}
          <Title>{title}</Title>
        </TitleBox>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
          necessitatibus facere rem quasi facilis porro commodi vero sunt
          asperiores dolorum deserunt provident vel aliquid adipisci eligendi
          modi, dolor odit pariatur!
        </Text>
      </SkillBox>
    </Container>
  );
};

export default SkillCard;
