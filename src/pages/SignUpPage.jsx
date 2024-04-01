import React from "react";
import NavbarMain from "../components/NavbarMain";
import Footer from "../components/Footer";
import SignUpHero from "../components/SignUpHero";
import PersonalTraining from "../components/PersonalTraining";
import Camp from "../components/Camp";
import HoopLab from "../components/HoopLab";
function SignUpPage() {
  return (
    <>
      <NavbarMain />
      <SignUpHero />
      <PersonalTraining />
      <HoopLab />
      <Camp />
      <Footer />
    </>
  );
}

export default SignUpPage;
