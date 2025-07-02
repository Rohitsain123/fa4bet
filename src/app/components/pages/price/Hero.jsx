import React from "react";
import Commonhero from "../../common/Commonhero";

function Hero() {
  return (
    <>
      <Commonhero
        title={"4D Price To "}
        sapntitle={"-FA4"}
        innertitle={"BET"}
        para={
          "The 4D price at FA4BET varies based on bet type, offering affordable options with competitive payouts. Check their platform for the latest rates and rules before placing a bet."
        }
        btn={"Join now"}
        imgClass={
          "max-w-[172px] sm:max-w-[250px] md:max-w-[320px] lg:max-w-[430px] xl:!max-w-[576px]"
        }
        heroimg={"/assetes/png/777.png"}
      />
    </>
  );
}

export default Hero;
