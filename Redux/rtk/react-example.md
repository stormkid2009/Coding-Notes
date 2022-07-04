#  Integrate React with RTK
I prefer to keep my redux logic inside sperate directory:
```  
"./src/redux/app/store.js"  
"./src/redux/features/featureName/featureName.js"
```

### react-redux Provider:
we use it to wrap our app and pass the store to it as props:
```js
import {Provider} from 'react-redux';

ReactDOM.render(<Provider store={store}> <App /> </Provider> ,document.getElementById('root'));
```
### react-redux Hooks:
* **useSelector** : we can access our state by it. 
* **useDispatch** : we can dispatch our actions by it 
---

**_Now let's jump into the code_**  

```js
// "./src/redux/features/cake/cakeSlice.js"
import {createSlice} from '@reduxjs/toolkit';
//create our initialState
const initialState = {
  numOfCakes:10
};
//create cakeSlice 
const cakeSlice = createSlice({
  name:'cake',
  initialState,
  reducers:{
    ordered:(state)=>{
      state.numOfCakes--
    },
    restocked:(state,action)=>{
      state.numOfCakes += action.payload
    }
  }
});

export default cakeSlice.reducer;
export const {ordered,restocked} = cakeSlice.actions;
```

---
```js
// "./src/redux/app/store.js"
import {configureStore} from '@reduxjs/toolkit';
import cakeReducer from '../features/cake/cakeSlice';

//configure our store
const store = configureStore({
  reducer:{
    cake:cakeReducer
  }
});

export default store;

```

---

```js
// "./src/redux/features/cake/cakeView.jsx"
import React,{useState} from 'react';
import {useSelector,useDispatch} from 'react-redux';
import {ordered,restocked} from './cakeSlice';


const CakeView = ()=>{
    //access our state with useSelector hook from react-redux
  const numOfCakes = useSelector((state)=>state.cake.numOfCakes);
  const [value,setValue] = useState(1);
  //dispatch our actions with help of useDispatch hook from react-redux
  const dispatch = useDispatch();
  
  return(
    <div>
      <h1>number of cakes : {numOfCakes}</h1>
      <button onClick={()=>dispatch(ordered())}>Order one Cake</button><br />
      <input type='number' value={value} onChange={(e)=>setValue(parseInt(e.target.value))}/>
      <button onClick={()=>dispatch(restocked(value))}>Restock the cakes</button>
    </div>
  )
}

export default CakeView;

```
