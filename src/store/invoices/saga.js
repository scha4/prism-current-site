import { call, put, takeEvery } from "redux-saga/effects"

// Crypto Redux States
import {
  getInvoices as getInvoicesAction,
  getInvoiceDetail as getInvoiceDetailAction,
  getInvoicesSuccess,
  getInvoicesFail,
  getInvoiceDetailSuccess,
  getInvoiceDetailFail,
} from "./invoiceSlice"

//Include Both Helper File with needed methods
import { getInvoices, getInvoiceDetail } from "../../helpers/fakebackend_helper"

function* fetchInvoices() {
  try {
    const response = yield call(getInvoices)
    yield put(getInvoicesSuccess(response))
  } catch (error) {
    yield put(getInvoicesFail(error))
  }
}

function* fetchInvoiceDetail({ invoiceId }) {
  try {
    const response = yield call(getInvoiceDetail, invoiceId)
    yield put(getInvoiceDetailSuccess(response))
  } catch (error) {
    yield put(getInvoiceDetailFail(error))
  }
}

function* invoiceSaga() {
  yield takeEvery(getInvoicesAction, fetchInvoices)
  yield takeEvery(getInvoiceDetailAction, fetchInvoiceDetail)
}

export default invoiceSaga
