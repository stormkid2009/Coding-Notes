

export default class App extends React.Component {
  constructor(props){
    super();
    this.state={
      name:"sherif"
    }
    this.changeName=this.changeName.bind(this);
  }
  changeName(){
      this.setState(state=>{
        return {name:"Anwar"}
      })
    }
    
  
  
  
  render(){

    return (
    <div>
      <button onClick={this.changeName}>show user</button>
      <Title  name={this.state.name}/>
    </div>
  );
  }
}
class Title extends React.Component{
  constructor(props){
    super(props);
    
  }
  shouldComponentUpdate(nextProps,nextState){
    console.log("may I update Sir?!!")
    if(nextProps.name=="noob"){
    return false;
  }
    return true;
  };
  componentDidUpdate(){
    console.log("Done Sir!!!")
  }
  render(){
    return(
    <div>
    <h1>{this.props.name}</h1>
    </div>
  );
  }
}
