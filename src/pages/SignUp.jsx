import React from "react";
import { Header } from "../components/commonSections/Header";
import { Footer } from "../components/commonSections/Footer";
import { SignUpLayout } from "../components/SignUpLayout";

export const SignUp = () => {
  return (
    <>
      <Header />
      <SignUpLayout />
      <Footer />
    </>
  );
};
