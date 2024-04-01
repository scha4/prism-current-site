import { createSlice } from "@reduxjs/toolkit"
import { PURGE } from "redux-persist";

const eCommerce = createSlice({
    name : 'eCommerce',
    initialState : { 
        products: [],
        product: {},
        orders: [],
        cartData: {},
        customers: [],
        shops: [],
        error: {},
    },
    reducers:{
        getProducts : (state) => {
            return state
        },
       
        getProductsSuccess : (state) => {
            return state
        },
       
        getProductsFail : (state) => {
            return state
        },
       
        getProductDetail : (state) => {
            return state
        },
       
        getProductDetailSuccess : (state) => {
            return state
        },
       
        getProductDetailFail : (state) => {
            return state
        },
       
        getOrders : (state) => {
            return state
        },
       
        getOrdersSuccess : (state) => {
            return state
        },
       
        getOrdersFail : (state) => {
            return state
        },
       
        getCartData : (state) => {
            return state
        },
       
        getCartDataSuccess : (state) => {
            return state
        },
       
        getCartDataFail : (state) => {
            return state
        },
       
        getCustomers : (state) => {
            return state
        },
       
        getCustomersSuccess : (state) => {
            return state
        },
       
        getCustomersFail : (state) => {
            return state
        },
       
        getShops : (state) => {
            return state
        },
       
        getShopsSuccess : (state) => {
            return state
        },
       
        getShopsFail : (state) => {
            return state
        },
      
      
    },
    extraReducers: (builder) => { //초기화 하기
        builder.addCase(PURGE, () => initialState)
    }
})

export const { 
    getProducts,
    getProductsSuccess,
    getProductsFail,
    getProductDetail,
    getProductDetailSuccess,
    getProductDetailFail,
    getOrders,
    getOrdersSuccess,
    getOrdersFail,
    getCartData,
    getCartDataSuccess,
    getCartDataFail,
    getCustomers,
    getCustomersSuccess,
    getCustomersFail,
    getShops,
    getShopsSuccess,
    getShopsFail }= eCommerce.actions;
export default eCommerce.reducer;