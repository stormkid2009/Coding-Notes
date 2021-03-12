Title : " propTypes "
/*because of the need to check types in React
    and this is not provided in javascript
    we have got propTypes to solve this.*/

//propTypes with functional Component:


const User=()=>{
    return(
        <div>{props.age}</div>
    );
}
User.propTypes = {
    age : propTypes.number.isRequired
};


//propTypes with class Component:


class User extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div> {this.props.age}</div>
        );
    }
}
 User.propTypes = {
            
            Age : PropTypes.number.isRequired
        }

