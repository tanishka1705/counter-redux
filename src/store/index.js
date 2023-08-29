import { createStore } from "redux";

const initialState = { counter : 0}

const createReducer = (state = initialState, action) =>{
    if(action.type === 'increment'){
        return {
            counter : state.counter + 1
        }
    }

    if(action.type === 'decrement' && state.counter !== 0){
        return{
            counter : state.counter -1
        }
    }

    if(action.type === 'reset'){
        return initialState
    }

    return state;
}

const store = createStore(createReducer);

export default store;