import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import LogoIcon from "../../assets/logo.svg";
import { Button } from "../Button";
import { BurgerIcon, CloseIcon, AvatarIcon } from "../svg";
import { slide as Menu } from "react-burger-menu";
import "./styles.css";
import { SignOutButton } from "../SignOutButton";
import { getSession } from "../../features/getSession";
import { useEffect } from "react";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [isSessionLoaded, setSessionLoaded] = useState(false);

  if (!isSessionLoaded) {
    getSession()
      .then((res) => {
        setLoggedIn(res);
        setSessionLoaded(true);
      })
      .catch((res) => {
        setLoggedIn(res);
        setSessionLoaded(true);
      });
  }

  const handleClose = () => setIsOpen(false);

  const navigate = useNavigate();

  // getLoggedIn();

  return (
    <>
      <header className="pt-10 pb-8 md:pt-12 md:pb-11 bg-blue-light">
        <div className="container mx-auto">
          <div className="flex justify-between items-center">
            <Link to="/">
              <img
                className="w-[162px] md:w-[192px]"
                src={LogoIcon}
                alt="logo"
              />
            </Link>

            <div
              className="cursor-pointer md:hidden"
              onClick={() => setIsOpen(true)}
            >
              <BurgerIcon />
            </div>
            <div className="hidden md:flex items-center">
              <Button
                bgColor="transparent"
                className="px-2"
                onClick={() => navigate("/get-in-touch")}
              >
                Get in touch
              </Button>
              <Button
                className="ml-3 mr-7"
                onClick={() => navigate("/questionnaire")}
              >
                Start creating
              </Button>
              {isLoggedIn ? (
                <div
                  className="w-[48px] h-[48px] rounded-[50%] hover: cursor-pointer overflow-hidden"
                  onClick={() => navigate("/profile")}
                >
                  <AvatarIcon />
                </div>
              ) : (
                <Button bgColor="#fff" onClick={() => navigate("/login")}>
                  Login
                </Button>
              )}
            </div>
          </div>
        </div>
      </header>

      <Menu isOpen={isOpen} width="100%" onClose={handleClose} right>
        <div>
          <div className="flex justify-between items-center">
            <img className="w-[162px]" src={LogoIcon} alt="logo" />

            <div className="cursor-pointer" onClick={handleClose}>
              <CloseIcon />
            </div>
          </div>

          <div className="mt-[150px]">
            <Link to="/get-in-touch" onClick={handleClose}>
              <div className="text-[1.5rem] mb-6 cursor-pointer font-bold">
                Get in touch
              </div>
            </Link>
            <Link to="/about-us" onClick={handleClose}>
              <div className="text-[1.5rem] mb-6 cursor-pointer font-bold">
                About us
              </div>
            </Link>
            <Link to="/terms" onClick={handleClose}>
              <div className="text-[1.5rem] mb-6 cursor-pointer font-bold">
                Terms
              </div>
            </Link>
            <Link to="/privacy" onClick={handleClose}>
              <div className="text-[1.5rem] mb-6 cursor-pointer font-bold">
                Privacy
              </div>
            </Link>
          </div>
        </div>

        <div>
          <div className="mt-auto flex justify-between">
            {isLoggedIn ? (
              <div
                className="w-[48px] h-[48px] rounded-[50%] hover: cursor-pointer overflow-hidden"
                onClick={() => navigate("/profile")}
              >
                <AvatarIcon />
              </div>
            ) : (
              <Button bgColor="#fff" onClick={() => navigate("/login")}>
                Login
              </Button>
            )}
            <Button
              bgColor="#1F2C56"
              textColor="#fff"
              onClick={() => navigate("/questionnaire")}
            >
              Start creating
            </Button>
          </div>
        </div>
      </Menu>
    </>
  );
};
