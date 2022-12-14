import React from "react";

import style from "../../component style/TopSliderStyle.module.css"

import Slider from "react-slick";
// import AwesomeSlider from 'react-awesome-slider';
// import 'react-awesome-slider/dist/styles.css';

import run from "../../images/firstchild/banner-2.eff203b.png";
import game from "../../images/firstchild/banner-1.a8d334e.png";
import exer from "../../images/firstchild/banner-3.2b631b1.png";
import football from "../../images/firstchild/banner-4.9bac380.png";


const SlideShow = () => {


  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    initialSlide: 0,
    rtl:true,
  };


  return (
    <>
      <div className={style.slids}>
        <Slider {...settings}>
          <div>
            <a href="">
              <img src={run} alt="" />
            </a>
          </div>
          <div>
            <a href="">
              <img src={game} alt="" />
            </a>
          </div>
          <div>
            <a href="">
              <img src={exer} alt="" />
            </a>
          </div>
          <div>
            <a href="">
              <img src={football} alt="" />
            </a>
          </div>
        </Slider>
      </div>
    </>
  );
};

export default SlideShow;
