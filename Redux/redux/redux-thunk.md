## **Redux-Thunk**

* redux-thunk is a middleware considered as  the standard way to define async action creators in redux.  
* redux-thunk allows us to return a function instead of actions object.  
* this funcion can hold side effects means it does not have to be pure function.
  
```javascript
const redux = require('redux');
const reduxthunk = require('redux-thunk').default;
const axios = require('axios');
const applyMiddleware = redux.applyMiddleware;

//create our inital state
const initialstate = {
    loading:false,
    users:[],
    error:''
};

//create our action strings
const FETCH_USERS_REQUESTED = 'FETCH_USERS_REQUESTED';
const FETCH_USERS_SUCCEEDED = 'FETCH_USERS_SUCCEEDED';
const FETCH_USERS_FAILED = 'FETCH_USERS_FAILED';

//create our action creator functions

const fetchUsersRequest=()=>{
    return {
        type:FETCH_USERS_REQUESTED,
        
    }
};
const fetchUsersSuccess=(users)=>{
    return {
        type:FETCH_USERS_SUCCEEDED,
        payload:users,
    }
};
const fetchUsersFailure=(error)=>{
    return {
        type:FETCH_USERS_FAILED,
        payload:error,
    }
};

//create our reducer function
const reducer=(state=initialstate,action)=>{
    switch (action.type) {
        case FETCH_USERS_REQUESTED:
            return {
                ...state,
                loading:true,
            }
            
            case FETCH_USERS_SUCCEEDED:
                return {
                    
                    loading:false,
                    users:action.payload,
                    error:'',

                }
            case FETCH_USERS_FAILED:
                return {
                    
                    loading:false,
                    users:[],
                    error:action.payload,
                }    
    
    }
};

//fetchUsers function will return a function which take dispatch as argument

const fetchUsers=()=>{
    return function(dispatch){
        //dispatching fetchUsersRequest will set loading to true
        //which we can use in loading spinner in our UI if we have
        dispatch(fetchUsersRequest())
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then((response)=>{
            //response.data is the users
            const users = response.data.map((user)=> user.name);
            //dispatch fetchUsersSuccess and pass users to it
            dispatch(fetchUsersSuccess(users));
            
        })
        .catch((error)=>{
            //error.message is the error message
            dispatch(fetchUsersFailure(error.message));
        })
    }
};

//create our store
const store = redux.legacy_createStore(reducer,applyMiddleware(reduxthunk));
//subscribe to our store
store.subscribe(()=>console.log(store.getState()));
//dispatch fetching data
store.dispatch(fetchUsers());


```