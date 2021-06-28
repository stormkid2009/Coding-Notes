/*
Title: " simple todo list "
store tasks as an array within our state
map over the tasks using .map function

*/




export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      userInput:'',
      toDoList:[]
    }
    this.handleChange=this.handleChange.bind(this);
    this.handleSubmit=this.handleSubmit.bind(this);
  }
  handleChange(e){
    this.setState({
      userInput:e.target.value
    })
  }
  handleSubmit(){
    const itemsArr=this.state.userInput.split(',');
this.setState({toDoList:itemsArr});
  }
  render(){
   const tasks=this.state.toDoList.map(task=>{return(
     <div>
     <p>{task}</p><button>X</button>
     </div>
   );}) ;
    
    return (
  <div>
  <textarea
  id="input"
  onChange={this.handleChange}
  placeholder="type tasks with sperate comma"
  style={{width:235,margin:5}}
  value={this.state.userInput}
  />
  <button onClick={this.handleSubmit}>SUBMIT</button>
  <h1>Your Have {this.state.toDoList.length} tasks to do</h1>
  <div>{tasks}</div>
  
  </div>
);
  }
}



//ANOTHER WAY USING REACT HOOKS



function App(){
  const [state,setState]=useState([]);
  const [userInput,setUserInput]=useState('');
  function handleChange(e){
    const input=e.target.value;
    setUserInput(input);
  }
  function submit(){
    setState(userInput.split(','));
  }
const tasks=state.map(task=><li key={task+22}>{task}</li>);
  return(
    <div>
    <div>
    <textarea
    placeholder="write down with sperate comma"
    id="input"
    onChange={handleChange}
     />
    </div>
    <div>
     <button onClick={submit}>submit</button>
    </div>
   <div>
   <ul>{tasks}</ul>
   </div>
    
    </div>
  );
}
export default App

