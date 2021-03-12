/*Titel : " pass state as props "
we can say to support one direction flow from top to bottom
passing state to element as props.*/



export default class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
      name:"Anwar"
    }
  }
  render(){
    return(
      <Item name={this.state.name}/>
    );
  }
}
class Item extends React.Component{
  constructor(){
    super();
  }
  render(){
    return(
    <div>
      <h1>hello,My name is : {this.props.name}</h1>
    </div>
  );
  }
  
}
