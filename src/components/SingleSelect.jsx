import { autoShowTooltip } from "aws-amplify";
import React, { useState } from "react";
import Select from "react-select";

const theme = (theme) => ({
  ...theme,
  borderRadius: 6,
  border: "1px solid",
  borderColor: "#fff",
  backgroundColor: "rgba(255, 255, 255, 0.4)",
  colors: {
    ...theme.colors,
    primary25: "rgba(255, 255, 255, 0.4)",
    primary: "#79809A",
  },
});

const styles = {
  singleValue: (styles) => ({ ...styles, color: "#fff" }),
  menu: (styles) => ({
    ...styles,
    backgroundColor: "#4C5678",
    width: "fit-content",
    minWidth: 345,
  }),
  container: (styles) => ({
    ...styles,
    padding: 0,
    margin: 0,
    span: {
      backgroundColor: "#4C5678",
    },
    svg: {
      color: "#8DAEFF",
    },
  }),
  control: (styles) => ({
    ...styles,
    maxWidth: 345,
    backgroundColor: "#4C5678",
    padding: "9px 17px 9px 12px",
  }),
  placeholder: (styles) => ({
    ...styles,
    color: "rgba(255, 255, 255, 0.4)",
  }),
  dropdownIndicator: (styles) => ({ ...styles, backgroundColor: "#4C5678" }),
};

export const SingleSelect = ({
  name,
  options,
  className,
  onChande,
  selected = null,
}) => {
  const [selectedOption, setSelectedOption] = useState(
    getCurrentRoleOption(selected)
  );

  const handleChangOption = (option) => {
    onChande({ ...option, name });
    setSelectedOption(option);
  };

  function getCurrentRoleOption(option) {
    const [role] = options.filter((element) => element.value === option);
    return role;
  }

  return (
    <>
      <Select
        className={className}
        styles={styles}
        theme={theme}
        classNamePrefix="select"
        defaultValue={selectedOption}
        onChange={handleChangOption}
        isDisabled={false}
        isLoading={false}
        isClearable={false}
        isRtl={false}
        isSearchable={false}
        placeholder="Please select"
        name={name}
        options={options}
      />
    </>
  );
};
