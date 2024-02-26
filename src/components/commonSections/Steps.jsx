import React from "react";
import { Button } from "../Button";
import Step1Icon from "../../assets/step-1.svg";
import Step2Icon from "../../assets/step-2.svg";
import Step3Icon from "../../assets/step-3.svg";
import { useNavigate } from "react-router-dom";

export const Steps = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-blue-light200 text-blue-dark py-36 md:py-40">
      <div className="container mx-auto">
        <h2 className="m-0 mb-8 md:mb-24 text-[2.25rem] md:text-[3.75rem] font-bold leading-tight text-center">
          All it takes is 3 easy steps
        </h2>

        <div className="flex flex-col md:flex-row justify-around gap-14 mb-12 md:mb-15">
          <div className="flex flex-col align-center">
            <img
              className="h-[135px] md:h-[215px]"
              src={Step1Icon}
              alt="step-1"
            />
            <p className="m-0 mt-6 md:mt-15 font-bold text-center text-[1.25rem] md:text-[1.875rem]">
              Upload your building floor plan
            </p>
          </div>
          <div className="flex flex-col align-center">
            <img
              className="h-[135px] md:h-[215px]"
              src={Step2Icon}
              alt="step-2"
            />
            <p className="m-0 mt-6 md:mt-15 font-bold text-center text-[1.25rem] md:text-[1.875rem]">
              Input your workspace requirements
            </p>
          </div>
          <div className="flex flex-col align-center">
            <img
              className="h-[135px] md:h-[215px]"
              src={Step3Icon}
              alt="step-3"
            />
            <p className="m-0 mt-6 md:mt-15 font-bold text-center text-[1.25rem] md:text-[1.875rem]">
              Receive a bespoke layout
            </p>
          </div>
        </div>

        <div className="flex justify-center">
          <Button onClick={() => navigate("/questionnaire")}>
            Start creating
          </Button>
        </div>
      </div>
    </div>
  );
};
