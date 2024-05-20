import React, { Dispatch, SetStateAction } from "react";
import styled from "styled-components";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import SlideCard from "./SlideCard";

const Container = styled.div`
  .react-multi-carousel-item {
    margin-right: 5px;
  }
`;

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 500 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 500, min: 0 },
    items: 1,
  },
};

interface DbData {
  id: number;
  name: string;
  catagory: string;
  skill: string[];
  day: string;
  func: string[];
  link: string;
  github: string;
  imgUrl: string;
  text: string;
}

interface SlideProps {
  db: DbData[];
  setModal: Dispatch<SetStateAction<boolean>>;
  setModalItem: Dispatch<SetStateAction<object>>;
}

const Slide = ({ db, setModal, setModalItem }: SlideProps) => {
  return (
    <Container>
      <Carousel responsive={responsive}>
        {db.map((item) => (
          <SlideCard
            key={item.id}
            item={item}
            setModal={setModal}
            setModalItem={setModalItem}
          />
        ))}
      </Carousel>
    </Container>
  );
};

export default Slide;
