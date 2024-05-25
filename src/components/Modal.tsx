import React, { Dispatch, SetStateAction } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  z-index: 9998;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.6);
`;

const ModalBox = styled.div`
  width: 1280px;
  height: 90vh;
  background: #fff;
  margin-top: 100px;
  overflow-y: scroll;
  z-index: 9999;
  .fa-x {
    cursor: pointer;
  }
  @media ${(props) => props.theme.mobile} {
    margin-top: 160px;
    height: 100%;
  }
`;

const CloseBox = styled.div`
  text-align: right;
  margin: 20px 50px 0 0;
  .fa-x {
    font-size: 24px;
  }
  @media ${(props) => props.theme.mobile} {
    text-align: left;
    margin-left: 20px;
  }
`;

const ContentBox = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  gap: 100px;
  padding: 10px;
  @media ${(props) => props.theme.mobile} {
    flex-direction: column;
    gap: 10px;
    padding: 7px;
  }
`;

const ImgBox = styled.div`
  width: 450px;
  min-height: 350px;
  background: ${(props) => props.theme.imgBgColor};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  border-radius: 10px;
  @media ${(props) => props.theme.mobile} {
    width: 350px;
  }
`;

const Img = styled.div<{ $imgUrl: string | undefined }>`
  background: url(${(props) => props.$imgUrl}) top/cover no-repeat;
  width: 100%;
  height: 100%;
`;

const TextBox = styled.div`
  width: 400px;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  /* border: 1px solid #000; */
  @media ${(props) => props.theme.mobile} {
    gap: 5px;
  }
  p:last-child {
    max-width: 340px;
  }
`;

const SkillBox = styled.div`
  display: flex;
  gap: 10px;
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
        <CloseBox>
          <FontAwesomeIcon icon={faX} onClick={onclickModal} />
        </CloseBox>
        <ContentBox>
          <ImgBox>
            <Img $imgUrl={modalItem.imgUrl} />
          </ImgBox>
          <TextBox>
            <h1>{modalItem.name}</h1>
            <p>{modalItem.catagory}프로젝트</p>
            <p>작업기간 : {modalItem.day}</p>
            <SkillBox>
              주요기술 :
              {modalItem.skill?.map((item, idx) => (
                <p key={idx}>{item}</p>
              ))}
            </SkillBox>
            <SkillBox>
              상세기술 :
              {modalItem.func?.map((item, idx) => (
                <p key={idx}>{item}</p>
              ))}
            </SkillBox>
            <p>상세설명 : {modalItem.text}</p>
          </TextBox>
        </ContentBox>
      </ModalBox>
    </Container>
  );
};

export default Modal;
