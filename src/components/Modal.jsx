import React from "react";

export const Modal = ({
  overflow = true,
  className = "",
  children,
  isOpen,
  closeModal,
}) => {
  return (
    <div
      className={`fixed left-0 top-0 flex items-center overflow-hidden justify-center w-full h-full bg-[#000] bg-opacity-50 pt-8 pb-8 pl-14 pr-14 text-right ${
        isOpen ? "" : "hidden"
      }`}
    >
      <div className="absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] flex flex-col items-end justify-center w-full max-w-[800px] h-full p-[20px]">
        <span
          onClick={closeModal}
          className="font-bold cursor-pointer mb-[15px]"
        >
          Close [x]
        </span>
        <div
          className={`flex items-start justify-center w-full h-fit ${
            overflow ? "overflow-y-scroll" : ""
          } text-left border-[3px] rounded-md ${className}`}
        >
          {children}
        </div>
      </div>
    </div>
  );
};
