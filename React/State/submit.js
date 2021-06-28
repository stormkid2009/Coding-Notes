/*Title:  "submit a form "

in the below code we will do two steps:
1-update the state with the content of input>>>>> change handler method.
2-display user input within h1 element>>>>submit handler method*/



class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      submit: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({
      input: event.target.value
    });
  }
  handleSubmit(event) {
    
    event.preventDefault();
    this.setState({submit:this.state.input});
    
    
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          
<input value={this.state.input} onChange={this.handleChange}></input>
          
          <button type='submit'>Submit!</button>
        </form>
        
<h1>{this.state.submit}</h1>
        
      </div>
    );
  }
}
