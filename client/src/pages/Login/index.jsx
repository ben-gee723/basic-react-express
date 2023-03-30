import { useState } from "react";
import store from "../../store/Context";

export default function Login (){
    // VARIABLEN
    const { setUser } = store();
    const [form, setForm ] = useState({
        email: "",
        password: "",
        isLogin: null
    })

    // onChange: Set Login Form
    const onChange = (e) => {
        setForm({...form, [e.target.name]: e.target.value})
    };

    // onSubmit: Login Form zum Server schicken
    const onSubmit = () => {
    }

    return (
        <>
            <form className="contact">
                <h1>Please Login!</h1>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlTextarea1" className="form-label">Email address</label>
                    <input 
                    onChange={onChange}
                    name="email"
                    type="email" 
                    className="form-control" id="exampleFormControlTextarea1"
                    placeholder="enter your email"></input>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label">Name</label>
                    <input 
                    onChange={onChange}
                    name="password"
                    type="password" 
                    className="form-control" id="exampleFormControlInput1"
                    placeholder="" />
                </div>
            
                <button>Submit</button>
            </form>
        </>
    )
}