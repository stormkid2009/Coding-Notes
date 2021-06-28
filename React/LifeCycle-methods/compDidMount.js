
/*the examples below use the method componentDidMount for class 
and useEffect with empty array to trigger it one time when the component
did mount */


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

//let's check the equivalent from react hooks
import {useState , useEffect} from 'react'
const App=()=>{
 const[userName,setUserName]= useState('');
 useEffect(() => {
  setTimeout(()=>{
    setUserName("Anwar");
  },2500)
   
 }, [])
}
