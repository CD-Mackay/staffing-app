import React, { useContext } from "react";

import StyledAlert from "./StyledAlert";

// Component Imports
import AlertContext from "../../Context/AlertContext";

const Alert = () => {

const alertObject = useContext(AlertContext);
  return (
    <StyledAlert alert={alertObject.alert} color={alertObject.alert.color}>
      <span>{alertObject.alert.message}</span>
    </StyledAlert>
  );
};

export default Alert;
