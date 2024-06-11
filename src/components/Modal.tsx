import React, { Dispatch, SetStateAction } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink, faX } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

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

const ModalBox = styled(motion.div)`
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
  @media ${(props) => props.theme.mobile} {
    margin-top: 10px;
    width: 95%;
    height: auto;
    padding: 15px;
    padding-top: 0;
  }
`;

const CloseBox = styled.div`
  position: sticky;
  top: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  background: #fff;
  padding: 10px;
  border-bottom: 1px solid ${(props) => props.theme.imgBgColor};
  .svg-inline--fa {
    cursor: pointer;
    font-size: 20px;
    margin-top: 10px;
  }
`;

const IconBox = styled.span`
  display: inline-block;
  width: 40px;
  height: 40px;
  border-radius: 100%;
  border: 1px solid ${(props) => props.theme.imgBgColor};
  text-align: center;
  transition: all 0.3s;
  &:nth-child(2) {
    margin-left: 20px;
  }
  &:hover {
    background: ${(props) => props.theme.imgBgColor};
  }
`;

const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  @media ${(props) => props.theme.mobile} {
    flex-direction: column;
    align-items: center;
    gap: 15px;
  }
`;

const ImgBox = styled.div`
  width: 100%;
  height: 500px;
  @media ${(props) => props.theme.mobile} {
    height: 350px;
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
  margin-bottom: 30px;
  p {
    margin: 0;
  }
`;

const SkillBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 30px;
  p {
    margin: 0;
  }
`;

const DevImg = styled.div``;

const DevImgBox = styled.div`
  margin-top: 10px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 15px;
  @media ${(props) => props.theme.moreTablet} {
    grid-template-columns: repeat(2, 1fr);
  }
  @media ${(props) => props.theme.mobile} {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const DevImage = styled.div<{ $imgUrl: string }>`
  width: 100%;
  height: 300px;
  border: 1px solid ${(props) => props.theme.imgBgColor};
  background-image: url(${(props) => props.$imgUrl});
  background-position: top;
  background-size: cover;
  transition: all 1s;
  &:hover {
    background-position: bottom;
  }
`;

const Subtitle = styled.span`
  font-size: 25px;
  font-weight: bold;
  margin: 0;
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
  imgUrl?: string[];
  text?: string;
}

interface ModalProps {
  modalItem: DbData;
  setModal: Dispatch<SetStateAction<boolean>>;
}

const Modal = ({ setModal, modalItem }: ModalProps) => {
  const onclickModal = () => {
    setModal((current) => !current);
  };
  return (
    <Container>
      <ModalBox layoutId={modalItem.id + ""}>
        <CloseBox>
          <div>
            <IconBox>
              <Link to={`${modalItem.github}`} target="_blank">
                <FontAwesomeIcon icon={faGithub} />
              </Link>
            </IconBox>
            <IconBox>
              <Link to={`${modalItem.link}`} target="_blank">
                <FontAwesomeIcon icon={faLink} />
              </Link>
            </IconBox>
          </div>
          <IconBox>
            <FontAwesomeIcon icon={faX} onClick={onclickModal} />
          </IconBox>
        </CloseBox>
        <ContentBox>
          <ImgBox>
            <Img $imgUrl={modalItem.imgUrl && modalItem.imgUrl[0]} />
          </ImgBox>
          <TextBox>
            <h1>{modalItem.name}</h1>
            <p>{modalItem.catagory}프로젝트</p>
            <MainSkill>
              <Subtitle>📅 작업기간</Subtitle>
              <p>{modalItem.day}</p>
            </MainSkill>
            <MainSkill>
              <Subtitle>📍 주요기술</Subtitle>
              {modalItem.skill?.map((item, idx) => (
                <p key={idx}>- {item}</p>
              ))}
            </MainSkill>
            <SkillBox>
              <span>
                <Subtitle>🔦 상세기술</Subtitle>
              </span>
              {modalItem.func?.map((item, idx) => (
                <p key={idx}>- {item}</p>
              ))}
            </SkillBox>
            <MainSkill>
              <Subtitle>📕 개발이야기</Subtitle>
              <p>{modalItem.text}</p>
            </MainSkill>
          </TextBox>
        </ContentBox>
        <DevImg>
          <Subtitle>💻 작업 화면</Subtitle>
          <DevImgBox>
            {modalItem.imgUrl &&
              modalItem.imgUrl.map((img, idx) => (
                <DevImage key={idx} $imgUrl={img} />
              ))}
          </DevImgBox>
        </DevImg>
      </ModalBox>
    </Container>
  );
};

export default Modal;
