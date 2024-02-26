import React from "react";

import bg from "./../../assets/Artboard18.png";
import { ArrowsDownIcon } from "../../components/svg";
import { StartButton } from "../../components/StartButton";
import { Header } from "./../commonSections/Header";

export const Intro = ({ onArrowDownClick }) => {
  return (
    <div className="section ">
      <Header />
      <section className="px-[20px] sm:px-[45px] ">
        <div className="text-[#77F2A1] text-[38px] sm:text-[44px] md:text-[46px] lg:text-[54px]  xl:text-[80px] font-bold max-w-[1198px] mb-[15px] pt-[40px] lg:pt-[80px] xl:pt-[142px]">
          We believe AI will revolutionise how workplaces are designed
        </div>
        <div className=" text-[22px] max-w-[630px] mb-[56px] ">
          We’re building an AI based generative design platform that creates
          your ideal floorplan layouts based on your specific organisational
          requirements
        </div>
        <div className="flex justify-center sm:justify-start">
          <StartButton to="/getStarted" classNames="w-[258px] h-[62px]" />
        </div>
        <div
          onClick={onArrowDownClick}
          className="mr-auto ml-auto cursor-pointer w-fit my-[70px] xl:my-[170px]"
        >
          <ArrowsDownIcon className={"#77F2A1"} />
        </div>
        <div className=" hidden lg:block absolute lg:right-[40px] lg:top-[330px] max-w-[370px] xl:max-w-full  xl:right-[110px] xl:top-[470px]">
          <img src={bg} alt="img" className="" />
        </div>
      </section>
    </div>
  );
};
