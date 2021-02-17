//Types should be defined as string constants in your application 
const ADD = "ADD";
//define action creator which is JS function return an object
const addMessage=(message)=>{
    return {
        type:ADD,
        message
    }
};
//define our Reducer function which accepts two arguments:
//state is the first one and it should be immutable[not able to be changed]
//action is info what to update in state
const messageReducer=(state=[],action)=>{
    switch(action.type){
        case ADD:
            return [
                ...state,action.message
                //return our state with last message  as new array
            ]
    }

}
//create our store here
const store = Redux.createStore(messageReducer);
