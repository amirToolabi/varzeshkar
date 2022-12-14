import React from "react";

import style from "../component style/Allhome.module.css"

import Header from "./public components/Header";
import Footer from "./public components/Footer";
import Home from "./home components/Home";
import { useSelector } from "react-redux";

const Allcomponent = () => {

    const comelist = useSelector((state)=> state );

  return (
    <>
      <div className={comelist? style.allhome : undefined}>
        <Header />
        <Home />
        <Footer />
      </div>
    </>
  );
};

export default Allcomponent;
