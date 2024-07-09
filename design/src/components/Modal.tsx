import React from "react";
import styled from "styled-components";
import { DbData } from "../db";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink, faX } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

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

const CloseBox = styled.div`
  position: sticky;
  top: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  background: #fff;
  padding: 10px;
  border-bottom: 1px solid ${(props) => props.theme.boxColor};
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
  border: 1px solid ${(props) => props.theme.textBgColor};
  text-align: center;
  transition: all 0.3s;
  &:nth-child(2) {
    margin-left: 20px;
  }
  &:hover {
    background: ${(props) => props.theme.textBgColor};
  }
`;

const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
`;

const ImgBox = styled.div`
  width: 100%;
  height: 500px;
`;

const Img = styled.div<{ $imgUrl: string | undefined }>`
  background: url(${(props) => props.$imgUrl}) top/cover no-repeat;
  width: 100%;
  height: 100%;
`;

const TextBox = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const ProjectText = styled.p`
  margin-top: 10px;
  margin-bottom: 20px;
`;

const MainSkill = styled.div`
  margin-bottom: 30px;
  p {
    margin: 0;
    margin-top: 10px;
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
  margin-top: 20px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 15px;
  @media ${(props) => props.theme.m} {
    grid-template-columns: repeat(2, 2fr);
  }
  @media ${(props) => props.theme.s} {
    grid-template-columns: repeat(1, 2fr);
  }
`;

const DevImage = styled.div<{ $imgUrl: string }>`
  width: 100%;
  height: 300px;
  border: 1px solid ${(props) => props.theme.boxColor};
  border-radius: 8px;
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

interface IModal {
  clickModal: DbData;
}

const Modal = ({ clickModal }: IModal) => {
  const history = useNavigate();
  const onClickclose = () => {
    history("/");
  };

  return (
    <Container>
      <ModalBox>
        <CloseBox>
          <div>
            <IconBox>
              <Link to={`${clickModal.github}`} target="_blank">
                <FontAwesomeIcon icon={faGithub} />
              </Link>
            </IconBox>
            <IconBox>
              <Link to={`${clickModal.link}`} target="_blank">
                <FontAwesomeIcon icon={faLink} />
              </Link>
            </IconBox>
          </div>
          <IconBox>
            <FontAwesomeIcon icon={faX} onClick={onClickclose} />
          </IconBox>
        </CloseBox>
        <ContentBox>
          <ImgBox>
            <Img $imgUrl={clickModal.imgUrl && clickModal.imgUrl[1]} />
          </ImgBox>
          <TextBox>
            <h1>🔊 {clickModal.name}</h1>
            <ProjectText>{clickModal.catagory}프로젝트</ProjectText>
            <MainSkill>
              <Subtitle>📅 작업기간</Subtitle>
              <p>{clickModal.day}</p>
            </MainSkill>
            <MainSkill>
              <Subtitle>📍 주요기술</Subtitle>
              {clickModal.skill?.map((item, idx) => (
                <p key={idx}>- {item}</p>
              ))}
            </MainSkill>
            <SkillBox>
              <span>
                <Subtitle>🔦 상세기술</Subtitle>
              </span>
              {clickModal.func?.map((item, idx) => (
                <p key={idx}>- {item}</p>
              ))}
            </SkillBox>
            <MainSkill>
              <Subtitle>📕 개발이야기</Subtitle>
              <p>{clickModal.text}</p>
            </MainSkill>
          </TextBox>
        </ContentBox>
        <DevImg>
          <Subtitle>💻 작업 화면</Subtitle>
          <DevImgBox>
            {clickModal.imgUrl &&
              clickModal.imgUrl.map((img, idx) => (
                <DevImage key={idx} $imgUrl={img} />
              ))}
          </DevImgBox>
        </DevImg>
      </ModalBox>
    </Container>
  );
};

export default Modal;
