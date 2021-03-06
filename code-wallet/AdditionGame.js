/* Title : " Game for addition solving "
>>>under progress:
features to add:
make it multiplication table
render interface to announce victoiry if score reaches some number and add back to Game
render interface to announce loose and back to game
activate the Reset button */


import React from "react";
import "./style.css";

export default class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
      num1:1,
      num2:1,
      score:0,
      response:'',
      incorrect:false
    }
    this.handleChange=this.handleChange.bind(this);
    this.handleScore=this.handleScore.bind(this);
    
  }
  handleChange(e){
    this.setState({response:e.target.value});
    
  }
  handleScore(e){
    if(e.key==='Enter'){
        const answer=parseInt(this.state.response);
        if(answer===this.state.num1 + this.state.num2 ){
          this.setState(state=>(
        {
          score:state.score+1,
          num1:Math.ceil(Math.random()*10),
          num2:Math.ceil(Math.random()*10),
          response:'',
          incorrect:false
        }
      ))
    }else{
      this.setState(state=>({
        response:'',
        incorrect:true
      }))
    }
    }
  }
  
  render(){
    
    return(
      <div>
        <h1 className={
          this.state.incorrect?"danger":""
        }
        >{this.state.num1} + {this.state.num2}</h1>
        <input value={this.state.response}
        placeholder="enter correct answer"
        onChange={this.handleChange}
        onKeyPress={this.handleScore}
        />
        
        <h2>Your Score is : {this.state.score} </h2>
        <div>
        <button onClick={this.handleScore}
        >Reset</button>
       </div>
      </div>
    );

  }
  
  
}

