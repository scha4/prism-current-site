import { createSlice } from "@reduxjs/toolkit"
import { PURGE } from "redux-persist";

const calendar = createSlice({
    name : 'calendar',
    initialState : { 
        events: [],
        categories: [],
        error: {},
    },
    reducers:{
        getEvents : (state) => {
            return state
        },
        getEventsSuccess : (state, action) => {
            return {
                ...state,
                events: action.payload,
            }
        },
        getEventsFail : (state, action) => {
            return {
                ...state,
                error: action.payload,
            }
        },
        addNewEvent : (state) => {
            return state
        },
        addEventSuccess : (state, action) => {
            return {
                ...state,
                events: [...state.events, action.payload],
            }
        },
        addEventFail : (state, action) => {
            return {
                ...state,
                error: action.payload,
            }
        },
        updateEvent : (state) => {
            return state
        },
        updateEventSuccess : (state, action) => {
            return {
                ...state,
                events: state.events.map(event =>
                  event.id.toString() === action.payload.id.toString()
                    ? { event, ...action.payload }
                    : event
                ),
            }
        },
        updateEventFail : (state, action) => {
            return {
                ...state,
                error: action.payload,
            }
        },
     
        deleteEvent : (state) => {
            return state
        },
        deleteEventSuccess : (state, action) => {
            return {
                ...state,
                events: state.events.filter(
                  event => event.id.toString() !== action.payload.id.toString()
                ),
            }
        },
        deleteEventFail : (state, action) => {
            return {
                ...state,
                error: action.payload,
            }
        },
        getCategories : (state) => {
            return state
        },
        getCategoriesSuccess : (state, action) => {
            return {
                ...state,
                categories: action.payload,
            }
        },
        getCategoriesFail : (state, action) => {
            return {
                ...state,
                error: action.payload,
            }
        },
     
      
    },
  
})

export const { 
    getEvents,
    getEventsSuccess,
    getEventsFail,
    addNewEvent,
    addEventSuccess,
    addEventFail,
    updateEvent,
    updateEventSuccess,
    updateEventFail,
    deleteEvent,
    deleteEventSuccess,
    deleteEventFail,
    getCategories,
    getCategoriesSuccess,
    getCategoriesFail }= calendar.actions;
export default calendar.reducer;