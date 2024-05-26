import React, { Dispatch, SetStateAction } from "react";
import styled from "styled-components";
import { DbData } from "../db";
import { Link } from "react-router-dom";
import Spinner from "react-bootstrap/Spinner";

const Container = styled.div`
  width: 286px;
  height: 360px;
  border: 1px solid #000;
  border-radius: 10px;
  margin: 50px auto 15px;
  cursor: pointer;
`;

const ImgBox = styled.div`
  width: 100%;
  height: 180px;
  border-bottom: 1px solid #000;
  /* background: ${(props) => props.theme.imgBgColor}; */
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 10px 10px 0 0;
  object-fit: cover;
`;

const TextBox = styled.div`
  margin: 15px 10px;
`;

const Title = styled.h2`
  font-size: 25px;
  margin-bottom: 15px;
`;

const ListBox = styled.ul`
  /* padding: 0; */
  height: 48px;
  margin-bottom: 20px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`;

const List = styled.li`
  list-style: circle;
`;

const URLBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
  a {
    padding: 7px 10px;
    border: none;
    border-radius: 10px;
    color: #fff;
    font-size: 18px;
    border: 1px solid transparent;
    background: ${(props) => props.theme.textBgColor};
    transition: all 0.3s;
    &:first-child:hover {
      color: ${(props) => props.theme.textBgColor};
      border: 1px solid ${(props) => props.theme.imgBgColor};
      background: #fff;
    }
    &:last-child {
      background: ${(props) => props.theme.imgBgColor};
      &:hover {
        color: ${(props) => props.theme.textBgColor};
        border: 1px solid ${(props) => props.theme.textBgColor};
        background: #fff;
      }
    }
  }
`;

interface ExampleCardProps {
  item: DbData;
  setModal: Dispatch<SetStateAction<boolean>>;
  setModalItem: Dispatch<SetStateAction<object>>;
}

const ExampleCard = ({ item, setModal, setModalItem }: ExampleCardProps) => {
  const onClickCard = () => {
    setModal(true);
    setModalItem(item);
  };

  if (item) {
    return (
      <Container onClick={onClickCard}>
        <ImgBox>
          <Img src={item.imgUrl} alt="logo" />
        </ImgBox>
        <TextBox>
          <Title>{item.name}</Title>
          <ListBox>
            {item.func.map((item, idx) => (
              <List key={idx}>{item}</List>
            ))}
          </ListBox>
          <URLBox>
            <Link to={item.link} target="blank">
              project URL
            </Link>
            <Link to={item.github} target="blank">
              github URL
            </Link>
          </URLBox>
        </TextBox>
      </Container>
    );
  } else {
    return <Spinner animation="border" variant="dark" />;
  }
};

export default ExampleCard;
