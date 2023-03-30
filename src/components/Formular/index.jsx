import { useState } from 'react';

export default function Formular(){
    const [user, setUser] = useState({
        name: "test name",
        email: "test email"
    });

    const onChange = (e) => {
        setUser({...user, [e.target.name]: e.target.value})
    }
    
    return (
        <>
            <h2>{user.name}</h2>
            <h2>{user.email}</h2>
            <form className="contact">
                <h1>This is Contact</h1>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label">Name</label>
                    <input 
                    onChange={onChange}
                    name="name"
                    type="text" 
                    className="form-control" id="exampleFormControlInput1"
                    placeholder="John Doe" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlTextarea1" className="form-label">Email address</label>
                    <input 
                    onChange={onChange}
                    name="email"
                    type="email" 
                    className="form-control" id="exampleFormControlTextarea1"
                    placeholder="name@example.com"></input>
                </div>
            
                <button>Submit</button>
            </form>
            
        </>
    )
}