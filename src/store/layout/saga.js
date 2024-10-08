// @flow
import { all, call, fork, takeEvery, put } from "redux-saga/effects"
import {
  changeLayout as changeLayoutAction,
  changePreloader,
  changeLayoutWidth as changeLayoutWidthAction,
  changeSidebarTheme,
  changeSidebarType,
  changeTopbarTheme as changeTopbarThemeAction,
  showRightSidebarAction,
  showSidebar,
  toggleLeftmenu
 } from "./layoutSlice"


/**
 * Changes the body attribute
 */
function changeBodyAttribute(attribute, value) {
  if (document.body) document.body.setAttribute(attribute, value)
  return true
}

/**
 * Toggle the class on body
 * @param {*} cssClass
 */
function manageBodyClass(cssClass, action = "toggle") {
  switch (action) {
    case "add":
      if (document.body) document.body.classList.add(cssClass)
      break
    case "remove":
      if (document.body) document.body.classList.remove(cssClass)
      break
    default:
      if (document.body) document.body.classList.toggle(cssClass)
      break
  }

  return true
}

/**
 * Changes the layout type
 * @param {*} param0
 */
function* changeLayout({ payload: layout }) {
  try {
    if (layout === "horizontal") {
      yield put(changeTopbarThemeAction("colored"))
      document.body.removeAttribute("data-sidebar")
      yield call(manageBodyClass, "vertical-collpsed", "remove")
      document.body.removeAttribute("data-sidebar-size")
    } else {
      yield put(changeTopbarThemeAction("colored"))
    }
    yield call(changeBodyAttribute, "data-layout", layout)
  } catch (error) { }
}

/**
 * Changes the layout width
 * @param {*} param0
 */
function* changeLayoutWidth({ payload: width }) {
  try {
    if (width === "boxed") {
      yield put(changeSidebarType("icon"))
      yield call(changeBodyAttribute, "data-layout-size", width)
      yield call(changeBodyAttribute, "data-layout-scrollable", false)
    } else if (width === "scrollable") {
      yield put(changeSidebarType("default"))
      yield call(changeBodyAttribute, "data-layout-scrollable", true)
    } else {
      yield put(changeSidebarType("default"))
      yield call(changeBodyAttribute, "data-layout-size", width)
      yield call(changeBodyAttribute, "data-layout-scrollable", false)
    }
  } catch (error) { }
}

/**
 * Changes the left sidebar theme
 * @param {*} param0
 */
function* changeLeftSidebarTheme({ payload: theme }) {
  try {
    yield call(changeBodyAttribute, "data-sidebar", theme)
  } catch (error) { }
}

/**
 * Changes the topbar theme
 * @param {*} param0
 */
function* changeTopbarTheme({ payload: theme }) {
  try {
    yield call(manageBodyClass, "vertical-collpsed", "remove")
    yield call(changeBodyAttribute, "data-topbar", theme)
  } catch (error) { }
}

/**
 * Changes the left sidebar type
 * @param {*} param0
 */
function* changeLeftSidebarType({ payload: { sidebarType, isMobile } }) {
  try {
    switch (sidebarType) {
      case "compact":
        yield call(changeBodyAttribute, "data-sidebar-size", "small")
        yield call(manageBodyClass, "sidebar-enable", "remove")
        yield call(manageBodyClass, "vertical-collpsed", "remove")
        break
      case "icon":
        yield call(changeBodyAttribute, "data-keep-enlarged", "true")
        yield call(manageBodyClass, "vertical-collpsed", "add")
        break
      case "condensed":
        // yield call(manageBodyClass, "sidebar-enable", "add")
        // if (!isMobile) yield call(manageBodyClass, "vertical-collpsed", "add")
        yield call(manageBodyClass, "sidebar-enable", "add")
        if (window.screen.width >= 992) {
          yield call(manageBodyClass, "vertical-collpsed", "remove")
          yield call(manageBodyClass, "sidebar-enable", "remove")
          yield call(manageBodyClass, "vertical-collpsed", "add")
          yield call(manageBodyClass, "sidebar-enable", "add")
        } else {
          yield call(manageBodyClass, "sidebar-enable", "add")
          yield call(manageBodyClass, "vertical-collpsed", "add")
        }
        break
      default:
        yield call(changeBodyAttribute, "data-sidebar-size", "")
        yield call(manageBodyClass, "sidebar-enable", "remove")
        if (!isMobile)
          yield call(manageBodyClass, "vertical-collpsed", "remove")
        break
    }
  } catch (error) { }
}

/**
 * Show the rightsidebar
 */
function* showRightSidebar({ payload: {isopen, type} }) {
  try {
    if(isopen){
      if(type === 'examplecode'){
        yield call(manageBodyClass, "example-bar-enabled", "add")
      }else if(type === 'settings'){
        yield call(manageBodyClass, "right-bar-enabled", "add")
      }
    }else{
        yield call(manageBodyClass, "example-bar-enabled", "remove")
        yield call(manageBodyClass, "right-bar-enabled", "remove")
    }
    
  } catch (error) { }
}

/**
 * Watchers
 */
export function* watchChangeLayoutType() {
  yield takeEvery(changeLayoutAction, changeLayout)
}

export function* watchChangeLayoutWidth() {
  yield takeEvery(changeLayoutWidthAction, changeLayoutWidth)
}

export function* watchChangeLeftSidebarTheme() {
  yield takeEvery(changeSidebarTheme, changeLeftSidebarTheme)
}

export function* watchChangeLeftSidebarType() {
  yield takeEvery(changeSidebarType, changeLeftSidebarType)
}

export function* watchChangeTopbarTheme() {
  yield takeEvery(changeTopbarThemeAction, changeTopbarTheme)
}

export function* watchShowRightSidebar() {
  yield takeEvery(showRightSidebarAction, showRightSidebar)
}

function* LayoutSaga() {
  yield all([
    fork(watchChangeLayoutType),
    fork(watchChangeLayoutWidth),
    fork(watchChangeLeftSidebarTheme),
    fork(watchChangeLeftSidebarType),
    fork(watchShowRightSidebar),
    fork(watchChangeTopbarTheme),
  ])
}

export default LayoutSaga
