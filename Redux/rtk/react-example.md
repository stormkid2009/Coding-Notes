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
// "./src/redux/features/user/userSlice

//import createAsyncThunk to deal with fetch data
//which bring a promise with 3 cases
import {createSlice,createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios'

const initialState = {
  loading:false,
  users:[],
  error:'',
};
export const fetchUsers = createAsyncThunk('user/fetchUsers',()=>{
  return axios.get('https://jsonplaceholder.typicode.com/users')
  .then((response)=> response.data)
})
const userSlice = createSlice({
  name:'user',
  initialState,
  extraReducers:(builder)=>{
    builder.addCase(fetchUsers.pending,(state)=>{
      state.loading = true
    })
    builder.addCase(fetchUsers.fulfilled,(state,action)=>{
      state.loading = false
      state.users = action.payload
      state.error = ''
    })
    builder.addCase(fetchUsers.rejected,(state,action)=>{
      state.loading = false
      state.users = []
      state.error = action.error.message
    })
  }
})

export default userSlice.reducer;

```
---
```js
// "./src/redux/app/store.js"
import {configureStore} from '@reduxjs/toolkit';
import cakeReducer from '../features/cake/cakeSlice';
import userReducer from '../features/user/userSlice';
//configure our store
const store = configureStore({
  reducer:{
    cake:cakeReducer,
    user:userReducer,
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

---

```js
import React,{useEffect} from 'react';
import {useDispatch,useSelector} from 'react-redux';
import {fetchUsers} from './userSlice';

export default function UserView(){
  const dispatch=useDispatch();
  const user = useSelector((state)=> state.user);
  useEffect(()=>{
    dispatch(fetchUsers())
  },[])
  return(<div>
    <h1>the list of users </h1>
    {user.loading && <div>loading...</div>}
    {!user.loading && user.error ? <div>kind of error : {user.error}</div> : null}
    {!user.loading && user.users.length ? (
      <ul>
        {user.users.map((user)=> <li key={user.id}>{user.name}</li>)}
      </ul>
    ):null}
  </div>)

}

```
