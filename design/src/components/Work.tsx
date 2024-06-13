import React, { useState, useEffect, useRef } from "react";
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

const SubNavBox = styled.ul<{ $isMobile: boolean }>`
  width: 300px;
  height: 100vh;
  padding-top: 100px;
  position: sticky;
  top: 0;
  @media ${(props) => props.theme.s} {
    display: ${(props) => (props.$isMobile ? "none" : "block")};
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
      : "color: rgba(255, 255, 255, 0.2)"};
`;
const ExampleBtn = styled.p<{ $textColor: number }>`
  transition: all 0.3s;
  ${(props) =>
    props.$textColor === 4636
      ? "color: rgba(255, 255, 255, 1)"
      : "color: rgba(255, 255, 255, 0.2)"};
`;

const ProjectBox = styled.div`
  width: 100%;
`;

const Work = () => {
  const [workBtn, setWorkBtn] = useState(3837);
  const [isMobile, setIsMobile] = useState(false);
  const projectRef = useRef<HTMLDivElement>(null);
  const exampleRef = useRef<HTMLDivElement>(null);

  const movePage = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener("resize", handleResize);
    handleResize();

    const handleScroll = () => {
      const currentScroll = window.pageYOffset;
      const exampleTop = exampleRef.current?.offsetTop || 0;

      if (isMobile) {
        setWorkBtn(3837);
      } else {
        if (currentScroll < exampleTop) {
          setWorkBtn(3837);
        } else {
          setWorkBtn(4636);
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isMobile, projectRef, exampleRef]);

  return (
    <Container>
      <SubNavBox $isMobile={isMobile}>
        <SubNav>
          <ProjectBtn
            className="project"
            onClick={() => movePage(projectRef)}
            $textColor={workBtn}
          >
            Project
          </ProjectBtn>
        </SubNav>
        <SubNav>
          <ExampleBtn
            className="example"
            onClick={() => movePage(exampleRef)}
            $textColor={workBtn}
          >
            Example
          </ExampleBtn>
        </SubNav>
      </SubNavBox>
      <ProjectBox>
        <div ref={projectRef}>
          <Project />
        </div>
        <div ref={exampleRef}>
          <Example />
        </div>
      </ProjectBox>
    </Container>
  );
};

export default Work;
