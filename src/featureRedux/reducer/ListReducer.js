import { ADDITEM } from "../constantRedux/ListConstant"

const initState = {
    active: null,
    listWork: [],
}

const ListReducer = (state = initState,action) => {
    switch(action.type){
        case ADDITEM:
            return {
                ...state,
                listWork: [...state.listWork,...action.payload],
            }
        default:
            return state
    }
}

export default ListReducer