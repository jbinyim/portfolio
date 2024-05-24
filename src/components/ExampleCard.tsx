import React from "react";
import styled from "styled-components";
import { DbData } from "../db";
import { Link } from "react-router-dom";
import Spinner from "react-bootstrap/Spinner";

const Container = styled.div`
  width: 286px;
  height: 360px;
  border: 1px solid #000;
  border-radius: 10px;
  margin-bottom: 65px;
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
  margin-bottom: 20px;
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
    padding: 10px;
    border: none;
    border-radius: 10px;
    color: #fff;
    font-size: 18px;
    background: ${(props) => props.theme.textBgColor};
    &:last-child {
      background: ${(props) => props.theme.imgBgColor};
    }
  }
`;

interface ExampleCardProps {
  item?: DbData;
}

const ExampleCard = ({ item }: ExampleCardProps) => {
  if (item) {
    return (
      <Container>
        <ImgBox>
          <Img src={item.imgUrl} alt="logo" />
        </ImgBox>
        <TextBox>
          <Title>{item.name}</Title>
          <ListBox>
            <List>설명</List>
            <List>설명</List>
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
