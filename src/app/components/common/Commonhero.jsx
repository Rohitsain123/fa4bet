import React from "react";
import Heading from "./Heading";
import Para from "./Para";
import Joinbtn from "./Joinbtn";
import { ArrowIcon } from "../helper/Icon";
import Image from "next/image";

function Commonhero({ title, sapntitle, innertitle, para, btn, heroimg }) {
  return (
    <>
      <div className="max-w-[1295px] px-4 sm:px-6 md:px-8 lg:px-10 xl:px-[50px] mx-auto">
        <div className="flex justify-between items-center pt-4 gap-5">
          <div>
            <Heading
              className={""}
              title={title}
              sapntitle={sapntitle}
              innertitle={innertitle}
            />
            <Para
              className={
                "mt-[10px] md:mt-[20px] lg:mt-[30px] sm:max-w-[617px] text-[10px] sm:text-sm md:text-base lg:text-xl line-clamp-3 lg:line-clamp-4 max-w-[174px] "
              }
              title={para}
            />
            <div className="mt-5 md:mt-6 lg:mt-8">
              <Joinbtn title={btn} />
              <ArrowIcon />
            </div>
          </div>{" "}
          <div className=" max-w-[172px] sm:max-w-[250px] md:max-w-[320px] lg:max-w-[400px] xl:max-w-[500px]">
            <Image src={heroimg} width={500} height={500} alt={"hero"} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Commonhero;
