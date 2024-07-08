import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Keyboard, Scrollbar, Navigation, Pagination } from "swiper/modules";
import styled from "styled-components";
import { db, DbData } from "../db";

import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import "swiper/css/pagination";

const ProjectSlideBox = styled.div`
  .swiper {
    width: 100%;
    height: 100vh;
    background: ${(props) => props.theme.boxColor};
    border-radius: 5px;
  }

  .swiper-slide {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
  }

  .swiper-slide img {
    display: block;
    width: 100%;
  }
  @media only screen and (min-width: 960px) {
    .swiper-slide:first-child {
      transition: transform 100ms;
    }

    .swiper-slide:first-child img {
      transition: box-shadow 500ms;
    }

    .swiper-slide.swiper-slide-active:first-child {
      transform: translateX(50%);
      z-index: 2;
    }

    .swiper-slide.swiper-slide-active:first-child img {
      box-shadow: 0px 32px 80px rgba(0, 0, 0, 0.35);
    }

    .swiper-slide:nth-child(2) {
      transition: transform 100ms;
    }

    .swiper-slide.swiper-slide-next:nth-child(2) {
      transform: translateX(55%);
      z-index: 1;
    }

    .swiper[dir="rtl"] .swiper-slide.swiper-slide-active:first-child {
      transform: translateX(-50%);
    }

    .swiper[dir="rtl"] .swiper-slide.swiper-slide-next:nth-child(2) {
      transform: translateX(-55%);
    }
  }
`;

const ProjectImg = styled.img`
  width: 100%;
  height: 50%;
  object-position: top;
  object-fit: cover;
`;

const ProjectSlide = () => {
  return (
    <ProjectSlideBox>
      <Swiper
        slidesPerView={1}
        centeredSlides={false}
        slidesPerGroupSkip={1}
        grabCursor={true}
        keyboard={{
          enabled: true,
        }}
        breakpoints={{
          960: {
            slidesPerView: 2,
            slidesPerGroup: 2,
          },
        }}
        scrollbar={true}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[Keyboard, Scrollbar, Navigation, Pagination]}
        className="mySwiper"
      >
        {db.project.map((item) => (
          <SwiperSlide>
            <ProjectImg src={item.imgUrl[0]} alt="projecImg" />
            <div></div>
          </SwiperSlide>
        ))}
      </Swiper>
    </ProjectSlideBox>
  );
};

export default ProjectSlide;
