
/*the example below use the method didmount to call API from server
to change the user name:*/


 class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      userName:"sherif"
    }
  }
  componentDidMount(){
    setTimeout(()=>{
      this.setState({userName:"Anwar"});
    },2500)
  }
  render(){
    return (
    <div>
      <h1>Hello {this.state.userName}!</h1>

    </div>
  );
  }
  
}

//dont forget to export ur component
