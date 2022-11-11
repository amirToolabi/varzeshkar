import React from "react";

// import Swiper, { Pagination } from "swiper";
// import { SwiperSlide } from "swiper/react";
import CardPool from "./CardPool";

import "swiper/css";
import "swiper/css/pagination";


const Pool = ({ PoolClubItems }) => {
  return (
    <>
      <div className="pool">
        <div className="pooltitle">
          <h3>استخر ها</h3>
          <div>
            <p>استخرهای روباز، جکوزی، سونا و ...</p>
            <a href="">نمایش بیشتر</a>
          </div>
        </div>
        <div className="poolslids">
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
              {PoolClubItems?.map((item) => <CardPool key={Math.random()} address={item.address} title={item.title} img={item.img} location={item.location} woman={item.woman} man={item.man} doted={item.doted} listItemOne={item.listItemOne} listItemTwo={item.listItemTwo} reserve={item.reserve} />)}
            {/* </SwiperSlide>

          </Swiper> */}

        </div>
      </div>
    </>
  );
};

export default Pool;
