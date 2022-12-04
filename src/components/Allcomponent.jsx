import React from "react";

import Header from "./public components/Header";
import Footer from "./public components/Footer";
import Home from "./home components/Home";
import { useSelector } from "react-redux";

const Allcomponent = () => {

    const comelist = useSelector((state)=> state );

  return (
    <>
      <div className={comelist? "allhome" : undefined}>
        <Header />
        <Home />
        <Footer />
      </div>
    </>
  );
};

export default Allcomponent;
