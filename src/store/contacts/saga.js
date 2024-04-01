import { call, put, takeEvery } from "redux-saga/effects"

// Crypto Redux States

import {
  getUsers as getUsersAction,
  getUsersSuccess,
  getUsersFail,
  getUserProfile as getUserProfileAction,
  getUserProfileSuccess,
  getUserProfileFail
} from "./contactSlice"
//Include Both Helper File with needed methods
import { getUsers, getUserProfile } from "../../helpers/fakebackend_helper"

function* fetchUsers() {
  try {
    const response = yield call(getUsers)
    yield put(getUsersSuccess(response))
  } catch (error) {
    yield put(getUsersFail(error))
  }
}

function* fetchUserProfile() {
  try {
    const response = yield call(getUserProfile)
    yield put(getUserProfileSuccess(response))
  } catch (error) {
    yield put(getUserProfileFail(error))
  }
}

function* contactsSaga() {
  yield takeEvery(getUsersAction, fetchUsers)
  yield takeEvery(getUserProfileAction, fetchUserProfile)
}

export default contactsSaga
