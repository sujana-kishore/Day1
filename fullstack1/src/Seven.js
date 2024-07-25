function Seven(){
    const names=["Riya","Neha","ZZZZ","CCCC"];
    return(
        <div>
            <ul>
                {
                    names.map((names,index)=>(<li key={index}>{names}</li>))
                }
            </ul>
        </div>
    );

}
export default Seven;