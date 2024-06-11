import React from "react";
import styled from "styled-components";
import Introduce from "../components/Introduce";
import About from "../components/About";
import Work from "../components/Work";

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

const Contact = styled.div`
  width: 100%;
  height: 100vh;
  background: url("https://raw.githubusercontent.com/jieun419/jieun_portfolio/main/src/assets/images/front_bg.jpg")
    center/cover no-repeat;
`;

const Home = () => {
  return (
    <Container>
      <IntroBox>
        <Introduce />
      </IntroBox>
      <Contents>
        <About />
        <Work />
      </Contents>
      <Contact></Contact>
    </Container>
  );
};

export default Home;
