import React from "react";
import CardFootball from "./CardFootball";



const Football = ({FootballClubItems}) => {
  return (
    <>
      <div className="football">
        <div className="footballtitle">
          <h3>فوتبال و فوتسال</h3>
          <div>
            <p>رزرو سالن های فوتسال</p>
            <a href="">نمایش بیشتر</a>
          </div>
        </div>
        <div className="footballslids">
          {FootballClubItems?.map((item)=> <CardFootball key={Math.random()} address={item.address} title={item.title} img={item.img} location={item.location} woman={item.woman} man={item.man} doted={item.doted} listItemOne={item.listItemOne} listItemTwo={item.listItemTwo} reserve={item.reserve} /> )}
        </div>
      </div>
    </>
  );
};

export default Football;