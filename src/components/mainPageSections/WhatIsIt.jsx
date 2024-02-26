import React from "react";
import { ArrowsDownIcon } from "../../components/svg";
import { LogoInCircleIcon } from "../svg";

export const WhatIsIt = ({ onArrowDownClick }) => {
  return (
    <div className="section">
      <section className="text-[#4F76F6] bg-white px-[20px] sm:px-[45px]  pt-[95px] pb-[50px]">
        <div className="block lg:flex">
          <div className="flex justify-center  mr-0 lg:mr-[110px] mb-[30px]">
            <LogoInCircleIcon />
          </div>
          <div className="max-w-[860px]">
            <div className="text-[38px] sm:text-[44px] md:text-[46px] lg:text-[54px] xl:text-[60px] font-bold mb-[15px] sm:mb-[25px] md:lg-[35px]">
              What is it?
            </div>
            <div className="text-[22px] text-[#1F2B37] mb-[30px]">
              SnapSpace is an auto-generative design platform.
            </div>
            <div className="text-[22px] text-[#1F2B37] mb-[30px]">
              It will create bespoke floor layouts based on your specific
              workplace re- quirements. It does this by referencing an internal
              database of thousands of the best quality workplace floor plans.
            </div>
            <div className="text-[28px] font-bold mb-[10px]">
              Bespoke layouts
            </div>
            <div className="text-[22px] text-[#1F2B37] mb-[30px]">
              Tailored to the precise requirements of your employees and
              business
            </div>
            <div className="text-[28px] font-bold mb-[10px]">
              Real estate savings
            </div>
            <div className="text-[22px] text-[#1F2B37] mb-[30px]">
              The AI will drive the most efficient use of space ensuring you
              don’t pay a penny more on real estate than you really need to
            </div>
            <div className="text-[28px] font-bold mb-[10px]">
              Fast turnaround
            </div>
            <div className="text-[22px] text-[#1F2B37] mb-[30px]">
              Takes hours rather than days to generate layouts buying you time
              to make important real estate decisions
            </div>
            <div className="text-[28px] font-bold mb-[10px]">
              Explore a variety of layouts
            </div>
            <div className="text-[22px] text-[#1F2B37] mb-[30px]">
              Explore a variety of layouts options, all delivered within the
              same timeframe as generating one
            </div>
          </div>
        </div>
        <div
          onClick={onArrowDownClick}
          className="mr-auto ml-auto cursor-pointer w-fit "
        >
          <ArrowsDownIcon className={"#77F2A1"} />
        </div>
      </section>
    </div>
  );
};
