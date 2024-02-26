import React from "react";

export const Toggle = ({ options, handleSelect, activeIndex }) => {
  return (
    <div className="p-[3px] bg-blue-dark200 rounded-lg flex w-fit">
      {options.map((o, i) => {
        const isActive = activeIndex === i;
        const color = isActive ? "#1F2C56" : "#fff";
        const backgroundColor = isActive ? "#8DAEFF" : "transparent";

        return (
          <div
            key={o}
            className="rounded-lg py-1.5 px-4 text-[0.75rem] cursor-pointer transition-all duration-200"
            style={{ color, backgroundColor }}
            onClick={() => handleSelect(o)}
          >
            {o}
          </div>
        );
      })}
    </div>
  );
};
