import React from "react";
import { BsPersonSquare } from "react-icons/bs";

import StyledHeader from "./StyledHeader";

const Header = () => {
  return (
    <StyledHeader>
      <div className="logo">
        <BsPersonSquare fontSize="42px" color="pink" />
        <h4>Staffify</h4>
      </div>
      <div className="nav">
        <p>Add New Employee</p>
        <p>My Teams</p>
      </div>
    </StyledHeader>
  );
};

export default Header;
