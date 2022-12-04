import { Link } from "react-router-dom";

const CardClub = ({ title, address, img, woman, man, location, doted, listItemOne, listItemTwo, listItemThree, reserve, price }) => {
    return (
        <div className="child">
            <a href="">
                <Link to="/club">

                    <img className="imgslid" src={img} alt="" />
                    <div className="middle">
                        <p>{title}</p>
                        <div className="locationgyminfo">
                            <span className="locationgym">
                                <img src={location} alt="" />{address}
                            </span>
                            <span className="persons">
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
                    <p className="reserved">{reserve} <strong>{price ? price : ""}</strong></p>
                </Link>
            </a>
        </div>
    );
}

export default CardClub;