import React from "react";


import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";



import club from "../../images/papular/clubLink.png";
import coach from "../../images/papular/coachLink.png";
import CardClub from "./CardClub";
import TitleSlides from "./TitleSlides";

const ClubSliderSection = ({clubItems}) => {

  const clubselectiontitle = {htitle : "محبوب ترین ها" , ptitle: "باشگاه های محبوب تایید شده توسط ورزشکار"}

  return (
    <>

      <div className="papular">
        <div className="papulartitle">
          <TitleSlides option = {clubselectiontitle} />
        </div>
        <div className="papularslids">
         <Swiper 
            dir="rtl"
            slidesPerView={1}
            spaceBetween={10}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 4,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 5,
                spaceBetween: 50,
              },
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            <SwiperSlide>
              {clubItems?.map((item) => <CardClub key={Math.random()} address={item.address} title={item.title} img={item.img} location={item.location} woman={item.woman} man={item.man} doted={item.doted} listItemOne={item.listItemOne} listItemTwo={item.listItemTwo} listItemThree={item.listItemThree} reserve={item.reserve} price= {item.price} />)}
            </SwiperSlide>
            
          </Swiper> 
        </div>
      </div>
      <div className="imglink">
        <a href="">
          <img src={club} alt="" />
        </a>
        <a href="">
          <img src={coach} alt="" />
        </a>
      </div>
    </>
  );
};

export default ClubSliderSection;
