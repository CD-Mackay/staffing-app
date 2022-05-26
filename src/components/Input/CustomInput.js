import React from "react";

import StyledCustomInput from "./StyledCustomInput";

// Component Imports

const CustomInput = ({onSubmit}) => {
  return (
    <StyledCustomInput>
      <form onSubmit={onSubmit}>
        <input type="text" placeholder="Add qualification" />
      </form>
    </StyledCustomInput>
  );
};

export default CustomInput;
