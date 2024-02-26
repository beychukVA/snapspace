import React from "react";
import "./styles.css";

export const Checkbox = ({ label, checked, onChange, className }) => {
  return (
    <label className={`checkbox-container ${className}`}>
      <span>{label}</span>
      <input type="checkbox" checked={checked} onChange={onChange} />
      <span className="checkmark ml-2" />
    </label>
  );
};
