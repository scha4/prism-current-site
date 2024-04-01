import { combineReducers } from "redux"
import { persistReducer } from 'redux-persist';
// Front
import layout from "./layout/layoutSlice"

// Authentication
import Login from "./auth/login/loginSlice"
import Account from "./auth/register/registerSlice"
import ForgetPassword from "./auth/forgetpwd/forgetpwdSlice"
import Profile from "./auth/profile/profileSlice"

//Calendar
import calendar from "./calendar/calendarSlice"

//chat
import chat from "./chat/chatSlice"

//contacts
import contacts from "./contacts/contactSlice"

//tasks
import tasks from "./tasks/taskSlice"

// const persistConfig = {
//   key: "root",             // 스토리지에 저장 할 때의 키 값
//   storage: sessionStorage, // storage : 로컬스토리지, sessionStroage : 세션스토리지
//   whitelist:["userSlice","menuSlice"], // 유지하고 싶은 데이터 넣어주면됨, string 형태이고 아래 combineReducers에 지정된 값들을 사용해주면 된다. 
//   blacklist:[] // 스토리지에 저장하지 않을 리덕스 모듈을 나열
// };


const rootReducer = combineReducers({
  // public
  layout,
  Login,
  Account,
  ForgetPassword,
  Profile,
  calendar,
  chat,
  tasks,
  contacts,
})

export default rootReducer
