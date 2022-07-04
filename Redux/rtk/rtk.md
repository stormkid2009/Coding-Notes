# **Redux ToolKit** 

* well redux do great job with manage the global state 
but it still make confuse for many developpers:  
  * too much boilerplate code to write
  * installing alot of packages
  * setup the store is much complicated
* rtk(redux toolkit) brings to us:  
  *  simplicity for more clean good
  *  it comes with predefined methods like ..(immer , redux-thunk ,redux , reselect)
  
  ```
  #NPM
  npm install @reduxjs/toolkit
  ```

  **Recommended structure**:  
  ./app/store.js  
  ./features/"feature name like user or product"/featureSlice.js  

  ### **CreateSlice**:  
  A function that accepts an initial state, an object of reducer functions, and a "slice name", and automatically generates action creators and action types that correspond to the reducers and state.  
  behind the secene it uses:  
  *  **createAction**
  *  **createReducer**
  *  we can use **Immer** to mutate updates to the state
  ---
  ###  **cakeSlice.js**
  ```javascript
    // "./features/cake/cakeSlice.js"
    const createSlice = require("@reduxjs/toolkit").createSlice;

    //declare our initial state
    const initialState = {
        numOfCakes:10
    };
    //create cakeSlice with actions type cake/ordered and cake/restocked 
    //with callback function for each which mutate the state thanks to immer middleware
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
    //default export
    module.exports = cakeSlice.reducer;
    //export by name cakeActions
    module.exports.cakeActions = cakeSlice.actions;
  ```

  ---
  ###  **cookieSlice.js**
  ```javascript
  // "./features/cookie/cookieSlice.js"
  // we are using nodejs here
  //import createSlice from rtk
  const createSlice = require('@reduxjs/toolkit').createSlice;
  const cakeActions = require('../cake/cakeSlice').cakeActions;
  
  const initialState = {
      numOfCookies:20
  };
  
  const cookieSlice = createSlice({
      name:'cookie',
      initialState,
      reducers:{
          ordered:(state)=>{
              state.numOfCookies--
          },
          restocked:(state,action)=>{
              state.numOfCookies += action.payload
          }
       },
      //the case here if client buy a cake he will get free cookie as gift
      //we need to declare extra reducers to update cookiee if a user ordered a cake
      extraReducers:(builder)=>{
          builder.addCase(cakeActions.ordered,(state)=>{
              state.numOfCookies--
          })
      }
      
  });
  
  module.exports = cookieSlice.reducer;
  module.exports.cookieActions = cookieSlice.actions;

  ```
  ---
  ###  **userSlice.js**

  ```javascript
    //import createSlice from rtk
    const createSlice = require('@reduxjs/toolkit').createSlice;
    //import createAsyncThunk from rtk
    const createAsyncThunk  = require('@reduxjs/toolkit').createAsyncThunk;
    //import axios
    const axios = require('axios');
    
    //create our initialState
    const initialState = {
        loading:false,
        users:[],
        error:'',
    };
    //declare our async action creator to fetch data from api
    
    const fetchUsers = createAsyncThunk('user/fetchUsers',()=>{
        return axios.get('https://jsonplaceholder.typicode.com/users').then((res)=>res.data.map((user)=>user.email))
    });
    //the slice accepts name - initialState
    //and invoke extraReducers with builder to deal with:
    //first case action pending
    //second case action fulfilled
    //last case action rejected
    const userSlice = createSlice({
        name:'user',
        initialState,
        extraReducers:(builder)=>{
            builder.addCase(fetchUsers.pending,(state)=>{
                state.loading = true
            })
            builder.addCase(fetchUsers.fulfilled,(state,action)=>{
                state.loading = false,
                state.users = action.payload,
                state.error = ''
            })
            builder.addCase(fetchUsers.rejected,(state,action)=>{
                state.loading = false,
                state.users = [],
                state.error = action.error.message
            })
        }
    })
    
    module.exports = userSlice.reducer;
    module.exports.fetchUsers = fetchUsers
  ```

