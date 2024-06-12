import React, { useState, useEffect } from "react";
import styled from "styled-components";
import ExampleCardBox from "./ExampleCardBox";

const Section = styled.div`
  padding-top: 100px;
  margin-bottom: 300px;
`;

const MenuBox = styled.ul`
  width: fit-content;
  display: flex;
  align-items: center;
  gap: 30px;
  padding: 10px 45px;
  background: ${(props) => props.theme.boxColor};
  border-radius: 40px;
  margin-bottom: 50px;
  text-align: center;

  @media ${(props) => props.theme.m} {
    margin: 0px auto 50px;
    gap: 20px;
  }
  @media ${(props) => props.theme.xs} {
    gap: 10px;
  }
`;

const Menu = styled.li<{ $menuToggle: string }>`
  padding: 10px 20px;
  border-radius: 50px;
  cursor: pointer;
  &:hover {
    background: rgba(229, 231, 235, 0.2);
  }
  &:first-child {
    ${(props) =>
      props.$menuToggle === "all"
        ? "background: rgba(229, 231, 235); color: #000"
        : ""}
  }
  &:nth-child(2) {
    ${(props) =>
      props.$menuToggle === "react"
        ? "background: rgba(229, 231, 235); color: #000"
        : ""}
  }
  &:last-child {
    ${(props) =>
      props.$menuToggle === "javascript"
        ? "background: rgba(229, 231, 235); color: #000"
        : ""}
  }
`;

const CardBox = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  @media ${(props) => props.theme.xl} {
    grid-template-columns: repeat(3, 1fr);
  }
  @media ${(props) => props.theme.l} {
    grid-template-columns: repeat(2, 1fr);
  }
  @media ${(props) => props.theme.m} {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const Example = () => {
  const [menuToggle, setMenuToggle] = useState("all");

  const onClickMenu = (skill: string) => {
    setMenuToggle(skill);
  };

  useEffect(() => {}, [menuToggle]);

  return (
    <Section id="example">
      <MenuBox>
        <Menu $menuToggle={menuToggle} onClick={() => onClickMenu("all")}>
          All
        </Menu>
        <Menu $menuToggle={menuToggle} onClick={() => onClickMenu("react")}>
          React (Ts)
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
    </Section>
  );
};

export default Example;
