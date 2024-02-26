import React from "react";
import { QuestionnaireStepsEnum } from "../lib/QuestionnaireStepsEnum";
import { OfficeStep } from "./questionnaire/OfficeStep";
import { SummaryStep } from "./questionnaire/SummaryStep";
import { RequirementsStep } from "./questionnaire/RequirementsStep";
import { CompleteStep } from "./questionnaire/CompleteStep";

class QuestionnaireComponentsFactory {
  list = {
    [QuestionnaireStepsEnum.OFFICE]: OfficeStep,
    [QuestionnaireStepsEnum.REQUIREMENTS]: RequirementsStep,
    [QuestionnaireStepsEnum.SUMMARY]: SummaryStep,
    [QuestionnaireStepsEnum.COMPLETE]: CompleteStep,
  };

  getComponent({ step, setStep, data, setData }) {
    const Component = this.list[step];

    if (Component) {
      return <Component {...{ step, setStep, data, setData }} />;
    }

    return null;
  }
}

export const questionnaireComponentsFactory =
  new QuestionnaireComponentsFactory();
