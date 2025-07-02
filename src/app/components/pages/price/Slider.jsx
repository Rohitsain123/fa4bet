"use client";
import React from "react";
import { sliderData } from "../../helper/Helper";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/pagination";

function Slider() {
  return (
    <div className="max-w-[1295px] px-4 sm:px-6 md:px-8 lg:px-10 xl:px-[50px] mx-auto mt-[30px] md:mt-[50px] lg:mt-[80px]">
      <div className="bg-[rgba(74,70,62,0.30)] rounded-[26px] backdrop-blur-md py-[10px] sm:py-[15px] md:py-[20px] lg:py-[25px] xl:py-[30px] px-[10px] sm:px-[15px] md:px[20px] lg:px-[25px] xl;px-[30px]">
        <Swiper
          modules={[Autoplay, Navigation, Pagination]}
          slidesPerView={9}
          spaceBetween={8}
          autoplay={{ delay: 2000 }}
          loop={true}
          breakpoints={{
            320: { slidesPerView: 4 },
            640: { slidesPerView: 5 },
            768: { slidesPerView: 6 },
            1024: { slidesPerView: 8 },
            1280: { slidesPerView: 9 },
          }}
        >
          {sliderData.map((item, index) => (
            <SwiperSlide key={index}>
              <Image
                src={item.src}
                width={118}
                height={95}
                alt="slider image"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default Slider;
