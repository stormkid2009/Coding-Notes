//Title : " using if condition to render element or not "



export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      value:true
    }
    this.handler=this.handler.bind(this);
  }
  handler(){
    this.setState((state)=>({
      value:!state.value
    }))
  }
  render(){
      //use if condition to render certain elements.
    if(this.state.value==true){
return (
  <div>
  <button onClick={this.handler}>hide logo</button>
  <h1>Future Style</h1>
  </div>
);
    }else{
return(
  <div>
  <button onClick={this.handler}>display logo</button>
  
  </div>
);
    }
  }
}






/*there's a more concise way to achieve the same result:
{condition && <p>markup</p>}*/


export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      value:true
    }
    this.handler=this.handler.bind(this);
  }
  handler(){
    this.setState((state)=>({
      value:!state.value
    }))
  }
  render(){
    
    
    return (
  <div>
  <button onClick={this.handler}>hide logo</button>
  {this.state.value==true && <h1>Future Style</h1>}
  </div>
);
  }
}
