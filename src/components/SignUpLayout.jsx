import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { TextInput } from "../components/TextInput";
import { NextButton } from "../components/NextButton";
import { SingleSelect } from "../components/SingleSelect";
import { TextArea } from "./TextArea";

import { Auth } from "aws-amplify";
import { VerificationCodeLayout } from "./VerificationCodeLayout";
import { Loader } from "./Loader";
import { ErrorMessage } from "./ErrorMessage";
import Moment from "moment";
import { uid } from "../features/uid";
import { DataStore } from "@aws-amplify/datastore";
import { Plan } from "../models";
import MailChimp from "@mailchimp/mailchimp_marketing";

const optionsRole = [
  { value: "Real estate transaction", label: "Real estate transaction" },
  { value: "Real estate strategy", label: "Real estate strategy" },
  { value: "Real estate design", label: "Real estate design" },
];

const optionsTool = [
  {
    value: "Determine a new floor-plan’s suitability",
    label: "Determine a new floor-plan’s suitability",
  },
  {
    value: "Choose the most sutiable building based on a common brioef",
    label: "Choose the most sutiable building based on a common brioef",
  },
  {
    value: "Exploring efficiencies within my existing workplace",
    label: "Exploring efficiencies within my existing workplace",
  },
  {
    value: "Exploring new layout concepts within my existing workplace",
    label: "Exploring new layout concepts within my existing workplace",
  },
  {
    value: "To help build Capitol budgets for future projects",
    label: "To help build Capitol budgets for future projects",
  },
];

async function signUp(
  {
    formEmail: username,
    formPassword: password,
    formFirstName: first_name,
    formSurname: surname,
    formCompanyName: company_name,
    formAddress: address,
    formRole: role,
    formSnapspace: snapspace_use_for,
    floor_plans: plans,
    summary,
    activeAreaIndex,
    internalAreaValue,
    desksValue,
    peopleValue,
    summaryList,
    requirementsList,
    choice,
  },
  questionnarie,
  setVisibleLoader,
  setPlansId,
  navigate,
  setError
) {
  try {
    setVisibleLoader(true);
    const ID = uid();
    setPlansId(ID);

    await Auth.signUp({
      username,
      password,
      attributes: {
        "custom:first_name": first_name,
        "custom:surname": surname,
        "custom:company_name": company_name,
        "custom:address": address,
        "custom:role": role,
        "custom:snapspace_use_for": snapspace_use_for,
        "custom:registration_date": Moment().format("DD/MM/YYYY"),
      },
      autoSignIn: {
        // optional - enables auto sign in after user is confirmed
        enabled: true,
      },
    }).then(async (res) => {
      const response = await MailChimp.lists.addListMember("list_id", {
        email_address: username,
        status: "subscribed",
        merge_fields: {
          FNAME: first_name,
          LNAME: surname,
          ADDRESS: address,
        },
      });
      if (questionnarie) {
        await Auth.currentAuthenticatedUser()
          .then(async (user) => {
            await DataStore.save(
              new Plan({
                planId: ID,
                owner: user?.username,
                title: plans.title || "",
                image: plans.imageSrc || "",
                createdAt: Moment().format("DD/MM/YYYY"),
                summary: summary || "",
                activeAreaIndex: Number(activeAreaIndex),
                internalAreaValue: Number(internalAreaValue),
                desksValue: Number(desksValue),
                peopleValue: Number(peopleValue),
                summaryArray: summaryList,
                requirementsArray: requirementsList,
              })
            );
          })
          .catch((err) => console.log(err));
      }
    });

    setVisibleLoader(false);
    if (!questionnarie) {
      navigate("/verification-code", { state: { username } });
    }
  } catch (error) {
    setVisibleLoader(false);
    setError(error);
  }
}

export const SubStepEnum = {
  VERIFICATION_CODE: "verificationCode",
};

const subSteps = [
  { id: SubStepEnum.VERIFICATION_CODE, component: VerificationCodeLayout },
];

