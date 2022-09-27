import React from "react";

import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import one from "../../images/papular/1.jfif";
import two from "../../images/papular/2.jfif";
import three from "../../images/papular/3.jfif";
import four from "../../images/papular/4.jfif";
import five from "../../images/papular/5.jfif";
import six from "../../images/papular/6.jfif";
import seven from "../../images/papular/7.jfif";
import eight from "../../images/papular/8.jfif";
import nine from "../../images/papular/9.jfif";
import ten from "../../images/papular/10.jfif";
import eleven from "../../images/papular/11.jfif";
import toelve from "../../images/papular/12.jfif";
import Thirteen from "../../images/papular/13.jfif";
import fourteen from "../../images/papular/14.jfif";
import fifteen from "../../images/papular/15.jfif";
import sixteen from "../../images/papular/16.jfif";
import seventeen from "../../images/papular/17.jfif";
import eighteen from "../../images/papular/18.jfif";
import nineteen from "../../images/papular/19.jfif";
import twenty from "../../images/papular/20.jfif";
import location from "../../images/papular/location.png";
import man from "../../images/papular/man.png";
import woman from "../../images/papular/woman.png";
import share from "../../images/papular/share.png";
import doted from "../../images/papular/doted.png";
import club from "../../images/papular/clubLink.png";
import coach from "../../images/papular/coachLink.png";

