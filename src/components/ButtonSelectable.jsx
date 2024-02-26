import React from "react";

export const ButtonSelectable = ({
  className,
  children,
  isSelected,
  handleClick,
}) => {
  const color = isSelected ? "#1F2C56" : "#fff";
  const backgroundColor = isSelected ? "#8DAEFF" : "#4C5678";

  return (
    <div
      className={`w-full py-5 text-[0.75rem] rounded-md text-center cursor-pointer ${className}`}
      style={{ color, backgroundColor }}
      onClick={handleClick}
    >
      {children}
    </div>
  );
};