export const SignUpLayout = ({
  data,
  setData,
  setStep,
  noPadding = false,
  questionnarie = false,
}) => {
  const [selectedSubStep, setSelectedSubStep] = useState(null);
  const navigate = useNavigate();
  const [error, setError] = useState(false);

  const [formFirstName, setFormFirstName] = useState("");
  const [formSurname, setFormSurname] = useState("");
  const [formEmail, setFormEmail] = useState("");
  const [formCompanyName, setFormCompanyName] = useState("");
  const [formAddress, setFormAddress] = useState("");
  const [formRole, setFormRole] = useState("");
  const [formSnapspace, setFormSnapspace] = useState("");
  const [formPassword, setFormPassword] = useState("");
  const [plansId, setPlansId] = useState("");
  const [isVisibleLoader, setVisibleLoader] = useState(false);
  const [isFileUpload, setFileUpload] = useState(false);
  const activeAreaIndex = data?.activeAreaIndex;
  const internalAreaValue = data?.internalAreaValue;
  const desksValue = data?.desksValue;
  const peopleValue = data?.peopleValue;
  const summaryList = data?.summaryList;
  const requirementsList = data?.requirementsList;
  const choice = data?.choice;

  const handleSubStepSelect = (id) =>
    setSelectedSubStep(subSteps.find((s) => s.id === id));

  const onNextClick = () => {
    signUp(
      {
        formFirstName,
        formSurname,
        formEmail,
        formCompanyName,
        formAddress,
        formRole,
        formSnapspace,
        formPassword,
        floor_plans: data?.selectedWorkplace || "",
        summary: data?.summary,
        activeAreaIndex: activeAreaIndex,
        internalAreaValue: internalAreaValue,
        desksValue: desksValue,
        peopleValue: peopleValue,
        summaryList: summaryList,
        requirementsList: requirementsList,
        choice: choice,
      },
      questionnarie,
      setVisibleLoader,
      setPlansId,
      navigate,
      setError
    );
    if (questionnarie) {
      handleSubStepSelect(SubStepEnum.VERIFICATION_CODE);
    }
  };

  const disabled =
    !formFirstName ||
    !formSurname ||
    !formEmail ||
    !formCompanyName ||
    !formAddress ||
    !formRole ||
    !formSnapspace ||
    !formPassword;

  const SubStepComponent = selectedSubStep?.component;

  if (SubStepComponent) {
    return (
      <SubStepComponent
        {...{
          formFirstName,
          formSurname,
          file: data?.file,
          formEmail,
          plansId,
          summary: data?.summary,
          noPadding: true,
          questionnarie: true,
          setSelectedSubStep,
        }}
      />
    );
  }

  return (
    <>
      <div
        className={`text-light bg-blue-dark ${
          noPadding
            ? "p-0"
            : "px-[20px] sm:px-[45px] text-white   pt-[30px] sm:pt-[70px] pb-[15px]"
        }`}
      >
        <Loader visible={isVisibleLoader} />
        <div>
          <div className="text-[#C6D6FF] font-bold text-[30px] leading-7 mb-[13px] md:text-[32px] md:leading-[38px]">
            Welcome aboard
          </div>
          <div className="text-[16px] text-[#fff] font-normal left-[26px] md:text-[20px] md:leading-6 mb-[13px]">
            Please enter your details using the fields below:
          </div>
          <div className="text-[#C6D6FF] font-normal text-[14px] leading-6 mt-[45px] md:mt-[50px] mb-[7px]">
            PERSONAL DETAILS
          </div>
          <form className="">
            <div className="lg:mr-[100px]">
              <div className="mb-[10px]">
                <TextInput
                  value={formFirstName}
                  placeholder="First name"
                  onChange={(event) => {
                    setFormFirstName(event.target.value);
                  }}
                />
              </div>
              <div className="mb-[10px]">
                <TextInput
                  value={formSurname}
                  placeholder="Surname"
                  onChange={(event) => {
                    setFormSurname(event.target.value);
                  }}
                />
              </div>
              <div className="mb-[10px]">
                <TextInput
                  type="email"
                  value={formEmail}
                  placeholder="Email"
                  onChange={(event) => {
                    setFormEmail(event.target.value);
                  }}
                />
              </div>
              <div className="mb-[10px]">
                <TextInput
                  value={formCompanyName}
                  placeholder="Company name"
                  onChange={(event) => {
                    setFormCompanyName(event.target.value);
                  }}
                />
              </div>
              <div>
                <TextArea
                  value={formAddress}
                  placeholder="Type your company address or postcode"
                  onChange={(event) => {
                    setFormAddress(event.target.value);
                  }}
                />
              </div>
              <div className="flex w-[345px]">
                <span
                  className={`text-left text-[#fff] text-[14px] font-normal leading-6 underline underline-offset-4 mt-[10px] ${
                    formAddress ? "invisible" : ""
                  }`}
                >
                  Enter address manually
                </span>
                <span
                  className={`text-right ml-auto text-[#C6D6FF] font-normal text-[11px] leading-6 underline underline-offset-2 uppercase ${
                    !formAddress ? "invisible" : ""
                  }`}
                >
                  Edit
                </span>
              </div>
              <div className="mt-[44px]">
                <div className="text-base text-[#fff] font-normal leading-[20px]">
                  Which best describes your role?
                </div>
                <div>
                  <div className="mt-[11px]">
                    <SingleSelect
                      name="role"
                      options={optionsRole}
                      onChande={({ value }) => {
                        setFormRole(value);
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-[26px]">
              <div className="text-base text-[#fff] font-normal leading-[20px]">
                What would you use the SnapSpace tool for?
              </div>
              <div>
                <div className="mt-[11px]">
                  <SingleSelect
                    name="tool"
                    options={optionsTool}
                    onChande={({ value }) => {
                      setFormSnapspace(value);
                    }}
                  />
                </div>
                <hr className="bg-[#C6D6FF] border-[#C6D6FF] mt-[37px] mb-[39px] bt-[0.5px] max-w-[345px]" />
                <div className="text-[#C6D6FF] font-normal text-[14px] leading-6 mb-[7px]">
                  ACCOUNT DETAILS
                </div>
                <div className="mb-[10px]">
                  <TextInput
                    type="email"
                    value={formEmail}
                    placeholder="Email"
                    onChange={(event) => {
                      setFormEmail(event.target.value);
                    }}
                  />
                </div>
                <div className="pb-[12px]">
                  <TextInput
                    type="password"
                    value={formPassword}
                    placeholder="Password"
                    onChange={(event) => {
                      setFormPassword(event.target.value);
                    }}
                  />
                </div>
                <ErrorMessage error={error} />
                <NextButton to onClick={onNextClick} disabled={disabled} />
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
