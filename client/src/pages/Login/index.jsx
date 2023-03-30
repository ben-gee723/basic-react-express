export default function Login (){
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