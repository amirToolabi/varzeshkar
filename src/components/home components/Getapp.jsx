import React from 'react'

import style from "../../component style/GetApp.module.css"


import fav from '../../images/favicon.d9ff36a.png'
import bazar from "../../images/bazaar.png"
import apple from "../../images/apple.png"

const Getapp = () => {
    return (
        <>
            <div className={style.getapp}>
                <h3><img src={fav} alt="" />دانلود اپلیکیشن ورزشکار </h3>
                <div>
                    <a href="">دریافت از<img className={style.bazzar} src={bazar} alt="" /></a>
                    <a href=""><img className={style.apple} src={apple} alt="" />نسخه وب اپلیکیشن</a>
                </div>
            </div>
        </>
    );
}

export default Getapp;