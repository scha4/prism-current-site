import { createSlice } from "@reduxjs/toolkit"
import { PURGE } from "redux-persist";

const layout = createSlice({
    name : 'layout',
    initialState : { 
        layoutType: "horizontal",
        layoutWidth: "fluid",
        leftSideBarTheme: "light",
        leftSideBarType: "default",
        topbarTheme: "colored",
        isPreloader: false,
        showRightSidebar: {isopen:false, type:'', importCode:'', content:''},
        isMobile: false,
        showSidebar: true,
        leftMenu: false,
        isOpen: {}
    },
    reducers:{
        changeLayout : (state, action) => {
            return {
                ...state,
                layoutType: action.payload,
              }
        },
        changePreloader : (state, action) => {
            return {
                ...state,
                isPreloader: action.payload,
              }
        },
        changeLayoutWidth : (state, action) => {
            return {
                ...state,
                layoutWidth: action.payload,
              }
        },
        changeSidebarTheme : (state, action) => {
            return {
                ...state,
                leftSideBarTheme: action.payload,
              }
        },
        changeSidebarType : (state, action) => {
            return {
                ...state,
                leftSideBarType: action.payload,
              }
        },
        changeTopbarTheme : (state, action) => {
            return {
                ...state,
                topbarTheme: action.payload,
              }
        },
        showRightSidebarAction : (state, action) => {
            return {
                ...state,
                showRightSidebar: action.payload,
              }
        },
        showSidebar : (state, action) => {
            return {
                ...state,
                showSidebar: action.payload,
              }
        },
        toggleLeftmenu : (state, action) => {
            return {
                ...state,
                leftMenu: action.payload,
              }
        },
        toggleInnerLeftmenuItem : (state, action) => {
            return {
                ...state,
                    isOpen: {
                    ...state.isOpen,
                    [action.payload]: !state.isOpen[action.payload], // 인덱스를 전달하여 해당 요소의 isOpen 상태를 반전
                    },
              }
        },
       
       
    },
})

export const { 
    changeLayout,
    changePreloader,
    changeLayoutWidth,
    changeSidebarTheme,
    changeSidebarType,
    changeTopbarTheme,
    showRightSidebarAction,
    showSidebar,
    toggleLeftmenu,
    toggleInnerLeftmenuItem
    } = layout.actions;
export default layout.reducer;