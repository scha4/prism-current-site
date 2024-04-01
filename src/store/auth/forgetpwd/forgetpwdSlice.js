import { createSlice } from "@reduxjs/toolkit"
import { PURGE } from "redux-persist";

const forgetpwd = createSlice({
    name : 'forgetpwd',
    initialState : { 
        error: "",
        success: "",
    },
    reducers:{
        userForgetPassword : (state) => {
            state = {
                ...state,
                forgetSuccessMsg: null,
                forgetError: null,
            }
        },
        userForgetPasswordSuccess : (state, action) => {
            state = {
                ...state,
                forgetSuccessMsg: action.payload,
            }
        },
        userForgetPasswordError : (state, action) => {
            state = { ...state, forgetError: action.payload }
        },
       
    },
})

export const { 
    userForgetPassword,
    userForgetPasswordSuccess,
    userForgetPasswordError }= forgetpwd.actions;
export default forgetpwd.reducer;