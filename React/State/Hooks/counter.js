/* 
class component implementation
*/

export default class Counter extends React.Component{
    constructor(props){
      super(props);
      this.state = {
        count:0
      }
    }
    componentDidMount(){
      this.interval = setInterval(this.tick,1000)
    }
    componentWillUnmount(){
      clearInterval(this.interval)
    }
    tick=()=>{
      this.setState({
        count:this.state.count+1
      })
    }
    render(){
      return(
        <h1>{this.state.count}</h1>
      );
    }
  }

  /* 
  react hooks implementation
  */

  import React,{useState,useEffect} from 'react'

const Hook = () =>{
  const [count,setCount]= useState(0);
  const tick=()=>{
    setCount(prevCount=>prevCount+1)
  }
  useEffect(()=>{
    const interval = setInterval(tick,1000)

    return ()=>{
      clearInterval(interval)
    }
  },[]);
  return(
    <h1>{count}</h1>
  );
}