import { createStore } from "redux";

const reducer=(state={counter:10},action)=>{
    if(action.type==="INC"){
        return {counter:state.counter+1}
    }

    if(action.type==="DEC"){
        return {counter:state.counter-1}
    }
    if(action.type==="ADD"){
        return {counter:state.counter+action.payload}
    }
    return state;
}

export const store=createStore(reducer)


