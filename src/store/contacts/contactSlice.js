import { createSlice } from "@reduxjs/toolkit"
import { PURGE } from "redux-persist";

const contacts = createSlice({
    name : 'contacts',
    initialState : { 
        users: [],
        userProfile: {},
        error: {},
    },
    reducers:{
        getUsers : (state) => {
            return state
        },
        getUsersSuccess : (state, action) => {
            return {
                ...state,
                users: action.payload,
            }
        },
        getUsersFail : (state, action) => {
            return {
                ...state,
                error: action.payload,
            }
        },
        getUserProfile : (state) => {
            return state
        },
        getUserProfileSuccess : (state, action) => {
            return {
                ...state,
                userProfile: action.payload,
            }
        },
        getUserProfileFail : (state, action) => {
            return {
                ...state,
                error: action.payload,
            }
        },
     
      
    }
})

export const { 
    getUsers,
    getUsersSuccess,
    getUsersFail,
    getUserProfile,
    getUserProfileSuccess,
    getUserProfileFail }= contacts.actions;
export default contacts.reducer;