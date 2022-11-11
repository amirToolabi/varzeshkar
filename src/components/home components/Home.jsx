import React from "react";

import { useSelector } from "react-redux";

import Seen from "../BaseComponent/Seen";
import Pool from "../BaseComponent/Pool";

import SlideShow from "./SlideShow";
import Getapp from "./Getapp";
import Football from "../BaseComponent/Football";
import Shadow from "./Shadow";
import SideMenu from "../BaseComponent/SideMenu";
import ClubSliderSection from "../BaseComponent/ClubSliderSection";

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
import thirteen from "../../images/papular/13.jfif";
import fourteen from "../../images/papular/14.jfif";
import fifteen from "../../images/papular/15.jfif";
import sixteen from "../../images/papular/16.jfif";
import seventeen from "../../images/papular/17.jfif";
import eighteen from "../../images/papular/18.jfif";
import nineteen from "../../images/papular/19.jfif";
import twenty from "../../images/papular/20.jfif";

import oneSeen from "../../images/seen/1.jfif";
import twoSeen from "../../images/seen/2.jfif";
import threeSeen from "../../images/seen/3.jfif";
import fourSeen from "../../images/seen/4.jfif";
import fiveSeen from "../../images/seen/5.jfif";
import sixSeen from "../../images/seen/6.jfif";
import sevenSeen from "../../images/seen/7.jfif";
import eightSeen from "../../images/seen/8.jfif";
import nineSeen from "../../images/seen/9.jfif";
import tenSeen from "../../images/seen/10.jfif";
import thirteenSeen from "../../images/seen/13.jfif";
import fourteenSeen from "../../images/seen/14.jfif";
import fifteenSeen from "../../images/seen/15.jfif";
import sixteenSeen from "../../images/seen/16.jfif";
import seventeenSeen from "../../images/seen/17.jfif";
import eighteenSeen from "../../images/seen/18.jfif";
import nineteenSeen from "../../images/seen/19.jfif";
import twentySeen from "../../images/seen/20.jfif";


import onePool from "../../images/pool/1.jfif";


import location from "../../images/papular/location.png";
import man from "../../images/papular/man.png";
import woman from "../../images/papular/woman.png";
// import share from "../../images/papular/share.png";
import doted from "../../images/papular/doted.png";

