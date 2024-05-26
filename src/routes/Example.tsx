import React, { useState } from "react";
import styled from "styled-components";
import SubTitle from "../components/SubTitle";
import ExampleCardBox from "../components/ExampleCardBox";
import Modal from "../components/Modal";

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
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  position: relative;
  p {
    position: absolute;
    top: 0;
    right: 0;
    color: #f00;
    opacity: 0;
    transition: all 0.3s;
  }
  &:hover {
    p {
      opacity: 1;
      top: -30px;
    }
  }

  @media ${(props) => props.theme.moreTablet} {
    grid-template-columns: repeat(2, 1fr);
    .see {
      opacity: 1;
      top: 0;
    }
  }
  @media ${(props) => props.theme.mobile} {
    grid-template-columns: repeat(1, 1fr);
    &:hover {
      p {
        top: 0;
      }
    }
  }
`;

const Example = () => {
  const [menuToggle, setMenuToggle] = useState("all");
  const [modal, setModal] = useState(false);
  const [modalItem, setModalItem] = useState({});

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
        <p className="see">카드를 누르시면 자세한 정보를 확인할 수 있습니다.</p>
        <ExampleCardBox
          setModal={setModal}
          setModalItem={setModalItem}
          menuToggle={menuToggle}
        />
      </CardBox>
      {modal ? <Modal setModal={setModal} modalItem={modalItem} /> : ""}
    </Container>
  );
};

export default Example;
