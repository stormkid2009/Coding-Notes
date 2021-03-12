Title : " introduction to Hooks "

/*functional component is not stateless anymore
it can Hooks to state ^^ 
we destructure array of elements to useState hook
first element is our state and the second is the method to update state
const [state,setState] = useState(initialState)
*/

import React ,{useState} from 'react'

function App(){
  const[name,setName]=useState();
  return(
    <div>
    <button onClick={()=>setName("Sherif")}>display name</button>
    <p>{name}</p></div>
  );
}

