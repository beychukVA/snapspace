import React from "react";
import { Footer } from "../commonSections/Footer";
import { StartButton } from "../StartButton";

//if animation, in footer should pass prop absolute

export const CreateNow = () => {
  return (
    <div className="section relative ">
      <section className="text-[#4F76F6] bg-white px-[20px] sm:px-[45px] pt-[85px] pb-[80px]">
        <div className="text-[38px] sm:text-[44px] md:text-[46px] lg:text-[54px] xl:text-[60px] mb-[30px] font-bold">
          Create your workspace layouts now
        </div>
        <div className="text-[22px] mb-[25px]">
          All you need is a floor plan to get started
        </div>
        <StartButton
          to="/getStarted"
          classNames="w-[258px] h-[62px] text-white"
        />
      </section>
      <Footer />
    </div>
  );
};
