import Image from "next/image";
import React from "react";
import Para from "./Para";

import {
  certificationData,
  followData,
  logoData,
  paymentData,
} from "../helper/Helper";
import Link from "next/link";

function Footer() {
  return (
    <>
      <div className="border-b border-[#272727]">
        <div className="max-w-[1295px] px-4 sm:px-6 md:px-8 lg:px-10 xl:px-[50px] mx-auto pt-[23px] md:pt-15 lg:pt-20 mt-0 md:mt-15 lg:mt-20 pb-4 md:pb-6 lg:pb-15 ">
          <div className="flex flex-wrap lg:flex-nowrap gap-[16px] md:gap-[30px] lg:gap-[40px] xl:gap-[96px] justify-between">
            <div className="w-full text-center sm:text-start sm:max-w-[303px] ">
              <div className="flex justify-center sm:justify-start">
                <Link href={"/"}>
                  {" "}
                  <Image
                    src={"/assetes/png/logo.png"}
                    width={111}
                    height={41}
                    alt=""
                  />
                </Link>
              </div>
              <Para
                className={
                  "text-[rgba(255,255,255,0.70)] !text-[10px] md:!text-sm lg:!text-base mt-[10px md:mt-4 max-w-[279px] sm:max-w-[303px] mx-auto sm:mx-0"
                }
                title={
                  "FA4BET offers thrilling casino games and sports betting with top security, fairness, and 24/7 support."
                }
              />
              <p className="text-[rgba(255,255,255,0.70)] !text-[10px] md:!text-sm lg:!text-base mt-1 sm:mt-4">
                Play responsibly. <span className="text-[#F00]"> 18+ </span>{" "}
                only.
              </p>
            </div>
            <div className="w-full sm:max-w-[275px] text-center sm:text-start">
              <Para
                className={
                  "!text-[10px] md:text-sm lg:!text-base text-[rgba(255,255,255,0.80)] capitalize font-medium leading-[160%]"
                }
                title={"payment methods"}
              />
              <div className="flex gap-2 sm:gap-4 flex-wrap mt-1 sm:mt-4 justify-center">
                {paymentData.map((item, index) => (
                  <div key={index}>
                    <div className="max-w-[24px] sm:max-w-[40px] ">
                      <Image
                        src={item.img}
                        width={40}
                        height={40}
                        alt={"logo"}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="  mx-auto sm:m-0  max-w-[152px]">
              <Para
                className={
                  "!text-[10px] md:text-sm lg:!text-base text-[rgba(255,255,255,0.80)] capitalize font-medium leading-[160%]"
                }
                title={"Certifications"}
              />
              <div className="flex flex-wrap gap-[10px] mt-[10px]">
                <div className="max-w-[44px] sm:max-w-[56px]">
                  <Image
                    src={"/assetes/png/bmm.png"}
                    width={56}
                    height={17}
                    alt={"logo"}
                  />
                </div>{" "}
                <div className="max-w-[23px] sm:max-w-[29px]">
                  <Image
                    src={"/assetes/png/tech-lab.png"}
                    width={29}
                    height={28}
                    alt={"logo"}
                  />
                </div>{" "}
                <div className="max-w-[23px] sm:max-w-[30px]">
                  <Image
                    src={"/assetes/png/lab.png"}
                    width={30}
                    height={30}
                    alt={"logo"}
                  />
                </div>{" "}
                <div className="max-w-[33px] sm:max-w-[42px]">
                  <Image
                    src={"/assetes/png/graph.png"}
                    width={42}
                    height={20}
                    alt={"logo"}
                  />
                </div>{" "}
                <div className="max-w-[74px] sm:max-w-[93px]">
                  <Image
                    src={"/assetes/png/lock.png"}
                    width={93}
                    height={18}
                    alt={"logo"}
                  />
                </div>
              </div>
            </div>
            <div className="max-w-[177px] mx-auto sm:m-0">
              <Para
                className={
                  "!text-[10px] md:text-sm lg:!text-base text-[rgba(255,255,255,0.80)] capitalize font-medium leading-[160%]"
                }
                title={"Responsible Gaming"}
              />
              <div className="flex mt-[10px] sm:mt-5 gap-[13px] sm:gap-[20px]">
                <div className="max-w-[24px] sm:max-w-[36px]">
                  <Image
                    src={"/assetes/png/18.png"}
                    width={36}
                    height={36}
                    alt={"18"}
                  />
                </div>{" "}
                <div className="max-w-[24px] sm:max-w-[36px]">
                  <Image
                    src={"/assetes/png/gamcare.png"}
                    width={36}
                    height={36}
                    alt={"18"}
                  />
                </div>{" "}
                <div className="max-w-[31px] sm:max-w-[36px]">
                  <Image
                    src={"/assetes/png/gamble.png"}
                    width={50}
                    height={34}
                    alt={"18"}
                  />
                </div>
              </div>{" "}
              <div className="hidden sm:block">
                <Para
                  className={
                    "!text-[10px] md:text-sm lg:!text-base text-[rgba(255,255,255,0.80)] capitalize font-medium leading-[160%] mt-[34px]"
                  }
                  title={"follow US"}
                />
                <div className="flex gap-[15px] items-center">
                  {followData.map((item, index) => (
                    <div key={index}>
                      <Link target="blank" href={item.path}>
                        {item.link}
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="flex block sm:hidden   w-full justify-between">
              {" "}
              <div className="flex flex-wrap gap-[10px] md:gap-[22px] items-center mx-auto  max-w-[153px] text-center">
                <Para
                  className={
                    "!text-[10px] md:!text-sm lg:!text-lg text-[rgba(255,255,255,0.80)]  "
                  }
                  title={"Security"}
                />
                <div className="flex gap-[10px] sm:gap-[22px] w-full">
                  <div className="max-w-[61px] sm:max-w-[86px]">
                    <Image
                      src={"/assetes/png/metrix.png"}
                      width={86}
                      height={23}
                      alt={"metrix"}
                    />
                  </div>
                  <div className="max-w-[61px] sm:max-w-[86px]">
                    <Image
                      src={"/assetes/png/iovation.png"}
                      width={85}
                      height={20}
                      alt={"iovation"}
                    />
                  </div>
                </div>
              </div>
              <div className="max-w-[172px] mx-auto">
                <Para
                  className={
                    "!text-[10px] md:text-sm lg:!text-base text-[rgba(255,255,255,0.80)] capitalize font-medium leading-[160%] text-center sm:text-start"
                  }
                  title={"follow US"}
                />
                <div className="flex gap-[15px] items-center">
                  {followData.map((item, index) => (
                    <div
                      className="max-w-[24px] sm:max-w-[40px] flex gap-[10px] mt-[10px]"
                      key={index}
                    >
                      <Link target="blank" href={item.path}>
                        {item.link}
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>{" "}
      </div>
      <div className="max-w-[1295px] px-4 sm:px-6 md:px-8 lg:px-10 xl:px-[50px] mx-auto">
        <div className="flex items-center justify-end sm:justify-between pb-4  md:pb-10 lg:pb-15 pt-4">
          <div className="flex gap-[10px] md:gap-[22px] items-center  hidden sm:block">
            <Para
              className={
                "!text-[10px] md:!text-sm lg:!text-lg text-[rgba(255,255,255,0.80)]"
              }
              title={"Security"}
            />
            <div className="flex gap-[22px]">
              <div>
                <Image
                  src={"/assetes/png/metrix.png"}
                  width={86}
                  height={23}
                  alt={"metrix"}
                />
              </div>
              <div>
                <Image
                  src={"/assetes/png/iovation.png"}
                  width={85}
                  height={20}
                  alt={"iovation"}
                />
              </div>
            </div>
          </div>
          <Para
            className={"!text-sm !font-normal capitalize"}
            title={"BK8 FA4BET "}
          />
        </div>
      </div>
    </>
  );
}

export default Footer;
