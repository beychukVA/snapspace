import React, { useState } from "react";
import retail from "./../assets/Retail.png";
import construction from "./../assets/Construction.png";
import realEstate from "./../assets/Real Estate.png";
import manufacturing from "./../assets/Manufacturing.png";
import technology from "./../assets/Technology.png";
import communications from "./../assets/Communications.png";
import education from "./../assets/Education.png";
import utilities from "./../assets/Utilities.png";
import research from "./../assets/Research.png";
import hospitality from "./../assets/Hospitality.svg";
import publicy from "./../assets/Public.svg";
import banking from "./../assets/Banking.svg";
export const ChoiceOfBusinessSector = () => {
  const [businessSectors, setBusinessSectors] = useState([
    { id: 1, title: "Financial services", img: banking },
    { id: 2, title: "Retail", img: retail },
    { id: 3, title: "Construction", img: construction },
    { id: 4, title: "Real Estate", img: realEstate },
    { id: 5, title: "Manufacturing", img: manufacturing },
    { id: 6, title: "Public Sector", img: publicy },
    { id: 7, title: "Technology", img: technology },
    { id: 8, title: "Hospitality & Leisure", img: hospitality },
    { id: 9, title: "Communications", img: communications },
    { id: 10, title: "Education", img: education },
    { id: 11, title: "Utilities", img: utilities },
    { id: 12, title: "Research & Development", img: research },
  ]);
  const [selectedSector, setSelectedSector] = useState("");

  return (
    <div className="bg-[#4F76F6] px-[20px] sm:px-[45px] pt-[40px] lg:pt-[70px]  lg:pb-[65px] text-[#77F2A1]">
      <div className="text-[34px] sm:text-[36px] lg:text-[38px] xl:text-[40px]  mb-[20px]  font-bold ">
        Tell us about the business you are in
      </div>
      <div className="text-[#77F2A1] text-[22px] font-bold mt-[30px] xl:mt-[50px] mb-[40px]">
        5. What sector are you in?
      </div>
      <div className="max-w-[1282px] grid  grid-cols-1 sm:grid-cols-2   md:grid-cols-3  lg:grid-cols-4  xl:grid-cols-6 grid-rows-2 gap-[44px]">
        {businessSectors.map((sector) => (
          <div
            key={sector.id}
            onClick={() => setSelectedSector(sector.id)}
            className="mr-auto ml-auto w-full max-w-[177px]"
          >
            <div
              className={`${
                sector.id === selectedSector && "!bg-[#77F2A1]  !border-white"
              } bg-[#77F2A180] px-[15px] py-[15px]  h-[177px] flex flex-col justify-between width-full border-4 border-[#77F2A1] border-opacity-0`}
            >
              <div className="">
                {sector.img && (
                  <img className="ml-auto mr-auto" src={sector.img} alt="img" />
                )}
              </div>
              <div className="font-bold text-[18px] text-center text-white">
                {sector.title}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
