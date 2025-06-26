import React from "react";
import Navbar from "./components/common/Navbar";

import Footer from "./components/common/Footer";

function page() {
  return (
    <>
      <div className="bg-hero">
        <Navbar />
        <Footer />
      </div>
    </>
  );
}

export default page;
