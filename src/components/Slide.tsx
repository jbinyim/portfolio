import React from "react";
import styled from "styled-components";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import SlideCard from "./SlideCard";

const Container = styled.div``;

const Sample = styled.div`
  width: 300px;
  height: 400px;
  background: url("https://jbinyim12.cafe24.com/web/upload/captcha/screencapture-theventi-d1217-web-app-common-common-html-2024-05-17-01_07_19.png")
    center/cover no-repeat;
`;

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slideToSlide: 1,
  },
};

interface DbData {
  id: number;
  name: string;
  catagory: string;
  skill: string[];
  day: string;
  func: string;
  link: string;
  github: string;
  imgUrl: string;
  text: string;
}

interface SlideProps {
  db: DbData[];
}

const Slide = ({ db }: SlideProps) => {
  return (
    <Container>
      <Carousel responsive={responsive}>
        {db.map((item) => (
          <SlideCard key={item.id} item={item} />
        ))}
      </Carousel>
    </Container>
  );
};

export default Slide;
