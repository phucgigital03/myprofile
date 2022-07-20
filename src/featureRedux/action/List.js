import { ADDITEM } from "../constantRedux/ListConstant"

export const addItem = (...payload)=>{
    return {
        type: ADDITEM,
        payload,
    }
}