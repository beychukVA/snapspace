import React from "react";
import { Footer } from "../components/commonSections/Footer";
import { Header } from "../components/commonSections/Header";
import { StartButton } from "../components/StartButton";
import { AvatarIcon } from "../components/svg";
import { useNavigate } from "react-router-dom";

export const Registered = () => {
  const navigate = useNavigate();
  return (
    <>
      <Header />
      <div className="bg-blue-dark flex flex-col items-center justify-start w-full h-[80vh] px-[20px] sm:px-[45px] text-white pt-[40px] sm:pt-[70px]">
        <div className="flex flex-col sm:flex-row items-center">
          <div className="mb-[30px] h-[72px] md:h-[115px]">
            <AvatarIcon />
          </div>
          <div className="md:ml-[42px]">
            <div className=" text-center sm:text-left text-[#77F2A1]  text-[38px] sm:text-[44px] md:text-[46px] lg:text-[54px]  xl:text-[80px]  font-bold">
              Thank you
            </div>
            <div className="text-center text-[#FFFFFF] sm:text-left text-[28px]  sm:text-[34px]  lg:text-[38px]  xl:text-[40px] max-w-[775px] mb-[30px]  font-bold ">
              You’re all registered
            </div>
          </div>
        </div>
        <div className="text-[22px] w-auto text-[#FFFFFF] text-center sm:text-left mb-[32px]">
          Click ‘Start creating’ to begin your SnapSpace floorplan creation
          journey
        </div>
        <div className="flex w-full justify-center">
          {/* <StartButton to="/planSubmitted" classNames="w-[207px] h-[50px]" /> */}
          <div
            onClick={() => navigate("/")}
            className="flex items-center justify-center text-[22px] font-bold cursor-pointer text-[#1F2B37] my-[35px] rounded-full bg-[#77F2A1] w-[185px] h-[50px]"
          >
            Finish
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
