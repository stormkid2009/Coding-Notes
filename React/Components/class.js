/*the second way to make Component is ES6 class
it is useful for many features like local state and life cycle method.
notice that react hooks can do the same things like class.*/



class App extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div>this is class Component</div>
        );
    }
}
//we shall export our class component here