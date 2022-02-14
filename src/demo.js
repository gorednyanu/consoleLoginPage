import React, { Component } from "react";

class Demo extends Component {
    constructor(props){
        super(props);
        this.state = {
            count : 0,
        };
    }

    componentDidMount(){
        document.title = ` You Clicked ${this.state.count} times`;
    }
    componentDidUpdate(){
        document.title = ` You Clicked ${this.state.count} times`;
    }

    render(){
        return(
            <div>
                <p> You Clicked {this.state.count} Times </p>
                <button onClick={()=> this.setState({count: this.state.count+1})}>Click me</button>
            </div>
        )
    }
}
export default Demo;