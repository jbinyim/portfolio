import React, { useState, useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Grid } from "swiper/modules";
import styled from "styled-components";
import { db } from "../db";
import { useMediaQuery } from "react-responsive";
import { Link, useNavigate } from "react-router-dom";

import "swiper/css";
import "swiper/css/grid";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import "swiper/css/pagination";

const ProjectSlideBox = styled.div`
  height: 100vh;
  position: relative;
  .swiper {
    width: 100%;
    height: 100%;
    margin-left: auto;
    margin-right: auto;
    overflow: visible;
  }

  .swiper-slide {
    background: ${(props) => props.theme.boxColor};
    border-radius: 5px;
    /* overflow: hidden; */
    transition: all 0.3s;
    height: 100%;
    /* height: calc((100% - 30px) / 2) !important; */
    &:hover {
      transform: translateY(-10px);
      .hoverBox {
        opacity: 1;
      }
    }
  }

  .swiper-button-prev,
  .swiper-button-next {
    top: initial;
    transform: translateY(30px);
    background: ${(props) => props.theme.boxColor};
    border-radius: 30px;
    padding: 0 20px;
    color: #fff;
    z-index: 15;
    &::after {
      font-size: 30px;
    }
  }
  .swiper-button-prev {
    left: 35%;
    @media ${(props) => props.theme.m} {
      left: 30%;
    }
  }
  .swiper-button-next {
    right: 35%;
    @media ${(props) => props.theme.m} {
      right: 30%;
    }
  }
  .swiper-pagination {
    bottom: 0;
    transform: translateY(40px);
    .swiper-pagination-bullet {
      background: ${(props) => props.theme.boxColor};
      opacity: 1;
    }
    .swiper-pagination-bullet-active {
      background: #fff;
    }
  }
`;

const Img = styled.div<{ $imgUrl: string }>`
  width: 100%;
  height: 45%;
  background: url(${(props) => props.$imgUrl}) center/cover no-repeat;
`;

const TextBox = styled.div`
  height: 55%;
  padding: 30px 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Title = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
`;

const Text = styled.p`
  font-size: 15px;
  color: #9e9e9e;
  margin-bottom: 6px;
`;

const TagBox = styled.div`
  display: flex;
  gap: 15px;
`;

const Tag = styled.span`
  font-size: 12px;
  padding: 5px;
  background: #242424;
`;

const HoverBox = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: ${(props) => props.theme.boxColor};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  opacity: 0;
  transition: all 0.3s;
  overflow: hidden;
  a {
    cursor: pointer;
    text-align: center;
    width: 200px;
    color: #fff;
    font-size: 20px;
    letter-spacing: -1px;
    border: 1px solid #fff;
    padding: 10px;
    transition: all 0.3s;
    border-radius: 5px;
    &:hover {
      background: #fff;
      color: #000;
    }
  }
`;

const HoverTitle = styled.h2`
  margin-bottom: 30px;
  font-size: 30px;
`;

const SeeMore = styled.p`
  cursor: pointer;
  text-align: center;
  width: 200px;
  color: #fff;
  font-size: 20px;
  border: 1px solid #fff;
  padding: 10px;
  transition: all 0.3s;
  border-radius: 5px;
  margin-top: 20px;
  &:hover {
    background: #fff;
    color: #000;
  }
`;

const ProjectSlide = () => {
  const history = useNavigate();
  const [offset, setOffset] = useState(4);
  const l = useMediaQuery({ maxWidth: 1474, minWidth: 1205 });
  const m = useMediaQuery({ maxWidth: 1205, minWidth: 855 });
  const s = useMediaQuery({ maxWidth: 855, minWidth: 375 });
  const xs = useMediaQuery({ maxWidth: 375, minWidth: 0 });

  // let offset = 4;
  useEffect(() => {
    if (l) {
      setOffset(3);
    } else if (m) {
      setOffset(2);
    } else if (s) {
      setOffset(1);
    } else if (xs) {
      setOffset(1);
    }
  }, [l, m, s]);

  const onBoxClick = (modalId: number) => {
    history(`/modal/${modalId}`);
  };

  return (
    <>
      <ProjectSlideBox id="project">
        {db.project.length > 0 && (
          <Swiper
            slidesPerView={offset}
            observer={true}
            observeParents={true}
            grid={{
              rows: 2,
            }}
            spaceBetween={20}
            navigation={true}
            loop={true}
            pagination={{
              clickable: true,
            }}
            modules={[Grid, Pagination, Navigation]}
            className="mySwiper"
          >
            {db.project.map((item) => (
              <SwiperSlide key={item.id}>
                {item.imgUrl[0] && <Img $imgUrl={item.imgUrl[0]} />}
                <TextBox>
                  <div>
                    <Title>{item.name}</Title>
                    <Text>{item.func[0]}</Text>
                  </div>
                  <TagBox>
                    {item.skill.map((tag, idx) => (
                      <Tag key={idx}>{tag}</Tag>
                    ))}
                  </TagBox>
                </TextBox>
                <HoverBox className="hoverBox">
                  <HoverTitle>{item.name}</HoverTitle>
                  <Link to={item.link} target="_black">
                    사이트 바로가기
                  </Link>
                  <SeeMore onClick={() => onBoxClick(item.id)}>
                    자세히 보기
                  </SeeMore>
                </HoverBox>
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </ProjectSlideBox>
    </>
  );
};

export default ProjectSlide;
