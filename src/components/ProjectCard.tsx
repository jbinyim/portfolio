import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
import { DbData } from "../db";

const Container = styled.div`
  width: 100%;
  height: 500px;
  border: 1px solid ${(props) => props.theme.imgBgColor};
  display: flex;
  gap: 60px;
  margin-bottom: 100px;
`;

const ImgBox = styled.div`
  width: 600px;
  height: 100%;
  background: ${(props) => props.theme.imgBgColor};
  text-align: center;
`;
const Img = styled.img`
  max-width: 600px;
  height: 100%;
  object-fit: contain;
`;

const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const TextTop = styled.span`
  h3 {
    font-size: 50px;
    font-weight: bold;
    margin-bottom: 30px;
  }
  p {
    display: inline-block;
    text-align: center;
    font-size: 20px;
    border: 1px solid #000;
    border-radius: 50px;
    margin: 0;
    padding: 0 10px;
  }
`;

const TextBottom = styled.span``;

const LinkTo = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  font-size: 25px;
  margin-bottom: 10px;
  p {
    margin: 0;
  }
  .svg-inline--fa {
    margin-top: 5px;
  }
  a:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;

interface ProjectCardProps {
  item: DbData;
}

const ProjectCard = ({ item }: ProjectCardProps) => {
  return (
    <Container>
      <ImgBox>
        <Img src={item.imgUrl} alt="img" />
      </ImgBox>
      <TextBox>
        <TextTop>
          <h3>{item.name}</h3>
          <p>{item.skill}</p>
        </TextTop>
        <TextBottom>
          <LinkTo>
            <FontAwesomeIcon icon={faLink} />
            <p>project URL :</p>
            <Link to={"/naver.com"}>https://naver.com</Link>
          </LinkTo>
          <LinkTo>
            <FontAwesomeIcon icon={faGithub} />
            <p>Github URL :</p>
            <Link to={"https://naver.com"}>z</Link>
          </LinkTo>
        </TextBottom>
      </TextBox>
    </Container>
  );
};

export default ProjectCard;
