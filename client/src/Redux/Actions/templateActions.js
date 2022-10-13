import {SET_TEMPLATE,CLEAR_ORDER,SET_USER} from '../constants/templateContante'
import {PRODUCT_FAIL} from '../constants/errConstant'
import {ERROR} from '../constants/errConstant'


export const setTemplate = (data) => async (dispatch)=>{

    try{
        
        dispatch({type:SET_TEMPLATE,data:data})

    }catch(e){
        dispatch({
            type:ERROR,
            payload:e.response && e.response.data.message ?e.response.data.message 
            : e.message,
        })
    }
}

export const setUser = (data) => async (dispatch)=>{
    try{
        dispatch({type:SET_USER,data:data});

    }catch(e){
        dispatch({
            type:ERROR,
            payload:e.response && e.response.data.message ?e.response.data.message 
            : e.message,
        })
    }
}

export const clearState = () => async (dispatch)=>{
    try{
        dispatch({type:CLEAR_ORDER});

    }catch(e){
        dispatch({
            type:ERROR,
            payload:e.response && e.response.data.message ?e.response.data.message 
            : e.message,
        })
    }
}

