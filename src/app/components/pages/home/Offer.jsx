"use client";
import React from "react";
import { offerCardData } from "../../helper/Helper";
import OfferCard from "../../common/OfferCard";

import { Swiper, SwiperSlide } from "swiper/react";
import { Grid, Pagination, Autoplay } from "swiper/modules"; // ✅ add this
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";

function Offer() {
  return (
    <div className="max-w-[1295px] px-4 sm:px-6 md:px-8 lg:px-10 xl:px-[50px] mx-auto">
      <div className="mt-5 lg:mt-10">
        <Swiper
          modules={[Grid, Pagination, Autoplay]} // ✅ register modules
          spaceBetween={16}
          slidesPerView={2}
          grid={{
            rows: 2, // ✅ 2 rows
            fill: "row", // ✅ fill horizontally first
          }}
          //   autoplay={{ delay: 2500 }}
          loop={true}
          breakpoints={{
            320: { spaceBetween: 16 },
            940: { spaceBetween: 30 },
          }}
        >
          {offerCardData.map((item, index) => (
            <SwiperSlide key={index}>
              <OfferCard
                bgimg={item.bgimg}
                imgClass={`${
                  index === 0
                    ? "pt-2 sm:pt-[13px] md:pt-[18px] lg:pt-[23px] xl:pt-[27px]  "
                    : ""
                } ${index === 1 ? "pt-[5px]" : ""} 
                ${index === 4 ? "pt-3" : ""} 
                ${index === 5 ? "pt-[18px]" : ""}`}
                img={item.img}
                title={item.title}
                para={item.para}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default Offer;
