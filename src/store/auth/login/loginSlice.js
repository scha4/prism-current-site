import { createSlice } from "@reduxjs/toolkit"
import { PURGE } from "redux-persist";

const login = createSlice({
    name : 'login',
    initialState : { 
        error: "",
        success: "",
    },
    reducers:{
        loginUser : (state, action) => {
            state = {
                ...state,
                loading: true,
            }
        },
        loginSuccess : (state) => {
            state = {
                ...state,
                loading: false,
            }
        },
        logoutUser : (state) => {
            state = { ...state }
        },
        logoutUserSuccess : (state, action) => {
            state = { ...state }
        },
        apiError : (state, action) => {
            state = { ...state, error: action.payload, loading: false }
        },
        socialLogin : (state) => {
            state = { ...state }
        },
      
    }
})

export const { 
    loginUser,
    loginSuccess,
    logoutUser,
    logoutUserSuccess,
    apiError,
    socialLogin }= login.actions;
export default login.reducer;