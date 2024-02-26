import React from "react";

import folder from "./../../assets/folder.png";
import cloud from "./../../assets/cloud.png";
import layout from "./../../assets/layout.png";
import { ArrowsDownIcon } from "../../components/svg";
import { StartButton } from "../../components/StartButton";

export const ThreeSteps = ({ onArrowDownClick }) => {
  return (
    <div className="section">
      <section className="text-white bg-[#4F76F6] px-[20px] sm:px-[45px] pt-[40px] sm:pt-[70px] pb-[65px]  ">
        <div className="text-[38px] sm:text-[44px] md:text-[46px] lg:text-[54px] xl:text-[60px] font-bold mb-[50px]">
          All it takes is 3 easy steps
        </div>
        <div className="flex flex-col items-center lg:flex-row  xl:px-[145px] mb-[70px] justify-between">
          <div className="lg:max-w-[245px] mb-[40px] ">
            <div className="flex min-h-[210px] justify-center items-end">
              <img src={folder} alt="img" />
            </div>
            <div className="text-[28px] text-center font-bold mt-[30px]">
              Step 1
            </div>
            <div className=" text-[22px] text-center">
              Upload your building floor plan
            </div>
          </div>
          <div className="lg:max-w-[245px] mb-[40px] ">
            <div className="flex min-h-[210px] items-end justify-center">
              <img src={cloud} alt="img" />
            </div>
            <div className="text-[28px] text-center font-bold mt-[30px]">
              Step 2
            </div>
            <div className=" text-[22px] text-center">
              Input your workspace requirements
            </div>
          </div>
          <div className="lg:max-w-[245px] mb-[40px] ">
            <div className="flex min-h-[210px] items-end justify-center">
              <img src={layout} alt="img" />
            </div>
            <div className="text-[28px] text-center font-bold mt-[30px]">
              Step 3
            </div>
            <div className=" text-[22px] text-center">
              View your workspace zoning layout
            </div>
          </div>
        </div>
        <div className="flex justify-center mb-[40px]">
          <StartButton
            to="/getStarted"
            classNames="w-[258px] text-white h-[62px]"
          />
        </div>
        <div
          onClick={onArrowDownClick}
          className="mr-auto ml-auto cursor-pointer w-fit mt-[100px]"
        >
          <ArrowsDownIcon className={"#FFF"} />
        </div>
      </section>
    </div>
  );
};
