import React, { Dispatch, SetStateAction } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
import { DbData } from "../db";
import { motion } from "framer-motion";

const Container = styled(motion.div)`
  width: 100%;
  height: 500px;
  box-shadow: 2px 2px 1px #d9d9d9;
  border-radius: 10px;
  border: 1px solid ${(props) => props.theme.imgBgColor};
  display: flex;
  gap: 60px;
  margin-bottom: 100px;
  position: relative;
  cursor: pointer;
  transition: all 0.3s;
  &:hover {
    .see {
      top: -30px;
      opacity: 1;
    }
  }
  .see {
    position: absolute;
    top: 0;
    right: 0;
    opacity: 0;
    color: #f00;
    transition: all 0.3s;
  }
  @media ${(props) => props.theme.tablet} {
    flex-direction: column;
    /* gap 0 */
    gap: 30px;
    width: 578px;
    height: auto;
    margin: 0 auto 50px;
    padding: 10px;
    .see {
      opacity: 1;
      top: -30px;
    }
  }
  @media ${(props) => props.theme.mobile} {
    width: 320px;
    height: auto;
    .see {
      font-size: 14px;
      letter-spacing: -1px;
    }
  }
`;

const ImgBox = styled.div`
  width: 600px;
  height: 100%;
  border-radius: 10px;
  background: ${(props) => props.theme.imgBgColor};
  text-align: center;
  @media ${(props) => props.theme.tablet} {
    max-width: 450px;
    height: 400px;
    margin: 0 auto;
  }
  @media ${(props) => props.theme.mobile} {
    max-width: 300px;
    height: 350px;
  }
`;
const Img = styled.img`
  max-width: 600px;
  height: 100%;
  object-fit: contain;
  @media ${(props) => props.theme.tablet} {
    max-width: 100%;
  }
`;

const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  @media ${(props) => props.theme.tablet} {
    gap: 20px;
  }
  @media ${(props) => props.theme.mobile} {
    gap: 50px;
  }
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
    margin-right: 10px;
    padding: 0 10px;
  }
  @media ${(props) => props.theme.tablet} {
    h3 {
      font-size: 30px;
    }
  }
`;

const TextMiddle = styled.div``;

const MiddleList = styled.li`
  list-style: circle;
  max-width: 500px;
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
  a {
    font-size: 20px;
    padding-bottom: 3px;
    border-bottom: 1px solid transparent;
    &:hover {
      border-bottom: 1px solid #000;
    }
  }
  &:hover {
    cursor: pointer;
  }
  @media ${(props) => props.theme.tablet} {
    font-size: 20px;
    a {
      display: none;
    }
  }
`;

interface ProjectCardProps {
  item: DbData;
  setModal: Dispatch<SetStateAction<boolean>>;
  setModalItem: Dispatch<SetStateAction<object>>;
}

const ProjectCard = ({ item, setModal, setModalItem }: ProjectCardProps) => {
  const onClickCard = () => {
    setModalItem(item);

    setModal(true);
  };
  return (
    <Container layoutId={item.id + ""} onClick={onClickCard}>
      <p className="see">카드를 누르시면 자세한 정보를 확인할 수 있습니다.</p>
      <ImgBox>
        <Img src={item.imgUrl} alt="img" />
      </ImgBox>
      <TextBox>
        <TextTop>
          <h3>{item.name}</h3>
          {item.skill.map((item, idx) => (
            <p key={idx}>{item}</p>
          ))}
        </TextTop>
        <TextMiddle>
          <ul>
            {item.func.map((it, idx) => (
              <MiddleList key={idx}>{it}</MiddleList>
            ))}
          </ul>
        </TextMiddle>
        <TextBottom>
          <LinkTo>
            <FontAwesomeIcon icon={faLink} />
            <p>project URL</p>
            <Link to={item.link} target="blank">
              - {item.link}
            </Link>
          </LinkTo>
          <LinkTo>
            <FontAwesomeIcon icon={faGithub} />
            <p>Github URL </p>
            <Link to={item.github} target="blank">
              - {item.github.slice(0, 26)}...
            </Link>
          </LinkTo>
        </TextBottom>
      </TextBox>
    </Container>
  );
};

export default ProjectCard;
