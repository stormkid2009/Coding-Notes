

/*What is props?
    props is object which we declare within the function or class 
    then we assign it a vlaue in the render time.
    and we can say an object that we pass from parent to child element.*/


const App =(props)=>{
    return(
        <div>
        
        <p>hello today is  , {props.date} </p>
        </div>
    );
}

     


ReactDOM.render(<App date={Date()} />,document.getElementById('root'));



 //props is immutable then we can not reassign value to props.