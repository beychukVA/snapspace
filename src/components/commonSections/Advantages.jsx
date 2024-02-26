import React from "react";
import BgIcon from "../../assets/advantages-bg.svg";

export const Advantages = () => {
  return (
    <div className="bg-blue-dark text-light pt-[75px] md:pt-[170px] pb-[125px] md:pb-[250px] overflow-hidden">
      <div className="container mx-auto">
        <div className="text-[1.25rem] md:text-[2.25rem] max-w-[875px]">
          <p className="m-0 mb-5 md:mb-8">
            <b>SnapSpace</b> is an auto-generative design platform.
          </p>
          <p className="m-0">
            It creates bespoke floorplans based on your specific workplace
            requirements by utilising its deep learning from its extensive data
            set of the best quality floorplans.
          </p>
        </div>

        <div className="flex flex-col items-center md:items-start md:flex-row justify-between mt-16 md:mt-44">
          <img
            className="md:mt-8 lg:ml-16 w-[264px] lg:w-[418px] mb-24 md:mb-0"
            src={BgIcon}
            alt="background"
          />

          <div className="md:w-[55%] lg:w-[35%]">
            <div className="relative pb-6 mb-18 md:mb-24">
              <h5 className="m-0 mb-2 md:mb-3 text-[1.75rem] md:text-[2.25rem] font-bold">
                Bespoke layouts
              </h5>
              <p className="md:text-[1.25rem]">
                Produces layouts that match your precise requirements
              </p>
              <div className="absolute w-[300%] left-0 bottom-0 border-b border-blue-light200" />
            </div>

            <div className="relative pb-6 mb-18 md:mb-24">
              <h5 className="m-0 mb-2 md:mb-3 text-[1.75rem] md:text-[2.25rem] font-bold">
                Space efficiency
              </h5>
              <p className="md:text-[1.25rem]">
                Through smart analysis, SnapSpace can produce the most efficient
                layout ensuring maximum value from the space
              </p>
              <div className="absolute w-[300%] left-0 bottom-0 border-b border-blue-light200" />
            </div>

            <div className="relative pb-6">
              <h5 className="m-0 mb-2 md:mb-3 text-[1.75rem] md:text-[2.25rem] font-bold">
                Fast turnaround
              </h5>
              <p className="md:text-[1.25rem]">
                Quickly does the heavy lifting of fitting everything into the
                space giving you more time to focus on the key decision.
              </p>
              <div className="absolute w-[300%] left-0 bottom-0 border-b border-blue-light200" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
