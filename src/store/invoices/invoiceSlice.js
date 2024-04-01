import { createSlice } from "@reduxjs/toolkit"
import { PURGE } from "redux-persist";

const invoice = createSlice({
    name : 'invoice',
    initialState : { 
        invoices: [],
        invoiceDetail: {},
        error: {},
    },
    reducers:{
        getInvoices : (state) => {
            return state
        },
        getInvoicesSuccess : (state) => {
            return {
                ...state,
                invoices: action.payload,
            }
        },
        getInvoicesFail : (state) => {
            return {
                ...state,
                error: action.payload,
            }
        },
        getInvoiceDetail : (state) => {
            return state
        },
        getInvoiceDetailSuccess : (state) => {
            return {
                ...state,
                invoiceDetail: action.payload,
            }
        },
        getInvoiceDetailFail : (state) => {
            return {
                ...state,
                error: action.payload,
            }
        },
      
    },
    extraReducers: (builder) => { //초기화 하기
        builder.addCase(PURGE, () => initialState)
    }
})

export const { 
    getInvoices,
    getInvoicesSuccess,
    getInvoicesFail,
    getInvoiceDetail,
    getInvoiceDetailSuccess,
    getInvoiceDetailFail }= invoice.actions;
export default invoice.reducer;