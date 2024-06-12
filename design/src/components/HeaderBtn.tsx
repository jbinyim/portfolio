import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const HeaderBox = styled.div`
  display: flex;
  gap: 20px;
  position: absolute;
  top: 40px;
  left: 40px;
  z-index: 2;
`;

const BtnBox = styled.div`
  padding: 5px;
  text-align: center;
  border-bottom: 4px solid #000;
  transition: all 0.3s;
  &:hover {
    color: #fff;
    background: #000;
  }
`;

const HeaderBtn = () => {
  return (
    <HeaderBox>
      <BtnBox>
        <Link to={`https://yjb-portfolio.firebaseapp.com/`}>Home</Link>
      </BtnBox>
      <BtnBox>
        <Link to={`https://github.com/jbinyim`} target="_blank">
          Github
        </Link>
      </BtnBox>
    </HeaderBox>
  );
};

export default HeaderBtn;
