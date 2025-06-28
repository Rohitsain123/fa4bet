import React from "react";
import Commonhero from "../../common/Commonhero";
import Image from "next/image";

function Hero() {
  return (
    <>
      <div className="relative">
        <div className="absolute bottom-[-20px] hidden md:block ">
          <Image
            src={"/assetes/png/gradient.png"}
            width={1750}
            height={157}
            alt={"black"}
          />
        </div>
        <Commonhero
          title={"Welcome To "}
          sapntitle={"-FA4"}
          innertitle={"BET"}
          para={
            "Our top priority is to provide you with a seamless gaming experience that will keep you engaged and entertained for hours on end. If you have any feedback, comments, or concerns, please do not hesitate to contact us."
          }
          btn={"Join now"}
          heroimg={"/assetes/png/hero.png"}
        />
      </div>
    </>
  );
}

export default Hero;
