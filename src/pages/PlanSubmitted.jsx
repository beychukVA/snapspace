import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../components/Button";
import { Footer } from "../components/commonSections/Footer";
import { Header } from "../components/commonSections/Header";
import { CheckCircleIcon } from "../components/svg";

export const PlanSubmitted = () => {
  const navigate = useNavigate();

  return (
    <>
      <Header />
      <div className="flex-col align-middle justify-center text-center w-full h-[80vh] bg-blue-dark py-[150px] md:py-[100px]">
        <div className="mb-[20px] h-[72px] md:h-[115px] md:mb-[25px]">
          <CheckCircleIcon />
        </div>
        <div className="text-[#8DAEFF] font-bold text-[30px] leading-[37px] md:text-[40px] md:leading-[48px] pb-[20px] md:pb-[25px]">
          Requirements submitted
        </div>
        <div className="text-[#ffffff] text-[18px] leading-[28px] font-normal mb-[25px] md:mb-[30px] md:text-[24px] md:leading-[34px]">
          We have received your requirements and one of our team will be in
          touch shortly
        </div>
        <Button onClick={() => navigate("/profile")}>Go to My Profile</Button>
      </div>
      <Footer />
    </>
  );
};
