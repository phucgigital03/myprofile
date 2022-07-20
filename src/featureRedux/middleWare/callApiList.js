import {addItem} from '../action/List'

const callApi = async ()=>{
    return new Promise((resolve) => {
        setTimeout(()=>{
            resolve('phuc heo')
        },400)
    })
}

export const addItemWithMiddleWare = (data) => {
    return (dispatch,getState) => {
      return (async () => {
        console.log(getState())
        const res = await new Promise(async (resolve) => {
            const handlerId = setTimeout(()=>{
                resolve('phuc digital')
            },1000)
            const text = await callApi()
            console.log(handlerId)
            clearTimeout(handlerId)
            resolve(text)
        })
        dispatch(addItem(res,data))
        console.log(getState())
      })()
    }
}