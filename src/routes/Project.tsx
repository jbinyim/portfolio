import React, { useState } from "react";
import styled from "styled-components";
import SubTitle from "../components/SubTitle";
import ProjectCard from "../components/ProjectCard";
import Modal from "../components/Modal";
import { db } from "../db";

const Container = styled.div`
  max-width: 1280px;
  height: 100%;
  margin: 180px auto 0;
`;

const Project = () => {
  const [modal, setModal] = useState(false);
  const [modalItem, setModalItem] = useState({});
  return (
    <Container>
      <SubTitle text="project" />
      {db.project.map((item) => (
        <ProjectCard
          key={item.id}
          item={item}
          setModal={setModal}
          setModalItem={setModalItem}
        />
      ))}
      {modal ? <Modal setModal={setModal} modalItem={modalItem} /> : ""}
    </Container>
  );
};

export default Project;
