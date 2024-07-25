// import React, { useState, useEffect } from "react";

// function Nine() {
//     //const count=0;
//     const [count, setCount] = useState(1);

//     useEffect(() => {
//         // setCount(6);
//         console.log("Use effect is called");
//     }, []);

//     const increaseCount = () => {
//         setCount(count + 1);
//     };

//     const decreaseCount = () => {
//         setCount(count - 1);
//     };
//     // const btnUpdateCount =()=>{
//     //   setCount(count+1);
//     // }
//     const btnAddToCart = () =>{
//         setCount(1);
//     }

// return (
//     <div>(count==0)? <button className="btn btn-outline-dark btn-sm " onClick={btnAddToCart}>
//     Add to Cart
// </button> :
//     <div style={{ display: "flex",flexDirection: "column",alignItems: "center",justifyContent: "center",minHeight: "100vh" }}>
//         <div style={{  display: "flex", alignItems: "center" }}>
//             <button className="btn btn-outline-dark btn-lg mr-2" onClick={decreaseCount}>
//                 -
//             </button>
//             <h1>{count}</h1>
//             <button className="btn btn-outline-dark btn-lg ml-2" onClick={increaseCount}>
//                 +
//             </button>
//         </div>
//     </div>
//     </div>
// );
// }
// export default Nine;
import { useEffect,useState } from "react";
function Nine(){
    
    const [count,setCount]=useState(1);
    useEffect(()=>{
        console.log("Use effect is called");
    },[count]);
    const  UpdateCount=()=>{
        setCount(count+1);
    }
    const DecreCount=()=>{
        if(count >0)
        setCount(count-1);
    }
    const AddCart=()=>{
        setCount(1);
    }


    return(
        <div>
        {(count==0)?
        <button type="button" className="btn btn-sucess" onClick={AddCart}></button>
       
        :
        <div style={{display:'flex'}}>
        <button className="btn btn-outline-dark" onClick={DecreCount} >-</button>
        <h1 style={{padding:'5px'}}>{count}</h1>
        <button className="btn btn-outline-dark" onClick={UpdateCount}>+</button>
        
        </div>
}
        </div>
    );
}
export default Nine;
