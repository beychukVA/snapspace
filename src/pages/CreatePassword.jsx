import React, { useState } from "react";
import { Input } from "../components/Input";
import { NextButton } from "../components/NextButton";
import { useDispatch } from "react-redux/es/exports";
import { setUserPassword, setIsAuth } from "../features/user/userSlice";
import { Header } from "../components/commonSections/Header";
import { Footer } from "../components/commonSections/Footer";

import { Auth } from "aws-amplify";
import { Hub } from "aws-amplify";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Alert } from "@aws-amplify/ui-react";

// Hub.listen("auth", ({ payload }) => {
//   const { event } = payload;
//   if (event === "autoSignIn") {
//     const user = payload.data;
//     console.log("good");
//     // assign user
//   } else if (event === "autoSignIn_failure") {
//     // redirect to sign in page
//     console.log("fail");
//   }
// });
async function signUp(
  {
    password,
    email: username,
    first_name,
    surname,
    company_name,
    job_title,
    role,
    snapspace_use_for,
  },
  dispatch,
  navigate,
  setError
) {
  try {
    const { user } = await Auth.signUp({
      username,
      password,
      attributes: {
        "custom:first_name": first_name,
        "custom:surname": surname,
        "custom:company_name": company_name,
        "custom:job_title": job_title,
        "custom:role": role,
        "custom:snapspace_use_for": snapspace_use_for,
        // email: email,
        // optional
        // phone_number, // optional - E.164 number convention
        // other custom attributes
      },
      autoSignIn: {
        // optional - enables auto sign in after user is confirmed
        enabled: true,
      },
    });
    console.log(user);
    dispatch(setIsAuth(true));
    navigate("/registered");
  } catch (error) {
    setError(error);
  }
}

export const CreatePassword = () => {
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [error, setError] = useState(false);
  const onNextClick = () => {
    signUp(user, dispatch, navigate, setError);
  };

  return (
    <>
      <Header />
      <div className="bg-[#4F76F6] px-[20px] sm:px-[45px] text-white  pt-[40px] sm:pt-[70px]  h-[calc(100vh-247px)] lg:h-[calc(100vh-282px)]">
        <div className="text-[#77F2A1] text-[38px] sm:text-[44px] md:text-[46px] lg:text-[54px]  xl:text-[80px] font-bold">
          One more thing
        </div>
        <div className="text-[28px] sm:text-[34px]  lg:text-[38px]  xl:text-[40px] max-w-[775px] mb-[40px]  font-bold ">
          Please create a password
        </div>
        <Input
          placeholder="Create password"
          password
          value={user.password}
          onChange={(value) => dispatch(setUserPassword(value))}
        />{" "}
        {error && (
          <div className="relative h-[1px]  mt-[-5px] mb-[-10px]">
            <div className="absolute left-[20px]">
              {" "}
              <Alert variation="error">{error.message}</Alert>
            </div>
          </div>
        )}
        <NextButton to onClick={onNextClick} />
      </div>
      <Footer />
    </>
  );
};
