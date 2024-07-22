function Array(){
    const branches = ["IT","CSE","EEE","ECE"];
    return(
<div>
<h1>List of Branches</h1>
      <ul>
        {branches.map((branch, index) => (
          <li key={index}>{branch}</li>
        ))}
      </ul>
</div>
    );

}
export default Array;
 