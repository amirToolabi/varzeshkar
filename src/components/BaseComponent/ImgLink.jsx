
import "../../component style/ImgLink.css"


import club from "../../images/papular/clubLink.png"
import coach from "../../images/papular/coachLink.png"

const ImgLink = () => {
    return ( 
        <>
            <div className="imglink">
                <a href=""> <img src={coach} /> </a>
                <a href=""> <img src={club} /> </a>
            </div>
        </>
     );
}
 
export default ImgLink;