import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  p {
    margin: 0;
    font-size: 25px;
    font-weight: bold;
  }
`;

interface QuestionProps {
  text: string;
}

const Question = ({ text }: QuestionProps) => {
  return (
    <Container>
      <h3>Q.</h3>
      <p>{text}</p>
    </Container>
  );
};

export default Question;
