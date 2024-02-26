import React, { useEffect, useState } from "react";
import { EyeIcon } from "./svg";

export const Input = ({ placeholder, password, onChange, label, value }) => {
  const [isPassword, setIsPassword] = useState(false);

  useEffect(() => {
    password && setIsPassword(true);
  }, []);

  return (
    <div className="relative mb-[24px]">
      <label className="absolute bg-[#4F76F6] top-[-10px] text-[12px] px-[5px]  left-[15px]">
        {label ? label : placeholder}
      </label>
      <input
        className="bg-transparent border-2 pl-[16px] pr-[40px] text-[16px] outline-none placeholder:text-white border-[#77F2A1] h-[56px] w-[280px]"
        placeholder={placeholder}
        type={isPassword ? "password" : "text"}
        onChange={(e) => onChange(e.target.value)}
        value={value}
      />
      {password && (
        <span
          className="absolute top-[16px] left-[240px] cursor-pointer"
          onClick={() => setIsPassword(!isPassword)}
        >
          <EyeIcon />
        </span>
      )}
    </div>
  );
};
