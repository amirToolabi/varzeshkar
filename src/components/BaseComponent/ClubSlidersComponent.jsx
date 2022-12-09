

import "../../component style/Papularstyle.css"

import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import CardClub from "./CardClub";

const ClubSlidersComponent = ({ clubItems, title, subtitle, setting = 4.5 }) => {

    var settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: setting,
        slidesToScroll: 1,
        initialSlide:0,
        // rtl:true,
        responsive: [
            {
                breakpoint: 1230,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 1160,
                settings: {
                    slidesToShow: 3.5,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 850,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 700,
                settings: {
                    slidesToShow: 2.5,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 550,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1.5,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <>
            <div className="papular">
                <div className="papulartitle">
                    <h3>{title}</h3>
                    <div>
                        <p>{subtitle}</p>
                        <a href="">نمایش بیشتر</a>
                    </div>
                </div>
                <div className="papularslids">
                    <Slider {...settings}>
                        {clubItems?.map((item) => <CardClub key={Math.random()} address={item.address} title={item.title} img={item.img} location={item.location} woman={item.woman} man={item.man} doted={item.doted} listItemOne={item.listItemOne} listItemTwo={item.listItemTwo} listItemThree={item.listItemThree} reserve={item.reserve} price={item.price} />)}
                    </Slider>
                </div>
            </div>
        </>
    );
}

export default ClubSlidersComponent;