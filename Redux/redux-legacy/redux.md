## Redux

### what is redux?
simply is predictive state container,
the only source of truth for state .

### why redux is useful?
we can  manage global state and no need to pass it down from parents to children as we do in React for example.

### how redux works?
we will keep track of process step by step:
1. The state:

```javascript
//import redux with node js
const redux = require('redux');
//nested state gonna make problem for us so we gonna replace it with immer produce method
const produce = require('immer').produce;
//declare our global state which we need to keep track of.
const initialState = {
    name:"sherif",
    address:{
        country:"Egypt",
        city:"Cairo",
        street:"123 street of nozha"
    }
};
```
2. The action: it gives us info or describes what we will do with state .
```javascript
//declare actions constants and simply they're just strings
const UPDATE_COUNTRY = 'UPDATE_COUNTRY';
const UPDATE_CITY = 'UPDATE_CITY';
const UPDATE_STREET = 'UPDATE_STREET';
//declare functions which create the actions
//action creators simply return an object of type of action
//and payload of such value.
const updateStreet=(street)=>{
    return {
        type:UPDATE_STREET,
        payload:street,
    }
};

const updateCity=(city)=>{
    return {
        type:UPDATE_CITY,
        payload:city,
    }
};

const updateCountry=(country)=>{
    return {
        type:UPDATE_COUNTRY,
        payload:country,
    }
}

```
3. the reducer:  
    like a chef who does the work for us.  
    it is a function which take state and action as  arguments.
    and return object with a copy of state modified.  


```javascript
const reducer =(state=initialState,action)=>{
    //as it receives more than one type of action
    //we will use switch to deal with this
    switch(action.type){
        case UPDATE_STREET:
            /* this is old way to do it
             return {
                 ...state,
                 address:{
                    ...state.address,
                    street:action.payload,
                }
             }*/
            //we pass a draft of state as argument to the arrow function so we can modify the wanted property 
            return produce(state,(draft)=>{
                draft.address.street = action.payload
            });
        case UPDATE_CITY:
            return produce(state,(draft)=>{
                draft.address.city = action.payload
            });

        case UPDATE_COUNTRY:
            return produce(state,(draft)=>{
                draft.address.country = action.payload
            })
        default:
            return state;
    }
}

```


4. the store:  
   this is the place where our state live and our app subscribe  
   to listen for what is happening to the state.  

```javascript
   //create our store
    const store = redux.legacy_createStore(reducer);
    //using store.getState method to get our state (initial state in our case)
    console.log('initial state',store.getState());
   //subscribe our app with store
   const unsubscribe = store.subscribe(()=>{
   console.log('update state',store.getState())
});

   //dispatch some actions to update state
    store.dispatch(updateStreet('45 tahrir st'));
    store.dispatch(updateStreet('155 galaxy st'));
    store.dispatch(updateStreet('99 hosarey st'));
    store.dispatch(updateCity('Rome'));
    store.dispatch(updateCity('Paris'));
    store.dispatch(updateCity('London'));
    store.dispatch(updateCountry('Italy'));
    store.dispatch(updateCountry('France'));
    store.dispatch(updateCountry('UK'));
   
   //unsubscribe our store
    unsubscribe();

   ```
   