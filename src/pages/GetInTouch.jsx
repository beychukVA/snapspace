import React from "react";
import { Footer } from "../components/commonSections/Footer";
import { Header } from "../components/commonSections/Header";

export const GetInTouch = () => {
  return (
    <>
      <Header />
      <div className="bg-blue-light py-[32px] px-[35px]">
        <div className="md:w-[456px] h-[80vh]">
          <h2 className="text-[32px] font-bold leading-10 text-blue-dark md:text-[64px] md:leading-[80px]">
            Get in touch
          </h2>
          <div className="mt-[25px] md:mt-[52px] text-[20px] font-normal leading-[30px] md:text-[32px] md:leading-[48px]">
            <span>Contact us to get your queries and questions answered.</span>
            <div className="mt-[25px] md:mt-[52px] underline underline-offset-[5px] md:underline-offset-8">
              <a href="mailto:info@snapspace.ai">info@snapspace.ai</a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