const Papular = () => {
  // var settings = {
  //   infinite: false,
  //   speed: 300,
  //   slidesToShow: 4,
  //   slidesToScroll: 1,
  //   rtl:true,
  //   swipe:'direction',
  //   responsive: [
  //     {
  //       breakpoint: 1024,
  //       settings: {
  //         slidesToShow: 3,
  //         slidesToScroll: 3,
  //         infinite: true,
  //         dots: true
  //       }
  //     },
  //     {
  //       breakpoint: 600,
  //       settings: {
  //         slidesToShow: 2,
  //         slidesToScroll: 2
  //       }
  //     },
  //     {
  //       breakpoint: 480,
  //       settings: {
  //         slidesToShow: 1,
  //         slidesToScroll: 1
  //       }
  //     }
  //   ]
  // };

  return (
    <>
      <div className="papular">
        <div className="papulartitle">
          <h3>محبوب ترین ها</h3>
          <div>
            <p>باشگاه های محبوب تایید شده توسط ورزشکار</p>
            <a href="">نمایش بیشتر</a>
          </div>
        </div>
        <div className="papularslids">
          {/* <Slider {...settings}> */}
          <div className="child">
            <a href="">
              <img className="imgslid" src={one} alt="" />
              <div className="middle">
                <p>باشگاه پرشین غرب - بانوان</p>
                <div className="locationgyminfo">
                  <span className="locationgym">
                    <img src={location} alt="" />
                    تهران - منطقه 21
                  </span>
                  <span>
                    <a href="#">
                      <img src={man} alt="" />
                    </a>
                  </span>
                </div>
                <ul>
                  <li>
                    <img src={doted} alt="" />
                    فیتنس
                  </li>
                  <li>
                    <img src={doted} alt="" />
                    تی آر ایکس
                  </li>
                </ul>
              </div>
              <p className="reserved">رزرو آنلاین ندارد</p>
            </a>
          </div>
          <div className="child">
            <a href="">
              <img className="imgslid" src={two} alt="" />
              <div className="middle">
                <p>باشگاه پرشین غرب - بانوان</p>
                <div className="locationgyminfo">
                  <span className="locationgym">
                    <img src={location} alt="" />
                    تهران - منطقه 21
                  </span>
                  <span>
                    <a href="#">
                      <img src={man} alt="" />
                    </a>
                  </span>
                </div>
                <ul>
                  <li>
                    <img src={doted} alt="" />
                    فیتنس
                  </li>
                  <li>
                    <img src={doted} alt="" />
                    تی آر ایکس
                  </li>
                </ul>
              </div>
              <p className="reserved">رزرو آنلاین ندارد</p>
            </a>
          </div>
          <div className="child">
            <a href="">
              <img className="imgslid" src={three} alt="" />
              <div className="middle">
                <p>باشگاه پرشین غرب - بانوان</p>
                <div className="locationgyminfo">
                  <span className="locationgym">
                    <img src={location} alt="" />
                    تهران - منطقه 21
                  </span>
                  <span>
                    <a href="#">
                      <img src={man} alt="" />
                    </a>
                  </span>
                </div>
                <ul>
                  <li>
                    <img src={doted} alt="" />
                    فیتنس
                  </li>
                  <li>
                    <img src={doted} alt="" />
                    تی آر ایکس
                  </li>
                </ul>
              </div>
              <p className="reserved">رزرو آنلاین ندارد</p>
            </a>
          </div>
          <div className="child">
            <a href="">
              <img className="imgslid" src={four} alt="" />
              <div className="middle">
                <p>باشگاه پرشین غرب - بانوان</p>
                <div className="locationgyminfo">
                  <span className="locationgym">
                    <img src={location} alt="" />
                    تهران - منطقه 21
                  </span>
                  <span>
                    <a href="#">
                      <img src={man} alt="" />
                    </a>
                  </span>
                </div>
                <ul>
                  <li>
                    <img src={doted} alt="" />
                    فیتنس
                  </li>
                  <li>
                    <img src={doted} alt="" />
                    تی آر ایکس
                  </li>
                </ul>
              </div>
              <p className="reserved">رزرو آنلاین ندارد</p>
            </a>
          </div>
          <div className="child">
            <a href="">
              <img className="imgslid" src={five} alt="" />
              <div className="middle">
                <p>باشگاه پرشین غرب - بانوان</p>
                <div className="locationgyminfo">
                  <span className="locationgym">
                    <img src={location} alt="" />
                    تهران - منطقه 21
                  </span>
                  <span>
                    <a href="#">
                      <img src={man} alt="" />
                    </a>
                  </span>
                </div>
                <ul>
                  <li>
                    <img src={doted} alt="" />
                    فیتنس
                  </li>
                  <li>
                    <img src={doted} alt="" />
                    تی آر ایکس
                  </li>
                </ul>
              </div>
              <p className="reserved">رزرو آنلاین ندارد</p>
            </a>
          </div>
          <div className="child">
            <a href="">
              <img className="imgslid" src={six} alt="" />
              <div className="middle">
                <p>باشگاه پرشین غرب - بانوان</p>
                <div className="locationgyminfo">
                  <span className="locationgym">
                    <img src={location} alt="" />
                    تهران - منطقه 21
                  </span>
                  <span>
                    <a href="#">
                      <img src={man} alt="" />
                    </a>
                  </span>
                </div>
                <ul>
                  <li>
                    <img src={doted} alt="" />
                    فیتنس
                  </li>
                  <li>
                    <img src={doted} alt="" />
                    تی آر ایکس
                  </li>
                </ul>
              </div>
              <p className="reserved">رزرو آنلاین ندارد</p>
            </a>
          </div>
          <div className="child">
            <a href="">
              <img className="imgslid" src={seven} alt="" />
              <div className="middle">
                <p>باشگاه پرشین غرب - بانوان</p>
                <div className="locationgyminfo">
                  <span className="locationgym">
                    <img src={location} alt="" />
                    تهران - منطقه 21
                  </span>
                  <span>
                    <a href="#">
                      <img src={man} alt="" />
                    </a>
                  </span>
                </div>
                <ul>
                  <li>
                    <img src={doted} alt="" />
                    فیتنس
                  </li>
                  <li>
                    <img src={doted} alt="" />
                    تی آر ایکس
                  </li>
                </ul>
              </div>
              <p className="reserved">رزرو آنلاین ندارد</p>
            </a>
          </div>
          <div className="child">
            <a href="">
              <img className="imgslid" src={eight} alt="" />
              <div className="middle">
                <p>باشگاه پرشین غرب - بانوان</p>
                <div className="locationgyminfo">
                  <span className="locationgym">
                    <img src={location} alt="" />
                    تهران - منطقه 21
                  </span>
                  <span>
                    <a href="#">
                      <img src={man} alt="" />
                    </a>
                  </span>
                </div>
                <ul>
                  <li>
                    <img src={doted} alt="" />
                    فیتنس
                  </li>
                  <li>
                    <img src={doted} alt="" />
                    تی آر ایکس
                  </li>
                </ul>
              </div>
              <p className="reserved">رزرو آنلاین ندارد</p>
            </a>
          </div>
          <div className="child">
            <a href="">
              <img className="imgslid" src={nine} alt="" />
              <div className="middle">
                <p>باشگاه پرشین غرب - بانوان</p>
                <div className="locationgyminfo">
                  <span className="locationgym">
                    <img src={location} alt="" />
                    تهران - منطقه 21
                  </span>
                  <span>
                    <a href="#">
                      <img src={man} alt="" />
                    </a>
                  </span>
                </div>
                <ul>
                  <li>
                    <img src={doted} alt="" />
                    فیتنس
                  </li>
                  <li>
                    <img src={doted} alt="" />
                    تی آر ایکس
                  </li>
                </ul>
              </div>
              <p className="reserved">رزرو آنلاین ندارد</p>
            </a>
          </div>
          <div className="child">
            <a href="">
              <img className="imgslid" src={ten} alt="" />
              <div className="middle">
                <p>باشگاه پرشین غرب - بانوان</p>
                <div className="locationgyminfo">
                  <span className="locationgym">
                    <img src={location} alt="" />
                    تهران - منطقه 21
                  </span>
                  <span>
                    <a href="#">
                      <img src={man} alt="" />
                    </a>
                  </span>
                </div>
                <ul>
                  <li>
                    <img src={doted} alt="" />
                    فیتنس
                  </li>
                  <li>
                    <img src={doted} alt="" />
                    تی آر ایکس
                  </li>
                </ul>
              </div>
              <p className="reserved">رزرو آنلاین ندارد</p>
            </a>
          </div>
          <div className="child">
            <a href="">
              <img className="imgslid" src={eleven} alt="" />
              <div className="middle">
                <p>باشگاه پرشین غرب - بانوان</p>
                <div className="locationgyminfo">
                  <span className="locationgym">
                    <img src={location} alt="" />
                    تهران - منطقه 21
                  </span>
                  <span>
                    <a href="#">
                      <img src={man} alt="" />
                    </a>
                  </span>
                </div>
                <ul>
                  <li>
                    <img src={doted} alt="" />
                    فیتنس
                  </li>
                  <li>
                    <img src={doted} alt="" />
                    تی آر ایکس
                  </li>
                </ul>
              </div>
              <p className="reserved">رزرو آنلاین ندارد</p>
            </a>
          </div>
          <div className="child">
            <a href="">
              <img className="imgslid" src={toelve} alt="" />
              <div className="middle">
                <p>باشگاه پرشین غرب - بانوان</p>
                <div className="locationgyminfo">
                  <span className="locationgym">
                    <img src={location} alt="" />
                    تهران - منطقه 21
                  </span>
                  <span>
                    <a href="#">
                      <img src={man} alt="" />
                    </a>
                  </span>
                </div>
                <ul>
                  <li>
                    <img src={doted} alt="" />
                    فیتنس
                  </li>
                  <li>
                    <img src={doted} alt="" />
                    تی آر ایکس
                  </li>
                </ul>
              </div>
              <p className="reserved">رزرو آنلاین ندارد</p>
            </a>
          </div>
          <div className="child">
            <a href="">
              <img className="imgslid" src={Thirteen} alt="" />
              <div className="middle">
                <p>باشگاه پرشین غرب - بانوان</p>
                <div className="locationgyminfo">
                  <span className="locationgym">
                    <img src={location} alt="" />
                    تهران - منطقه 21
                  </span>
                  <span>
                    <a href="#">
                      <img src={man} alt="" />
                    </a>
                  </span>
                </div>
                <ul>
                  <li>
                    <img src={doted} alt="" />
                    فیتنس
                  </li>
                  <li>
                    <img src={doted} alt="" />
                    تی آر ایکس
                  </li>
                </ul>
              </div>
              <p className="reserved">رزرو آنلاین ندارد</p>
            </a>
          </div>
          <div className="child">
            <a href="">
              <img className="imgslid" src={fourteen} alt="" />
              <div className="middle">
                <p>باشگاه پرشین غرب - بانوان</p>
                <div className="locationgyminfo">
                  <span className="locationgym">
                    <img src={location} alt="" />
                    تهران - منطقه 21
                  </span>
                  <span>
                    <a href="#">
                      <img src={man} alt="" />
                    </a>
                  </span>
                </div>
                <ul>
                  <li>
                    <img src={doted} alt="" />
                    فیتنس
                  </li>
                  <li>
                    <img src={doted} alt="" />
                    تی آر ایکس
                  </li>
                </ul>
              </div>
              <p className="reserved">رزرو آنلاین ندارد</p>
            </a>
          </div>
          <div className="child">
            <a href="">
              <img className="imgslid" src={fifteen} alt="" />
              <div className="middle">
                <p>باشگاه پرشین غرب - بانوان</p>
                <div className="locationgyminfo">
                  <span className="locationgym">
                    <img src={location} alt="" />
                    تهران - منطقه 21
                  </span>
                  <span>
                    <a href="#">
                      <img src={man} alt="" />
                    </a>
                  </span>
                </div>
                <ul>
                  <li>
                    <img src={doted} alt="" />
                    فیتنس
                  </li>
                  <li>
                    <img src={doted} alt="" />
                    تی آر ایکس
                  </li>
                </ul>
              </div>
              <p className="reserved">رزرو آنلاین ندارد</p>
            </a>
          </div>
          <div className="child">
            <a href="">
              <img className="imgslid" src={sixteen} alt="" />
              <div className="middle">
                <p>باشگاه پرشین غرب - بانوان</p>
                <div className="locationgyminfo">
                  <span className="locationgym">
                    <img src={location} alt="" />
                    تهران - منطقه 21
                  </span>
                  <span>
                    <a href="#">
                      <img src={man} alt="" />
                    </a>
                  </span>
                </div>
                <ul>
                  <li>
                    <img src={doted} alt="" />
                    فیتنس
                  </li>
                  <li>
                    <img src={doted} alt="" />
                    تی آر ایکس
                  </li>
                </ul>
              </div>
              <p className="reserved">رزرو آنلاین ندارد</p>
            </a>
          </div>
          <div className="child">
            <a href="">
              <img className="imgslid" src={seventeen} alt="" />
              <div className="middle">
                <p>باشگاه پرشین غرب - بانوان</p>
                <div className="locationgyminfo">
                  <span className="locationgym">
                    <img src={location} alt="" />
                    تهران - منطقه 21
                  </span>
                  <span>
                    <a href="#">
                      <img src={man} alt="" />
                    </a>
                  </span>
                </div>
                <ul>
                  <li>
                    <img src={doted} alt="" />
                    فیتنس
                  </li>
                  <li>
                    <img src={doted} alt="" />
                    تی آر ایکس
                  </li>
                </ul>
              </div>
              <p className="reserved">رزرو آنلاین ندارد</p>
            </a>
          </div>
          <div className="child">
            <a href="">
              <img className="imgslid" src={eighteen} alt="" />
              <div className="middle">
                <p>باشگاه پرشین غرب - بانوان</p>
                <div className="locationgyminfo">
                  <span className="locationgym">
                    <img src={location} alt="" />
                    تهران - منطقه 21
                  </span>
                  <span>
                    <a href="#">
                      <img src={man} alt="" />
                    </a>
                  </span>
                </div>
                <ul>
                  <li>
                    <img src={doted} alt="" />
                    فیتنس
                  </li>
                  <li>
                    <img src={doted} alt="" />
                    تی آر ایکس
                  </li>
                </ul>
              </div>
              <p className="reserved">رزرو آنلاین ندارد</p>
            </a>
          </div>
          <div className="child">
            <a href="">
              <img className="imgslid" src={nineteen} alt="" />
              <div className="middle">
                <p>باشگاه پرشین غرب - بانوان</p>
                <div className="locationgyminfo">
                  <span className="locationgym">
                    <img src={location} alt="" />
                    تهران - منطقه 21
                  </span>
                  <span>
                    <a href="#">
                      <img src={man} alt="" />
                    </a>
                  </span>
                </div>
                <ul>
                  <li>
                    <img src={doted} alt="" />
                    فیتنس
                  </li>
                  <li>
                    <img src={doted} alt="" />
                    تی آر ایکس
                  </li>
                </ul>
              </div>
              <p className="reserved">رزرو آنلاین ندارد</p>
            </a>
          </div>
          <div className="child">
            <a href="">
              <img className="imgslid" src={twenty} alt="" />
              <div className="middle">
                <p>باشگاه پرشین غرب - بانوان</p>
                <div className="locationgyminfo">
                  <span className="locationgym">
                    <img src={location} alt="" />
                    تهران - منطقه 21
                  </span>
                  <span>
                    <a href="#">
                      <img src={man} alt="" />
                    </a>
                  </span>
                </div>
                <ul>
                  <li>
                    <img src={doted} alt="" />
                    فیتنس
                  </li>
                  <li>
                    <img src={doted} alt="" />
                    تی آر ایکس
                  </li>
                </ul>
              </div>
              <p className="reserved">رزرو آنلاین ندارد</p>
            </a>
          </div>
        </div>
      </div>
      <div className="imglink">
        <a href=""><img src={club} alt="" /></a>
        <a href=""><img src={coach} alt="" /></a>
      </div>
    </>
  );
};

export default Papular;
