import React from "react";
import { BsPersonSquare } from "react-icons/bs";
import { Link } from "react-router-dom";
import Alert from "../Alert/Alert";

import StyledHeader from "./StyledHeader";

const Header = () => {
return (
    <StyledHeader>
      <div className="logo">
        <BsPersonSquare fontSize="42px" color="pink" />
        <h4>Staffify</h4>
      </div>
      <Alert />
      <div className="nav">
        <Link to="/new">
          <p>Add New Employee</p>
        </Link>
        <Link to="/teams">
          <p>My Teams</p>
        </Link>
        <Link to="/">
          <p>Home</p>
        </Link>
      </div>
    </StyledHeader>
  );
};

export default Header;
