import React from "react";
import styled from "styled-components";
import Project from "./Project";
import Example from "../components/Example";

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  gap: 80px;
  color: #fff;
`;

const SubNavBox = styled.ul`
  width: 300px;
  height: 100vh;
  padding-top: 100px;
  position: sticky;
  top: 0;
`;

const SubNav = styled.li`
  font-size: 60px;
`;

const ProjectBox = styled.div`
  width: 100%;
`;

const Work = () => {
  return (
    <Container>
      <SubNavBox>
        <SubNav>
          <a href="#project">Project</a>
        </SubNav>
        <SubNav>
          <a href="#example">Example</a>
        </SubNav>
      </SubNavBox>
      <ProjectBox>
        <Project />
        <Example />
      </ProjectBox>
    </Container>
  );
};

export default Work;
