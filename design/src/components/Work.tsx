import React, { useState, useEffect } from "react";
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
  @media ${(props) => props.theme.s} {
    display: none;
  }
`;

const SubNav = styled.li`
  font-size: 60px;
  cursor: pointer;
`;

const ProjectBtn = styled.p<{ $textColor: number }>`
  transition: all 0.3s;
  ${(props) =>
    props.$textColor === 3837
      ? "color: rgba(255, 255, 255, 1)"
      : "color: rgba(255, 255, 255, 0.2)"}
`;
const ExampleBtn = styled.p<{ $textColor: number }>`
  transition: all 0.3s;
  ${(props) =>
    props.$textColor === 4636
      ? "color: rgba(255, 255, 255, 1)"
      : "color: rgba(255, 255, 255, 0.2)"}
`;

const ProjectBox = styled.div`
  width: 100%;
`;

const Work = () => {
  const [workBtn, setWorkBtn] = useState(3837);

  const movePage = (pos: number) => {
    setWorkBtn(pos);
    window.scrollTo({
      top: pos,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.pageYOffset;
      if (currentScroll < 4636) {
        setWorkBtn(3837);
      } else {
        setWorkBtn(4636);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Container>
      <SubNavBox>
        <SubNav>
          <ProjectBtn
            className="project"
            onClick={() => movePage(3837)}
            $textColor={workBtn}
          >
            Project
          </ProjectBtn>
        </SubNav>
        <SubNav>
          <ExampleBtn
            className="example"
            onClick={() => movePage(4636)}
            $textColor={workBtn}
          >
            Example
          </ExampleBtn>
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
