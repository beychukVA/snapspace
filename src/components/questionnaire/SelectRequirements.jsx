import React, { useState } from "react";
import { QuestionnaireStepsEnum } from "../../lib/QuestionnaireStepsEnum";
import { Button } from "../Button";
import { QuestionnaireQuestionBlock } from "./QuestionnaireQuestionBlock";
import { QuestionTitle } from "./QuestionTitle";
import DesksIco from "../../assets/filter-desks.svg";
import BreakOutAreaIco from "../../assets/filter-breakout-area.svg";
import ReceptionIco from "../../assets/filter-reception.svg";
import MeetingRoomSmIco from "../../assets/filter-meeting-room-sm.svg";
import MeetingRoomMdIco from "../../assets/filter-meeting-room-md.svg";
import MeetingRoomLgIco from "../../assets/filter-meeting-room-lg.svg";
import StoreRoomIco from "../../assets/filter-store-room.svg";
import TeaRoomIco from "../../assets/filter-tea-room.svg";
import PeopleIco from "../../assets/people.svg";
import MinusIco from "../../assets/minus.svg";
import PlusIco from "../../assets/plus.svg";
import CheckBoxUncheckedIco from "../../assets/checkbox-unchecked.svg";
import CheckedIco from "../../assets/checked.svg";

const defaultFilters = [
  {
    id: 0,
    title: "Desks",
    quantity: 0,
    imageSrc: DesksIco,
  },
  {
    id: 1,
    title: "Breakout areas",
    quantity: 0,
    imageSrc: BreakOutAreaIco,
  },
  {
    id: 2,
    title: "Reception",
    quantity: 0,
    imageSrc: ReceptionIco,
  },
  {
    id: 3,
    title: "Meeting room",
    quantity: 0,
    imageSrc: MeetingRoomSmIco,
    options: {
      icon: PeopleIco,
      option: "4-6 people",
    },
  },
  {
    id: 4,
    title: "Meeting room",
    quantity: 0,
    imageSrc: MeetingRoomMdIco,
    options: {
      icon: PeopleIco,
      option: "8-10 people",
    },
  },
  {
    id: 5,
    title: "Meeting room",
    quantity: 0,
    imageSrc: MeetingRoomLgIco,
    options: {
      icon: PeopleIco,
      option: "12-16 people",
    },
  },
  {
    id: 6,
    title: "Store room",
    quantity: 0,
    imageSrc: StoreRoomIco,
  },
  {
    id: 7,
    title: "Tea point",
    quantity: 0,
    imageSrc: TeaRoomIco,
  },
];

