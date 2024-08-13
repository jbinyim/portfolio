import styled from "styled-components";

const Container = styled.div`
  padding-top: 200px;
  height: 100vh;
  margin-bottom: 100px;
`;

const Gnb = styled.h4`
  font-size: 30px;
  margin-bottom: 50px;
`;

const SlideBox = styled.div`
  .swiper {
    overflow: visible;
  }
  .swiper-slide {
    height: 400px;
    background: ${(props) => props.theme.boxColor};
    @media ${(props) => props.theme.m} {
      height: 600px;
    }
    @media ${(props) => props.theme.s} {
      height: 400px;
    }
  }
  .swiper-pagination {
    bottom: -50px;
  }
  .swiper-pagination-bullet {
    background: ${(props) => props.theme.textBgColor};
    width: 15px;
    height: 15px;
  }
`;

const Card = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 30px;
`;

const Day = styled.p`
  font-size: 15px;
  color: rgba(255, 255, 255, 0.7);
`;

const Title = styled.h4`
  font-size: 30px;
  font-weight: bold;
  margin: 15px 0;
`;

const Name = styled.p`
  font-size: 20px;
`;

const Text = styled.p``;

const ImgBox = styled.div`
  display: flex;
  gap: 15px;
  @media ${(props) => props.theme.m} {
    flex-wrap: wrap;
  }
`;

const ImgBg = styled.div`
  padding: 10px 5px;
  background: ${(props) => props.theme.bgColor};
  border-radius: 5px;
`;

const Img = styled.img`
  width: 72px;
  height: 72px;
`;

export const styles = {
  Container,
  Gnb,
  SlideBox,
  Card,
  Day,
  Title,
  Name,
  Text,
  ImgBox,
  ImgBg,
  Img,
};
