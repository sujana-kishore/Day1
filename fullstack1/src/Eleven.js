import {useRef} from "react";
function Eleven(){
    const firstRef=useRef(null);
    const formsubmitted=(event)=>{
        event.preventDefault();
        console.log("form Submitted");
        console.log(firstRef.current.value);
        firstRef.current.value='';
    }
return(

    <div>
        <form onSubmit={(formsubmitted)}>
            <input type="text" ref={firstRef}/>
            <button type="submit">Submit</button>
        </form>
    </div>
);
}
export default Eleven;