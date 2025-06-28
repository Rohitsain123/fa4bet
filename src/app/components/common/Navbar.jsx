"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import Button from "./Button";
import { CrossIcon, MenuIcon } from "../helper/Icon";

function Navbar() {
  const [show, setShow] = useState(false);

  const toggle = () => {
    setShow(!show);
  };

  return (
    <>
      <nav>
        <div className="relative z-[99]  md:border-b-1 border-[#2A2E38]">
          <div className="max-w-[1295px] px-4 sm:px-6 md:px-8 lg:px-10 xl:px-[50px] mx-auto pt-4 md:pt-[18px] pb-4 md:pb-[23px]">
            <div className="flex items-center justify-between">
              <div className="max-w-[69px] md:max-w-[111px] h-[16px] md:h-[41px]">
                <Link href={"/"}>
                  <Image
                    src={"/assetes/png/logo.png"}
                    width={111}
                    height={41}
                    alt=""
                  />
                </Link>
              </div>
              <div className="hidden lg:block">
                <div className="flex gap-[20px] ">
                  <Button title={"Wallet"} className={" "} />
                  <Button className={""} title={"Login"} />
                </div>
              </div>{" "}
              <div onClick={toggle} className="block lg:hidden cursor-pointer ">
                <MenuIcon
                  className={
                    "max-w-[20px] md:max-w-[40px] h-[20px] md:h-[40px]"
                  }
                />
              </div>
            </div>
            {/* sidebar */}
            {show && (
              <div className="w-[100%] sm:w-[60%] right-0 top-0 fixed bg-[#080808] h-[100%] pt-[18px] pb-[23px] px-[16px] block lg:hidden">
                <div className="flex items-center justify-between sm:justify-end">
                  <div className="block sm:hidden max-w-[69px] md:max-w-[111px]">
                    <Image
                      src={"/assetes/png/logo.png"}
                      width={111}
                      height={41}
                      alt={"logo"}
                    />
                  </div>
                  <div onClick={toggle} className="cursor-pointer">
                    <CrossIcon />
                  </div>
                </div>
                <div className="flex flex-col items-center justify-center text-center h-[100%]">
                  <div className="flex flex-col items-center gap-[30px] overflow-auto h-[400px] w-full">
                    <Button title={"Wallet"} className={" "} />
                    <Button className={""} title={"Login"} />{" "}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
