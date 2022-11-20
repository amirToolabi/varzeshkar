
import user from "../../images/infoClub/user.png"


const MessageSlide = () => {
    return ( 
        <>
            <div className="message">
                <nav>
                    <ul>
                        <li>لیست نظرات</li>
                        <li>ساعت های کاری</li>
                        <li>تجهیزات</li>
                    </ul>
                </nav>
                <div className="firstmessage">
                    <p>اولین نفری باشید که برای این باشگاه نظر ثبت می کنید</p>
                    <a href="">جهت ثبت نظر ابتدا وارد شوید &nbsp;<img src={user} alt="" /></a>
                </div>
            </div>
        </>
     );
}
 
export default MessageSlide;