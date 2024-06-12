import React from "react";
import styled from "styled-components";
import { db, DbData } from "../db";

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  z-index: 99999;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.7);
`;

const ModalBox = styled.div`
  width: 90%;
  max-width: 1280px;
  height: auto;
  max-height: 90%;
  background: #fff;
  border-radius: 10px;
  padding: 20px;
  padding-top: 0;
  overflow-y: auto;
  overscroll-behavior: contain;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  z-index: 9999;
  position: relative;
  display: flex;
  flex-direction: column;
`;

interface IModal {
  clickModal: DbData;
}

const Modal = ({ clickModal }: IModal) => {
  return (
    <Container>
      <ModalBox>{clickModal.name}</ModalBox>
    </Container>
  );
};

export default Modal;
