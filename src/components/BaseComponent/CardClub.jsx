import { Link } from "react-router-dom";

import style from "../../component style/CardClub.css"

const CardClub = ({ title, address, img, woman, man, location, doted, listItemOne, listItemTwo, listItemThree, reserve, price }) => {
    return (
        <div className={style.child}>
            <a href="">
                <Link to="/club">

                    <img className={style.imgslid} src={img} alt="" />
                    <div className={style.middle}>
                        <p>{title}</p>
                        <div className={style.locationgyminfo}>
                            <span className={style.locationgym}>
                                <img src={location} alt="" />{address}
                            </span>
                            <span className={style.persons}>
                                {woman ? <img src={woman} alt="" /> : undefined}
                                {man ? <img src={man} alt="" /> : undefined}
                            </span>
                        </div>
                        <ul>
                            {listItemOne ?
                                <li>
                                    <img src={doted} alt="" />
                                    {listItemOne}
                                </li> : undefined
                            }
                            {listItemTwo ?
                                <li>
                                    <img src={doted} alt="" />
                                    {listItemTwo}
                                </li> : undefined
                            }
                            {listItemThree ?
                                <li>
                                    <img src={doted} alt="" />
                                    {listItemThree}
                                </li> : undefined
                            }
                        </ul>
                    </div>
                    <p className={style.reserved}>{reserve} <strong>{price ? price : ""}</strong></p>
                </Link>
            </a>
        </div>
    );
}

export default CardClub;