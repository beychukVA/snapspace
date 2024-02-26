import React, { useState } from "react";
import { useNavigate, Navigate } from "react-router-dom";
import { NextButton } from "../components/NextButton";
import { TextInput } from "../components/TextInput";
import { Auth } from "aws-amplify";
import { Alert } from "@aws-amplify/ui-react";
import { Loader } from "./Loader";
import { ErrorMessage } from "./ErrorMessage";
import { uploadToAWS } from "./FileUploader/FileUploader";
import { getSession } from "../features/getSession";
import Moment from "moment";
import { useEffect } from "react";
import sendEmail from "../features/sendEmail";
import { uid } from "../features/uid";
import { DataStore } from "@aws-amplify/datastore";
import { Plan } from "../models";

async function signIn(
  {
    formEmail: username,
    formPassword: password,
    file,
    floor_plans,
    summary,
    plansId,
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
  setLoggedIn,
  setError,
  navigate
) {
  try {
    const user = await Auth.signIn(username, password);
    if (questionnarie) {
      await Auth.currentAuthenticatedUser()
        .then(async (user) => {
          await DataStore.save(
            new Plan({
              planId: plansId,
              owner: user?.username,
              title: floor_plans?.title || "",
              image: floor_plans?.imageSrc || "",
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
        .then((data) => setVisibleLoader(false))
        .catch((err) => setVisibleLoader(false));
    }

    setVisibleLoader(false);
    setLoggedIn(true);
    if (questionnarie) {
      sendEmail(
        `${user.attributes["custom:first_name"]} ${user.attributes["custom:surname"]}`,
        "info@snapspace.ai",
        user.attributes["email"],
        "This is a test message from web app",
        file,
        plansId,
        summary
      );
      uploadToAWS(file);
    }
    navigate(`${questionnarie ? "/planSubmitted" : "/"}`);
  } catch (error) {
    setLoggedIn(false);
    setVisibleLoader(false);
    setError(error);
  }
}

export const SubStepEnum = {
  REGISTRATION: "registration",
};

export const LoginLayout = ({
  data,
  setStep,
  setData,
  onChangeStep = null,
  noPadding = false,
  questionnarie = false,
}) => {
  const [formEmail, setFormEmail] = useState("");
  const [formPassword, setFormPassword] = useState("");
  const [error, setError] = useState("");
  const [isVisibleLoader, setVisibleLoader] = useState(false);
  const [isLoggedIn, setLoggedIn] = useState(false);
  const navigate = useNavigate();
  let floorTitle = data?.selectedWorkplace?.title;
  let floorImageSrc = data?.selectedWorkplace?.imageSrc;
  let summary = data?.summary;
  const ID = uid();
  const activeAreaIndex = data?.activeAreaIndex;
  const internalAreaValue = data?.internalAreaValue;
  const desksValue = data?.desksValue;
  const peopleValue = data?.peopleValue;
  const summaryList = data?.summaryList;
  const requirementsList = data?.requirementsList;
  const choice = data?.choice;

  useEffect(() => {
    if (!isLoggedIn) {
      getSession()
        .then(async (res) => {
          setLoggedIn(res);
          await Auth.currentAuthenticatedUser()
            .then(async (user) => {
              await DataStore.save(
                new Plan({
                  planId: ID,
                  owner: user?.username,
                  title: floorTitle || "",
                  image: floorImageSrc || "",
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
              return {
                name: `${user.attributes["custom:first_name"]} ${user.attributes["custom:surname"]}`,
                emailTo: user.attributes["email"],
                plansId: ID,
                summary: summary,
              };
            })
            .then((res) => {
              if (questionnarie) {
                sendEmail(
                  res.name,
                  "info@snapspace.ai",
                  res.emailTo,
                  "This is a test message from web app",
                  data?.file,
                  res.plansId,
                  res.summary
                );
              }
            })
            .catch((err) => console.log(err));
        })
        .catch((res) => {
          setLoggedIn(res);
        });
    }
  }, []);

  const onNextClick = () => {
    if (!formEmail || !formPassword) return;
    setVisibleLoader(true);
    signIn(
      {
        formEmail,
        formPassword,
        file: data?.file,
        floor_plans: data?.selectedWorkplace || "",
        plansId: ID,
        summary,
        activeAreaIndex: activeAreaIndex,
        internalAreaValue: internalAreaValue,
        desksValue: desksValue,
        peopleValue: peopleValue,
        summaryList: summaryList,
        requirementsList: requirementsList,
        choice: choice,
      },
      questionnarie,
      setLoggedIn,
      setVisibleLoader,
      setError,
      navigate
    );
  };

  const disabled = !formEmail || !formPassword;

  if (isLoggedIn && questionnarie) {
    uploadToAWS(data?.file);
  }

  return (
    <>
      {isLoggedIn && questionnarie && <Navigate to="/planSubmitted" />}
      <div
        className={`text-light h-[80vh] ${
          noPadding ? "p-0" : "px-[20px] sm:px-[45px] pt-[54px] pb-[15px]"
        }`}
      >
        <h2 className="font-bold text-blue-light md:text-[2rem] text-[1.875rem] mb-5 md:mb-3">
          Almost there
        </h2>
        <div className="m-0 mb-8 text-[1rem] md:text-[1.25rem]">
          Please enter your details to login
        </div>
        <form className="flex">
          <div className="mb-5 w-full max-w-[345px]">
            <div className="mb-[10px]">
              <TextInput
                type="email"
                placeholder="Email"
                onChange={(event) => {
                  setFormEmail(event.target.value);
                }}
              />
            </div>
            <TextInput
              type="password"
              placeholder="Password"
              onChange={(event) => {
                setFormPassword(event.target.value);
              }}
            />
            <div className="mt-3 mb-6 hover:cursor-pointer">
              <div
                onClick={() => {
                  if (onChangeStep) {
                    return onChangeStep(SubStepEnum.REGISTRATION);
                  }
                  return navigate("/signup");
                }}
              >
                <span className="underline text-[0.875rem]">
                  I don’t have an account. Sign up here
                </span>
              </div>
            </div>
            <ErrorMessage error={error} />
            <NextButton
              disabled={disabled}
              onClick={() => {
                // setVisibleLoader(true);
                onNextClick();
              }}
              to
            />
          </div>
        </form>
        <Loader visible={isVisibleLoader} />
      </div>
    </>
  );
};
