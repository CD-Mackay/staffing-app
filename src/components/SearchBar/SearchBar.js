import React, { useState } from "react";

import StyledSearchBar from "./StyledSearchBar";

// Component Imports

const SearchBar = () => {
  const [parameter, setParameter] = useState("");

  const onChange = (event) => {
    setParameter(event.target.value);
  };
  return (
    <StyledSearchBar>
      <input type="text" value={parameter} onChange={onChange} placeholder="Search for something!" />
    </StyledSearchBar>
  );
};

export default SearchBar;
