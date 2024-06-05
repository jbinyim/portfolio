import React, { Dispatch, SetStateAction } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

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
  background-color: rgba(0, 0, 0, 0.6);
`;

const ModalBox = styled(motion.div)`
  width: 90%;
  max-width: 1280px;
  height: auto;
  max-height: 90%;
  /* margin-top: 50px; */
  background: #fff;
  border-radius: 10px;
  padding: 20px;
  overflow-y: auto;
  overscroll-behavior: contain;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  z-index: 9999;
  position: relative;
  display: flex;
  flex-direction: column;

  @media ${(props) => props.theme.mobile} {
    margin-top: 70px;
    width: 95%;
    height: auto;
    padding: 15px;
  }
`;

const CloseBox = styled.div`
  text-align: right;
  .fa-x {
    cursor: pointer;
    font-size: 24px;
  }
  margin-bottom: 20px; // 모달 내용과 닫기 버튼 사이 간격 조정
`;

const ContentBox = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  @media ${(props) => props.theme.mobile} {
    flex-direction: column;
    align-items: center;
    gap: 15px;
  }
`;

const ImgBox = styled.div`
  flex: 1;
  min-height: 500px;
  background: ${(props) => props.theme.imgBgColor};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  border-radius: 10px;
  @media ${(props) => props.theme.mobile} {
    width: 100%;
    min-height: 250px;
  }
`;

const Img = styled.div<{ $imgUrl: string | undefined }>`
  background: url(${(props) => props.$imgUrl}) top/cover no-repeat;
  width: 100%;
  height: 100%;
  @media ${(props) => props.theme.mobile} {
    width: 100%;
    height: 250px;
  }
`;

const TextBox = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 10px;
  @media ${(props) => props.theme.mobile} {
    width: 100%;
  }
`;

const MainSkill = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

const SkillBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Subtitle = styled.span`
  font-size: 20px;
  font-weight: bold;
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
      <ModalBox layoutId={modalItem.id + ""}>
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
            <p>
              <Subtitle>작업기간</Subtitle> : {modalItem.day}
            </p>
            <MainSkill>
              <Subtitle>주요기술</Subtitle> :
              {modalItem.skill?.map((item, idx) => (
                <p key={idx}>{item},</p>
              ))}
            </MainSkill>
            <SkillBox>
              <span>
                <Subtitle>상세기술</Subtitle> :
              </span>
              {modalItem.func?.map((item, idx) => (
                <p key={idx}>{item}</p>
              ))}
            </SkillBox>
            <p>
              <Subtitle>개발이야기</Subtitle> : {modalItem.text}
            </p>
          </TextBox>
        </ContentBox>
      </ModalBox>
    </Container>
  );
};

export default Modal;
