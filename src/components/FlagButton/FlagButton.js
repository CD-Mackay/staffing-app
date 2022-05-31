import React from "react";
import { HiMinus } from "react-icons/hi";
import { FaFlag } from "react-icons/fa";
import { addFlag } from "../../utilities/db-helpers";

import StyledFlagButton from "./StyledFlagButton";

const FlagButton = ({ flag, setFlag, id }) => {
  const handleRemoveFlag = () => {
    setFlag(false);
  };

  // const handleAddFlag = (input) => {
  //   setFlag(input);
  // };

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
        <button onClick={() => addFlag("green", id)}>
          <FaFlag color="green" fontSize="28px" />
        </button>
        <button onClick={() => addFlag("red", id)}>
          <FaFlag color="red" fontSize="28px" />
        </button>
      </StyledFlagButton>
    );
  }
};

export default FlagButton;
