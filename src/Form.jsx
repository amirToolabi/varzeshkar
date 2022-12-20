
import { useState } from "react"
import { toast } from "react-toastify"
import { registerUser } from "./services/userServices"
import 'react-toastify/dist/ReactToastify.css';
import "./styling.css"


const Form = () => {

    const [userName, setUserName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const reset = () => {
        setEmail("")
        setPassword("")
        setUserName("")
    }

    const handleGetInfo = (e) => {
        e.preventDefault()
        const userInfo = {
            userName,
            email,
            password
        }

        registerUser(userInfo)
            .then(({ data, status }) => {
                console.log(data,status);
                if (status === 201)
                    toast.success("کاربر با موفقیت ساخته شد ." ,{position:"top-right" , closeButton:true})
                    reset()
                })
                .catch(ex => {
                    toast.error("مشکلی رخ داده ." ,{position:"top-right" , closeButton:true})
                console.log(ex)
            })

    }


    return (
        <>
            <div className="content">
                <form onSubmit={handleGetInfo}>
                    <h3>Sign up</h3>
                    <div className="formchild">
                        <input type="text" name="text" value={userName} autocomplete="off" required onChange={(e) => setUserName(e.target.value)} />
                        <label for="text" class="label-name">
                            <span class="content-name">
                                Set your UserName
                            </span>
                        </label>
                    </div>
                    <div className="formchild">
                        <input type="email" name="email" value={email} autocomplete="off" required onChange={(e) => setEmail(e.target.value)} />
                        <label for="email" class="label-name">
                            <span class="content-name">
                                Your Email ...
                            </span>
                        </label>
                    </div>
                    <div className="formchild">
                        <input type="password" name="pass" value={password} autocomplete="off" required onChange={(e) => setPassword(e.target.value)} />
                        <label for="pass" class="label-name">
                            <span class="content-name">
                                Enter Your Password
                            </span>
                        </label>
                    </div>
                    <button className="btn">Completed</button>
                </form>
            </div>
        </>
    );
}

export default Form;