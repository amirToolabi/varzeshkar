import React from 'react'


import fav from '../../images/favicon.d9ff36a.png'
import bazar from "../../images/bazaar.png"
import apple from "../../images/apple.png"

const Getapp = () => {
    return ( 
        <>
            <div className="getapp">
                <h3><img src={fav} alt="" />دانلود اپلیکیشن ورزشکار </h3>
                <div>
                    <a href="#">دریافت از <img src={bazar} /></a>
                    <a href="#"><img src={apple} /> نسخه وب اپلیکیشن</a>
                </div>
            </div>
        </>
     );
}
 
export default Getapp;