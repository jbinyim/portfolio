import React from "react";
import { DbData } from "../db";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";

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

interface IExampleCard {
  item: DbData;
}

const ExampleCard = ({ item }: IExampleCard) => {
  const history = useNavigate();

  const onBoxClick = (modalId: number) => {
    history(`/modal/${modalId}`);
  };
  return (
    <>
      <Contents>
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
          <SeeMore onClick={() => onBoxClick(item.id)}>자세히 보기</SeeMore>
        </HoverBox>
      </Contents>
    </>
  );
};

export default ExampleCard;
