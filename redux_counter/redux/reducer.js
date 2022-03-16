import { DECREASE_COUNT, INCREASE_COUNT } from "./actionTypes"

const initState={
    count:0
}

const reducer = (state=initState,{type,payload})=>{
    switch(type){
    case INCREASE_COUNT:
        return{
            ...state,
            count:state.count+=payload
        }
    case DECREASE_COUNT:
        return{
            ...state,
            count:state.count-=payload
        }
    default:
        return{
            ...state
        }
    }

}

export default reducer