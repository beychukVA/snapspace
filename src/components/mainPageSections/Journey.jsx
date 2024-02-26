import React from "react";
import img1 from "./../../assets/Artboard 19.png";
import img2 from "./../../assets/Artboard 20.png";
import img3 from "./../../assets/Artboard 21.png";
import {
  ArrowsDownIcon,
  DesignateButtonIcon,
  FloorplateButtonIcon,
  FloorplanButtonIcon,
} from "../../components/svg";
export const Journey = ({ onArrowDownClick }) => {
  return (
    <div className="section">
      <section className=" bg-[#4F76F6] px-[45px] pt-[70px]  pb-[50px]">
        <div className="text-[60px] font-bold mb-[10px]">
          Our journey so far
        </div>
        <div className=" text-[22px] mb-[87px]">
          Development of our AI platform is well underway and our current
          progress can be measured by these stages:
        </div>
        <div className="flex items-center justify-between px-[145px] mb-[95px]">
          <div className="max-w-[243px]">
            <img src={img1} alt="img" />
            <div className="text-[28px] text-center mb-[30px]   mt-[20px]    font-bold">
              Floorplate recognition
            </div>
            <div className="text-center mb-[20px] ">
              <FloorplateButtonIcon />
            </div>
            <div className=" text-[16px] text-center   ">
              Automatic identification of the internal space
            </div>
          </div>
          <div className="max-w-[243px]">
            <img src={img2} alt="img" />
            <div className="text-[28px] text-center mb-[30px]   mt-[20px]    font-bold">
              Designate & organise space
            </div>
            <div className="text-center mb-[20px] ">
              <DesignateButtonIcon />
            </div>
            <div className=" text-[16px] text-center   ">
              Creating a zoning layout identifying ideal sizes and
              configurations of spaces
            </div>
          </div>
          <div className="max-w-[243px]">
            <img src={img3} alt="img" />
            <div className="text-[28px] text-center mb-[30px]   mt-[20px]    font-bold">
              AI generated floorplan
            </div>
            <div className="text-center mb-[20px] ">
              <FloorplanButtonIcon />
            </div>
            <div className=" text-[16px] text-center ">
              Final product furniture space plan with specifric worksettings
              based on criteria you input
            </div>
          </div>
        </div>
        <div
          onClick={onArrowDownClick}
          className="mr-auto ml-auto cursor-pointer w-fit mb-[127px]"
        >
          <ArrowsDownIcon className={"#77F2A1"} />
        </div>
      </section>
    </div>
  );
};
