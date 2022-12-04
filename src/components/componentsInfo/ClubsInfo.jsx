
import "../../component style/clubInfostyle.css"

import star from "../../images/infoClub/star.png"
import nostar from "../../images/infoClub/nostar.png"
import wide from "../../images/infoClub/wide.png"
import locationpng from "../../images/infoClub/route.png"
import heightpng from "../../images/infoClub/height.png"
import calendar from "../../images/infoClub/calendar.png"
import check from "../../images/infoClub/circle-check-list.png"
import cheklist from "../../images/infoClub/check-list.png"
import warning from "../../images/infoClub/warning.png"
import MessageSlide from "./MessageSlide"
import ClubSlidersComponent from "../BaseComponent/ClubSlidersComponent"

import onePool from "../../images/pool/1.jfif";
import location from "../../images/papular/location.png";
import doted from "../../images/papular/doted.png";


const ClubsInfo = ({ image, subimg, subclub, clubname, woman, man, state, city, region, address, services, area, height, year, discribtion, phone, possibilities }) => {
    const FootballClubItems = [
        { img: onePool, title: 'باشگاه ستاره ساز', address: 'تهران - منطقه ۱۰', location, man, doted, listItemOne: "فوتبال", listItemTwo: "فوتسال", reserve: "رزرو آنلاین ندارد" },
        { img: onePool, title: 'باشگاه فوتبال اسپایر', address: 'تهران - منطقه ۱', location, man, doted, listItemOne: "فوتبال", reserve: "رزرو آنلاین ندارد" },
        { img: onePool, title: 'زیمن چمن ایرانشهر', address: 'کرج', location, man, woman, doted, listItemOne: "فوتبال", listItemTwo: "فوتسال", reserve: "رزرو آنلاین ندارد" },
        { img: onePool, title: 'زمین چمن منتخب ستارگان', address: 'تهران - منطقه ۱۰', location, man, doted, listItemOne: "فوتبال", listItemTwo: "فوتسال", reserve: "رزرو آنلاین ندارد" },
        { img: onePool, title: 'زیمن چمن اقاقیا', address: 'تهران - منطقه ۱۴', location, man, woman, doted, listItemOne: "فوتبال", listItemTwo: "فوتسال", reserve: "رزرو آنلاین ندارد" },
        { img: onePool, title: 'زمین ورزشی فوتبال', address: 'رشت', location, man, doted, listItemOne: "فوتبال", reserve: "رزرو آنلاین ندارد" },
        { img: onePool, title: 'زمین فوتبال شهرک آزمایش', address: 'اصفهان', location, man, woman, doted, listItemOne: "فوتبال", listItemTwo: "فوتسال", reserve: "رزرو آنلاین ندارد" },
        { img: onePool, title: 'آکادمی مقاوت غرب', address: 'تهران - منطقه ۲', location, man, woman, doted, listItemOne: "فوتبال", listItemTwo: "فوتسال", reserve: "رزرو آنلاین ندارد" },
        { img: onePool, title: 'باشگاه ورزشی مهارت', address: 'تهران - منطقه ۱۰', location, man, woman, doted, listItemOne: "فوتبال", listItemTwo: "فوتسال", reserve: "رزرو آنلاین ندارد" },
        { img: onePool, title: 'مجموعه ورزشی ثامن', address: 'مشهد', location, man, doted, listItemOne: "فوتبال", listItemTwo: "فوتسال", reserve: "رزرو آنلاین ندارد" },
        { img: onePool, title: 'سالن چند منظوره گلبانگ', address: 'تهران - منطقه ۵', location, man, woman, doted, listItemOne: "فوتبال", listItemTwo: "فوتسال", reserve: "رزرو آنلاین ندارد" },
        { img: onePool, title: 'شهید لشگری', address: 'تهران - منطقه ۱', location, man, woman, doted, listItemOne: "فوتبال", listItemTwo: "فوتسال", reserve: "رزرو آنلاین ندارد" },
        { img: onePool, title: 'مدرسه فوتبال راد', address: 'تهران - منطقه ۱۷', location, man, doted, listItemOne: "فوتبال", listItemTwo: "فوتسال", reserve: "رزرو آنلاین ندارد" },
        { img: onePool, title: 'باشگاه شهید چمران', address: 'تهران - منطقه ۹', location, man, doted, listItemOne: "فوتبال", listItemTwo: "فوتسال", reserve: "رزرو آنلاین ندارد" },
        { img: onePool, title: 'باشگاه ورزشی پژواک', address: 'کرج', location, man, doted, listItemOne: "فوتبال", listItemTwo: "فوتسال", reserve: "رزرو آنلاین ندارد" },
        { img: onePool, title: 'مجموعه ورزشی کوهستان', address: 'کرج', location, man, woman, doted, listItemOne: "فوتبال", listItemTwo: "فوتسال", reserve: "رزرو آنلاین ندارد" },
      ]

     

    return (
        <>
            <section className="container">
                <div className="content">

                    <div className="thisclub">
                        <div className="infoclub">
                            <div className="subclub">
                                <div className="subclubimg">
                                    <img src={subimg} alt="" />
                                </div>
                                <div className="subclubname">
                                    <p>از سری زیرمجموعه های </p>
                                    <div>
                                        <h4>{subclub}</h4>
                                        <a href="">مشاهده مجموعه {" > "}</a>
                                    </div>
                                </div>
                            </div>
                            <div className="club">
                                <h3>
                                    {clubname}
                                </h3>
                                <div className="star">
                                    <div className="firststarchild">
                                        <span className="imgstar">
                                            <img src={star} alt="" />
                                            <img src={star} alt="" />
                                            <img src={star} alt="" />
                                            <img src={star} alt="" />
                                            <img src={nostar} alt="" />
                                        </span>
                                        <span>
                                            ۴.۳ از ۵
                                        </span>
                                    </div>
                                    <div className="secondstarchild">
                                        {" ۰ "}&nbsp; دیدگاه کاربران 
                                    </div>
                                </div>
                                <div className="gender">
                                    {man ? <span className="man"><img src={man} /></span> : undefined}
                                    {woman ? <span className="woman"><img src={woman} /> {"بانوان"} </span> : undefined}
                                </div>
                                <div className="location">
                                    <div className="city">
                                        <span>استان : <strong>{state}</strong></span>
                                        <span>شهر : <strong>{city}</strong></span>
                                        <span>منطقه : <strong>{region}</strong></span>
                                    </div>

                                    <div className="address">
                                        <p><span>آدرس : </span>{address}</p>
                                    </div>
                                    <button><img src={locationpng} /> موقعیت روی نقشه و مسیریابی </button>
                                </div>
                                <div className="services">
                                    <span>خدمات قابل ارائه</span>
                                    <ul>
                                        {services?.map((item) => <li><img src={check} /> {" "} {item}</li>)}
                                    </ul>
                                </div>

                            </div>
                            <div className="appearance">
                                <div>
                                    <span><img src={wide} /> مساحت</span>
                                    <strong>{area}</strong>
                                </div>
                                <div>
                                    <span><img src={heightpng} alt="" /> ارتفاع</span>
                                    <strong>{height}</strong>
                                </div>
                                <div>
                                    <span><img src={calendar} alt="" /> سال تاسیس</span>
                                    <strong>{year}</strong>
                                </div>
                            </div>
                            <div className="problem">
                                <a href=""><img src={warning} alt="" /> گزارش نادرستی مشخصات</a>
                            </div>
                        </div>


                        <div className="aboutclub">

                            <div className="imgtitle">
                                <img src={image} />
                            </div>

                            <div className="discribtion">
                                <h4>توضیحات تکمیلی</h4>
                                <ul>
                                    {discribtion?.map((item) => <li>{item}</li>)}
                                </ul>
                                <strong className="phone">تلفن تماس {phone}</strong>
                            </div>

                            <div className="possibilities">
                                <strong>امکانات</strong>
                                <ul>
                                    {possibilities?.map((item) => <li><img src={cheklist} /> {" "} {item}</li>)}
                                </ul>
                            </div>

                        </div>
                    </div>

                    <div className="messagecontent">
                        <MessageSlide/>
                    </div>

                    <ClubSlidersComponent setting={3.5} clubItems={FootballClubItems} title={"فوتبال و فوتسال"} subtitle={"رزرو سالن های فوتسال"} />
                </div>
            </section>
        </>
    );
}

export default ClubsInfo;