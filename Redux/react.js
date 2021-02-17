//React code with  simple state which we gonna chain with redux

class DisplayMessages extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        input: '',
        messages: []
      }
    }
    
    handleChange(e){
      this.setState({
        input:e.target.value,
        messages:this.state.messages
        })
    }
    submitMessage(e){
        e.preventDefault();
        this.setState({
          input:'',
          messages:[...this.state.messages,this.state.input]
        });
        
    }
  
    render() {
      return (
        <div>
          <h2>Type in a new Message:{this.state.input}</h2>
         
  <input onChange={this.handleChange.bind(this)}
  value={this.state.input}/>
  <button onClick={this.submitMessage.bind(this)}>submit</button>
  <ul>
  {this.state.messages.map((x,i)=>{
    return<li key={i}>{x}</li>}
  )}
  </ul>
        </div>
      );
    }
  };