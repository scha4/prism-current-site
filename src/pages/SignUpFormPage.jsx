import React from "react";
import NavbarMain from "../components/NavbarMain";
import Footer from "../components/Footer";
import SignUpHero from "../components/SignUpHero";
import PersonalTraining from "../components/PersonalTraining";
import Camp from "../components/Camp";
import SignUpForm from '../components/SignUpForm';
function SignUpFormPage() {
  return (
    <>
      <NavbarMain />
      <SignUpForm/>
      <Footer />
    </>
  );
}

export default SignUpFormPage;
