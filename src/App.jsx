import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import TrainersPage from "./pages/TrainersPage";
import EventsPage from "./pages/EventsPage";
import AboutUsPage from "./pages/AboutUsPage";
import SignUpPage from "./pages/SignUpPage";
import ContactUsPage from "./pages/ContactUsPage";
import ByAnyMeansCamp from "./pages/ByAnyMeansCamp";
import LevelUpCamp from "./pages/LevelUpCamp";
import ChosunTraining from "./pages/ChosunTraining";
import PEC from "./pages/PEC";
import ChungjooYouth from "./pages/ChungjooYouth";
import SignUpFormPage from './pages/SignUpFormPage';
import Login from './pages/admin/Authentication/Login';
import Dashboard from './pages/admin/Dashboard';
import fakeBackend from './helpers/AuthType/fakeBackend';
import VerticalLayout from './components/admin/VerticalLayout/index'
import HorizontalLayout from './components/admin/HorizontalLayout/index'
import NonAuthLayout from './components/admin/NonAuthLayout'

import { useSelector } from 'react-redux';
import SignupLogs from './pages/admin/SignupLogs';
import SignUpCompletePage from './pages/SignUpCompletePage';
function App() {
  // fakeBackend();
  const layout = useSelector(state=> state.layout)
  function getLayout() {
    let layoutCls = VerticalLayout

    switch (layout.layoutType) {
      case "vertical":
        layoutCls = HorizontalLayout
        break
      default:
        layoutCls = VerticalLayout
        break
    }
    return layoutCls
  }
  const Layout = getLayout()

 
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/aboutus" element={<AboutUsPage />}></Route>
        <Route path="/trainers" element={<TrainersPage />}></Route>
        <Route path="/events" element={<EventsPage />}></Route>
        <Route path="/signup" element={<SignUpPage />}></Route>
        <Route path="/signupform/personal" element={<SignUpFormPage />}></Route>
        <Route path="/signupform/monday-hooplab" element={<SignUpFormPage />}></Route>
        <Route path="/signupform/complete" element={<SignUpCompletePage />}></Route>
        <Route path="/contactus" element={<ContactUsPage />}></Route>
        <Route path="/byAnyMeans" element={<ByAnyMeansCamp />}></Route>
        <Route path="/levelUp" element={<LevelUpCamp />}></Route>
        <Route path="/ChosunTraining" element={<ChosunTraining />}></Route>
        <Route path="/PEC" element={<PEC />}></Route>
        <Route path="/ChungjooYouth" element={<ChungjooYouth />}></Route>

        {/* admin */}
        <Route element={<NonAuthLayout location={location}/> }>
          <Route path="/admin/office/login" element={<Login/>}></Route>
        </Route>
        <Route element={<Layout location={location}/> }>
          <Route path="/admin/office/login" element={<Login/>}></Route>
          <Route path="/admin/office/dashboard" element={<Dashboard/>}></Route>
          <Route path="/admin/office/signuplogs" element={<SignupLogs/>}></Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
