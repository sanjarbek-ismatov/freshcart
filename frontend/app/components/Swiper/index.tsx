"use client";
import "./Swiper.css";
import "swiper/css";
import { Swiper as SwiperComponent, SwiperSlide } from "swiper/react";
function Swiper() {
  return (
    <>
      <SwiperComponent
        className="w-full"
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
      >
        <SwiperSlide>
          <div className="w-full">Slide 1</div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full">Slide 1</div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full">Slide 1</div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full">Slide 1</div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full">Slide 1</div>
        </SwiperSlide>
      </SwiperComponent>
    </>
  );
}
export default Swiper;
