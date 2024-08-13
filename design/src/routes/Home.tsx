import React, { useState } from "react";
import { useMatch, Link } from "react-router-dom";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Introduce from "../components/Introduce";
import About from "../components/About";
import Work from "../components/Work";
import Contact from "../components/Contact";
import Modal from "../components/Modal";
import HeaderBtn from "../components/HeaderBtn";
import { db } from "../db";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import {
  faCircleCheck,
  faCircleUp,
  faComment,
  faXmarkCircle,
} from "@fortawesome/free-solid-svg-icons";

const Container = styled.div`
  width: 100%;
  height: 100%;
`;

const IntroBox = styled.div`
  position: sticky;
  top: 0;
  z-index: -1;
`;

const FixedBtnBox = styled.ul`
  position: fixed;
  bottom: 40px;
  right: 40px;
  z-index: 10;
  @media ${(props) => props.theme.s} {
    right: 7px;
  }
`;

const FixedBtn = styled.li<{ $fixToggle: boolean }>`
  margin-bottom: 10px;
  font-size: 25px;
  padding: 10px 15px;
  border-radius: 50%;
  text-align: center;
  background: ${(props) => props.theme.textBgColor};
  cursor: pointer;
  .fa-circle-up {
    cursor: pointer;
  }
  .left {
    cursor: pointer;
    ${(props) => (props.$fixToggle ? "display: none" : "display: block")}
  }
  .rigth {
    ${(props) => (!props.$fixToggle ? "display: none" : "display: block")}
  }
  .git {
    ${(props) => (!props.$fixToggle ? "display: none" : "display: block")}
  }
  .feedback {
    ${(props) => (!props.$fixToggle ? "display: none" : "display: block")}
  }
  .up {
    cursor: pointer;
    ${(props) => (!props.$fixToggle ? "display: none" : "display: block")}
  }
`;

const Contents = styled.div`
  width: 100%;
  height: 100%;
  padding: 40px;
  background: ${(props) => props.theme.bgColor};
`;

const Home = () => {
  const [fixToggle, setFixToggle] = useState(false);
  const bigModalMatch = useMatch("/modal/:modalId");

  const clickModal =
    (bigModalMatch?.params.modalId &&
      db.project.find(
        (item) => item.id === Number(bigModalMatch.params.modalId)
      )) ||
    db.example.find(
      (item) => item.id === Number(bigModalMatch?.params.modalId)
    );

  const onClickFixBtn = () => {
    setFixToggle((prev) => !prev);
  };

  const MoveUp = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Container>
      <HeaderBtn />
      <FixedBtnBox>
        {!fixToggle ? (
          <FixedBtn className="left" $fixToggle={fixToggle}>
            <FontAwesomeIcon icon={faCircleCheck} onClick={onClickFixBtn} />
          </FixedBtn>
        ) : (
          <>
            <FixedBtn className="git" $fixToggle={fixToggle}>
              <Link to={`https://github.com/jbinyim`} target="_blank">
                <FontAwesomeIcon icon={faGithub} />
              </Link>
            </FixedBtn>
            <FixedBtn className="feedback" $fixToggle={fixToggle}>
              <Link to={`https://forms.gle/PRcdrZ4fz528mKCDA`} target="_blank">
                <FontAwesomeIcon icon={faComment} />
              </Link>
            </FixedBtn>
            <FixedBtn className="up" $fixToggle={fixToggle}>
              <FontAwesomeIcon icon={faCircleUp} onClick={MoveUp} />
            </FixedBtn>
            <FixedBtn className="right" $fixToggle={fixToggle}>
              <FontAwesomeIcon icon={faXmarkCircle} onClick={onClickFixBtn} />
            </FixedBtn>
          </>
        )}
      </FixedBtnBox>
      <IntroBox>
        <Introduce />
      </IntroBox>
      <Contents>
        <About />
        <Work />
      </Contents>
      <Contact />
      {bigModalMatch ? (
        <>{clickModal && <Modal clickModal={clickModal} />}</>
      ) : null}
    </Container>
  );
};

export default Home;