const Home = () => {

const titles = [
  {htitle : "محبوب ترین ها" , ptitle: "باشگاه های محبوب تایید شده توسط ورزشکار"},
  {htitle : "محبوب ترین ها" , ptitle: "باشگاه های محبوب تایید شده توسط ورزشکار"},
  {htitle : "محبوب ترین ها" , ptitle: "باشگاه های محبوب تایید شده توسط ورزشکار"},
  {htitle : "محبوب ترین ها" , ptitle: "باشگاه های محبوب تایید شده توسط ورزشکار"},
]

const clubItems = [
  {img: one , title: 'باشگا پرشین غرب - بانوان' , address: 'تهران-منطقه  ۲۱' , location , woman , doted , listItemOne: "فیتنس" , listItemTwo: "تی آر ایکس" , listItemThree: "کراس فیت" , reserve : "رزرو آنلاین ندارد"},
  {img: two , title: 'باشگاه آرسیس' , address: 'تهران-منطقه  ۲۲' , location , man , doted , listItemOne: "بدنسازی" , listItemTwo: "تی آر ایکس" , listItemThree: "کراس فیت" , reserve : "شروع قیمت از " , price : "۳۰۰,۰۰۰ تومان"},
  {img: three , title: 'باشگاه پرواز آسمان طلایی' , address: 'تهران-منطقه  ۱' , location , woman , man , doted , listItemOne: "پاراگلایدینگ {paragliding}" , reserve : "شروع قیمت از " , price : "۸۸۰,۰۰۰ تومان"},
  {img: four , title: 'باشگاه بدنسازی و سالن زیبایی ..' , address: 'تهران-منطقه  ۲۲' , location , woman , doted , listItemOne: "ایروفیتنس" , listItemTwo: "سی ایکس" , listItemThree: "کراس فیت" , reserve : "رزرو آنلاین ندارد"},
  {img: five , title: 'باشگاه تنیس روی میز خرم شاد' , address: 'تهران-منطقه  ۵' , location , woman , man , doted , listItemOne: "تنیس روی میز" , reserve : "رزرو آنلاین ندارد"},
  {img: six , title: 'بدنسازی پارس پایتخت' , address: 'تهران-منطقه  ۷' , location , woman , man , doted , listItemOne: "ابروبیک" , listItemTwo: "تی آر ایکس" , listItemThree: "بدنسازی" , reserve : "رزرو آنلاین ندارد"},
  {img: seven , title: 'باشگه الین' , address: 'تهران-منطقه  ۶' , location , woman , doted , listItemOne: "فیتنس" , listItemTwo: "پاورفیت" , listItemThree: "اروبیک دنس" , reserve : "رزرو آنلاین ندارد"},
  {img: eight , title: 'هیئت تنیس روی میز تهران' , address: 'تهران-منطقه  ۶' , location , woman , man , doted , listItemOne: "تنیس روی میز" , reserve : "رزرو آنلاین ندارد"},
  {img: nine , title: 'باشگه آرنیکا ۱' , address: 'تهران-منطقه  ۵' , location , woman , doted , listItemOne: "باله" , listItemTwo: "تی آر ایکس" , listItemThree: "پیلاتس" , reserve : "رزرو آنلاین ندارد"},
  {img: ten , title: 'باشگاه پایتخت' , address: 'تهران-منطقه  ۵' , location , woman , doted , listItemOne: "باله" , listItemTwo: "زومبا" , listItemThree: "بدنسازی" , reserve : "رزرو آنلاین ندارد"},
  {img: eleven , title: 'مرکز تندرستی کودک جیم جیم' , address: 'تهران-منطقه  ۶' , location , woman , man , doted , listItemOne: "باله" , reserve : "رزرو آنلاین ندارد"},
  {img: toelve , title: 'باشگاه افراز' , address: 'تهران-منطقه  ۴' , location , woman , doted , listItemOne: "پروررش اندام" , listItemTwo: "بادی بیلدینگ" , listItemThree: "ابروبیک" , reserve : "رزرو آنلاین ندارد"},
  {img: thirteen , title: 'باشگاه تخت جمشید' , address: 'تهران-منطقه  ۳' , location , woman , man , doted , listItemOne: "ابروکامبت" , listItemTwo: "دفاع شخصی" , listItemThree: "کاراته" , reserve : "رزرو آنلاین ندارد"},
  {img: fourteen , title: 'مجموعه ورزشی VIP گلستان' , address: 'تهران-منطقه  ۲' , location , man , doted , listItemOne: "کیک بوکسینگ" , listItemTwo: "تی آر ایکس" , listItemThree: "بدنسازی" , reserve : "رزرو آنلاین ندارد"},
  {img: fifteen , title: 'باشگاه قصر نشاط' , address: 'تهران-منطقه  ۵' , location , woman , man , doted , listItemOne: "فیتنس" , listItemTwo: "اروبیک" , listItemThree: "ورزش های رزمی آمیخته" , reserve : "رزرو آنلاین ندارد"},
  {img: sixteen , title: 'مجموعه ورزشی لاله' , address: 'تهران-منطقه  ۲۲' , location , woman , man , doted , listItemOne: "کیک بوکسینگ" , listItemTwo: "تی آر ایکس" , listItemThree: "فوتسال" , reserve : "رزرو آنلاین ندارد"},
  {img: seventeen , title: 'باشگاه ذولفقار' , address: 'تهران-منطقه  ۵' , location , woman , man , doted , listItemOne: "بدنسازی" , listItemTwo: "ایروبیک" , listItemThree: "کاراته" , reserve : "رزرو آنلاین ندارد"},
  {img: eighteen , title: 'باشگاه خانه زیبایی تناسب اندام' , address: 'تهران-منطقه  ۳' , location , woman, man , doted , listItemOne: "ابروبیک" , listItemTwo: "تی آر ایکس" , listItemThree: "بدنسازی" , reserve : "رزرو آنلاین ندارد"},
  {img: nineteen , title: 'مجموعه ورزشی منظر' , address: 'تهران-منطقه  ۵' , location , woman , man , doted , listItemOne: "بدنسازی" , listItemTwo: "زومبا" , listItemThree: "پیلاتس" , reserve : "رزرو آنلاین ندارد"},
  {img: twenty , title: 'باشگاه سرافراز' , address: 'تهران-منطقه  ۲۱' , location , man , doted , listItemOne: "فیتنس" , listItemTwo: "بدنسازی" , reserve : "رزرو آنلاین ندارد"}
]

const SeenClubItems = [
  {img: oneSeen , title: 'باشگاه اکسیژن سبحان' , address: 'تهران-منطقه  ۱' , location , woman, man , doted , listItemOne: "فیتنس" , listItemTwo: "تی آر ایکس" , listItemThree: "بدنسازی" , reserve : "رزرو آنلاین ندارد"},
  {img: twoSeen , title: 'مجموعه ورزشی گلبانگ' , address: 'تهران-منطقه  ۲' , location , woman , man , doted , listItemOne: "بدنسازی" , listItemTwo: "تی آر ایکس" , listItemThree: "فیتنس" , reserve : "رزرو آنلاین ندارد"},
  {img: threeSeen , title: 'باشگاه شهید پناهی' , address: 'تهران-منطقه  ۱۲' , location , woman , man , doted , listItemOne: "تکواندو" , listItemTwo: "بوکس" , listItemThree: "ایروبیک" , reserve : "رزرو آنلاین ندارد"},
  {img: fourSeen , title: 'مجموعه ورزشی لاله' , address: 'تهران-منطقه  ۲۲' , location , woman , man , doted , listItemOne: "کیک بوکسینگ" , listItemTwo: "سی ایکس" , listItemThree: "فوتسال" , reserve : "رزرو آنلاین ندارد"},
  {img: fiveSeen , title: 'باشگاه قصر نشاط' , address: 'تهران-منطقه  ۵' , location , woman , man , doted , listItemOne: "فیتنس" , listItemTwo: "ایروبیک" , listItemThree: "ورزش های رزمی آمیخته" , reserve : "رزرو آنلاین ندارد"},
  {img: sixSeen , title: 'هیئت تنیس روی میز تهران' , title: 'هیئت تنیس روی میز تهران' , address: 'تهران-منطقه  ۶' , location , woman , man , doted , listItemOne: "تنیس روی میز" , reserve : "رزرو آنلاین ندارد"},
  {img: sevenSeen , title: 'باشگاه پرشین غرب - آقایان' , address: 'تهران-منطقه  ۶' , location , man , doted , listItemOne: "تی آر ایکس" , listItemTwo: "بدنسازی" , listItemThree: "کراس فیت" , reserve : "رزرو آنلاین ندارد"},
  {img: eightSeen , title: 'باشگاه بدنسازی و سالن زیبایی ..' , address: 'تهران-منطقه  ۲۲' , location , woman , doted , listItemOne: "ایروفیتنس" , listItemTwo: "سی ایکس" , listItemThree: "کراس فیت" , reserve : "رزرو آنلاین ندارد"},
  {img: nineSeen , title: 'باشگا پرشین غرب - بانوان' , address: 'تهران-منطقه  ۲۱' , location , woman , doted , listItemOne: "فیتنس" , listItemTwo: "تی آر ایکس" , listItemThree: "کراس فیت" , reserve : "رزرو آنلاین ندارد"},
  {img: tenSeen , title: 'باشگاه برگ سبز' , address: 'تهران-منطقه  ۷' , location , woman , doted , listItemOne: "تی آر ایکس" , listItemTwo: "یوگا" , listItemThree: "بدنسازی" , reserve : "رزرو آنلاین ندارد"},
  {img: threeSeen , title: 'مجموعه فرهنگی ورزشی سروش' , address: 'تهران-منطقه  ۲' , location , woman , man , doted , listItemOne: "بدنسازی" ,  listItemTwo: "بدمینتون" , reserve : "رزرو آنلاین ندارد"},
  {img: threeSeen , title: 'شهید لشگری' , address: 'تهران-منطقه  ۲' , location , woman , man , doted , listItemOne: "کیک بوکسینگ" , listItemTwo: "سی ایکس" , listItemThree: "کراس فیت" , reserve : "رزرو آنلاین ندارد"},
  {img: thirteenSeen , title: 'باشگاه یوتاب فیتنس' , address: 'تهران-منطقه  ۲۲' , location , woman , man , doted , listItemOne: "بدنسازی" , listItemTwo: "تی آر ایکس" , listItemThree: "یوگا" , reserve : "رزرو آنلاین ندارد"},
  {img: fourteenSeen , title: 'مجموعه پزشکی ورزشی ناوا' , address: 'تهران-منطقه  ۲' , location , woman , man , doted , listItemOne: "بادی پامپ" , listItemTwo: "بادی اتک" , listItemThree: "کار با دستگاه" , reserve : "رزرو آنلاین ندارد"},
  {img: fifteenSeen , title: 'باشگاه پاورجیم' , address: 'تهران-منطقه  ۲۲' , location , woman , man , doted , listItemOne: "فیتنس" , listItemTwo: "بدنسازی" , listItemThree: "یوگا" , reserve : "شروع قیمت از " , price : "۴۸۰,۰۰۰"},
  {img: sixteenSeen , title: 'باشگاه آلامتو' , address: 'تهران-منطقه  ۲۲' , location , woman , doted , listItemOne: "زومبا" , listItemTwo: "سی ایکس" , listItemThree: "بدنسازی" , reserve : "رزرو آنلاین ندارد"},
  {img: seventeenSeen , title: 'مدرسه فوتبال راد' , address: 'تهران-منطقه  ۵' , location , man , doted , listItemOne: "فوتبال", reserve : "رزرو آنلاین ندارد"},
  {img: eighteenSeen , title: 'باشگاه افراز' , address: 'تهران-منطقه  ۴' , location , woman , doted , listItemOne: "ابروبیک" , listItemTwo: "تی آر ایکس" , listItemThree: "بدنسازی" , reserve : "رزرو آنلاین ندارد"},
  {img: nineteenSeen , title: 'مرکز تندرستی کودک جیم جیم' , address: 'تهران-منطقه  ۶' , location , woman , man , doted , listItemOne: "باله" , reserve : "رزرو آنلاین ندارد"},
  {img: twentySeen , title: 'باشگاه پرواز آسمان طلایی' , address: 'تهران-منطقه  ۱' , location , woman , man , doted , listItemOne: "پاراگلایدینگ {paragliding}" , reserve : "شروع قیمت از " , price : "۸۸۰,۰۰۰ تومان"},
]

const PoolClubItems = [
  {img: onePool , title: 'استخر برنا' , address: 'کرج' , location , woman, man , doted , listItemOne: "شنا" , reserve : "رزرو آنلاین ندارد"},
  {img: onePool , title: 'استخر آرامش' , address: 'اراک' , location , woman, man , doted , listItemOne: "شنا" , reserve : "رزرو آنلاین ندارد"},
  {img: onePool , title: 'استخر و پارک آبی آبسار' , address: 'رشت' , location , woman, man , doted , listItemOne: "شنا" , reserve : "رزرو آنلاین ندارد"},
  {img: onePool , title: 'استخر آرمان' , address: 'کرج' , location , woman, man , doted , listItemOne: "شنا" , reserve : "رزرو آنلاین ندارد"},
  {img: onePool , title: 'استخر اندیشه' , address: 'خرم اباد' , location , woman, man , doted , listItemOne: "شنا" , reserve : "رزرو آنلاین ندارد"},
  {img: onePool , title: 'استخر حافظ' , address: 'اصفهان' , location , woman, man , doted , listItemOne: "شنا" , reserve : "رزرو آنلاین ندارد"},
  {img: onePool , title: 'استخر چهار فصل' , address: 'کامیاران' , location , man , doted , listItemOne: "شنا" , reserve : "رزرو آنلاین ندارد"},
  {img: onePool , title: 'استخر چهار فصل بلوط' , address: 'رشت' , location , man , doted , listItemOne: "شنا" , reserve : "رزرو آنلاین ندارد"},
  {img: onePool , title: 'استخر بهار' , address: 'کرج' , location , woman , doted , listItemOne: "شنا" , reserve : "رزرو آنلاین ندارد"},
  {img: onePool , title: 'استخر آلومینیوم سازی' , address: 'اصفهان' , location , woman, man , doted , listItemOne: "شنا" , reserve : "رزرو آنلاین ندارد"},
  {img: onePool , title: 'استخر بانوان شرکت نفت' , address: 'همدان' , location , woman, man , doted , listItemOne: "شنا" , reserve : "رزرو آنلاین ندارد"},
  {img: onePool , title: 'استخر هتل ملل' , address: 'تهران - منطقه ۳' , location , woman, man , doted , listItemOne: "شنا" , reserve : "رزرو آنلاین ندارد"},
  {img: onePool , title: 'استخر هومن' , address: 'اصفهان' , location , woman, man , doted , listItemOne: "شنا" , reserve : "رزرو آنلاین ندارد"},
  {img: onePool , title: 'استخر جاویدنام' , address: 'مشهد' , location , woman, man , doted , listItemOne: "شنا" , listItemTwo: "فوتسال" , reserve : "رزرو آنلاین ندارد"},
  {img: onePool , title: 'استخر خلیج فارس' , address: 'تهران - منطقه ۳' , location , woman, man , doted , listItemOne: "شنا" , reserve : "رزرو آنلاین ندارد"},
  {img: onePool , title: 'استخر کاسپین' , address: 'مشهد' , location , woman, man , doted , listItemOne: "شنا" , listItemTwo: "فوتسال" , reserve : "رزرو آنلاین ندارد"},
  {img: onePool , title: 'استخر معلم' , address: 'تهران - منطقه ۳' , location , woman, man , doted , listItemOne: "شنا" , reserve : "رزرو آنلاین ندارد"},
]

const FootballClubItems = [
  {img: onePool , title: 'باشگاه ستاره ساز' , address: 'تهران - منطقه ۱۰' , location , man , doted , listItemOne: "فوتبال" , listItemTwo: "فوتسال" , reserve : "رزرو آنلاین ندارد"},
  {img: onePool , title: 'باشگاه فوتبال اسپایر' , address: 'تهران - منطقه ۱' , location , man , doted , listItemOne: "فوتبال" , reserve : "رزرو آنلاین ندارد"},
  {img: onePool , title: 'زیمن چمن ایرانشهر' , address: 'کرج' , location , man , woman , doted , listItemOne: "فوتبال" , listItemTwo: "فوتسال" , reserve : "رزرو آنلاین ندارد"},
  {img: onePool , title: 'زمین چمن منتخب ستارگان' , address: 'تهران - منطقه ۱۰' , location , man , doted , listItemOne: "فوتبال" , listItemTwo: "فوتسال" , reserve : "رزرو آنلاین ندارد"},
  {img: onePool , title: 'زیمن چمن اقاقیا' , address: 'تهران - منطقه ۱۴' , location , man , woman , doted , listItemOne: "فوتبال" , listItemTwo: "فوتسال" , reserve : "رزرو آنلاین ندارد"},
  {img: onePool , title: 'زمین ورزشی فوتبال' , address: 'رشت' , location , man , doted , listItemOne: "فوتبال" , reserve : "رزرو آنلاین ندارد"},
  {img: onePool , title: 'زمین فوتبال شهرک آزمایش' , address: 'اصفهان' , location , man , woman , doted , listItemOne: "فوتبال" , listItemTwo: "فوتسال" , reserve : "رزرو آنلاین ندارد"},
  {img: onePool , title: 'آکادمی مقاوت غرب' , address: 'تهران - منطقه ۲' , location , man , woman , doted , listItemOne: "فوتبال" , listItemTwo: "فوتسال" , reserve : "رزرو آنلاین ندارد"},
  {img: onePool , title: 'باشگاه ورزشی مهارت' , address: 'تهران - منطقه ۱۰' , location , man , woman , doted , listItemOne: "فوتبال" , listItemTwo: "فوتسال" , reserve : "رزرو آنلاین ندارد"},
  {img: onePool , title: 'مجموعه ورزشی ثامن' , address: 'مشهد' , location , man , doted , listItemOne: "فوتبال" , listItemTwo: "فوتسال" , reserve : "رزرو آنلاین ندارد"},
  {img: onePool , title: 'سالن چند منظوره گلبانگ' , address: 'تهران - منطقه ۵' , location , man , woman , doted , listItemOne: "فوتبال" , listItemTwo: "فوتسال" , reserve : "رزرو آنلاین ندارد"},
  {img: onePool , title: 'شهید لشگری' , address: 'تهران - منطقه ۱' , location , man , woman , doted , listItemOne: "فوتبال" , listItemTwo: "فوتسال" , reserve : "رزرو آنلاین ندارد"},
  {img: onePool , title: 'مدرسه فوتبال راد' , address: 'تهران - منطقه ۱۷' , location , man , doted , listItemOne: "فوتبال" , listItemTwo: "فوتسال" , reserve : "رزرو آنلاین ندارد"},
  {img: onePool , title: 'باشگاه شهید چمران' , address: 'تهران - منطقه ۹' , location , man , doted , listItemOne: "فوتبال" , listItemTwo: "فوتسال" , reserve : "رزرو آنلاین ندارد"},
  {img: onePool , title: 'باشگاه ورزشی پژواک' , address: 'کرج' , location , man , doted , listItemOne: "فوتبال" , listItemTwo: "فوتسال" , reserve : "رزرو آنلاین ندارد"},
  {img: onePool , title: 'مجموعه ورزشی کوهستان' , address: 'کرج' , location , man , woman , doted , listItemOne: "فوتبال" , listItemTwo: "فوتسال" , reserve : "رزرو آنلاین ندارد"},
]


const comelist = useSelector((state) => state);


return (
  <>
      <div className="homeandlist">
        {/* ================ side bar ================= */}
        <section className="lists" id="lists">
          <SideMenu />
        </section>
        {comelist &&
          <section className={comelist ? null : "golist"} id="liststwo">
            <SideMenu />
          </section>}
        {comelist ? <Shadow /> : null}
        {/* ================ side bar ================= */}

        <div className="homecontainer">
          <SlideShow />
          <ClubSliderSection clubItems={clubItems} />
          <Seen SeenClubItems={SeenClubItems} />
          <Pool PoolClubItems={PoolClubItems} />
          <Getapp />
          <Football FootballClubItems={FootballClubItems} />
        </div>
      </div>
    </>
  );
};

export default Home;
