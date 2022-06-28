import React from "react";
import { FaFlag } from "react-icons/fa";
import { addFlag } from "../../utilities/db-helpers";
import Button from "../../Button/Button";

import StyledFlagButton from "./StyledFlagButton";

const FlagButton = ({ flag, setFlag, userId }) => {
  const handleRemoveFlag = (id) => {
    addFlag("null", id);
    setFlag(false);
  };

  const handleAddFlag = (input, id) => {
    addFlag(input, id);
    setFlag(input);
  };

  if (flag) {
    return (
      <StyledFlagButton>
        {/* <button onClick={() => handleRemoveFlag(userId)}>
          Remove Flag
        </button> */}
        <Button
          handler={() => handleRemoveFlag(userId)}
          message="remove flag"
        />
      </StyledFlagButton>
    );
  }

  if (!flag) {
    return (
      <StyledFlagButton>
        <button
          className="green-button"
          onClick={() => handleAddFlag("green", userId)}
        >
          <FaFlag fontSize="28px" />
        </button>
        <button
          className="red-button"
          onClick={() => handleAddFlag("red", userId)}
        >
          <FaFlag fontSize="28px" />
        </button>
      </StyledFlagButton>
    );
  }
};

export default FlagButton;
