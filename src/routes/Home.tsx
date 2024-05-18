import React from "react";
import styled from "styled-components";
import HomeTitle from "../components/HomeTitle";
import AboutHome from "../components/AboutHome";
import Slide from "../components/Slide";
import SkillHome from "../components/SkillHome";
import Contact from "./Contact";
import { db } from "../db";

const Container = styled.div`
  max-width: 1280px;
  height: 100%;
  margin: 180px auto 0;
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
        <Slide db={db.project} />
      </div>
      <div>
        <HomeTitle text="example" view="view more" />
        <Slide db={db.example} />
      </div>
      <div>
        <HomeTitle text="skill" />
        <SkillHome />
      </div>
      <div>
        <Contact />
      </div>
    </Container>
  );
};

export default Home;
