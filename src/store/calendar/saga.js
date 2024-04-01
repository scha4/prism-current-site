import { takeEvery, put, call } from "redux-saga/effects"

// Calender Redux States

import {
  getEvents as getEventsAction,
    getEventsSuccess,
    getEventsFail,
    addNewEvent as addNewEventAction,
    addEventSuccess,
    addEventFail,
    updateEvent as updateEventAction,
    updateEventSuccess,
    updateEventFail,
    deleteEvent as deleteEventAction,
    deleteEventSuccess,
    deleteEventFail,
    getCategories as getCategoriesAction,
    getCategoriesSuccess,
    getCategoriesFail
} from "./calendarSlice"

//Include Both Helper File with needed methods
import {
  getEvents,
  addNewEvent,
  updateEvent,
  deleteEvent,
  getCategories,
} from "../../helpers/fakebackend_helper"

function* fetchEvents() {
  try {
    const response = yield call(getEvents)
    yield put(getEventsSuccess(response))
  } catch (error) {
    yield put(getEventsFail(error))
  }
}

function* onAddNewEvent({ payload: event }) {
  try {
    const response = yield call(addNewEvent, event)
    yield put(addEventSuccess(response))
  } catch (error) {
    yield put(addEventFail(error))
  }
}

function* onUpdateEvent({ payload: event }) {
  try {
    const response = yield call(updateEvent, event)
    yield put(updateEventSuccess(response))
  } catch (error) {
    yield put(updateEventFail(error))
  }
}

function* onDeleteEvent({ payload: event }) {
  try {
    const response = yield call(deleteEvent, event)
    yield put(deleteEventSuccess(response))
  } catch (error) {
    yield put(deleteEventFail(error))
  }
}

function* onGetCategories() {
  try {
    const response = yield call(getCategories)
    yield put(getCategoriesSuccess(response))
  } catch (error) {
    yield put(getCategoriesFail(error))
  }
}

function* calendarSaga() {
  yield takeEvery(getEventsAction, fetchEvents)
  yield takeEvery('calendar/addNewEvent', onAddNewEvent)
  yield takeEvery(updateEventAction, onUpdateEvent)
  yield takeEvery(deleteEventAction, onDeleteEvent)
  yield takeEvery(getCategoriesAction, onGetCategories)
}

export default calendarSaga
