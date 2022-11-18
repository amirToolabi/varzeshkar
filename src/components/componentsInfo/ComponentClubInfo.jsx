import Footer from "../public components/Footer";
import Header from "../public components/Header";
import ClubsInfo from "./ClubsInfo";


import one from "../../images/infoClub/1.jpg";

import subone from "../../images/papular/1.jfif";
// import two from "../../images/papular/2.jfif";
// import three from "../../images/papular/3.jfif";
// import four from "../../images/papular/4.jfif";
// import five from "../../images/papular/5.jfif";
// import six from "../../images/papular/6.jfif";
// import seven from "../../images/papular/7.jfif";
// import eight from "../../images/papular/8.jfif";
// import nine from "../../images/papular/9.jfif";
// import ten from "../../images/papular/10.jfif";
// import eleven from "../../images/papular/11.jfif";
// import toelve from "../../images/papular/12.jfif";
// import thirteen from "../../images/papular/13.jfif";
// import fourteen from "../../images/papular/14.jfif";
// import fifteen from "../../images/papular/15.jfif";
// import sixteen from "../../images/papular/16.jfif";
// import seventeen from "../../images/papular/17.jfif";
// import eighteen from "../../images/papular/18.jfif";
// import nineteen from "../../images/papular/19.jfif";
// import twenty from "../../images/papular/20.jfif";
// import man from "../../images/papular/boy.png";
import woman from "../../images/papular/girl.png";



const ComponentClubInfo = () => {


    const options = [
        {image: one ,subclub:"مجموعه پرشین غرب" ,subimg: subone ,clubname: "باشگاه پرشین غرب - بانوان" ,woman ,state: "تهران" ,city: "تهران" ,region: '۲۱' ,address: "تهران،بلوار لاله روبروی پاساژ الماس،پلاک ۱۲۳،طبقه چهارم" ,services:["فیتنس","تی آر ایکس","کراس فیت","یوگا"] ,area:'۳۵۰ متر' ,height: '۴ متر' ,year: '۱۴۰۰' ,discribtion: ["با کاملترین و جدیدترین دستگا‌های بدنسازی و هوازی","دارای محیط مجزا جهت تمرینات TRX و COSSFIT","دارای بوفه مجهز با ارائه نوشیدنی و غذای رژیمی","دارای سیستم رختکن آنلاین و سیستم ورود و خروج هوشمند","مجهز به سیستم تهویه هوای مطبوع تمام فصول","زیر نظر مربیان تحصیل کرده و مجرب","ارائه خدمات مشاوره و برنامه تخصصی و غذایی برای ورزشکاران","تخفیف ویژه جهت دانشجویان و دانش آموزان","زیر نظر مربیان حرفه ای دارای مدرک بین المللی","با مدیریت امیر اصلانی"] ,phone: "۴۴۵۸۶۸۵۶" ,possibilities : ["مربی بانوان","ارائه رژیم غذایی","مشاوره ورزشی","بوفه","فضای پارک وسیله نقلیه","کمد اختصاصی","رخت کن","کارتخوان","دوش","سرویس بهداشتی","فروش لوازم ورزشی","موسیقی","آمادگی همکاری با سازمان ها"]}                                                                                                                                                                                                          
    ]
    


    return ( 
        <>
            <Header/>
            <ClubsInfo image={options[0].image} subclub={options[0].subclub} subimg={options[0].subimg} clubname={options[0].clubname} woman={options[0].woman} state={options[0].state} city={options[0].city} region={options[0].region} address={options[0].address} services={options[0].services} area={options[0].area} height={options[0].height} year={options[0].year} discribtion={options[0].discribtion} phone={options[0].phone} possibilities={options[0].possibilities} />
            <Footer/>
        </>
     );
}
 
export default ComponentClubInfo;