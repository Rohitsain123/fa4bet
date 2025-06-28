"use client";
import React from "react";
import Para from "../../common/Para";
import Image from "next/image";
import { casinoSlider } from "../../helper/Helper";
import Casinocard from "../../common/Casinocard";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

function Casino() {
  return (
    <>
      <div className="max-w-[1295px] px-4 sm:px-6 md:px-8 lg:px-10 xl:px-[50px] mx-auto">
        <div className="mt-5 md:mt-8 flex items-center justify-between">
          <Para
            className={
              "text-[#fff] text-[12px] md:text-base lg:text-[21px] font-extrabold"
            }
            title={"Live Casino"}
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
            slidesPerView={3}
            loop={true}
            spaceBetween={20}
            centeredSlides={true}
            breakpoints={{
              320: { slidesPerView: 2, spaceBetween: 16 },
              420: { slidesPerView: 2.5, spaceBetween: 18 },
              640: { slidesPerView: 3, spaceBetween: 16 },
            }}
          >
            {casinoSlider.map((item, index) => (
              <SwiperSlide key={index}>
                <Casinocard
                  img={item.src}
                  title={item.para}
                  title2={item.para2}
                  title3={item.para3}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
}

export default Casino;
