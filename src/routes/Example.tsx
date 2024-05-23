import React from "react";
import styled from "styled-components";
import SubTitle from "../components/SubTitle";

const Container = styled.div`
  max-width: 1280px;
  height: 100%;
  margin: 180px auto 0;
  padding: 10px;
`;

const MenuBox = styled.ul`
  display: flex;
  padding: 0;
  margin: 0;
`;
const Menu = styled.li`
  font-size: 25px;
  font-weight: bold;
  border: 1px solid #000;
  padding: 10px 15px;
  cursor: pointer;
  &:first-child {
    border-radius: 20px 0 0 0;
  }
  &:last-child {
    border-radius: 0 20px 0 0;
  }
`;

const CardBox = styled.div`
  width: 100%;
  height: 900px;
  border: 1px solid #000;
`;

const Example = () => {
  const onClickMenu = (e: any) => {
    console.log(e.target.outerText);
  };
  return (
    <Container>
      <SubTitle text="example" />
      <MenuBox>
        <Menu onClick={onClickMenu}>All</Menu>
        <Menu onClick={onClickMenu}>React / Ts</Menu>
        <Menu onClick={onClickMenu}>Js</Menu>
      </MenuBox>
      <CardBox></CardBox>
    </Container>
  );
};

export default Example;
