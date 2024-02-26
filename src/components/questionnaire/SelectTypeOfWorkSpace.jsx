import React, { useState } from "react";
import { QuestionnaireStepsEnum } from "../../lib/QuestionnaireStepsEnum";
import { Button } from "../Button";
import { QuestionnaireQuestionBlock } from "./QuestionnaireQuestionBlock";
import { QuestionTitle } from "./QuestionTitle";
import traditionalWorkPlaceImg from "../../assets/workplace-traditional.svg";
import hybridWorkPlaceImg from "../../assets/workplace-hybrid.svg";
import agileWorkPlaceImg from "../../assets/workplace-agile.svg";
import CheckedImg from "../../assets/checked-blue.svg";

const workplaceConfig = [
  {
    id: 0,
    title: "Traditional",
    imageSrc: traditionalWorkPlaceImg,
    advantages: [
      "Owned workstations",
      "Owned offices",
      "Communal breakout area/s",
      "Spaces to collaborate and focus",
    ],
  },
  {
    id: 1,
    title: "Hybrid",
    imageSrc: hybridWorkPlaceImg,
    advantages: [
      "Workstations shared – 1 desk per 2 people",
      "Shared offices",
      "Large communal breakout area/s",
      "Wide variety of spaces to collaborate and focus",
    ],
  },
  {
    id: 2,
    title: "Agile",
    imageSrc: agileWorkPlaceImg,
    advantages: [
      "Workstations shared – 1 desk per 4 people",
      "No owned offices",
      "Large communal breakout area/s",
      "Widest variety of spaces to collaborate and focus",
    ],
  },
];

export const SelectTypeOfWorkSpace = ({
  data,
  setStep,
  setData,
  setSelectedSubStep,
}) => {
  const isNextBtnDisabled = false;

  const [selectedWorkplace, setSelectedWorkplace] = useState(
    workplaceConfig[0]
  );

  const handleNext = () => {
    if (isNextBtnDisabled) return;

    setData({
      ...data,
      choice: true,
      selectedFilters: 0,
      selectedWorkplace,
    });
    setStep(QuestionnaireStepsEnum.SUMMARY);
  };

  const handleSelect = (w) => setSelectedWorkplace(w);

  return (
    <div>
      <QuestionnaireQuestionBlock>
        <QuestionTitle>What type of workplace would you like?</QuestionTitle>

        <div className="bg-blue-dark400 rounded-md border border-blue-light flex flex-col items-center overflow-hidden">
          <img
            className="mt-10 md:mt-16 mb-6 md:mb-8"
            src={selectedWorkplace.imageSrc}
            alt="workspace"
          />
          <div className="pb-3 border-b border-[#505B7B] w-[80%] mb-4">
            <h5 className="font-bold text-blue-light text-[1.25rem] text-center">
              {selectedWorkplace.title}
            </h5>
          </div>

          {selectedWorkplace.advantages.map((a) => (
            <div className="mb-1.5 flex items-center">
              <img src={CheckedImg} alt="checkmark" />
              <span className="ml-1.5 text-[0.875rem]">{a}</span>
            </div>
          ))}

          <div className="flex mt-10 w-full border-t border-t-blue-light">
            {workplaceConfig.map((w) => {
              const isSelected = w.id === selectedWorkplace.id;
              const color = isSelected ? "#1F2C56" : "#C6D6FF";
              const backgroundColor = isSelected ? "#C6D6FF" : "#1F2C56";

              return (
                <div
                  key={w.id}
                  className="text-[0.875rem] flex-1 py-3 cursor-pointer font-bold text-center first:border-l-0 border-l-[0.5px] border-l-gray"
                  onClick={() => handleSelect(w)}
                  style={{ color, backgroundColor }}
                >
                  {w.title}
                </div>
              );
            })}
          </div>
        </div>
      </QuestionnaireQuestionBlock>

      <div>
        <Button
          className="mr-4 text-[1rem] py-1"
          bgColor="#fff"
          onClick={() => setSelectedSubStep(null)}
        >
          Back
        </Button>
        <Button
          className=" text-[1rem] py-1"
          bgColor={isNextBtnDisabled ? "#79809A" : "#8DAEFF"}
          onClick={handleNext}
        >
          Finalise
        </Button>
      </div>
    </div>
  );
};
