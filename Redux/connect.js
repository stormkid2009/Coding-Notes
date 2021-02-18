const state = [];
//getting state from store via props
//u should specify which state and action dispatch  u want .
// map state to props
const mapStateToProps=(state)=>{
    return {
        messages:state
    }
}

//map dispatch to props
//there our action dispatch
const addMessage=(message)=>{
    return {
        type:"ADD",
        message:message
    }
}

const mapDispatchToProps = (dispatch) =>{
    return{
        submitNewMessage: (message)=>{
           
                dispatch(addMessage(message))
            
        }
    }
}

class Presentational extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return <h3>This is a Presentational Component</h3>
    }
  };
  
  const connect = ReactRedux.connect;
  // ReactRedux connect method accepts two optional arguments:
  //mapStateToProps and mapDispatchToProps functions
  //then we add the component needs the state
  const ConnectedComponent= connect(
    mapStateToProps,mapDispatchToProps
  )(Presentational );
  