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
  cursor: pointer;
  &:hover {
    color: #fff;
    background: #000;
  }
`;

const HeaderBtn = () => {
  const onClickCopy = (text: string) => {
    alert(`${text}를 클립보드에 복사했습니다.`);
    navigator.clipboard.writeText(text);
  };
  return (
    <HeaderBox>
      <BtnBox>
        <p onClick={() => onClickCopy("jbinyim12@naver.com")}>Email</p>
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
