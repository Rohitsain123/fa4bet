import React from "react";

import Image from "next/image";

function OfferCard({ bgimg, className, title, para, img, imgClass }) {
  return (
    <>
      <div
        style={{
          backgroundImage: `url(${bgimg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        className={` max-w-[581px]   ps-[10px] sm:ps-[16px] md:ps-[28px]  lg:ps-9 gap-1  rounded-[3px] sm:rounded-[8px] md:rounded-[12px] lg:rounded-xl ${className}`}
      >
        <div className={"flex items-center justify-between gap-[10px]"}>
          <div className=" max-w-[318px]  pb-2 sm:pb-4 md:pb-5 lg:pb-7 xl:pb-9">
            <h1 className="text-[#fff] text-[8px] md:text-lg lg:text-3xl font-black uppercase pt-2 sm:pt-4 md:pt-6 lg:pt-8 xl:pt-10">
              {title}
            </h1>
            <p className="text-[#fff] text-[8px] lg:text-[18px] font-[275] leading-[150%] opacity-[0.8] mt-0 lg:mt-[10px]">
              {para}
            </p>
          </div>
          <div
            className={`max-w-[241px] h-[62px] sm:h-[100px] md:h-[200px] lg:h-[200px] xl:h-[221px]  ${imgClass}`}
          >
            <Image
              src={img}
              width={241}
              height={186}
              alt={"offer"}
              className="w-full h-full"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default OfferCard;
