import React, { Dispatch, SetStateAction } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { DbData } from "../db";
import { motion } from "framer-motion";

const Container = styled(motion.div)<{ $imgUrl: string }>`
  background: url(${(props) => props.$imgUrl}) top/cover no-repeat;
  width: 100%;
  height: 320px;
  border: 1px solid ${(props) => props.theme.imgBgColor};
  &:hover {
    .infoBox {
      transition: all 0.3s;
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
  align-items: center;
  opacity: 0;
  background: ${(props) => props.theme.textBgColor};
  a {
    cursor: pointer;
    text-align: center;
    width: 160px;
    color: #fff;
    font-size: 20px;
    border: 1px solid #fff;
    padding: 7px;
    transition: all 0.3s;
    border-radius: 7px;
    &:hover {
      background: #fff;
      color: #000;
    }
  }
`;

const InfoTitleBox = styled.span``;

const Title = styled.h1`
  font-size: 42px;
  color: #fff;
  display: flex;
  align-items: center;
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
    font-style: italic;
    border-radius: 50px;
    padding: 0 5px;
  }
`;

const SeeMore = styled.p`
  cursor: pointer;
  text-align: center;
  width: 160px;
  color: #fff;
  font-size: 20px;
  border: 1px solid #fff;
  padding: 7px;
  transition: all 0.3s;
  border-radius: 7px;
  &:hover {
    background: #fff;
    color: #000;
  }
`;

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
    <Container $imgUrl={item.imgUrl} layoutId={item.id + ""}>
      <ProjectInfoBox className="infoBox">
        <InfoTitleBox>
          <Title>
            {item.name} <p>({item.catagory})</p>
          </Title>
          <SubTitleBox>
            {item.skill.map((s, idx) => (
              <p key={idx}>#{s}</p>
            ))}
          </SubTitleBox>
        </InfoTitleBox>
        <Link to={item.link} target="blank">
          사이트 바로가기
        </Link>
        <SeeMore onClick={onclickModal}>자세히 보기</SeeMore>
      </ProjectInfoBox>
    </Container>
  );
};

export default SlideCard;
