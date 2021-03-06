/*
  Title : " using condition via props "
  this is so powerful check the example below.

*/


function Display(props) {
  return (
    <div>
      <h1>{props.show?"Well Done":"False"}</h1>
      
    </div>
  );
}

export default class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      counter:1
    }
    this.handler=this.handler.bind(this);
  }
  handler(){
    this.setState({counter:this.state.counter+1});
  }
  render(){
    const club=Math.random()>=0.5?true:false;
    return(
      <div>
      <button onClick={this.handler}>Play Again</button>
      <Display show={club} />
      <p> <strong>Turn</strong>  {this.state.counter}</p>
      </div>
    );
  }
  
}

