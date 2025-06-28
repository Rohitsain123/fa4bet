import Link from "next/link";
import React from "react";
import { ArrowIcon } from "../helper/Icon";

function Joinbtn({ title }) {
  return (
    <>
      <div className="bg-[#E89100] px-[14px] lg:px-[26px] py-[6px] lg:py-[13px] rounded-[10px] max-w-[103px] md:max-w-[151px] text-[#000] text-[10px] md:text-[15px] font-extrabold items-center flex justify-center gap-2 cursor-pointer hover:shadow-[0_0_20px_white] transition duration-300">
        {title}
        <ArrowIcon />
      </div>
    </>
  );
}

export default Joinbtn;
