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
import Classes from './pages/class/Classes';
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/aboutus" element={<AboutUsPage />}></Route>
        <Route path="/trainers" element={<TrainersPage />}></Route>
        <Route path="/events" element={<EventsPage />}></Route>
        <Route path="/signup" element={<SignUpPage />}></Route>
        <Route path="/classes" element={<Classes />}></Route>
        <Route path="/contactus" element={<ContactUsPage />}></Route>
        <Route path="/byAnyMeans" element={<ByAnyMeansCamp />}></Route>
        <Route path="/levelUp" element={<LevelUpCamp />}></Route>
        <Route path="/ChosunTraining" element={<ChosunTraining />}></Route>
        <Route path="/PEC" element={<PEC />}></Route>
        <Route path="/ChungjooYouth" element={<ChungjooYouth />}></Route>
      </Routes>
    </>
  );
}

export default App;
