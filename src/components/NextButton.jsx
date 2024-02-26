import React from "react";
import { Link } from "react-router-dom";

export const NextButton = ({ onClick, to, disabled, text = "Next" }) => {
  return (
    <div
      onClick={onClick}
      className={`flex items-center justify-center text-[16px] text-center font-bold cursor-pointer text-[#1F2C56] mt-[24px] mb-[24px] rounded-full ${
        disabled ? "bg-[#79809A] cursor-default" : "bg-[#8DAEFF]"
      } w-[207px] h-[50px]`}
    >
      <Link
        className={`w-full ${disabled && "cursor-default"}`}
        to={disabled ? "" : to}
      >
        {text}
      </Link>
    </div>
  );
};
