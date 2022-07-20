import { ADDUSER } from "../constantRedux/UserConstant"

export const addUser = (payload)=>{
    return {
        type: ADDUSER,
        payload,
    }
}