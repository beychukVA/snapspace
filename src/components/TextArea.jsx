import React from "react";

export const TextArea = ({ placeholder, rightElement, ...props }) => {
  return (
    <div className="relative w-fit">
      <textarea
        className="bg-blue-dark200 border-[0.5px] pl-5 pr-10 py-4 outline-none placeholder:text-white border-light placeholder:text-[rgba(255, 255, 255, 0.4)] rounded-md min-w-[345px]"
        placeholder={placeholder}
        {...props}
      />

      {rightElement && (
        <div className="absolute right-4 top-4 opacity-40">{rightElement}</div>
      )}
    </div>
  );
};
