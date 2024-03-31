import { combineReducers } from "redux"
import one2oneReducer from "./one_to_one/reducer"
 

// export interface IrootState{
//     one2one:Ione2one
// }

const rootReducer=combineReducers({
    one2one:one2oneReducer
})

export default  rootReducer;