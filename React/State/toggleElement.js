/*simply each click the button the state will be updated to show
the <h1> or hide it*/



class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visibility: false
    };
    // Change code below this line
this.toggleVisibility=this.toggleVisibility.bind(this);
    // Change code above this line
  }
  // Change code below this line
toggleVisibility(){
  this.setState(state=>{
    
      return{visibility:!state.visibility}
    
    
     
  });
  //this.setState(state=>({visiblity:true}));
  
}
  // Change code above this line
  render() {
    if (this.state.visibility) {
      return (
        <div>
          <button onClick={this.toggleVisibility}>Click Me</button>
          <h1>Now you see me!</h1>
        </div>
      );
    } else {
      return (
        <div>
          <button onClick={this.toggleVisibility}>Click Me</button>
        </div>
      );
    }
  }
}
