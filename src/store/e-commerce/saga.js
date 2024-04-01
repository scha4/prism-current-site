import { call, put, takeEvery } from "redux-saga/effects"

// Ecommerce Redux States

import {
  getProducts as getProductsAction,
  getCartData as getCartDataAction,
  getCustomers as getCustomersAction,
  getShops as getShopsAction,
  getCartDataFail,
  getCartDataSuccess,
  getCustomersFail,
  getCustomersSuccess,
  getOrdersFail,
  getOrdersSuccess,
  getProductDetail as getProductDetailAction,
  getProductDetailFail,
  getProductDetailSuccess,
  getProductsFail,
  getProductsSuccess,
  getShopsFail,
  getShopsSuccess,
  getOrders as getOrdersAction
} from "./eCommerceSlice"

//Include Both Helper File with needed methods
import {
  getCartData,
  getCustomers,
  getOrders,
  getProducts,
  getShops,
  getProductDetail,
} from "../../helpers/fakebackend_helper"

function* fetchProducts() {
  try {
    const response = yield call(getProducts)
    yield put(getProductsSuccess(response))
  } catch (error) {
    yield put(getProductsFail(error))
  }
}

function* fetchProductDetail({ productId }) {
  try {
    const response = yield call(getProductDetail, productId)
    yield put(getProductDetailSuccess(response))
  } catch (error) {
    yield put(getProductDetailFail(error))
  }
}

function* fetchOrders() {
  try {
    const response = yield call(getOrders)
    yield put(getOrdersSuccess(response))
  } catch (error) {
    yield put(getOrdersFail(error))
  }
}

function* fetchCartData() {
  try {
    const response = yield call(getCartData)
    yield put(getCartDataSuccess(response))
  } catch (error) {
    yield put(getCartDataFail(error))
  }
}

function* fetchCustomers() {
  try {
    const response = yield call(getCustomers)
    yield put(getCustomersSuccess(response))
  } catch (error) {
    yield put(getCustomersFail(error))
  }
}

function* fetchShops() {
  try {
    const response = yield call(getShops)
    yield put(getShopsSuccess(response))
  } catch (error) {
    yield put(getShopsFail(error))
  }
}

function* ecommerceSaga() {
  yield takeEvery(getProductsAction, fetchProducts)
  yield takeEvery(getProductDetailAction, fetchProductDetail)
  yield takeEvery(getOrdersAction, fetchOrders)
  yield takeEvery(getCartDataAction, fetchCartData)
  yield takeEvery(getCustomersAction, fetchCustomers)
  yield takeEvery(getShopsAction, fetchShops)
}

export default ecommerceSaga
