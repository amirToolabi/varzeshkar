
import { useState } from "react"
import { toast } from "react-toastify"
import { registerUser } from "./services/userServices"
import 'react-toastify/dist/ReactToastify.css';
import "./styling.css"


const Form = () => {

    const [fullname, setFullname] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [valid, setvalid] = useState(false)

    const reset = () => {
        setEmail("")
        setPassword("")
        setFullname("")
    }

    const handleGetInfo = async (e) => {
        e.preventDefault()
        const userInfo = {
            fullname,
            email,
            password
        }

        try {
                const { status } = await registerUser(userInfo)
                if (status == 201) {
                    toast.success("کاربر با موفقیت ساخته شد .", { position: "top-right", closeButton: true })
                }
                reset()
            
                console.log(userInfo);
        }
        catch (ex) {
            toast.error("مشکلی رخ داده .", { position: "top-right", closeButton: true })
            console.log(ex)
        }
    }


    return (
        <>
            <div className="content">
                <form onSubmit={handleGetInfo}>
                    <h3>Sign up</h3>
                    <div className="formchild">
                        <input type="text" name="text" value={fullname} autocomplete="off" required onChange={(e) => setFullname(e.target.value)} />
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
                    <br />
                    {valid ? <span className="valid">Password must be more than 8 characters</span> : null}
                    <button className="btn">Completed</button>
                </form>
            </div>
        </>
    );
}

export default Form;