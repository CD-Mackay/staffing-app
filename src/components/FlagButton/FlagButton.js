import React from "react";
import { HiMinus } from "react-icons/hi";
import { FaFlag } from "react-icons/fa";
import { addFlag } from "../../utilities/db-helpers";

import StyledFlagButton from "./StyledFlagButton";

const FlagButton = ({ flag, setFlag, userId }) => {
  const handleRemoveFlag = (id) => {
    addFlag("null", id)
    setFlag(false);
  };


  const handleAddFlag = (input, id) => {
    addFlag(input, id);
    setFlag(input);
  };

  if (flag) {
    return (
      <StyledFlagButton>
        <button onClick={() => handleRemoveFlag(userId)}>
          <HiMinus fontSize="32px" />
        </button>
      </StyledFlagButton>
    );
  }

  if (!flag) {
    return (
      <StyledFlagButton>
        <button onClick={() => handleAddFlag("green", userId)}>
          <FaFlag color="green" fontSize="28px" />
        </button>
        <button onClick={() => handleAddFlag("red", userId)}>
          <FaFlag color="red" fontSize="28px" />
        </button>
      </StyledFlagButton>
    );
  }
};

export default FlagButton;
