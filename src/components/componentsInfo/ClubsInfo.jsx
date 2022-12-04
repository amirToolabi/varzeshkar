
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


const ClubsInfo = ({ image, subimg, subclub, clubname, woman, man, state, city, region, address, services, area, height, year, discribtion, phone, possibilities }) => {

    


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

                </div>
            </section>
        </>
    );
}

export default ClubsInfo;