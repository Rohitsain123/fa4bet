"use client";
import React from "react";
import Para from "../../common/Para";

import Image from "next/image";
import { gameSlider, partnersSlider } from "../../helper/Helper";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

function Partners() {
  return (
    <>
      <div className="max-w-[1295px] px-4 sm:px-6 md:px-8 lg:px-10 xl:px-[50px] mx-auto">
        <div className="mt-5 md:mt-8 flex items-center justify-between">
          <Para
            className={
              "text-[#fff] text-[12px] md:text-base lg:text-[21px] font-extrabold"
            }
            title={"Our Partners"}
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
          {" "}
          <div className="bg-[#302A1F] rounded-[10px] md:rounded-[20px] p-[6px] md:p-[12px]">
            <Swiper
              spaceBetween={20}
              slidesPerView={5}
              loop={true}
              autoplay={{ delay: 3000 }}
              breakpoints={{
                320: { slidesPerView: 4.1, spaceBetween: 10 },
                640: { slidesPerView: 4, spaceBetween: 15 },
                768: { slidesPerView: 5, spaceBetween: 18 },
                1024: { slidesPerView: 6.5, spaceBetween: 20 },
              }}
            >
              {partnersSlider.map((item, index) => (
                <SwiperSlide
                  key={index}
                  className={
                    "max-w-[78px] sm:max-w-[100px] md:max-w-[130px] lg:max-w-[168px] "
                  }
                >
                  <Image src={item.src} width={229} height={235} alt={"img"} />
                </SwiperSlide>
              ))}
            </Swiper>{" "}
          </div>
        </div>
      </div>
    </>
  );
}

export default Partners;
