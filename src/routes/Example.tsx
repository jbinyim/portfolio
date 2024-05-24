import React, { useState } from "react";
import styled from "styled-components";
import SubTitle from "../components/SubTitle";
import ExampleCardBox from "../components/ExampleCardBox";

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
const Menu = styled.li<{ $menuToggle: string }>`
  font-size: 25px;
  font-weight: bold;
  border: 1px solid #000;
  border-bottom: none;
  padding: 10px 15px;
  cursor: pointer;
  &:first-child {
    border-right: none;
    border-radius: 20px 0 0 0;
    background: ${(props) =>
      props.$menuToggle === "all" ? props.theme.imgBgColor : "none"};
  }
  &:nth-child(2) {
    border-right: none;
    background: ${(props) =>
      props.$menuToggle === "react" ? props.theme.imgBgColor : "none"};
  }
  &:last-child {
    border-radius: 0 20px 0 0;
    background: ${(props) =>
      props.$menuToggle === "javascript" ? props.theme.imgBgColor : "none"};
  }
`;
const CardBox = styled.div`
  width: 100%;
  height: 100%;
  border: 1px solid #000;
  padding: 60px 25px 0;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
`;

const Example = () => {
  const [menuToggle, setMenuToggle] = useState("all");

  const onClickMenu = (skill: string) => {
    setMenuToggle(skill);
  };
  return (
    <Container>
      <SubTitle text="example" />
      <MenuBox>
        <Menu $menuToggle={menuToggle} onClick={() => onClickMenu("all")}>
          All
        </Menu>
        <Menu $menuToggle={menuToggle} onClick={() => onClickMenu("react")}>
          React / Ts
        </Menu>
        <Menu
          $menuToggle={menuToggle}
          onClick={() => onClickMenu("javascript")}
        >
          Js
        </Menu>
      </MenuBox>
      <CardBox>
        <ExampleCardBox menuToggle={menuToggle} />
      </CardBox>
    </Container>
  );
};

export default Example;
