import React from "react";
import { HiMinus } from "react-icons/hi";
import { FaFlag } from "react-icons/fa";

import StyledFlagButton from "./StyledFlagButton";

const FlagButton = ({ flag, setFlag }) => {
  const handleRemoveFlag = () => {
    setFlag(false);
  };

  const handleAddFlag = (input) => {
    setFlag(input);
  };

  if (flag) {
    return (
      <StyledFlagButton>
        <button onClick={handleRemoveFlag}>
          <HiMinus fontSize="32px" />
        </button>
      </StyledFlagButton>
    );
  }

  if (!flag) {
    return (
      <StyledFlagButton>
        <button onClick={() => handleAddFlag("green")}>
          <FaFlag color="green" fontSize="32px" />
        </button>
        <button onClick={() => handleAddFlag("red")}>
          <FaFlag color="red" fontSize="32px" />
        </button>
      </StyledFlagButton>
    );
  }
};

export default FlagButton;
