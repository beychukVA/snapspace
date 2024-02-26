import React from "react";
import { ArrowsDownIcon } from "../svg";

import interior from "./../../assets/interior.png";
import team from "./../../assets/team.png";

export const Benefits = ({ onArrowDownClick }) => {
  return (
    <div className="section">
      <section className="text-[#4F76F6] bg-white px-[20px] sm:px-[45px] pt-[50px] sm:pt-[95px] pb-50 sm:pb-[90px]">
        <div className="flex flex-col items-center lg:flex-row">
          <div className="lg:mr-[110px] max-w-[450px] lg:min-w-[350px] mb-[30px] lg:mb-0 flex flex-col justify-between">
            <img src={interior} alt="img" className="mb-[30px]" />
            <img src={team} alt="img" />
          </div>
          <div className="max-w-[860px]">
            <div className="text-[38px] sm:text-[44px] md:text-[46px] lg:text-[54px] xl:text-[60px] font-bold mb-[35px]">
              Why choose SnapSpace?
            </div>
            {/* <div className="text-[28px] font-bold mb-[15px]">
          With AI, we can build your project, quicker and more cost effectively
           </div> */}
            <div className="text-[22px] text-[#1F2B37]  mb-[30px]">
              The SnapSpace team are on a mission: to unlock the hidden
              potential within every workplace environment for the benefit of
              business.
            </div>
            <div className="text-[22px] text-[#1F2B37]  mb-[30px]">
              This drive bought us together after years of working
              independently. We comprise of project and programme managers,
              workplace designers and strategists, data architects and
              programmers. We are genuinely enthusiastic and infectiously
              curious.
            </div>
            <div className="text-[28px] font-bold mb-[15px]">
              Expertise & experience
            </div>
            <div className="text-[22px] text-[#1F2B37]  mb-[30px]">
              Our team comprises of cross-discpline and cross-sector
              industry-leading experts
            </div>
            <div className="text-[28px] font-bold mb-[15px]">
              Innovator spirit
            </div>
            <div className="text-[22px] text-[#1F2B37]">
              Never satisfied with the way things have ‘always been done’ we
              share a common vision around harnessing technology to better solve
              real estate challanges
            </div>
            <div className="text-[28px] font-bold mb-[15px]">
              At the cutting edge
            </div>
            <div className="text-[22px] text-[#1F2B37]">
              We understand that our industry is at a turning point. Advances in
              AI technology, organisational design, environmental pshycology and
              sustainibility are tranforming the way we use space.
            </div>
          </div>
        </div>
        <div
          onClick={onArrowDownClick}
          className="mr-auto ml-auto cursor-pointer w-fit mt-[50px]"
        >
          <ArrowsDownIcon className={"#77F2A1"} />
        </div>
      </section>
    </div>
  );
};
