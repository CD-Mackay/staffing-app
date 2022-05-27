import React, { useState } from "react";

import StyledFlagButton from "./StyledFlagButton";

const FlagButton = ({flag, setFlag}) => {


  const handleRemoveFlag = () => {
    setFlag(false);
  };

  const handleAddFlag = () => {
    setFlag("red");
  }

  if (flag) {
    return (
      <StyledFlagButton>
        <button onClick={handleRemoveFlag}>
          remove
        </button>
      </StyledFlagButton>
    );
  };

  if (!flag) {
    return (
      <StyledFlagButton>
        <button onClick={handleAddFlag}>
          add
        </button>
      </StyledFlagButton>
    )
  }

};

export default FlagButton;