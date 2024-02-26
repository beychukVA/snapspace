import React from "react";
import QuestionIco from "../../assets/question-mark.svg";
import ReactTooltip from "react-tooltip";

export const QuestionTitle = ({ children, className, hintText }) => {
  return (
    <>
      <h5
        className={`font-bold mb-3 md:mb-6 text-[22px] md:text-6 leading-tight ${className}`}
      >
        {children}{" "}
        {hintText && (
          <img
            className="inline -mt-2 cursor-pointer"
            src={QuestionIco}
            alt="question"
            data-tip={hintText}
          />
        )}
      </h5>
      <ReactTooltip place="top" effect="solid" multiline />
    </>
  );
};
