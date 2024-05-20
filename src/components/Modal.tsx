import React from "react";
import styled from "styled-components";

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  background: #fff;
`;

const Modal = () => {
  return (
    <Container>
      <div>
        <span></span>
      </div>
      <div>
        <h1>Project</h1>
      </div>
    </Container>
  );
};

export default Modal;
