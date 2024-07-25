function Card(props){
    const width=300;
    
    return(
        <div>
        <div className="card" style={{width: '18rem'}}>
           
            <img src="/a.jpg" width={100}
            style={{border:'10px solid #FF0000',borderRadius:'80px'}}></img>
           
            <div className="card-body">
            <h1>{props.program}</h1>
            <h1>{props.clg}</h1>  
            <h1>{props.user.name}</h1>  
            <h1>{props.user.branch}</h1>
            <h1>{props.user.year}</h1>  
            <button type="button" class="btn btn-primary">Primary</button>     
        </div>
        </div>
        </div>

    );
}
export default Card;


{/* >
  <img src="..." class="card-img-top" alt="...">

    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div> */}