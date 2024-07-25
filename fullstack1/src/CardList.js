import Card from "./Card";

function CardList(){
  
    const name="ReactJS";
    const college="SVECW"
    const userObject={name:"Name1",branch:"branchName",year:"3"};
    const users=["Name 1","Name 2","Name 3","Name 4"]
    return(
        <div style={{display:'flex',flexwrap:"wrap"}}>
        {
            users.map(
                (users,index)=>(<Card Key ={index} 
                program={name}
                col={college}
                user={userObject}
                userFromArray={users}/>)
            )
        }
        
        </div>
    );

}
export default CardList;