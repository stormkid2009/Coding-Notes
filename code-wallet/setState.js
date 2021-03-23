// Title :"setState method and handle events"

import React from "react";
import "./style.css";

export default class App extends React.Component{
  constructor(){
    super();
    this.state={
      name:"Sherif",
      msg:"You have too much things todo Sir!!",
      mission:""
    }
   this.missionHandle=this.missionHandle.bind(this);
   this.missionDisplay=this.missionDisplay.bind(this);
  }
   missionHandle(event){
      this.setState({mission:event.target.value})
    }
    missionDisplay(){
      document.getElementById('display').innerHTML = this.state.mission;

    }
  render(){
    return(
      <div>
      <h1>hello,MR {this.state.name}</h1>
      <h2> {this.state.msg}</h2>
      <input onChange={this.missionHandle} placeholder="enter a mission" />
      <button onClick={this.missionDisplay} >submit</button>
      <h3 id="display"></h3>
      </div>
    );
  }
}

//this code below to be verified

import React from "react";
import "./style.css";
import List from './List'

class App extends React.Component{
   constructor(props){
     super(props);
     this.handler=this.handler.bind(this)
   }
   handler(){
    const container=document.getElementById('container');
    container.appendChild(<List />);
  }
  render(){
    return(
      <div id="container">
      <button onClick={handler()}>Add Element</button>
      </div>
    );
  }
}
export default App