import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: auto;
  padding: 20px;
  margin-top: 40px;
  background: ${(props) => props.theme.boxColor};
  border-radius: 30px;
  position: relative;
  cursor: pointer;
  &:hover {
    background: rgba(150, 150, 150, 0.3);
  }
`;

const Title = styled.h2`
  font-size: 24px;

  @media ${(props) => props.theme.s} {
    font-size: 18px;
  }
`;

const Text = styled.p`
  margin-top: 30px;
  font-size: 16px;
  line-height: 1.5rem;
`;

interface IInterviewBox {
  q: string;
  a: string;
}

const InterviewBox = ({ q, a }: IInterviewBox) => {
  const [toggle, setToggle] = useState(false);

  const onClickToggle = () => {
    setToggle((prev) => !prev);
  };

  return (
    <Container onClick={onClickToggle}>
      <Title>Q. {q}</Title>
      {toggle ? <Text>{a}</Text> : null}
    </Container>
  );
};

export default InterviewBox;
