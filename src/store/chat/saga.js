import { takeEvery, put, call } from "redux-saga/effects"

// Chat Redux States

import {
  getChats as getChatsAction,
  getChatsSuccess,
  getChatsFail,
  getGroups as getGroupsAction,
  getGroupsSuccess,
  getGroupsFail,
  getMessages as getMessagesAction,
  getMessagesSuccess,
  getMessagesFail,
  addMessage as addMessageAction,
  addMessageSuccess,
  addMessageFail
} from "./chatSlice"

//Include Both Helper File with needed methods
import {
  getChats,
  getGroups,
  getMessages,
  addMessage,
} from "../../helpers/fakebackend_helper"

function* onGetChats() {
  try {
    const response = yield call(getChats)
    yield put(getChatsSuccess(response))
  } catch (error) {
    yield put(getChatsFail(error))
  }
}

function* onGetGroups() {
  try {
    const response = yield call(getGroups)
    yield put(getGroupsSuccess(response))
  } catch (error) {
    yield put(getGroupsFail(error))
  }
}

function* onGetMessages({ roomId }) {
  try {
    const response = yield call(getMessages, roomId)
    yield put(getMessagesSuccess(response))
  } catch (error) {
    yield put(getMessagesFail(error))
  }
}

function* onAddMessage({ message }) {
  try {
    const response = yield call(addMessage, message)
    yield put(addMessageSuccess(response))
  } catch (error) {
    yield put(addMessageFail(error))
  }
}

function* chatSaga() {
  yield takeEvery(getChatsAction, onGetChats)
  yield takeEvery(getGroupsAction, onGetGroups)
  yield takeEvery(getMessagesAction, onGetMessages)
  yield takeEvery(addMessageAction, onAddMessage)
}

export default chatSaga
