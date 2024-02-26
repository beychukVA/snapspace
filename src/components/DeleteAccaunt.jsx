import React from "react";
import { Button } from "./Button";

export const DeleteAccaunt = ({ closeModal, onConfirmDeleteAccount }) => {
  return (
    <div className="bg-[#4C5678] w-full p-[27px]">
      <span className="text-blue-light text-[24px] md:text[30px] font-bold">
        Delete Account
      </span>
      <hr className="mb-[25px] mt-[10px]" />
      <span className="text-[#fff] text-[18px] font-bold">
        Are you sure you want to delete your account?
      </span>
      <div className="flex items-center justify-end mt-[25px]">
        <Button bgColor="#8DAEFF" onClick={() => closeModal()}>
          Cancel
        </Button>
        <Button
          bgColor="#F4511E"
          textColor="#FAFAFA"
          className="ml-[20px]"
          onClick={() => onConfirmDeleteAccount()}
        >
          Confirm
        </Button>
      </div>
    </div>
  );
};
