import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination } from "swiper/modules";

export default function Slider() {
  return (
    <>
      <Swiper
        slidesPerView={1}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide className="Slide">
          <img className="SlideImg" src="\FastX.jpg" alt="Fast X Poster" />
        </SwiperSlide>
        <SwiperSlide className="Slide">
          <img
            className="SlideImg"
            src="\SpiderMan.jpg"
            alt="SpiderMan Poster"
          />
        </SwiperSlide>
        <SwiperSlide className="Slide">
          <img className="SlideImg" src="\Sonic.jpg" alt="Sonic Poster" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
