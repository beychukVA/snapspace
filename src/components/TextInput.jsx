import React from "react";

export const TextInput = ({ placeholder, rightElement, type, ...props }) => {
  return (
    <div className="relative w-full max-w-[345px]">
      <input
        type={type}
        className="bg-blue-dark200 border-[0.5px] pl-5 pr-10 py-4 outline-none placeholder:text-white border-light placeholder:text-[rgba(255, 255, 255, 0.4)] rounded-md w-full"
        placeholder={placeholder}
        {...props}
      />

      {rightElement && (
        <div className="absolute right-4 top-4 opacity-40">{rightElement}</div>
      )}
    </div>
  );
};
