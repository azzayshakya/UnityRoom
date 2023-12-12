import {combineReducers} from "redux";
import cartReducer from './cartReducer';

const rootReducer=combineReducers({
    user:cartReducer,
})

export default rootReducer;
