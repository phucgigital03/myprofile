import { ADDUSER } from "../constantRedux/UserConstant"


const initState = {
    users: [],
}

const UserReducer = (state = initState,action) => {
    switch(action.type){
        case ADDUSER:
            return {
                ...state,
                users: [...state.users,action.payload],
            }
        default:
            return state
    }
}

export default UserReducer