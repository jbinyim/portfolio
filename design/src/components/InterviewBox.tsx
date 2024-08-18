import React, { useState, ReactNode } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const Container = styled.div`
  width: 100%;
  height: auto;
  padding: 20px;
  margin-top: 40px;
  background: ${(props) => props.theme.boxColor};
  border-radius: 30px;
  position: relative;
  transition: all 0.3s;
  cursor: pointer;
  &:hover {
    background: rgba(150, 150, 150, 0.3);
  }
`;

const Title = styled.h2`
  font-size: 24px;

  @media ${(props) => props.theme.s} {
    font-size: 18px;
  }
`;

const Text = styled(motion.p)<{ $toggle: boolean }>`
  margin-top: 30px;
  font-size: 16px;
  line-height: 2;
  display: ${(props) => (props.$toggle ? "block" : "none")};
  span {
    background: #000;
    font-weight: bold;
  }
`;

interface IInterviewBox {
  q: string;
  a: ReactNode;
}

const InterviewBox: React.FC<IInterviewBox> = ({ q, a }) => {
  const [toggle, setToggle] = useState(false);

  const onClickToggle = () => {
    setToggle((prev) => !prev);
  };

  return (
    <Container className="interviewBox" onClick={onClickToggle}>
      <Title>Q. {q}</Title>
      <Text
        $toggle={toggle}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: toggle ? 1 : 0, y: toggle ? 0 : 20 }}
        transition={{ duration: 0.3 }}
      >
        {a}
      </Text>
    </Container>
  );
};

export default InterviewBox;
