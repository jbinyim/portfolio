import React, { useState } from "react";
import styled from "styled-components";
import { db } from "../db";
import { Link, useNavigate } from "react-router-dom";
import ProjectSlide from "./ProjectSlide";

const ProjectNav = styled.ul`
  width: 100px;
  margin-top: 100px;
  margin-bottom: 15px;
  padding: 5px 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
  border-radius: 100px;
  background: ${(props) => props.theme.boxColor};
`;

const Icons = styled.svg`
  width: 30px;
  height: 30px;
  fill: #fff;
  cursor: pointer;
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  /* padding-top: 100px; */
  margin-bottom: 200px;
  @media ${(props) => props.theme.xl} {
    grid-template-columns: repeat(3, 1fr);
  }
  @media ${(props) => props.theme.l} {
    grid-template-columns: repeat(2, 1fr);
  }
  @media ${(props) => props.theme.m} {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const Contents = styled.div`
  position: relative;
  height: 400px;
  background: ${(props) => props.theme.boxColor};
  border-radius: 5px;
  overflow: hidden;
  cursor: pointer;
  transition: all 0.3s;
  &:hover {
    transform: translateY(-10px);
    .hoverBox {
      opacity: 1;
    }
  }
`;

const Img = styled.div<{ $imgUrl: string }>`
  width: 100%;
  height: 45%;
  background: url(${(props) => props.$imgUrl}) top/cover no-repeat;
`;

const TextBox = styled.div`
  height: 55%;
  padding: 30px 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Title = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
`;

const Text = styled.p`
  font-size: 15px;
  color: #9e9e9e;
`;

const TagBox = styled.div`
  display: flex;
  gap: 15px;
`;

const Tag = styled.span`
  font-size: 12px;
  padding: 5px;
  background: #242424;
`;

const HoverBox = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: ${(props) => props.theme.boxColor};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  opacity: 0;
  transition: all 0.3s;
  overflow: hidden;
  a {
    cursor: pointer;
    text-align: center;
    width: 200px;
    color: #fff;
    font-size: 20px;
    letter-spacing: -1px;
    border: 1px solid #fff;
    padding: 10px;
    transition: all 0.3s;
    border-radius: 5px;
    &:hover {
      background: #fff;
      color: #000;
    }
  }
`;

const HoverTitle = styled.h2`
  margin-bottom: 30px;
  font-size: 30px;
`;

const SeeMore = styled.p`
  cursor: pointer;
  text-align: center;
  width: 200px;
  color: #fff;
  font-size: 20px;
  border: 1px solid #fff;
  padding: 10px;
  transition: all 0.3s;
  border-radius: 5px;
  margin-top: 20px;
  &:hover {
    background: #fff;
    color: #000;
  }
`;

const Project = () => {
  const history = useNavigate();
  const [toggle, setToggle] = useState(true);

  const onBoxClick = (modalId: number) => {
    history(`/modal/${modalId}`);
  };

  const onClickToggleTrue = () => {
    setToggle(true);
  };

  const onClickToggleFalse = () => {
    setToggle(false);
  };

  return (
    <>
      <ProjectNav>
        <li onClick={onClickToggleTrue}>
          <Icons xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960">
            <path d="M120-160q-33 0-56.5-23.5T40-240v-480q0-33 23.5-56.5T120-800h80q33 0 56.5 23.5T280-720v480q0 33-23.5 56.5T200-160h-80Zm0-79h80v-482h-80v482Zm320 79q-33 0-56.5-23.5T360-240v-480q0-33 23.5-56.5T440-800h400q33 0 56.5 23.5T920-720v480q0 33-23.5 56.5T840-160H440Zm0-79h400v-482H440v482Zm-240 0v-482 482Zm240 0v-482 482Z" />
          </Icons>
        </li>
        <li onClick={onClickToggleFalse}>
          <Icons xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960">
            <path d="M320-280q17 0 28.5-11.5T360-320q0-17-11.5-28.5T320-360q-17 0-28.5 11.5T280-320q0 17 11.5 28.5T320-280Zm0-160q17 0 28.5-11.5T360-480q0-17-11.5-28.5T320-520q-17 0-28.5 11.5T280-480q0 17 11.5 28.5T320-440Zm0-160q17 0 28.5-11.5T360-640q0-17-11.5-28.5T320-680q-17 0-28.5 11.5T280-640q0 17 11.5 28.5T320-600Zm120 320h240v-80H440v80Zm0-160h240v-80H440v80Zm0-160h240v-80H440v80ZM200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-560H200v560Zm0-560v560-560Z" />
          </Icons>
        </li>
      </ProjectNav>
      {toggle ? (
        <ProjectSlide />
      ) : (
        <Container id="project">
          {db.project.map((item) => (
            <Contents key={item.id}>
              <Img $imgUrl={item.imgUrl[0]} />
              <TextBox>
                <div>
                  <Title>{item.name}</Title>
                  <Text>{item.func[0]}</Text>
                </div>
                <TagBox>
                  {item.skill.map((tag, idx) => (
                    <Tag key={idx}>{tag}</Tag>
                  ))}
                </TagBox>
              </TextBox>
              <HoverBox className="hoverBox">
                <HoverTitle>{item.name}</HoverTitle>
                <Link to={item.link} target="_black">
                  사이트 바로가기
                </Link>
                <SeeMore onClick={() => onBoxClick(item.id)}>
                  자세히 보기
                </SeeMore>
              </HoverBox>
            </Contents>
          ))}
        </Container>
      )}
    </>
  );
};

export default Project;
