import React, { Dispatch, SetStateAction, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Modal from "./Modal";

const Container = styled.div<{ $imgUrl: string }>`
  background: url(${(props) => props.$imgUrl}) top/cover no-repeat;
  width: 100%;
  height: 320px;
  border: 1px solid ${(props) => props.theme.imgBgColor};
  &:hover {
    .infoBox {
      cursor: pointer;
      transition: all 0.3s;
      background: rgba(0, 0, 0, 0.7);
      opacity: 1;
    }
  }
`;

const ProjectInfoBox = styled.div`
  width: 100%;
  height: 100%;
  padding: 0 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  opacity: 0;
  a {
    width: 110px;
    color: #fff;
    font-size: 20px;
    &:hover {
      text-decoration: underline;
    }
  }
`;

const InfoTitleBox = styled.span``;

const Title = styled.h1`
  font-size: 42px;
  color: #fff;
  display: flex;
  align-items: center;
  /* justify-content: center; */
  margin-bottom: 20px;
  p {
    font-size: 16px;
    margin-top: 32px;
  }
`;

const SubTitleBox = styled.div`
  display: flex;
  gap: 15px;
  p {
    color: #fff;
    font-size: 18px;
    border: 1px solid #fff;
    border-radius: 50px;
    padding: 0 5px;
  }
`;

interface DbData {
  id: number;
  name: string;
  catagory: string;
  skill: string[];
  day: string;
  func: string[];
  link: string;
  github: string;
  imgUrl: string;
  text: string;
}

interface SlideProps {
  item: DbData;
  setModal: Dispatch<SetStateAction<boolean>>;
  setModalItem: Dispatch<SetStateAction<object>>;
}

const SlideCard = ({ item, setModal, setModalItem }: SlideProps) => {
  const onclickModal = () => {
    setModalItem(item);
    setModal((current) => !current);
  };
  return (
    <Container $imgUrl={item.imgUrl} onClick={onclickModal}>
      <ProjectInfoBox className="infoBox">
        <InfoTitleBox>
          <Title>
            {item.name} <p>({item.catagory})</p>
          </Title>
          <SubTitleBox>
            {item.skill.map((s, idx) => (
              <p key={idx}>{s}</p>
            ))}
          </SubTitleBox>
        </InfoTitleBox>
        <Link to={item.link} target="blank">
          Project URL
        </Link>
      </ProjectInfoBox>
    </Container>
  );
};

export default SlideCard;
