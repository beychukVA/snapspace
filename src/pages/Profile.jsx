import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Footer } from "../components/commonSections/Footer";
import { Header } from "../components/commonSections/Header";
import { AvatarIcon, FloorPlansIcon, SettingIcon } from "../components/svg";
import { FloorPlansLayout } from "../components/FloorPlansLayout";
import { SettingsLayout } from "../components/SettingsLayout";
import { getSession } from "../features/getSession";
import { Auth } from "aws-amplify";

export const Profile = () => {
  const isLoggedIn = getSession();
  const [isFloorPlans, setFloorPlans] = useState(true);
  const [user, setUser] = useState("");
  const navigate = useNavigate();

  console.log("CURRENT USER: ", user);

  const getCurrentUser = async () => {
    try {
      if (!user) {
        const user = await Auth.currentUserInfo();
        setUser(user);
      }
    } catch (error) {}
  };

  const signOut = async () => {
    if (isLoggedIn) {
      try {
        await Auth.signOut();
        navigate("/");
      } catch (error) {}
    }
  };

  const toggleSettings = () => setFloorPlans(!isFloorPlans);

  getCurrentUser();

  return (
    <div className="bg-blue-dark">
      <Header />
      <div className="container mx-auto text-light px-[20px] pt-[56px] max-w-[860px]">
        <span className="text-blue-light text-[30px] md:text-[36px] font-bold">
          Hello, {user?.attributes?.["custom:first_name"]}
        </span>
        <div className="flex items-center justify-start md:justify-end pt-[25px] md:pt-0">
          {isFloorPlans ? (
            <div
              className="flex items-center justify-center hover: cursor-pointer"
              onClick={toggleSettings}
            >
              <div className="flex items-center justify-center w-[21px] h-[21px] rounded-[50%] overflow-hidden">
                <SettingIcon fill="#fff" />
              </div>{" "}
              <span className="ml-[9px]">Settings</span>
            </div>
          ) : (
            <div
              className="flex items-center justify-center hover: cursor-pointer"
              onClick={toggleSettings}
            >
              <div className="flex items-center justify-center w-[21px] h-[21px]">
                <FloorPlansIcon fill="#fff" />
              </div>{" "}
              <span className="ml-[9px]">Floorplans</span>
            </div>
          )}
          <div
            className="flex items-center justify-center ml-[29px] hover: cursor-pointer"
            onClick={signOut}
          >
            <div className="flex items-center justify-center w-[21px] h-[21px] rounded-[50%] border-[2px] overflow-hidden">
              <AvatarIcon stroke="#fff" strokeWidth="4" />
            </div>{" "}
            <span className="ml-[9px]">Sign out</span>
          </div>
        </div>
        <div className="flex flex-col">
          {isFloorPlans && user ? (
            <FloorPlansLayout user={user} />
          ) : (
            <SettingsLayout />
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};
