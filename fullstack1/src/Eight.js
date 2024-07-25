import React from "react";
class Eight extends React.Component{
    name="ReactJs";
    count=0;
    constructor(){
        super();
        this.state={
            number:1
        };
        console.log("Constructor is called");
    }
    componentDidMount(){
        console.log("Mounted");
        console.log(this.count);
        console.log(this.count+1);
        console.log(this.state.number+1);
    }
    componentDidUpdate(){
        console.log("Incremented");
    }
    componentWillUnmount(){
        console.log("unMounted");
    }
    funcEightBtnClick = () => {
        console.log("HI BUTTON CLICKED ");
        console.log(this.count+1);
        // console.log(this.state.number+1);
        this.setState({number:this.state.number+1});
        //window.location.href = "https://www.youtube.com";
    }

    render(){
        return(
            <div>
    <h1>This is a class component{this.name} {this.count} {this.state.number}</h1>
    <button class="btn btn-primary" onClick={this.funcEightBtnClick}>Click here</button>
    </div>
        );
    }
}

export default Eight;
 