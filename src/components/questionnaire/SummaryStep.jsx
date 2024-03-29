import React, { useState } from "react";
import { useEffect } from "react";
import { QuestionnaireStepsEnum } from "../../lib/QuestionnaireStepsEnum";
import { Button } from "../Button";
import { Checkbox } from "../Checkbox/Checkbox";
import { Modal } from "../Modal";
import { TermsAndConditions } from "../TermsAndConditions";
import { QuoteLayout } from "../../components/QuoteLayout";
import { Auth } from "aws-amplify";

const summaryList = [
  {
    id: 0,
    title: null,
    items: [
      {
        id: 1,
        title: "Number of desks",
        value: "150",
      },

      {
        id: 2,
        title: "Address",
        value: "Crusader Court <br /> Poole <br /> BH4 9MH",
      },
      {
        id: 3,
        title: "Net internal area",
        value: "5000sqm",
      },
      {
        id: 4,
        title: "Maximum allowed occupancy",
        value: "170",
      },
    ],
  },
];

let requirementsList = [
  {
    id: 1,
    title: "Requirements",
    items: [],
  },
];

const rate = 0.1;
const convertedRate = 10.76391042;

export const SummaryStep = ({ data, setStep, setData }) => {
  const [isTermsAndCondChecked, setTermsAndCondChecked] = useState(false);
  const [netInternalArea, setNetInternalArea] = useState(0);
  const [totalCost, setTotalCost] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [userAddress, setUserAddress] = useState("N/A");

  const {
    activeAreaIndex,
    internalAreaValue,
    desksValue,
    peopleValue,
    selectedWorkplace,
    selectedFilters,
    choice,
  } = data;

  useEffect(() => {
    makeArea();
    formRequirements();
    getAddress();
  }, []);

  const makeArea = () => {
    switch (activeAreaIndex) {
      case 0:
        const internalArea = internalAreaValue * convertedRate;
        setNetInternalArea(internalArea);
        setTotalCost((internalArea * rate).toFixed(2));
        break;
      case 1:
        setNetInternalArea(internalAreaValue);
        setTotalCost((internalAreaValue * rate).toFixed(2));
        break;

      default:
        break;
    }
  };

  const getAddress = async () => {
    const user = await Auth.currentUserInfo();
    if (user) {
      const {
        attributes: { "custom:address": address },
      } = user;
      return setUserAddress(address);
    }
    return;
  };

  const formRequirements = () => {
    requirementsList = [{ ...requirementsList[0], items: [] }];
    if (selectedWorkplace) {
      const { id, title } = selectedWorkplace;
      requirementsList.map((item) => {
        item.items.push({
          id: id,
          title: "Autogenerated layout",
          value: `${title} layout`,
        });
      });
    }
    if (selectedFilters) {
      requirementsList.map((item) => {
        selectedFilters.map(({ id, quantity, title, options }) => {
          item.items.push({
            id: id,
            title: `${title} ${options ? `(${options?.option})` : ""}`,
            value: `QTY:${quantity}`,
          });
        });
      });
    }
  };

  const handleBack = () => {
    setStep(QuestionnaireStepsEnum.REQUIREMENTS);
  };

  const handleNext = () => {
    if (!isTermsAndCondChecked) return;
    setData({
      ...data,
      summary: totalCost,
      activeAreaIndex,
      internalAreaValue,
      desksValue,
      peopleValue,
      summaryList,
      requirementsList,
      choice,
    });

    setStep(QuestionnaireStepsEnum.COMPLETE);
  };

  const closeModal = () => setIsModalOpen(false);
  const openModal = () => setIsModalOpen(true);

  return (
    <div>
      <h2 className="font-bold text-blue-light md:text-[2rem] text-[1.875rem] mb-5 md:mb-3">
        Your quote
      </h2>

      <div className="w-full">
        <QuoteLayout
          address={userAddress}
          summaryList={summaryList}
          requirementsList={requirementsList}
          desksValue={desksValue}
          internalAreaValue={internalAreaValue}
          activeAreaIndex={activeAreaIndex}
          peopleValue={peopleValue}
          totalCost={totalCost}
        />
        <div className="mb-10 md:mb-9 text-[0.875rem]">
          <Checkbox
            label={
              <span className="block max-w-[230px] md:max-w-full">
                Tick to confirm you agree to our{" "}
                <span onClick={openModal} className="underline mr-2">
                  terms and conditions
                </span>
              </span>
            }
            checked={isTermsAndCondChecked}
            onChange={() => {
              setTermsAndCondChecked(!isTermsAndCondChecked);
            }}
            className="flex justify-between md:justify-start items-center"
            labelClassName="md:max-w-initial"
          />
        </div>
      </div>

      <div className="flex h-[40px]">
        <Button
          className="mr-4 text-[15px] font-bold py-1 text-center"
          bgColor="#fff"
          onClick={handleBack}
        >
          Back
        </Button>

        <Button
          className=" text-[15px] font-bold py-1 text-left"
          bgColor={!isTermsAndCondChecked ? "#79809A" : "#8DAEFF"}
          onClick={handleNext}
        >
          Confirm and proceed
        </Button>
      </div>
      <Modal isOpen={isModalOpen} closeModal={closeModal}>
        <TermsAndConditions />
      </Modal>
    </div>
  );
};
