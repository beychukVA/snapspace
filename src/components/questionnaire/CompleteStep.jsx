import React, { useState } from "react";
import { LoginLayout } from "../LoginLayout";
import { SignUpLayout } from "../SignUpLayout";

export const SubStepEnum = {
  LOGIN: "login",
  REGISTRATION: "registration",
};

const subSteps = [
  { id: SubStepEnum.LOGIN, component: LoginLayout },
  { id: SubStepEnum.REGISTRATION, component: SignUpLayout },
];

export const CompleteStep = ({ data, setStep, setData }) => {
  const [selectedSubStep, setSelectedSubStep] = useState(subSteps[0]);

  console.log("complete data: ", data);

  const handleSubStepSelect = (id) => {
    setSelectedSubStep(subSteps.find((s) => s.id === id));
  };

  const SubStepComponent = selectedSubStep?.component;

  if (SubStepComponent) {
    return (
      <SubStepComponent
        {...{
          data,
          setStep,
          setData,
          noPadding: true,
          questionnarie: true,
          onChangeStep: handleSubStepSelect,
          setSelectedSubStep,
        }}
      />
    );
  }

  return (
    <SubStepComponent
      {...{
        data,
        setStep,
        setData,
        noPadding: true,
        questionnarie: true,
        onChangeStep: handleSubStepSelect,
        setSelectedSubStep,
      }}
    />
  );
};
