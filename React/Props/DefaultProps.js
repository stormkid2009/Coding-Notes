
// in case we did not pass a value to name property
 //   we already add default value.


const User=(props)=>{
    return(
        <div>welcome , {props.name || "Anwar"}</div>
    );
}


// pass default Props to Class Component:


class User extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div>{this.props.name} , {this.props.age}</div>
        );
    }
}

 User.defaultProps = {
            name : " Anwar ",
            Age : " 42 "
        }


//pass default props to functional Component:


const User=(props)=>{
    return(
        <div>
        {props.name} , {props.age}
        </div>
    );
}
User.defaultProps = {
            name : " Anwar ",
            age : " 42 "
        }
