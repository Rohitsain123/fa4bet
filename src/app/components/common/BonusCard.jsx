import Image from "next/image";
import React from "react";
import Heading from "./Heading";
import Para from "./Para";
import Button from "./Button";

function BonusCard({ para, heading, btn, img, bgimg }) {
  return (
    <>
      <div
        style={{
          backgroundImage: `url(${bgimg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        className="max-w-[1195px] "
      >
        <div className="flex justify-between items-center gap-12 md:gap-[100px] lg:gap-[170px] rounded-xl ps-4 sm:ps-6 md:ps-8 lg:ps-9 xl:ps-[50px] pt-[19px] sm:pt-[30px] md:pt-[40px] lg:pt-[55px] xl:pt-[64px] pb-[24px] sm:pb-[49px] md:pb-[69px] lg:pb-[89px] xl:pb-[99px] pe-2 sm:pe-[18px] md:pe-[28px] lg:pe-[38px] xl:pe-[48px]">
          <div className="max-w-[113px] sm:max-w-[190px] md:max-w-[250px] lg:max-w-[300px] xl:max-w-[376px]">
            <Image src={img} width={376} height={267} alt={"img"} />
          </div>
          <div className="max-w-[541px]">
            <Heading
              className={
                "!text-[#fff] text-shadow-[0.302px_1.209px_0px_#000] lg:text-shadow-[1px_4px_0px_#000] !text-[10px] sm:!text-xl md:text-3xl lg:!text-[38px]"
              }
              title={heading}
            />
            <Para
              className={
                "mt-1 lg:mt-4 !text-[#fff] !text-[8px] md:!text-sm lg:!text-xl !font-normal"
              }
              title={para}
            />
            <div className=" mt-[9px] md:mt-[18px] lg:mt-[32px]">
              <Button
                className={
                  "!bg-[#FFBB00] !text-[#000] text-[8px] md:text-[13px] lg:text-[18px font-semibold] !py-[4px] md:!py-[8px] !px-[9px] md:!px-[15px] !rounded-[3px] md:rounded-[10px]"
                }
                title={btn}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BonusCard;
