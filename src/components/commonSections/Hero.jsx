import React from "react";
import { Button } from "../Button";
import { Header } from "./Header";
import BgIcon from "../../assets/hero-bg.svg";
import { useNavigate } from "react-router-dom";

export const Hero = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-blue-light text-blue-dark relative overflow-hidden">
      <Header />
      <div className="container mx-auto pb-[22rem] md:pb-[12rem]">
        <div className="mt-8 md:mt-24">
          <h2 className="m-0 mb-7 text-[2rem] md:text-[3.75rem] font-bold leading-tight max-w-[350px] md:max-w-[630px]">
            We believe <br /> Artificial Intelligence will revolutionise how
            workplaces <br /> are designed
          </h2>
          <p className="m-0 mb-8 text-[1rem] md:text-[1.25rem] max-w-[295px] md:max-w-[465px] leading-[1.75]">
            We have built an AI driven generative design platform that will
            create floorplans based on your specific requirements.
          </p>

          <Button onClick={() => navigate("/questionnaire")}>
            Start creating
          </Button>
        </div>
      </div>

      <img
        className="absolute top-[600px] md:top-[650px] lg:top-[336px] xl:top-[236px] right-0 w-[95%] md:w-[48%]"
        src={BgIcon}
        alt="background"
      />
    </div>
  );
};
