import React from "react";
import styled from "styled-components";
import HomeTitle from "../components/HomeTitle";
import AboutHome from "../components/AboutHome";
import Slide from "../components/Slide";

const Container = styled.div`
  max-width: 1280px;
  height: 100%;
  margin: 180px auto 250px;
  display: flex;
  flex-direction: column;
  gap: 200px;
`;

const Home = () => {
  return (
    <Container>
      <div>
        <HomeTitle text="about" choice="me" />
        <AboutHome />
      </div>
      <div>
        <HomeTitle text="project" view="view more" />
        <Slide />
      </div>
    </Container>
  );
};

export default Home;
