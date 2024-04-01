import { call, put, takeEvery, takeLatest } from "redux-saga/effects"
// Login Redux States
import { 
  loginUser as loginUserAction,
  loginSuccess,
  logoutUser as logoutUserAction,
  logoutUserSuccess,
  apiError,
  socialLogin as socialLoginAction
 } from "./loginSlice"

//Include Both Helper File with needed methods
import { getFirebaseBackend } from "../../../helpers/firebase_helper"
import {
  postFakeLogin,
  postJwtLogin,
  postSocialLogin,
} from "../../../helpers/fakebackend_helper"

const fireBaseBackend = getFirebaseBackend()
const defaultAuth = REACT_APP_DEFAULTAUTH
function* loginUser({ payload: { user, navigate } }) {

  try {
    if (defaultAuth === "firebase") {
      const response = yield call(
        fireBaseBackend.loginUser,
        user.email,
        user.password
      )
      yield put(loginSuccess(response))
    } else if (defaultAuth === "jwt") {
      const response = yield call(postJwtLogin, {
        email: user.email,
        password: user.password,
      })
      localStorage.setItem("authUser", JSON.stringify(response))
      yield put(loginSuccess(response))
    } else if (defaultAuth === "fake") {
      const response = yield call(postFakeLogin, {
        email: user.email,
        password: user.password,
      })
      
      localStorage.setItem("authUser", JSON.stringify(response))
      yield put(loginSuccess(response))
    }

    navigate("/admin/office/dashboard")
  } catch (error) {
    yield put(apiError(error))
  }
}

function* logoutUser({ payload: { navigate } }) {
  try {
    localStorage.removeItem("authUser")

    if (defaultAuth === "firebase") {
      const response = yield call(fireBaseBackend.logout)
      yield put(logoutUserSuccess(response))
    }
    navigate("/login")
  } catch (error) {
    yield put(apiError(error))
  }
}

function* socialLogin({ payload: { data, navigate, type } }) {
  try {
    if (defaultAuth === "firebase") {
      const fireBaseBackend = getFirebaseBackend()
      const response = yield call(
        fireBaseBackend.socialLoginUser,
        data,
        type,
      )
      localStorage.setItem("authUser", JSON.stringify(response))
      yield put(loginSuccess(response))
    } else {
      const response = yield call(postSocialLogin, data)
      localStorage.setItem("authUser", JSON.stringify(response))
      yield put(loginSuccess(response))
    }
    navigate("/dashboard")
  } catch (error) {
    yield put(apiError(error))
  }
}

function* authSaga() {
  yield takeEvery(loginUserAction, loginUser)
  yield takeLatest(socialLoginAction, socialLogin)
  yield takeEvery(logoutUserAction, logoutUser)
}

export default authSaga
