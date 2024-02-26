import React from "react";

export const Button = ({
  onClick,
  className = "",
  textColor = "#1F2C56",
  bgColor = "#FCE72D",
  children,
}) => {
  return (
    <div
      onClick={onClick}
      className={`inline-block cursor-pointer py-2 px-8 leading-8 text-[18px] font-bold rounded-full ${className}`}
      style={{ background: bgColor, color: textColor }}
    >
      {children}
    </div>
  );
};
