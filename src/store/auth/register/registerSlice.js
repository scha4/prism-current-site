import { createSlice } from "@reduxjs/toolkit"
import { PURGE } from "redux-persist";

const register = createSlice({
    name : 'register',
    initialState : { 
        registrationError: null,
        message: null,
        loading: false,
        user: null,
    },
    reducers:{
        registerUser : (state) => {
            state = {
                ...state,
                loading: true,
                registrationError: null,
            }
        },
        registerUserSuccessful : (state, action) => {
            state = {
                ...state,
                loading: false,
                user: action.payload,
                registrationError: null,
            }
        },
        registerUserFailed : (state, action) => {
            state = {
                ...state,
                user: null,
                loading: false,
                registrationError: action.payload,
            }
        },
      
    },
})

export const { 
    registerUser,
    registerUserSuccessful,
    registerUserFailed }= register.actions;
export default register.reducer;