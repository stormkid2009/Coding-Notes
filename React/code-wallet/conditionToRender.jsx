//Title: " use condition to choose render components "



import React from "react";
import "./style.css";

export default class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
      ahly:false,
      zamalek:false
    }
    this.handleAhly=this.handleAhly.bind(this);
    this.handleZamalek=this.handleZamalek.bind(this);
  }
  handleAhly(){
    this.setState({ahly:true});
  }
  handleZamalek(){
    this.setState({zamalek:true});
  }
  render(){
    if(this.state.ahly===true){
      return this.ahlyRender();
    }else if(this.state.zamalek===true){
      return this.zamalekRender();
    }
    return(
      <div>
        <div>
          <button onClick={
            ()=>this.handleAhly()
          }>Ahly</button>
        </div>
        <div>
          <button onClick={
            ()=>this.handleZamalek()
          }>Zamalek</button>
        </div>
      </div>
    );

  }
  ahlyRender(){
    return(
      <h1>Ahly is the best fc team in africa</h1>
    );
  }
  zamalekRender(){
    return(
      <h1>Zamalek is the best fc team in africa</h1>
    );
  }
}
