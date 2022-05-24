import React from "react";

import StyledSearchBar from "./StyledSearchBar";

// Component Imports

const SearchBar = () => {
  return (
    <StyledSearchBar>
      <input type="text" placeholder="Search for something!" />
    </StyledSearchBar>
  );
};

export default SearchBar;