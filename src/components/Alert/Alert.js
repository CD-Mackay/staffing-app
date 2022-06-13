import React, { useContext } from "react";

import StyledAlert from "./StyledAlert";

// Component Imports
import AlertContext from "../../Context/AlertContext";

const Alert = () => {

const alertObject = useContext(AlertContext);
console.log(alertObject);
  return (
    <StyledAlert alert={alertObject.alert}>
      <span>ALert!! A message will go here!</span>
    </StyledAlert>
  );
};

export default Alert;
