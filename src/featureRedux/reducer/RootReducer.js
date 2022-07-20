import {combineReducers} from 'redux'
import UserReducer from "./UserReducer";
import ListReducer from "./ListReducer";

const rootReducer = combineReducers({
    list : ListReducer,
    user: UserReducer,
})

export default rootReducer