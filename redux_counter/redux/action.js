import { INCREASE_COUNT, DECREASE_COUNT } from "./actionTypes";

function increase_count(payload){
    return{
        type:INCREASE_COUNT,
        payload:payload
    }
}

function decrease_count(payload){
    return{
        type:DECREASE_COUNT,
        payload:payload
    }
}

export {increase_count,decrease_count}