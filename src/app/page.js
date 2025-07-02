import React from "react";
import Navbar from "./components/common/Navbar";

import Footer from "./components/common/Footer";
import Hero from "./components/pages/home/Hero";
import Game from "./components/pages/home/Game";
import Slots from "./components/pages/home/Slots";
import Partners from "./components/pages/home/Partners";
import Fishing from "./components/pages/home/Fishing";
import Casino from "./components/pages/home/Casino";
import Offer from "./components/pages/home/Offer";
import Bonus from "./components/pages/home/Bonus";

function page() {
  return (
    <>
      <div className="bg-hero">
        <Navbar />
        <Hero />
        <Game />
        <Slots />
        <Partners />
        <Casino />
        <Fishing />
        <Offer />
        <Bonus />
        <Footer />
      </div>
    </>
  );
}

export default page;
