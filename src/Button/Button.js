import React from "react";

import StyledButton from "./StyledButton";

const Button = ({message, handler}) => {
  return (
    <StyledButton>
      <button onClick={handler}>{message}</button>
    </StyledButton>
  );
};

export default Button;
