//this will go with the old way with connect api
//to figure out the steps of process

// Redux:
const ADD = 'ADD';
//define our action creator:
const addMessage = (message) => {
  return {
    type: ADD,
    payload: message
  }
};
//define our reducer:
const messageReducer = (state = [], action) => {
  switch (action.type) {
    case ADD:
      return [
        ...state,
        action.payload
      ];
    default:
      return state;
  }
};
//Creating our store with redux method createStore:
const store = Redux.createStore(messageReducer);

// React component which we will connect with redux store:
class Presentational extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '' //removing messages state from local
      //Redux will the take its mangement
    }
    this.handleChange = this.handleChange.bind(this);
    this.submitMessage = this.submitMessage.bind(this);
  }
  handleChange(event) {
    this.setState({
      input: event.target.value
    });
  }
  submitMessage() {
      //we lift handling control to Redux
    /*this.setState((state) => {
      const currentMessage = state.input;
      return {
        input: '',
        messages: state.messages.concat(currentMessage)
      };
    });*/
    //we pass control to redux submitNewMessage
    this.props.submitNewMessage(this.state.input);
    //we still control input state locally
    this.setState({input:""})
  }
  render() {
    return (
      <div>
        <h2>Type in a new Message:</h2>
        <input
          value={this.state.input}
          onChange={this.handleChange}/><br/>
        <button onClick={this.submitMessage}>Submit</button>
        <ul>
            
          {this.props.messages.map( (message, idx) => {
              return (
                 <li key={idx}>{message}</li>
              )
            })
          }
        </ul>
      </div>
    );
  }
};

// React-Redux:
const mapStateToProps = (state) => {
  return { messages: state }
};

const mapDispatchToProps = (dispatch) => {
  return {
    submitNewMessage: (newMessage) => {
       dispatch(addMessage(newMessage))
    }
  }
};

const Provider = ReactRedux.Provider;
const connect = ReactRedux.connect;

// Define the Container component here:
const Container = connect(mapStateToProps,mapDispatchToProps)(Presentational)

class AppWrapper extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    // we put our Container component inside Redux Provider
    return (
      <Provider store={store}>
      <Container />
      </Provider>
    );
  }
};