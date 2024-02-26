import React from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";

export const RangeSlider = ({ value, setValue, min, max, marks }) => {
  const onSliderChange = (value) => {
    setValue({ value });
    console.log(value);
  };

  const marksJsx = marks.map((m) => (
    <span
      className="text-[11px] sm:text-[16px] lg:text-[18px]  text-white  lg:font-bold"
      key={m}
    >
      {m.img ? (
        <span className="hidden lg:block absolute bottom-[45px] left-[50%] translate-x-[-50%]  ">
          {m.img}
        </span>
      ) : (
        m
      )}
      {m.mark}
    </span>
  ));
  return (
    <div className="">
      {/* <div className="flex justify-between mb-[30px] text-[18px] font-bold">
        {marks.map((m) => (
          <span key={m}>{m}</span>
        ))}
      </div> */}
      <Slider
        marks={marksJsx}
        min={min}
        max={max}
        value={value.value}
        onChange={onSliderChange}
        railStyle={{
          height: 4,
          background: "white",
        }}
        handleStyle={{
          height: 24,
          width: 24,
          marginLeft: 0,
          marginTop: -11,
          background: "#77F2A1",
          border: 0,
          opacity: 1,
        }}
        trackStyle={{
          background: "none",
        }}
      />
    </div>
  );
};
