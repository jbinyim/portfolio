import React, { Dispatch, SetStateAction } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
`;

const ModalBox = styled.div`
  width: 1280px;
  height: 800px;
  background: #fff;
  margin-top: 100px;
  overflow-y: scroll;
  .fa-x {
    cursor: pointer;
  }
`;

interface DbData {
  id?: number;
  name?: string;
  catagory?: string;
  skill?: string[];
  day?: string;
  func?: string[];
  link?: string;
  github?: string;
  imgUrl?: string;
  text?: string;
}

interface ModalProps {
  setModal: Dispatch<SetStateAction<boolean>>;
  modalItem: DbData;
}

const Modal = ({ setModal, modalItem }: ModalProps) => {
  const onclickModal = () => {
    setModal((current) => !current);
  };
  return (
    <Container>
      <ModalBox>
        <FontAwesomeIcon icon={faX} onClick={onclickModal} />
        <div>
          <span></span>
        </div>
        <div>
          <h1>{modalItem.name}</h1>
          <p>{modalItem.catagory}프로젝트</p>
          <p>{modalItem.day}</p>
          <div>
            {modalItem.skill?.map((item, idx) => (
              <p key={idx}>{item}</p>
            ))}
          </div>
          <div>
            {modalItem.func?.map((item, idx) => (
              <p key={idx}>{item}</p>
            ))}
          </div>
          <p></p>
        </div>
      </ModalBox>
    </Container>
  );
};

export default Modal;
