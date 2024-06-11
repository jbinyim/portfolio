import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: auto;
  padding: 20px;
  margin-top: 40px;
  background: ${(props) => props.theme.boxColor};
  border-radius: 30px;
  position: relative;
  h2 {
    font-size: 24px;
    margin-bottom: 30px;
  }
  p {
    font-size: 16px;
    line-height: 1.5rem;
  }
`;

interface IInterviewBox {
  q: string;
  a: string;
}

const InterviewBox = ({ q, a }: IInterviewBox) => {
  return (
    <Container>
      <h2>Q. {q}</h2>
      <p>{a}</p>
    </Container>
  );
};

export default InterviewBox;
