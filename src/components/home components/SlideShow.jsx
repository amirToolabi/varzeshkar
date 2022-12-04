import React from "react";

import "../../component style/TopSliderStyle.css"

import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';

import run from "../../images/firstchild/banner-2.eff203b.png";
import game from "../../images/firstchild/banner-1.a8d334e.png";
import exer from "../../images/firstchild/banner-3.2b631b1.png";
import football from "../../images/firstchild/banner-4.9bac380.png";

const SlideShow = () => {


  return (
    <>
      <div className="slids">
        <AwesomeSlider animation="cubeAnimation">
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
        </AwesomeSlider>
      </div>
    </>
  );
};

export default SlideShow;
