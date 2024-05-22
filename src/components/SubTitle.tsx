import React from "react";
import styled from "styled-components";

const Contaier = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 75px;
  margin-bottom: 100px;
  h1 {
    font-size: 100px;
    text-transform: uppercase;
  }
  p {
    font-size: 20px;
    color: ${(props) => props.theme.imgBgColor};
  }
`;

interface SubTitlePros {
  text: string;
}

const SubTitle = ({ text }: SubTitlePros) => {
  return (
    <Contaier>
      <h1>{text}</h1>
      <p>a key project archive that I did my best to build</p>
    </Contaier>
  );
};

export default SubTitle;
