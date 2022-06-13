import React, { useRef } from "react";

import StyledAlert from "./StyledAlert";

// Component Imports

const Alert = ({ alert }) => {

  return (
    <StyledAlert alert={alert}>
      <span>ALert!! A message will go here!</span>
    </StyledAlert>
  );
};

export default Alert;
