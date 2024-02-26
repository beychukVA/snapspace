import React, { useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { TextInput } from "../components/TextInput";
import { NextButton } from "../components/NextButton";
import { Auth } from "aws-amplify";
import { Loader } from "./Loader";
import { ErrorMessage } from "./ErrorMessage";
import { uploadToAWS } from "./FileUploader/FileUploader";
import sendEmail from "../features/sendEmail.js";

async function verificationCode(
  { name: username, file, formFirstName, formSurname, plansId, summary },
  code,
  questionnarie,
  setVisibleLoader,
  navigate,
  setError
) {
  try {
    setVisibleLoader(true);
    await Auth.confirmSignUp(username, code);
    setVisibleLoader(false);
    if (questionnarie) {
      sendEmail(
        `${formFirstName} ${formSurname}`,
        "info@snapspace.ai",
        username,
        "This is a test message from web app",
        file,
        plansId,
        summary
      );
      uploadToAWS(file);
    }
    navigate(`${questionnarie ? "/planSubmitted" : "/registered"}`);
  } catch (error) {
    setVisibleLoader(false);
    setError(error);
  }
}

export const VerificationCodeLayout = ({
  formFirstName,
  formSurname,
  file,
  formEmail = "",
  plansId,
  summary,
  noPadding = false,
  questionnarie = false,
}) => {
  const [error, setError] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [code, setCode] = useState("");
  const [isVisibleLoader, setVisibleLoader] = useState(false);
  const [name, setName] = useState(formEmail || "");
  const navigate = useNavigate();
  const location = useLocation();

  const onNextClick = () => {
    makeUserName();
    if (name) {
      verificationCode(
        { name, file, formFirstName, formSurname, plansId, summary },
        code,
        questionnarie,
        setVisibleLoader,
        navigate,
        setError
      );
    }
  };

  const makeUserName = () => {
    if (location?.state?.username) {
      const {
        state: { username },
      } = location;
      setName(username);
    }

    if (formEmail) {
      setName(formEmail);
    }
  };

  async function resendConfirmationCode() {
    makeUserName();
    if (name) {
      try {
        setVisibleLoader(true);
        await Auth.resendSignUp(name);
        setVisibleLoader(false);
        console.log("code resent successfully");
      } catch (err) {
        setVisibleLoader(false);
        console.log("error resending code: ", err);
      }
    }
  }

  const disabled = !code;

  return (
    <>
      <div
        className={`bg-blue-dark ${
          noPadding
            ? "p-0"
            : "px-[20px] sm:px-[45px] text-white   pt-[30px] sm:pt-[70px] pb-[15px]"
        }`}
      >
        <Loader visible={isVisibleLoader} />
        <div className="text-[#C6D6FF] font-bold text-[30px] leading-7 mb-[13px] md:text-[32px] md:leading-[38px]">
          Code verification
        </div>
        <div className="text-[16px] text-[#fff] font-normal left-[26px] md:text-[20px] md:leading-6 mb-[13px]">
          Please enter the code you received in the email:
        </div>
        <div className="flex items-center justify-start mb-[10px] mt-6">
          <TextInput
            value={code}
            placeholder="Enter code"
            onChange={(event) => {
              setCode(event.target.value);
            }}
          />
          <div
            className="ml-[25px] hover:cursor-pointer underline uppercase underline-offset-4 text-[14px] font-normal text-light"
            onClick={() => resendConfirmationCode()}
          >
            Resend
          </div>
        </div>

        <ErrorMessage error={error} />
        <NextButton to onClick={() => onNextClick()} disabled={disabled} />
      </div>
    </>
  );
};
