import React, { useEffect, useState } from "react";
import { Amplify } from "aws-amplify";
import { Storage } from "aws-amplify";

import downloadIcon from "./../assets/Download.png";
import { ArrowsDownIcon } from "./svg";

export const uploadToAWS = (file, setIsPlanUloaded) => {
  Storage.put(file.name, file)
    .then((resp) => {
      console.log("storage", resp);
      setIsPlanUloaded(true);
    })
    .catch((err) => {
      console.log("storage: ", err);
    });
};

export const UploadPlan = ({ onArrowDownClick, setIsPlanUloaded }) => {
  const [pdf, setPdf] = useState(null);
  const hiddenFileInput = React.useRef(null);

  const handleClick = (event) => {
    hiddenFileInput.current.click();
  };

  const handleChange = (event) => {
    const fileUploaded = event.target.files[0];
    setPdf(fileUploaded);
  };

  const onDragStartHandler = (event) => {
    event.preventDefault();
  };

  const onDropHandler = (event) => {
    setPdf(event.dataTransfer.files[0]);
    event.preventDefault();
  };

  useEffect(() => {
    Amplify.configure({
      Auth: {
        identityPoolId: "us-east-1:be1e9f26-69ee-470a-9096-4ace0f0a840e",
        region: "us-east-1",
      },

      Storage: {
        AWSS3: {
          bucket: "amplify-snapspace-dev-20054-deployment",
          region: "us-east-1",
        },
      },
    });
  }, []);

  return (
    <div className="section bg-white px-[20px] sm:px-[45px] text-[#4F76F6] pt-[50px] pb-[80px]">
      <div className="text-[34px] sm:text-[36px] lg:text-[38px] xl:text-[40px]  mb-[40px]  font-bold ">
        Next, upload your plan
      </div>
      <div
        onDrop={onDropHandler}
        onDragStart={onDragStartHandler}
        onDragOver={onDragStartHandler}
        className="flex flex-col md:flex-row justify-between items-center border-4 border-[#77F2A1]  py-[40px] sm:py-[60px] lg:py-[100px] px-[60px] lg:pr-[120px]  lg:pl-[100px]  max-w-[930px] w-full ml-auto mr-auto"
      >
        <div className="max-w-[316px] text-center mb-[30px] md:mb-0">
          <div className="text-[22px] font-bold ">
            Drag a file onto this page or click the upload button
          </div>
          <div
            onClick={handleClick}
            className="flex mx-auto items-center justify-center text-[22px] font-bold cursor-pointer text-[#1F2B37] my-[35px] rounded-full bg-[#77F2A1] w-[185px] h-[50px]"
          >
            Upload PDF
          </div>
          <input
            type="file"
            ref={hiddenFileInput}
            onChange={handleChange}
            style={{ display: "none" }}
          />
          <div className="text-[18px] text-[#1F2B37]">
            Files must be PDF only
          </div>
          <button
            disabled={!pdf}
            className={`p-4 mt-5 rounded-full bg-[#4F76F6] text-[#77F2A1] ${
              !pdf ? "cursor-not-allowed" : ""
            }`}
            onClick={() => uploadToAWS(pdf, setIsPlanUloaded)}
          >
            upload to AWS
          </button>
        </div>

        <div className="text-center">
          {!pdf ? (
            <img src={downloadIcon} alt="download" />
          ) : (
            <span className="text-[80px] font-bold text-[#77F2A1]">Done</span>
          )}
        </div>
      </div>
      <div
        onClick={onArrowDownClick}
        className="mr-auto ml-auto cursor-pointer w-fit mt-[80px]"
      >
        <ArrowsDownIcon className={"#4F76F6"} />
      </div>
    </div>
  );
};
