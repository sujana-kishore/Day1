import { useState } from "react";

function Register(){
    const [collegeId, setCollegeId] = useState("");
    const [email, setEmail] = useState("");
    const [branch, setBranch] = useState("");
    const [year, setYear] = useState("");
    const [gender, setGender] = useState("");
    const [password, setPassword] = useState("");

    const formSubmitted = (event)=>{
        event.preventDefault();
        console.log("Form submitted");
        const formData = { collegeId, email, branch, year, gender, password };
        console.log(formData);
    }
    //const getCollegeId=(event)=>{
        //setCollegeId(event.target.value);
        //console.log(collegeId);
   // }
    return(
        <div className="container" style={{display:"flex",alignItems:"center",justifyContent:"center",height:"100vh"}}>

            <div className="card" style={{width:"30rem",display:"flex",alignItems:"center",justifyContent:"center"}}>

                <form onSubmit={formSubmitted}>

                    <h2 style={{margin:'20px'}}>Register</h2>

                    <p style={{margin:'20px'}}>Provide details to Register</p>

                    <p style={{margin:'20px'}}>College Id</p>

                    <input type="text" placeholder="Enter your college id" style={{width:"400px",marginLeft:"20px"}} onChange={(e)=>setCollegeId(e.target.value)}/>

                    <p style={{margin:'20px'}}>Email Address</p>

                    <input type="email" placeholder="Enter your email" style={{width:"400px",marginLeft:"20px"}} onChange={(e)=>setEmail(e.target.value)}/>

                    <p style={{margin:'20px'}}>Branch</p>

                    <select name="branch" style={{ width: "400px", marginLeft: "20px" }} onChange={(e)=>setBranch(e.target.value)}>
                        <option value="">Select Branch</option>
                        <option value="Computer Science">Computer Science</option>
                        <option value="Mechanical Engineering">Mechanical Engineering</option>
                        <option value="Electrical Engineering">Electrical Engineering</option>
                        <option value="Civil Engineering">Civil Engineering</option>
                        <option value="Chemical Engineering">Chemical Engineering</option>
                    </select>

                    <p style={{ margin: '20px' }}>Year</p>

                    <select name="year" onChange={(e)=>setYear(e.target.value)} style={{ width: "400px", marginLeft: "20px" }}>
                        <option value="">Select Year</option>
                        <option value="1st Year">1st Year</option>
                        <option value="2nd Year">2nd Year</option>
                        <option value="3rd Year">3rd Year</option>
                        <option value="4th Year">4th Year</option>
                    </select>

                    <p style={{ margin: '20px' }}>Gender</p>

                    <div style={{ marginLeft: "20px" }}>

                        <input type="radio" id="male" name="gender" value="Male"  onChange={(e)=>setGender(e.target.value)}/>

                        <label>Male </label>

                        <input type="radio" id="female" name="gender" value="Female" onChange={(e)=>setGender(e.target.value)}/>

                        <label htmlFor="female">Female</label>

                    </div>

                    <p style={{ margin: "20px",marginBottom:"10px" }}>Password</p>

                    <input type="password" placeholder="Enter password" name="password" onChange={(e)=>setPassword(e.target.value)} style={{ marginTop: "5px" ,width:"400px",marginLeft:'20px'}}/>

                    <button type="submit" className="btn btn-dark" style={{margin:"30px",flexDirection:"column",display:"flex"}}>Register</button>

                </form>

            </div>

        </div>
    )
}
export default Register;



