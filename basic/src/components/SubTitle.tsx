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
    font-size: 90px;
    text-transform: uppercase;
  }
  p {
    font-size: 20px;
    color: ${(props) => props.theme.imgBgColor};
  }
  @media ${(props) => props.theme.tablet} {
    margin-bottom: 80px;
    h1 {
      font-size: 60px;
    }
  }
  @media ${(props) => props.theme.mobile} {
    gap: 50px;
    margin-bottom: 70px;
    h1 {
      font-size: 30px;
    }
    p {
      font-size: 15px;
    }
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
