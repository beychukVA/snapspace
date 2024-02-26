import React from "react";
import { Footer } from "../components/commonSections/Footer";
import { Header } from "../components/commonSections/Header";
import { VerificationCodeLayout } from "../components/VerificationCodeLayout";

export const VerificationCode = () => {
  return (
    <div className="relative bg-blue-dark">
      <Header />
      <VerificationCodeLayout />
      <Footer />
    </div>
  );
};
