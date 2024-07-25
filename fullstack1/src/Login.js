import { useEffect, useRef, useState } from "react";

function Login(){
    const firstRef = useRef(null);
    const secondRef = useRef(null);
    const [loginMessage,setMessage] = useState('');//to print in UI
    useEffect(()=>{
        firstRef.current.focus();
    })
    const formSubmitted = (event)=>{
        event.preventDefault();
        console.log("Form submitted");
        console.log(firstRef.current.value);
        console.log(secondRef.current.value);
        if(firstRef.current.value==secondRef.current.value){
            console.log("Login success");
            setMessage("Login success");
        } else{
            console.log("Login failed"); 
            setMessage("Login failed");
        }
        firstRef.current.value="";
        secondRef.current.value="";
        
    }
    return(
        <div className="container" style={{display:"flex",alignItems:"center",justifyContent:"center",height:"100vh"}}>
            <div className="card" style={{width:"17rem",display:"flex",alignItems:"center",justifyContent:"center"}}>
                <form onSubmit={formSubmitted}>
                    <h2 style={{margin:'20px'}}>Login</h2>
                    <p style={{margin:'20px'}}>Provide details to login</p>
                    <p style={{margin:'20px'}}>College Id</p>
                    <input type="text" placeholder="Enter your college id" style={{width:"200px",marginLeft:"20px"}} ref={firstRef}/>
                    <p style={{margin:"20px"}}>Password</p>
                    <input type="password"placeholder="Enter password" style={{margin:"17px"}} ref={secondRef}/>
                    <button type="submit" className="btn btn-dark" style={{margin:"30px"}}>Login</button>
                    <p>{loginMessage}</p>
                </form>
            </div>
        </div>
    )
}
export default Login;