import {useSelector,useDispatch} from "react-redux"
import { increase_count,decrease_count } from "../redux/action"
export default function Calculator(){
    const dispatch = useDispatch()
    const {count} = useSelector(store=>store)
    function increase(){
        dispatch(increase_count(1))
    }
    function decrease(){
        dispatch(decrease_count(1))
    }
    return(
        <div>
            <h1>{count}</h1>
            <div style={{display:"flex",flexDirection:"row"}}>
            <button onClick={increase}>Increase</button>
            <button onClick={decrease}>Decrease</button>
            </div>
        </div>
    )
}