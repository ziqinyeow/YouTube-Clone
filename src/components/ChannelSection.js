import React from "react";

//dependencies
import styled from "styled-components";
import "remixicon/fonts/remixicon.css";

//data
import video from "../data/video";

//swiper
import useSwiperRef from "../hooks/useSwiperRef";
import SwiperCore, { Navigation, Pagination, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
SwiperCore.use([Navigation, Pagination, A11y]);

function ChannelSection() {
  const [nextEl, nextElRef] = useSwiperRef();
  const [prevEl, prevElRef] = useSwiperRef();
  return (
    <Container>
      <Header>
        <Title>
          <ProfilePicture>
            <img
              src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=334&q=80"
              alt="image21313"
            />
          </ProfilePicture>
          <Name>
            <h3>Emma Hanson</h3>
          </Name>
        </Title>
        <Buttons>
          <Left ref={prevElRef}>
            <i className="ri-arrow-left-s-line"></i>
          </Left>
          <Right ref={nextElRef}>
            <i className="ri-arrow-right-s-line"></i>
          </Right>
        </Buttons>
      </Header>
      <Carousel>
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          navigation={{
            prevEl,
            nextEl,
          }}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
            1300: {
              slidesPerView: 3.8,
              spaceBetween: 50,
            },
          }}
        >
          {video.map((v, i) => (
            <SwiperSlide key={i}>
              <Slide>
                <Img>
                  <img src={v.img} alt="image2141" />
                  <VideoLength>
                    <span>{v.length}</span>
                  </VideoLength>
                </Img>
                <Description>
                  <h3>{v.title}</h3>
                  <UploadedBy>{v.uploader}</UploadedBy>
                  <DesContainer>
                    <Views>{v.views} views</Views>
                    <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
                    <UploadedDaysAgo>{v.day} days ago</UploadedDaysAgo>
                  </DesContainer>
                </Description>
              </Slide>
            </SwiperSlide>
          ))}
        </Swiper>
      </Carousel>
    </Container>
  );
}

export default ChannelSection;

const Container = styled.div`
  min-height: 40vh;
  padding: 20px 20px;
`;

const Header = styled.div`
  max-width: 90vw;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 30px;
`;

const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ProfilePicture = styled.div`
  width: 40px;
  height: 40px;
  margin-right: 15px;
  cursor: pointer;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
  }
`;

const Name = styled.div`
  cursor: pointer;
  h3 {
    font-family: "Bold";
  }
`;

const Buttons = styled.div`
  width: 80px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-right: 20px;
`;

const Button = styled.div`
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #c2c2c2;
  border-radius: 50%;
  cursor: pointer;
  i {
    font-size: 20px;
    color: white;
  }
`;

const Left = styled(Button)``;

const Right = styled(Button)``;

const Carousel = styled.div`
  height: auto;
`;

const Slide = styled.div`
  cursor: pointer;
`;

const Img = styled.div`
  position: relative;
  width: 300px;
  height: 180px;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 14px;
  }
`;

const VideoLength = styled.div`
  position: absolute;
  bottom: 10px;
  right: 10px;
  padding: 3px 10px;
  background-color: #aeadae;
  border-radius: 18px;
  display: flex;
  align-items: center;
  justify-content: center;

  span {
    font-family: "Light";
    font-size: 13px;
    color: white;
  }
`;

const Description = styled.div`
  width: 300px;
  padding: 10px 5px;
`;

const DesContainer = styled.div`
  color: #c2c2c2;
  display: flex;
  align-items: center;
`;

const Views = styled.div``;

const UploadedDaysAgo = styled.div``;

const UploadedBy = styled.div`
  color: #c2c2c2;
  margin: 5px 0;
`;
