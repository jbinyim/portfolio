import React from "react";
import styled from "styled-components";
import SubTitle from "../components/SubTitle";
import ProjectCard from "../components/ProjectCard";
import { db } from "../db";

const Container = styled.div`
  max-width: 1280px;
  height: 100%;
  margin: 180px auto 0;
`;

const Project = () => {
  return (
    <Container>
      <SubTitle text="project" />
      {db.project.map((item) => (
        <ProjectCard key={item.id} item={item} />
      ))}
    </Container>
  );
};

export default Project;