export const SelectRequirements = ({
  data,
  setStep,
  setData,
  setSelectedSubStep,
}) => {
  const [filters, setFilters] = useState(
    defaultFilters.map((f, i) => ({
      ...f,
      quantity: i === 0 ? +data.desksValue : f.quantity,
    }))
  );
  const [selectedFilters, setSelectedFilters] = useState([filters[0]]);

  const handleNext = () => {
    if (isNextBtnDisabled) return;

    setData({
      ...data,
      choice: false,
      selectedWorkplace: 0,
      selectedFilters,
    });
    setStep(QuestionnaireStepsEnum.SUMMARY);
  };

  const updateQuantity = (array, filter, coof) => {
    return array.map((f) => ({
      ...f,
      quantity: f.id === filter.id ? f.quantity + coof : f.quantity,
    }));
  };

  const handleQuantityChange = (filter, coof) => {
    const updatedFilters = updateQuantity(filters, filter, coof);
    setFilters(updatedFilters);

    const updatedselectedFilters = updateQuantity(
      selectedFilters,
      filter,
      coof
    );
    setSelectedFilters(updatedselectedFilters);

    const isSelected = selectedFilters.some(({ id }) => id === filter.id);

    if (filter.quantity + coof > 0) {
      if (!isSelected) {
        filter.quantity += coof;
        setSelectedFilters([...selectedFilters, filter]);
      }
    } else {
      if (isSelected) {
        setSelectedFilters(
          selectedFilters.filter(({ id }) => id !== filter.id)
        );
      }
    }
  };

  const changeQuantity = (array, filter, quantity) => {
    return array.map((f) => {
      if (f.id === filter.id) {
        f.quantity = quantity;
        return f;
      }
      return f;
    });
  };

  const handleSelect = (filter) => {
    const isSelected = selectedFilters.some(({ id }) => id === filter.id);

    if (isSelected) {
      setFilters(changeQuantity(filters, filter, 0));
      setSelectedFilters(changeQuantity(selectedFilters, filter, 0));
      return setSelectedFilters(
        selectedFilters.filter(({ id }) => id !== filter.id)
      );
    }

    setSelectedFilters([...selectedFilters, filter]);
    setFilters(changeQuantity(filters, filter, 1));
  };

  const checkQuantity = () => {
    return selectedFilters.some((f) => f.quantity === 0);
  };

  const isNextBtnDisabled = !selectedFilters?.length && !checkQuantity();

  return (
    <div>
      <QuestionnaireQuestionBlock>
        <QuestionTitle>Select your requirements</QuestionTitle>

        <div className="max-w-full md:max-w-3xl flex md:flex-wrap gap-3 overflow-y-auto noScrollBar">
          {filters.map((f) => {
            const isSelected = selectedFilters.some(({ id }) => id === f.id);
            const backgroundColor = isSelected
              ? "rgba(195, 208, 255, 0.3)"
              : "#2F3C63";
            return (
              <div
                key={f.id}
                className="relative px-5 md:px-3 pb-6 md:pb-4 rounded-md h-[473px] min-w-[333px] w-[333px] md:h-[312px] md:w-[220px] md:min-w-[220px] flex flex-col justify-between items-center cursor-pointer"
                style={{ backgroundColor }}
              >
                <div
                  className="absolute right-3 top-3"
                  onClick={() => handleSelect(f)}
                >
                  <img
                    src={isSelected ? CheckedIco : CheckBoxUncheckedIco}
                    alt="checked"
                  />
                </div>

                <div className="cursor-pointer" onClick={() => handleSelect(f)}>
                  <img
                    className="mt-8 h-[230px] md:h-[155px]"
                    src={f.imageSrc}
                    alt="filter_ico"
                  />
                </div>

                <div className="w-full">
                  <div className="min-h-[50px]">
                    <div className="border-b-[0.5px] pb-1 mb-3">
                      <h5 className="text-[1.5rem] md:text-[1rem] font-bold leading-8">
                        {f.title}
                      </h5>

                      {f.options && (
                        <div className="flex items-center">
                          <img src={f.options.icon} alt="option_ico" />
                          <span className="text-[11px] ml-1">
                            {f.options.option}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="flex justify-between items-center">
                    <div className="text-[1.25rem] md:text-[0.875rem]">
                      Quantity
                    </div>
                    <div className="flex items-center">
                      <div
                        className="px-2 py-3 cursor-pointer"
                        onClick={() => {
                          // if (isSelected && f.quantity > 0) {
                          if (f.quantity > 0) {
                            handleQuantityChange(f, -1);
                          }
                        }}
                      >
                        <img src={MinusIco} alt="minus" />
                      </div>
                      <div
                        className="px-5 py-3 text-[1.25rem] md:text-[0.875rem] rounded-md"
                        style={{
                          backgroundColor: isSelected
                            ? "rgba(255, 255, 255, 0.2)"
                            : "rgba(255, 255, 255, 0.1)",
                        }}
                      >
                        {f.quantity}
                      </div>
                      <div
                        className="px-2 py-3 cursor-pointer"
                        onClick={() => {
                          // if (isSelected) {
                          handleQuantityChange(f, 1);
                          // }
                        }}
                      >
                        <img src={PlusIco} alt="plus" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
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
