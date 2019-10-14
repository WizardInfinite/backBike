import React from 'react';
import DemoChild from './DemoChild'
import './demo.less'
export default class Demo extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            counter:0
        }
    }
    handleClick = ()=>{
        this.setState({
            counter:this.state.counter+1
        })
    }
    render() {
        return (
             <div className="content">
                 <button onClick={this.handleClick}>点击</button>
                 {this.state.counter}
                 <DemoChild name={this.state.counter}></DemoChild>
             </div>
        );
    }
}