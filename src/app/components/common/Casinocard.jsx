import Image from "next/image";
import React from "react";
import { PersonIcon } from "../helper/Icon";
import Para from "./Para";

function Casinocard({ title, img, title2, title3 }) {
  return (
    <>
      <div className="max-w-[204px] sm:max-w-[250] md:max-w-[300] lg:max-w-[245px] xl:max-w-[390px] relative">
        {" "}
        <div className="bg-[rgba(0,0,0,0.60)] rounded-[3px] lg:rounded-[8px] py-[2px] lg:py-[5px] px-[5px] lg:px-[10px] absolute top-1 md:top-2 lg:top-4 left-[5px] lg:left-[10px]">
          <div className="flex items-center gap-1 lg:gap-[10px]">
            <PersonIcon
              className={
                "max-w-[9px] md:max-w-[12px] lg:max-w-[16px] xl:max-w-[21px] h-[9px] md:h-[12px] lg:h-[16px] xl:h-[21px]"
              }
            />
            <Para
              className={
                "text-[#fff] !text-[8px] md:!text-xm lg:!text-sm font-medium leading-[150%] capitalize"
              }
              title={title}
            />
          </div>
        </div>
        <div className="bg-[rgba(0,0,0,0.60)] rounded-[8px] py-[2px] lg:py-[5px] px-[5px] lg:px-[10px] absolute top-1 md:top-2 lg:top-4 right-[5px] lg:right-[10px]">
          <div className="flex items-center gap-1 lg:gap-[10px]">
            <Para
              className={
                "text-[#fff] !text-[8px] md:!text-xm lg:!text-sm font-medium leading-[150%] capitalize"
              }
              title={title2}
            />{" "}
            <PersonIcon
              className={
                "max-w-[9px] md:max-w-[12px] lg:max-w-[16px] xl:max-w-[21px] h-[9px] md:h-[12px] lg:h-[16px] xl:h-[21px]"
              }
            />
          </div>
        </div>{" "}
        <div className="bg-[rgba(0,0,0,0.60)] rounded-t-[8px]  py-[2px] lg:py-[5px] px-[5px] lg:px-[10px] absolute bottom-0  left-[35%]">
          <Para
            className={
              "text-[#fff] !text-[8px] md:!text-xm lg:!text-sm font-medium leading-[150%] capitalize"
            }
            title={title3}
          />{" "}
        </div>
        <Image src={img} width={390} height={235} alt={"cardimg"} />
      </div>
    </>
  );
}

export default Casinocard;
