import React from "react";

function Heading({ title, sapntitle, className, innertitle }) {
  return (
    <h1
      className={`text-[#fff] text-xl md:text-4xl lg:text-5xl xl:text-[62px] font-bold poppins ${className}`}
    >
      {title}
      <span className={"italic"}>
        {sapntitle}
        <span className="text-[#F6A51E]">{innertitle}</span>
      </span>
    </h1>
  );
}

export default Heading;
