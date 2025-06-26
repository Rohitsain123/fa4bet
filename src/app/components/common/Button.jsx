import Link from "next/link";
import React from "react";

function Button({ title, className }) {
  return (
    <>
      <Link
        href={"/"}
        className={`bg-[#302A1F] rounded-[10px] py-[8px] lg:py-[10px] px-[15px] lg:px-[20px] font-medium text-sm md:text-base lg:text-lg text-[#fff] hover:text-[#000] hover:bg-[#FFBB00] transition-all duration-300 ${className}`}
      >
        {title}
      </Link>
    </>
  );
}

export default Button;
