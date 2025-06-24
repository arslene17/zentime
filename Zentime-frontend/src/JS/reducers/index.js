import authReducer from "./authReducer";
import {combineReducers} from 'redux'
import watchReducer from "./watchReducer";



const rootReducer = combineReducers({authReducer, watchReducer})


export default rootReducer;