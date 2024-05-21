import React from "react";
import styled from "styled-components";

const Container = styled.div`
  max-width: 1280px;
  div {
    display: flex;
    gap: 20px;
    padding: 30px;
  }
  @media ${(props) => props.theme.mobile} {
    div {
      p {
        font-size: 18px;
      }
    }
  }
`;

interface Answer {
  text: string;
}

const Answer = ({ text }: Answer) => {
  return (
    <Container>
      <div>
        <p>{text}</p>
      </div>
    </Container>
  );
};

export default Answer;
