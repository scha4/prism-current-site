import React from "react";
import NavbarMain from "../components/NavbarMain";
import Footer from "../components/Footer";
import SignUpHero from "../components/SignUpHero";
import PersonalTraining from "../components/PersonalTraining";
import Camp from "../components/Camp";
import SignUpFormPersonal from '../components/SignUpFormPersonal';
import SignUpFormMondayHoopLab from '../components/SignUpFormMondayHoopLab';
import { useLocation } from 'react-router-dom';
import SignUpComplete from '../components/SignUpComplete';
function SignUpCompletePage() {
  const location = useLocation();

  return (
    <>
      <NavbarMain />
      <SignUpComplete />
      <Footer />
    </>
  );
}

export default SignUpCompletePage;
