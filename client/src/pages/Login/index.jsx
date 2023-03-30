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
    const onSubmit = async (e) => {
        e.preventDefault()
        const res = await fetch("http://localhost:3001/user/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(form)
        })
        const data = await res.json()
        setUser(data)
    }

    return (
        <>
            <form className="contact" onSubmit={onSubmit}>
                <h1>Please Login!</h1>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input 
                    onChange={onChange}
                    name="email"
                    type="email" 
                    className="form-control" id="email"
                    placeholder="enter your email"></input>
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Name</label>
                    <input 
                    onChange={onChange}
                    name="password"
                    type="password" 
                    className="form-control" id="password"
                    placeholder="" />
                </div>
            
                <button>Submit</button>
            </form>
        </>
    )
}