import React, { useState } from "react";
import { Header } from "../components/commonSections/Header";
import { questionnaireComponentsFactory } from "../components/QuestionnaireFactory";
import { QuestionnaireStepsEnum } from "../lib/QuestionnaireStepsEnum";

export const Questionnaire = () => {
  const [step, setStep] = useState(QuestionnaireStepsEnum.OFFICE);
  const [data, setData] = useState({
    file: null,
    desksValue: 0,
    peopleValue: 0,
    internalAreaValue: 0,
  });

  return (
    <div className="relative bg-blue-dark">
      <Header />

      <div className="container mx-auto min-h-screen text-light pb-32 pt-14 md:pt-16">
        <div className="flex flex-col md:flex-row">
          <div className="flex flex-row md:flex-col mb-12 md:mr-20 border-b md:border-b-0 md:border-r border-blue-dark200 h-fit w-fit">
            {Object.values(QuestionnaireStepsEnum).map((v) => {
              const isActive = step === v;
              const color = isActive ? "#C6D6FF" : "#4C5678";

              return (
                <div
                  key={v}
                  className="w-14 last:w-1 md:last:w-36 md:w-36 uppercase cursor-default mb-1.5 md:mb-14 last:mb-0 relative leading-3"
                  style={{ color }}
                >
                  <span className="hidden md:inline-block">{v}</span>
                  <div
                    className="w-[13px] h-[13px] rounded-full absolute left-0 md:left-auto md:right-[-7px] top-0"
                    style={{ backgroundColor: color }}
                  />
                </div>
              );
            })}
          </div>

          {questionnaireComponentsFactory.getComponent({
            step,
            data,
            setData,
            setStep,
          })}
        </div>
      </div>
    </div>
  );
};
