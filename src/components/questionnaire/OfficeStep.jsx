import React, { useState } from "react";
import { ButtonSelectable } from "../ButtonSelectable";
import { TextInput } from "../TextInput";
import { Toggle } from "../Toggle";
import { FileUploader } from "../FileUploader/FileUploader";
import { QuestionnaireQuestionBlock } from "./QuestionnaireQuestionBlock";
import { QuestionTitle } from "./QuestionTitle";
import { Button } from "../Button";
import { QuestionnaireStepsEnum } from "../../lib/QuestionnaireStepsEnum";

const areaOptions = ["sqm", "sqft"];

export const OfficeStep = ({ setStep, setData }) => {
  const [activeAreaIndex, setActiveAreaIndex] = useState(0);
  const [internalAreaValue, setInternalAreaValue] = useState();
  const [desksValue, setDesksValue] = useState();
  const [peopleValue, setPeopleValue] = useState(0);
  const [file, setFile] = useState(null);

  const [maxAllowedOccupancySelected, setMaxAllowedOccupancySelected] =
    useState();

  const handleSelect = (o) => {
    const activeIndex = areaOptions.findIndex((option) => option === o);
    setActiveAreaIndex(activeIndex);
  };

  const isNextBtnDisabled = !internalAreaValue || !file || !desksValue;

  const handleNext = () => {
    if (isNextBtnDisabled) return;

    setData({
      file,
      desksValue,
      peopleValue,
      internalAreaValue,
      activeAreaIndex,
    });
    setStep(QuestionnaireStepsEnum.REQUIREMENTS);
  };

  return (
    <div>
      <QuestionnaireQuestionBlock>
        <QuestionTitle>How many desks do you need?</QuestionTitle>
        <TextInput
          placeholder="Type"
          type="number"
          value={desksValue}
          onChange={({ target }) => setDesksValue(target.value)}
        />
      </QuestionnaireQuestionBlock>

      <QuestionnaireQuestionBlock>
        <QuestionTitle hintText="The net internal area <br /> of the office">
          What is the net internal area of the office?
        </QuestionTitle>

        <div className="mb-4">
          <Toggle
            options={areaOptions}
            handleSelect={handleSelect}
            activeIndex={activeAreaIndex}
          />
        </div>
        <TextInput
          placeholder="Type net internal area"
          value={internalAreaValue}
          onChange={({ target }) => setInternalAreaValue(target.value)}
          rightElement={internalAreaValue && areaOptions[activeAreaIndex]}
          type="number"
        />
      </QuestionnaireQuestionBlock>

      <QuestionnaireQuestionBlock>
        <QuestionTitle hintText="The net internal area <br /> of the office">
          Do you know the maximum allowed occupancy?
        </QuestionTitle>

        <div className="flex gap-2 mb-3 max-w-[345px]">
          <ButtonSelectable
            isSelected={maxAllowedOccupancySelected === "Yes"}
            handleClick={() => setMaxAllowedOccupancySelected("Yes")}
          >
            Yes
          </ButtonSelectable>
          <ButtonSelectable
            isSelected={maxAllowedOccupancySelected === "No"}
            handleClick={() => setMaxAllowedOccupancySelected("No")}
          >
            No
          </ButtonSelectable>
        </div>

        {maxAllowedOccupancySelected === "Yes" && (
          <TextInput
            placeholder="Type net internal area"
            value={peopleValue}
            onChange={({ target }) => setPeopleValue(target.value)}
            rightElement={internalAreaValue && "people"}
            type="number"
          />
        )}
      </QuestionnaireQuestionBlock>

      <QuestionnaireQuestionBlock>
        <FileUploader {...{ file, setFile }} />
      </QuestionnaireQuestionBlock>

      <div>
        <Button className="mr-4 text-[1rem] py-1" bgColor="#fff">
          Back
        </Button>
        <Button
          className=" text-[1rem] py-1"
          bgColor={isNextBtnDisabled ? "#79809A" : "#8DAEFF"}
          onClick={handleNext}
        >
          Next
        </Button>
      </div>
    </div>
  );
};
