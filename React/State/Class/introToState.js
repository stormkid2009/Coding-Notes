Title : "introduction to state "

/* state is the storage of stateful components (ES6 class or Hooks)
    we can easily make our UI dynamic with updating state
    as u know props is immutable.*/

//with class components we define our state inside the instructor method:


class App extends React.Component{
    constructor(){
        super();
        this.state = {
            name:"anwar"
        }
    }
    render(){
        return(
            <h1>{this.state.name}</h1>
        );
    }
}


//we can write javascript and assign state property to a variable:


class App extends React.Component{
    constructor(){
        super();
        this.state = {
            name:"anwar"
        }
    }
    render(){
        const name = this.state.name;
        return(
            <h1>{name}</h1>
        );
    }
}
