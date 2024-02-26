import React, { useRef, useState, useEffect } from "react";
import FileIco from "../../assets/File.svg";
import FileApprovedIco from "../../assets/File-approved.svg";
import DeleteIco from "../../assets/Close-bordered.svg";
import "./styles.css";
import { Amplify } from "aws-amplify";
import { Storage } from "aws-amplify";

export const uploadToAWS = (file) => {
  Storage.put(file.name, file)
    .then((resp) => {
      console.log("storage", resp);
    })
    .catch((err) => {
      console.log("storage: ", err);
    });
};

export const FileUploader = ({ file, setFile }) => {
  const [dragActive, setDragActive] = useState(false);

  const inputRef = useRef(null);

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

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const file = e.dataTransfer.files[0];
      if (file.type === "application/pdf") {
        setFile(e.dataTransfer.files[0]);
      }
    }
  };

  const handleChange = (e) => {
    e.preventDefault();
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const onButtonClick = () => {
    inputRef.current.click();
  };

  return (
    <div>
      <h5 className="font-bold mb-1 text-[22px] md:text-6 leading-tight">
        Upload your floorplan
      </h5>
      <p className="mb-2">Files must be PDF only</p>

      <div className="max-w-[345px]">
        <form
          id="form-file-upload"
          onDragEnter={handleDrag}
          onSubmit={(e) => e.preventDefault()}
        >
          <div
            className={`label-file-upload border border-${
              file ? "solid" : "dashed"
            } border-[#8daeff] px-10 text-[1.25rem]`}
          >
            <img src={file ? FileApprovedIco : FileIco} alt="file" />
            {file ? (
              <div className="flex items-center justify-center mt-3">
                <span className="block text-ellipsis overflow-hidden max-w-[50%]">
                  {file.name}
                </span>
                <img
                  onClick={() => setFile(null)}
                  className="block cursor-pointer ml-2"
                  src={DeleteIco}
                  alt="delete"
                />
              </div>
            ) : (
              <p className="mt-3">
                Drag and drop to choose a file or{" "}
                <span
                  className="underline cursor-pointer"
                  onClick={onButtonClick}
                >
                  browse files
                </span>
              </p>
            )}
          </div>
          {dragActive && (
            <div
              className="drag-file-element"
              onDragEnter={handleDrag}
              onDragLeave={handleDrag}
              onDragOver={handleDrag}
              onDrop={handleDrop}
            />
          )}
        </form>
      </div>

      <input
        ref={inputRef}
        onChange={handleChange}
        accept="application/pdf"
        type="file"
        hidden
      />
    </div>
  );
};
