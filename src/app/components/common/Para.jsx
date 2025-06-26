import React from "react";

function Para({ title, className }) {
  return (
    <p
      className={`text-sm md:text-base lg:text-lg font-semibold leading-[150%] text-[#fff] ${className}`}
    >
      {title}
    </p>
  );
}

export default Para;
