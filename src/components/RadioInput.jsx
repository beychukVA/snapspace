import React from "react";

export const RadioInput = ({ onChange, role, value, className }) => {
  const checked = role === value;
  const classNames = [checked && "after:bg-black"].join("");
  return (
    <div
      className={`${classNames} ${className} pl-[40px] mb-[15px] relative  after:content-[' '] after:absolute after:top-[3px]   after:left-[0] after:w-[20px] after:h-[20px]  after:rounded-full after::block after:border-2 after:border-[#1F2B37]`}
    >
      <input
        type="radio"
        value={value}
        checked={checked}
        onChange={(e) => onChange(e.target.value)}
        className="opacity-0 z-10 absolute left-[0] w-[20px] h-[20px]"
      />
      <label className="">{value}</label>
    </div>
  );
};
