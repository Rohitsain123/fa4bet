"use client";
import React from "react";
import Para from "../../common/Para";

import Image from "next/image";
import { fishingSlider, gameSlider } from "../../helper/Helper";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

function Fishing() {
  return (
    <>
      <div className="max-w-[1295px] px-4 sm:px-6 md:px-8 lg:px-10 xl:px-[50px] mx-auto">
        <div className="mt-5 md:mt-8 flex items-center justify-between">
          <Para
            className={
              "text-[#fff] text-[12px] md:text-base lg:text-[21px] font-extrabold"
            }
            title={"Fishing "}
          />
          <div className="flex items-center gap-[6px]">
            <Para
              className={
                "text-[8px] md:text-[12px] lg:text-base text-[rgba(255,255,255,0.70)] !font-medium"
              }
              title={"View"}
            />
            <div className="max-w-[16px] md:max-w-[21px]">
              <Image
                src={"/assetes/png/arrow.png"}
                width={21}
                height={21}
                alt={"arrow"}
              />
            </div>
          </div>
        </div>
        <div className="mt-[10px] md:mt-4">
          <Swiper
            spaceBetween={20}
            slidesPerView={5}
            loop={true}
            autoplay={{ delay: 3000 }}
            breakpoints={{
              320: { slidesPerView: 3.2, spaceBetween: 16 },
              640: { slidesPerView: 4.3, spaceBetween: 15 },
              768: { slidesPerView: 4.5, spaceBetween: 18 },
              1024: { slidesPerView: 5, spaceBetween: 20 },
            }}
          >
            {fishingSlider.map((item, index) => (
              <SwiperSlide
                key={index}
                className={
                  "max-w-[110px] sm:max-w-[145px] md:max-w-[190px] lg:max-w-[229px] h-[113px] sm:h-[150px] md:h-[190px] lg:h-[235px] "
                }
              >
                <Image src={item.src} width={229} height={235} alt={"img"} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
}

export default Fishing;
