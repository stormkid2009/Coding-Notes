//Title "manage state with setState method"

/*as we can see in the title React method setState
    give us the control of component's state 
    let's check this in the example below:*/



export default class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      name:"Anwar"
    }
    this.handleName = this.handleName.bind(this);
  }
  handleName(){
    this.setState({name:"Sherif"});
  }
  render(){
    return(
      <div>
      <button onClick={this.handleName}>Click me</button>
      <h1>my name is : {this.state.name}</h1>
      
      </div>
    );
  }
}