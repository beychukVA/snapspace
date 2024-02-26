import React from "react";
import { Footer } from "../components/commonSections/Footer";
import { Header } from "../components/commonSections/Header";
import { LoginLayout } from "../components/LoginLayout";

export const Login = () => {
  return (
    <div className="relative bg-blue-dark">
      <Header />
      <LoginLayout />
      <Footer />
    </div>
  );
};
