import React from "react";
import { useNavigate } from "react-router-dom";
export const StartButton = ({ to, classNames }) => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate(to)}
      className={`${classNames} cursor-pointer bg-[#1F2B37] flex justify-center items-center text-[22px] font-bold rounded-full  `}
    >
      Start creating
    </div>
  );
};
