import React from "react";


// import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
// import "swiper/css";
// import "swiper/css/pagination";
// import { Pagination } from "swiper";


import CardClubMostSeen from "./CardClubMostSeen";
// import TitleSlides from "./TitleSlides";

const Seen = ({ SeenClubItems }) => {


  // const seenclubtitle = { htitle: "پربازدید ترین ها", ptitle: "بر اساس تعداد بازدیدهای هفته اخیر" }


  return (
    <>
      <div className="seen">
        <div className="seentitle">
          {/* <TitleSlides seenoption={seenclubtitle} /> */}
        </div>
        <div className="seenslids">
          {/* <Swiper
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
            <SwiperSlide> */}
              {SeenClubItems?.map((item) => <CardClubMostSeen key={Math.random()} address={item.address} title={item.title} img={item.img} location={item.location} woman={item.woman} man={item.man} doted={item.doted} listItemOne={item.listItemOne} listItemTwo={item.listItemTwo} listItemThree={item.listItemThree} reserve={item.reserve} price={item.price} />)}
            {/* </SwiperSlide>

          </Swiper> */}
        </div>
      </div>
    </>
  );
};

export default Seen;