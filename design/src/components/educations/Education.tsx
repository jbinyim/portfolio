import React, { useState, useEffect } from "react";
import { styles } from "./educationStyled";
import { educationData } from "../../db";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { useMediaQuery } from "react-responsive";

const Education = () => {
  const [offset, SetOffSet] = useState(2);
  const xl = useMediaQuery({ maxWidth: 1474 });

  useEffect(() => {
    if (xl) {
      SetOffSet(1);
    } else {
      SetOffSet(2);
    }
  }, [xl]);

  return (
    <styles.Container>
      <styles.Gnb>Education</styles.Gnb>
      <styles.SlideBox>
        <Swiper
          slidesPerView={offset}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiperEd"
        >
          {educationData.map((item) => (
            <SwiperSlide key={item.day}>
              <styles.Card>
                <div>
                  <styles.Day>{item.day}</styles.Day>
                  <styles.Title>{item.title}</styles.Title>
                  <styles.Name>{item.name}</styles.Name>
                </div>
                <styles.ImgBox>
                  {item.skillImg.map((item, idx) => (
                    <styles.ImgBg key={idx}>
                      <styles.Img src={item} alt="skillImg" />
                    </styles.ImgBg>
                  ))}
                </styles.ImgBox>
              </styles.Card>
            </SwiperSlide>
          ))}
        </Swiper>
      </styles.SlideBox>
    </styles.Container>
  );
};

export default Education;
