import React from "react";
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";
import Hero from "../components/pages/price/Hero";
import Slider from "../components/pages/price/Slider";
import Table from "../components/pages/price/Table";

function page() {
  return (
    <>
      <div className="bg-hero">
        <Navbar />
        <Hero />
      </div>
      <Slider />
      <Table />
      <Footer />
    </>
  );
}

export default page;
