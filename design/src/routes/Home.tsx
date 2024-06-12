import React, { useState } from "react";
import { useMatch, PathMatch } from "react-router-dom";
import styled from "styled-components";
import Introduce from "../components/Introduce";
import About from "../components/About";
import Work from "../components/Work";
import Contact from "../components/Contact";
import { db } from "../db";
import Modal from "../components/Modal";

const Container = styled.div`
  width: 100%;
  height: 100%;
`;

const IntroBox = styled.div`
  position: sticky;
  top: 0;
  z-index: -1;
`;

const Contents = styled.div`
  width: 100%;
  height: 100%;
  padding: 40px;
  background: ${(props) => props.theme.bgColor};
`;

const Overlay = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
`;

const ModalBox = styled.div`
  width: 40vw;
  height: 60vh;
  position: relative;

  margin: 0 auto;
  border-radius: 15px;
  overflow: hidden;
  background: #fff;
`;

const Home = () => {
  const bigModalMatch = useMatch("/modal/:modalId");

  const clickModal =
    bigModalMatch?.params.modalId &&
    db.project.find((item) => item.id === Number(bigModalMatch.params.modalId));

  return (
    <Container>
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
