import React from "react";
import { lotteryCard } from "../../helper/Helper";
import BonusCard from "../../common/BonusCard";

function Bonus() {
  return (
    <>
      <div className="max-w-[1295px] px-4 sm:px-6 md:px-8 lg:px-10 xl:px-[50px] mx-auto">
        <div className="flex flex-col gap-5 lg:gap-10 mt-5 lg:mt-10">
          {lotteryCard.map((item, index) => (
            <div key={index}>
              <BonusCard
                img={item.img}
                heading={item.title}
                para={item.para}
                btn={item.btn}
                bgimg={item.bgimg}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Bonus;
