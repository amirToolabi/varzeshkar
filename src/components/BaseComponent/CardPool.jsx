

const CardPool = ({ title, address, img, woman, man, location, doted, listItemOne, listItemTwo, reserve }) => {
    return (
        <>
            <div className="child">
                <a href="">
                    <img className="imgslid" src={img} alt="" />
                    <div className="middle">
                        <p>{title}</p>
                        <div className="locationgyminfo">
                            <span className="locationgym">
                                <img src={location} alt="" />{address}
                            </span>
                            <span>
                                <a href="#">
                                    {woman ? <img src={woman} alt="" /> : undefined}
                                    {man ? <img src={man} alt="" /> : undefined}

                                </a>
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
                        </ul>
                    </div>
                    <p className="reserved">{reserve}</p>
                </a>
            </div>
        </>
    );
}

export default CardPool;