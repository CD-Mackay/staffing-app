import React from "react";
import { HiMinus } from "react-icons/hi";
import { FaFlag } from "react-icons/fa";
import { addFlag } from "../../utilities/db-helpers";

import StyledFlagButton from "./StyledFlagButton";

const FlagButton = ({ flag, setFlag, userId }) => {
  const handleRemoveFlag = () => {
    setFlag(false);
  };


  const handleAddFlag = (input, id) => {
    console.log(input, id);
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
        <button onClick={() => addFlag("green", userId)}>
          <FaFlag color="green" fontSize="28px" />
        </button>
        <button onClick={() => addFlag("red", userId)}>
          <FaFlag color="red" fontSize="28px" />
        </button>
      </StyledFlagButton>
    );
  }
};

export default FlagButton;
