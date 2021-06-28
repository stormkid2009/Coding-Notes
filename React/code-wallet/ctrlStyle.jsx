/*Title : "control style with hooks "

it's simple app to change the color of h1 using state with react hooks.*/


import React,{useState} from "react";
import "./style.css";

export default function App() {
  const [incorrect,setIncorrect]=useState('false');
  return (
    <div>
      <h1 className ={
       incorrect==='true'? "incorrect":""
      }
      >Hello StackBlitz!</h1>
     <button onClick={
       ()=>setIncorrect("true")
     }> Change the color</button>
    </div>
  );
}



//inside app.css implement this Code with the class Name incorrect:

/*
.incorrect{
  color:red;
}
*/