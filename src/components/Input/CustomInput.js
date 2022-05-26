import React, { useRef } from "react";

import StyledCustomInput from "./StyledCustomInput";

// Component Imports

const CustomInput = ({onSubmit}) => {

  const skillInputRef = useRef();

  const handleSubmitForm = (event) => {
    event.preventDefault();
    onSubmit(skillInputRef.current.value);
    skillInputRef.current.value = "";
  }
  return (
    <StyledCustomInput>
      <form onSubmit={(e) => handleSubmitForm(e)}>
        <input type="text" ref={skillInputRef} placeholder="Add qualification" />
      </form>
    </StyledCustomInput>
  );
};

export default CustomInput;
