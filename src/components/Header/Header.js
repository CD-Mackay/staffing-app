import React from "react";
import { BsPersonSquare } from "react-icons/bs";
import { Link } from "react-router-dom";
import Alert from "../Alert/Alert";
import { useLocation } from "react-router-dom";

import StyledHeader from "./StyledHeader";

const Header = () => {
  const location = useLocation();
  const path = location.pathname;

  return (
    <StyledHeader>
      <div className="logo">
        <BsPersonSquare fontSize="42px" color="pink" />
        <h4>Staffify</h4>
      </div>
      <Alert />
      <div className="nav">
        {path !== "/new" && (
          <Link to="/new">
            <p>New Employee</p>
          </Link>
        )}
        {path !== "/teams" && (
          <Link to="/teams">
            <p>Teams</p>
          </Link>
        )}
        {path !== "/" && (
          <Link to="/">
            <p>Home</p>
          </Link>
        )}
      </div>
    </StyledHeader>
  );
};

export default Header;
