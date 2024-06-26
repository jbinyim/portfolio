import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Head = styled.div`
  max-width: 1280px;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 55px;
`;

const TitleBox = styled.span`
  display: inline-block;
  height: 100%;
  padding-bottom: 60px;
  border-bottom: 1px solid #000;
  @media ${(props) => props.theme.mobile} {
    padding-bottom: 0;
    border-bottom: none;
  }
`;

const Title = styled.h1`
  font-size: 42px;
  font-weight: bold;
  @media ${(props) => props.theme.tablet} {
    font-size: 36px;
  }
  @media ${(props) => props.theme.mobile} {
    font-size: 30px;
  }
`;

const MoveBtn = styled.span`
  display: inline-block;
  display: flex;
  align-items: center;
  gap: 10px;
  transition: all 0.3s;
  a {
    font-size: 20px;
  }
  .arrowRight {
    margin-top: 3px;
  }
  &:hover {
    gap: 20px;
  }
`;

interface TextType {
  text: string;
  choice?: string;
  view?: string;
}

const HomeTitle = ({ text, choice, view }: TextType) => {
  return (
    <Head>
      <TitleBox>
        <Title>
          {text} {choice}
        </Title>
      </TitleBox>
      {!view ? (
        ""
      ) : (
        <MoveBtn>
          <Link to={`/${text}`}>{view}</Link>
          <FontAwesomeIcon icon={faArrowRight} className="arrowRight" />
        </MoveBtn>
      )}
    </Head>
  );
};

export default HomeTitle;
