import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../Button";

export const CallToAction = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-blue-light200 text-blue-dark pt-36 md:pt-48 pb-36 md:pb-52">
      <div className="container mx-auto">
        <h2 className="m-0 mb-3 text-[2.25rem] lg:text-[3.75rem] font-bold text-center">
          Create your layout now
        </h2>
        <p className="mb-4 md:mb-8 text-[1.25rem] md:text-[1.5rem] text-center">
          All you need is a floor plan to get started
        </p>

        <div className="flex justify-center">
          <Button onClick={() => navigate("/questionnaire")}>
            Start creating
          </Button>
        </div>
      </div>
    </div>
  );
};
