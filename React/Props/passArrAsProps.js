

//we can pass an array as props and use its methods like join 
 //   in the case below:


const DisplayColors=(props)=>{
  return(
    <div>

    <div>{props.colors.join(' , ')}</div>

    </div>
  );
}


export default class App extends React.Component { 
  constructor(props){
    super(props);
  }
  render(){
    return(
      <div>
      <DisplayColors colors={["red","yellow","green"]} /> 
      </div>
    );
  }
}







