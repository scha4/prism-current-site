import { createSlice } from "@reduxjs/toolkit"
import { PURGE } from "redux-persist";

const tasks = createSlice({
    name : 'tasks',
    initialState : { 
        tasks: [],
        error: {},
    },
    reducers:{
        getTasks : (state) => {
            return state
        },
        getTasksSuccess : (state, action) => {
            return {
                ...state,
                tasks: action.payload,
              }
        },
        getTasksFail : (state, action) => {
            return {
                ...state,
                error: action.payload,
              }
        },
    },
})

export const { getTasks, getTasksSuccess, getTasksFail }= tasks.actions;
export default tasks.reducer;