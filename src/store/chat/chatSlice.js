import { createSlice } from "@reduxjs/toolkit"
import { PURGE } from "redux-persist";

const chat = createSlice({
    name : 'chat',
    initialState : { 
        chats: [],
        groups: [],
        contacts: [],
        messages: [],
        error: {},
    },
    reducers:{
        getChats : (state) => {
            return state
        },
        getChatsSuccess : (state, action) => {
            return {
                ...state,
                chats: action.payload,
            }
        },
        getChatsFail : (state, action) => {
            return {
                ...state,
                error: action.payload,
            }
        },
        getGroups : (state) => {
            return state
        },
        getGroupsSuccess : (state, action) => {
            return {
                ...state,
                groups: action.payload,
            }
        },
        getGroupsFail : (state, action) => {
            return {
                ...state,
                error: action.payload,
            }
        },
        getMessages : (state) => {
            return state
        },
        getMessagesSuccess : (state, action) => {
            return {
                ...state,
                messages: action.payload,
            }
        },
        getMessagesFail : (state, action) => {
            return {
                ...state,
                error: action.payload,
            }
        },
        addMessage : (state) => {
            return state
        },
        addMessageSuccess : (state, action) => {
            return {
                ...state,
                messages: [...state.messages, action.payload],
            }
        },
        addMessageFail : (state, action) => {
            return {
                ...state,
                error: action.payload,
            }
        },
     
      
    },
})

export const { 
    getChats,
    getChatsSuccess,
    getChatsFail,
    getGroups,
    getGroupsSuccess,
    getGroupsFail,
    getMessages,
    getMessagesSuccess,
    getMessagesFail,
    addMessage,
    addMessageSuccess,
    addMessageFail }= chat.actions;
export default chat.reducer;