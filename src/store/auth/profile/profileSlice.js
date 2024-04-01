import { createSlice } from "@reduxjs/toolkit"
import { PURGE } from "redux-persist";

const profile = createSlice({
    name : 'profile',
    initialState : { 
        error: "",
        success: "",
    },
    reducers:{
        editProfile : (state) => {
            state = {
                ...state,
                loading: true,
                registrationError: null,
            }
        },
        profileSuccess : (state, action) => {
            state = { ...state, success: action.payload }
        },
        profileError : (state, action) => {
            state = { ...state, error: action.payload }
        },
        resetProfileFlag : (state) => {
            state = { ...state, success: null }
        },
      
    }
})

export const { 
    editProfile,
    profileSuccess,
    profileError,
    resetProfileFlag 
}= profile.actions;
export default profile.reducer;