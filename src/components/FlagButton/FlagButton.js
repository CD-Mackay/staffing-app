import React from "react";
import { HiPlus, HiMinus} from 'react-icons/hi'; 

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
          <HiMinus fontSize="32px" />
        </button>
      </StyledFlagButton>
    );
  };

  if (!flag) {
    return (
      <StyledFlagButton>
        <button onClick={handleAddFlag}>
          <HiPlus fontSize="32px" />
        </button>
      </StyledFlagButton>
    )
  }

};

export default FlagButton;