import React from "react";

import Image from "next/image";

function OfferCard({ bgimg, className, title, para, img }) {
  return (
    <>
      <div className={`max-w-[581px] pt-2 md:pt-[27px] ${(bgimg, className)}`}>
        <div>
          <h1 className="text-[#fff] text-[8px] md:text-lg lg:text-3xl font-black uppercase">
            {title}
          </h1>
          <p className="text-[#fff] text-[8px] lg:text-[18px] font-[275] leading-[150%] opacity-[0.8] mt-[10px]">
            {para}
          </p>
        </div>
        <div>
          <Image src={img} width={241} height={186} alt={"offer"} />
        </div>
      </div>
    </>
  );
}

export default OfferCard;
