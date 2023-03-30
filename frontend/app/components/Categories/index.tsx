"use client";
import "./Catergories.css";
import data from "@/data/categories.json";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import Image from "next/image";
import Link from "next/link";
function Catergories() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        slidesPerView={6}
        modules={[Autoplay]}
        centeredSlides={true}
        loop
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        className="my-5"
      >
        {data.map((e, i) => (
          <SwiperSlide
            key={i}
            className="w-72 border group border-gray-300 p-5 flex justify-center flex-col items-center rounded-md hover:border-green-500"
          >
            <Link href={e.path}>
              <Image
                src={e.image}
                width={100}
                height={0}
                alt="Category image"
                loader={() => e.image}
                unoptimized
              />
              <p className="my-3 group-hover:text-green-500 font-medium text-slate-700">
                {e.name}
              </p>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
export default Catergories;
